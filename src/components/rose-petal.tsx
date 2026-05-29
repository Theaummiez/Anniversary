interface RosePetalProps {
  size: number;
  variant: number;
  hue: number;
  id: number;
}

const PETAL_PATHS = [
  "M12 2C8 2 2 8 2 14c0 4 3 7 6 8 1 .3 2.5.5 4 .5s3-.2 4-.5c3-1 6-4 6-8 0-6-6-12-10-12z",
  "M12 1C7 1 1 7 3 13c1 3 4 6 7 7.5 1 .4 2 .5 2 .5s1-.1 2-.5c3-1.5 6-4.5 7-7.5 2-6-4-12-9-12z",
  "M12 2C9 2 4 6 3 11c-.5 3 1 6 3 8 1.5 1.5 3.5 2.5 6 2.5s4.5-1 6-2.5c2-2 3.5-5 3-8-1-5-6-9-9-9z",
  "M12 1C8 3 3 8 4 13c.5 3 3 5.5 5 7 1.5 1 3 1.5 3 1.5s1.5-.5 3-1.5c2-1.5 4.5-4 5-7 1-5-4-10-8-12z",
];

export function RosePetal({ size, variant, hue, id }: RosePetalProps) {
  const path = PETAL_PATHS[variant % PETAL_PATHS.length];
  const gradId = `pg-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={gradId} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor={`hsl(${hue}, 90%, 85%)`} />
          <stop offset="45%" stopColor={`hsl(${hue}, 85%, 70%)`} />
          <stop offset="100%" stopColor={`hsl(${hue - 8}, 75%, 55%)`} />
        </radialGradient>
      </defs>
      <path d={path} fill={`url(#${gradId})`} />
      <path
        d={path}
        fill="none"
        stroke={`hsl(${hue - 8}, 65%, 60%)`}
        strokeWidth="0.4"
        opacity="0.5"
      />
    </svg>
  );
}
