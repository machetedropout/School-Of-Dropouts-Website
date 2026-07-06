import React from 'react';

const PHONE = "26774249333";

export function WaIcon({ className = "ico" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6a9 9 0 0 1-3.5-3.1c-.3-.4-.7-1-.7-1.9 0-.9.5-1.3.6-1.5.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .5.4l.6 1.5c.1.1.1.3 0 .4l-.3.4-.3.3c-.1.1-.2.2-.1.4.1.3.6 1 1.2 1.5.8.7 1.4.9 1.6 1 .2.1.3.1.4-.1l.6-.7c.2-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.3.1.1.1.5-.1 1.1Z" />
    </svg>
  );
}

interface WaButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
}

export function WaButton({ message, children, className = "wa" }: WaButtonProps) {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <WaIcon />
      {children}
    </a>
  );
}
