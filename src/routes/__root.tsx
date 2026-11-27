import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Header, Footer } from "../components/site";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center bg-paper px-4 py-16">
      <div className="shell py-12">
        <div className="bento-card card-pad-lg grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-8">
            <p className="eyebrow">Wrong turn</p>
            <h1 className="display mt-3 text-[clamp(5rem,16vw,9rem)] leading-none text-ink">404</h1>
            <h2 className="display-sm mt-5 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink">
              This road doesn&apos;t go anywhere.
            </h2>
            <p className="lede mt-4 max-w-lg">
              The page you&apos;re looking for has moved or never existed. Let&apos;s get you back
              on route.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link to="/" className="arrow-link text-sm">
              Go home <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center bg-paper px-4 py-16">
      <div className="shell py-12">
        <div className="bento-card card-pad-lg grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-8">
            <p className="eyebrow">Engine trouble</p>
            <h1 className="display-sm mt-5 max-w-2xl text-[clamp(2.25rem,5vw,4rem)] text-ink">
              This page didn&apos;t load.
            </h1>
            <p className="lede mt-4 max-w-lg">
              Something went wrong on our end. Try again, or head back to the start.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-self-end">
            <button
              type="button"
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="arrow-link text-sm"
            >
              Try again
            </button>
            <Link to="/" className="arrow-link text-sm">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Travis Driving School — Harare" },
      {
        name: "description",
        content:
          "Class 4 driving lessons in Harare on the roads you'll actually be tested on. Dual-control cars, free pick-up and patient VID-registered instructors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <div className="site-shell flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans text-ink antialiased">
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
