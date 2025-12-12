interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className = "", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`object-contain ${className}`}
      {...props}
    >
      <path
        d="M10 50 C 20 50, 25 30, 35 30 C 45 30, 50 70, 60 70 C 70 70, 75 40, 85 40 C 95 40, 95 50, 95 50"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="85" cy="40" r="4" fill="currentColor" />
    </svg>
  );
}
