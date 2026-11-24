import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0E261A] via-[#133222] to-[#081710] text-[#D4B263] p-6 text-center ${className}`}
      >
        <Utensils className="w-8 h-8 mb-3 opacity-75" strokeWidth={1.5} />
        <p className="font-serif text-lg text-[#FAF7F0] tracking-wide">
          {fallbackTitle || 'Udupi Grand Al-Khuwair'}
        </p>
        <p className="text-xs text-[#E5CA87]/75 mt-1">Authentic South Indian Dining</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
