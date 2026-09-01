import { useState, type FormEvent } from "react";

import { useLang } from "@/i18n";

export function InquiryForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_url") ?? "").trim()) {
      setStatus("ok");
      return;
    }
    const body = new URLSearchParams({
      "form-name": "contact",
      shop: String(data.get("shop") ?? ""),
      city: String(data.get("city") ?? ""),
      hasSite: data.get("hasSite") === "no" ? "no" : "yes",
      booking: String(data.get("booking") ?? ""),
      plan: String(data.get("plan") ?? "unsure"),
      reach: String(data.get("reach") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setStatus("sending");
    try {
      const sent = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!sent.ok) {
        throw new Error("mail_failed");
      }
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return <p className="ld-form__ok">{t.fieldOk}</p>;
  }

  return (
    <form
      className="ld-form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company_url"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label>
        {t.fieldShop}
        <input name="shop" required minLength={2} maxLength={120} />
      </label>
      <label>
        {t.fieldCity}
        <input name="city" required minLength={2} maxLength={80} />
      </label>
      <fieldset>
        <legend>{t.fieldHasSite}</legend>
        <label className="ld-form__check">
          <input type="radio" name="hasSite" value="yes" defaultChecked />
          {t.fieldHasYes}
        </label>
        <label className="ld-form__check">
          <input type="radio" name="hasSite" value="no" />
          {t.fieldHasNo}
        </label>
      </fieldset>
      <label>
        {t.fieldBooking}
        <input name="booking" required minLength={2} maxLength={160} />
      </label>
      <label>
        {t.fieldPlan}
        <select name="plan" defaultValue="unsure">
          <option value="basic">{t.fieldPlanBasic}</option>
          <option value="advanced">{t.fieldPlanAdvanced}</option>
          <option value="unsure">{t.fieldPlanUnsure}</option>
        </select>
      </label>
      <label>
        {t.fieldReach}
        <input name="reach" required minLength={5} maxLength={120} />
      </label>
      <label>
        {t.fieldMessage}
        <textarea name="message" rows={4} maxLength={1000} />
      </label>
      <input
        className="ld-form__trap"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {status === "err" ? <p className="ld-form__err">{t.fieldErr}</p> : null}
      <button className="close-mail" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.fieldSending : t.fieldSubmit}
      </button>
    </form>
  );
}
