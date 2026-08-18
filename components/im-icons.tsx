function ApproachIcon({ name }: { name: string }) {
  if (name === "search") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="21" cy="21" r="11" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M29.5 29.5 38 38" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "plan") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M16 34c4-8 8-12 16-14-2 8-6 14-14 18-2-1-2-2-2-4Zm16-14c2-4 6-8 10-10-4 8-8 12-14 14 2-1 3-2 4-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    );
  }
  if (name === "camera") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="16" width="22" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="21" cy="24" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M32 20h6v8h-6" fill="none" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 34V22M20 34V16M28 34V24M36 34V14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M10 36h28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ChannelIcon({ name }: { name: string }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true as const };
  switch (name) {
    case "Facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"
          />
        </svg>
      );
    case "X":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M4 4h4.2l4 5.4L16.8 4H20l-6.2 7.2L20.2 20H16l-4.3-5.8L6.2 20H3l6.5-7.6L4 4z"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M22 8.2a3 3 0 0 0-2.1-2.1C18.2 5.7 12 5.7 12 5.7s-6.2 0-7.9.4A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2.1 2.1c1.7.4 7.9.4 7.9.4s6.2 0 7.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12a31 31 0 0 0-.4-3.8zM10 15.2V8.8l5.2 3.2L10 15.2z"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14 4c.6 2.4 2.2 4 4.6 4.4V11c-1.6 0-3-.5-4.6-1.4v6.2A5.8 5.8 0 1 1 8.2 10v2.3a3.5 3.5 0 1 0 2.6 3.4V4H14z"
          />
        </svg>
      );
    case "Snapchat":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 3c2.8 0 4.8 2 4.8 5.1 0 1.4.1 2.7.5 3.7.3.8.8 1.3 1.3 1.6.3.2.3.5 0 .7-.8.4-1.5 1-1.5 1.8 0 .5.4 1 1.3 1.4.3.1.4.4.2.6-1 .7-2.4 1.1-3.3 1.3-.3.1-.5.4-.5.7 0 .5.5.9 1.2 1.2.2.1.3.3.2.5-.7.3-1.6.5-3.2.5s-2.5-.2-3.2-.5c-.1-.2 0-.4.2-.5.7-.3 1.2-.7 1.2-1.2 0-.3-.2-.6-.5-.7-.9-.2-2.3-.6-3.3-1.3-.2-.2-.1-.5.2-.6.9-.4 1.3-.9 1.3-1.4 0-.8-.7-1.4-1.5-1.8-.3-.2-.3-.5 0-.7.5-.3 1-.8 1.3-1.6.4-1 .5-2.3.5-3.7C7.2 5 9.2 3 12 3z"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm5.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M6.5 9.5A3.5 3.5 0 0 1 10 6h4v2.2H10a1.3 1.3 0 0 0 0 2.6h2a3.5 3.5 0 1 1 0 7H8V15.6h4a1.3 1.3 0 0 0 0-2.6h-2a3.5 3.5 0 0 1-3.5-3.5z"
          />
        </svg>
      );
  }
}

export { ApproachIcon, ChannelIcon };
