import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "./bindings.server";

const INBOX = "brandonlacoste9@gmail.com";

const Inquiry = z.object({
  shop: z.string().trim().min(2).max(120),
  city: z.string().trim().min(2).max(80),
  hasSite: z.enum(["yes", "no"]),
  booking: z.string().trim().min(2).max(160),
  plan: z.enum(["basic", "advanced", "unsure"]),
  reach: z.string().trim().min(5).max(120),
  message: z.string().trim().max(1000).optional().default(""),
  trap: z.string().max(0).optional().default(""),
});

export const sendInquiry = createServerFn({ method: "POST" })
  .validator(Inquiry)
  .handler(async ({ data }) => {
    if (data.trap) {
      return { ok: true as const };
    }

    const { DB } = bindings();
    if (DB) {
      await DB.prepare(
        `INSERT INTO inquiries (id, shop, city, has_site, booking, plan, reach, message, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
      )
        .bind(
          crypto.randomUUID(),
          data.shop,
          data.city,
          data.hasSite,
          data.booking,
          data.plan,
          data.reach,
          data.message || "",
        )
        .run();
    }

    const body = [
      `Shop: ${data.shop}`,
      `City: ${data.city}`,
      `Has a site: ${data.hasSite}`,
      `Booking: ${data.booking}`,
      `Plan: ${data.plan}`,
      `Reach: ${data.reach}`,
      data.message ? `Note: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New project: ${data.shop}`,
          _template: "box",
          name: data.shop,
          city: data.city,
          message: body,
        }),
      });
    } catch {
      // Stored even if the mail hop fails.
    }

    return { ok: true as const };
  });
