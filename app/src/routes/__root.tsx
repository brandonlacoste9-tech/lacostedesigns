import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { StructuredData } from "@/components/StructuredData";
import { LangProvider } from "@/i18n";
import { STUDIO_NAME } from "@/lib/brand";
import { BUSINESS_JSON } from "@/lib/seo";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const TITLE = `${STUDIO_NAME} · Website design`;
const DESCRIPTION =
  "Any website. Any city. We rebuild yours, or we build the one you do not have yet.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: STUDIO_NAME },
      { name: "theme-color", content: "#111214" },
      { name: "geo.region", content: "CA-QC" },
      { name: "geo.placename", content: "Montreal" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: AppErrorComponent,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="ld-body antialiased">
        <PreviewHostBridge />
        <StructuredData json={BUSINESS_JSON} />
        <AuthProvider>
          <LangProvider>
            <Outlet />
          </LangProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="ld-error">
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </div>
  );
}
