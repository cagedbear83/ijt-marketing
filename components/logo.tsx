import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The brand lockup. The mark is /icons/logo-mark.svg — the exact same file the
 * app serves, generated from APP/brand/logo-mark.svg — so the identity does not
 * shift when a visitor crosses from .com to .app.
 */
export function Logo({
  href = "/",
  size = 32,
  showWordmark = true,
  className = "",
}: {
  href?: string;
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  const inner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/logo-mark.svg"
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className="font-heading font-black tracking-tight">
          {site.name}
        </span>
      )}
    </>
  );

  const classes = `flex items-center gap-2 ${className}`;

  return href ? (
    <Link href={href} className={classes} aria-label={site.name}>
      {inner}
    </Link>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
