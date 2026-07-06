import React from 'react';

export function MarkLogo({ className = "mark", src = "/mark-ink.png", alt = "School of Dropouts" }: { className?: string, src?: string, alt?: string }) {
  return (
    <img className={className} src={src} alt={alt} style={{ width: 'auto', height: '100%' }} />
  );
}
