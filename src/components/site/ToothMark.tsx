export function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 5.2c1.6-1.4 3.5-1.9 5-1.1 1.8 1 2.4 3.3 1.9 5.8-.4 2-.8 3-1.2 5.2-.3 1.7-.6 4.2-1.9 4.6-1.3.4-1.7-1.7-2.1-3.6-.3-1.4-.7-2.3-1.7-2.3s-1.4.9-1.7 2.3c-.4 1.9-.8 4-2.1 3.6-1.3-.4-1.6-2.9-1.9-4.6-.4-2.2-.8-3.2-1.2-5.2-.5-2.5.1-4.8 1.9-5.8 1.5-.8 3.4-.3 5 1.1Z" />
    </svg>
  );
}
