export function GoldHairlineDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-35" />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80">
        <path
          d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-current opacity-35" />
    </div>
  );
}

export function BananaLeafBackdropPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="banana-leaf-veins"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 80 H160"
            stroke="#C8A24E"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M20 80 C45 55, 65 25, 80 0 M60 80 C85 55, 105 25, 120 0 M100 80 C125 55, 145 25, 160 0 M140 80 C152 68, 158 56, 160 45"
            stroke="#C8A24E"
            strokeWidth="0.7"
            fill="none"
          />
          <path
            d="M20 80 C45 105, 65 135, 80 160 M60 80 C85 105, 105 135, 120 160 M100 80 C125 105, 145 135, 160 160 M140 80 C152 92, 158 104, 160 115"
            stroke="#C8A24E"
            strokeWidth="0.7"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#banana-leaf-veins)" />
    </svg>
  );
}
