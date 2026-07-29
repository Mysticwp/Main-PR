import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
  activeHref?: string;
};

export function SiteShell({ children, activeHref }: SiteShellProps) {
  return (
    <>
      <SiteHeader theme="light" activeHref={activeHref} />
      <div className="mpr-page">{children}</div>
      <SiteFooter />
    </>
  );
}
