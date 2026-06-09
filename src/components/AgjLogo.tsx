/**
 * Recreated AGJCONFIN logo — vector, faithful to the brochure cover.
 * variant="full"   → circular AGJ + teal "CONFIN" ribbon
 * variant="mark"   → big hexagon mark used on the right of the hero
 */
export function AgjLogo({
  variant = "full",
  className,
  height = 40,
}: {
  variant?: "full" | "mark";
  className?: string;
  height?: number;
}) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 400 440"
        className={className}
        style={{ height, width: "auto" }}
        aria-label="AGJ"
      >
        {/* outer hex */}
        <polygon
          points="200,10 380,110 380,330 200,430 20,330 20,110"
          fill="hsl(195 70% 22%)"
        />
        {/* inner hex stroke */}
        <polygon
          points="200,40 355,125 355,315 200,400 45,315 45,125"
          fill="none"
          stroke="white"
          strokeWidth={5}
        />
        {/* white disc with AGJ */}
        <circle cx="200" cy="220" r="135" fill="white" />
        <text
          x="200"
          y="270"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="180"
          fill="hsl(195 70% 22%)"
          letterSpacing="-8"
        >
          AGJ
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 110"
      className={className}
      style={{ height, width: "auto" }}
      aria-label="AGJCONFIN"
    >
      {/* teal banner */}
      <path d="M0,0 H300 L340,55 L300,110 H0 Z" fill="hsl(195 70% 22%)" />
      {/* white circle */}
      <circle cx="60" cy="55" r="42" fill="white" />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="52"
        fill="hsl(195 70% 22%)"
        letterSpacing="-2"
      >
        AGJ
      </text>
      {/* CONFIN wordmark */}
      <text
        x="125"
        y="72"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="2"
        fill="white"
      >
        CONFIN
      </text>
    </svg>
  );
}
