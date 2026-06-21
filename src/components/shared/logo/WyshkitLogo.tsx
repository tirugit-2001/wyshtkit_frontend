type WyshkitLogoProps = {
  size?: number;
};

const WyshkitLogo = ({ size = 28 }: WyshkitLogoProps) => (
  <svg
    width={size}
    height={size * 1.14}
    viewBox="0 0 28 32"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 18 14 18s14-7.5 14-18C28 6.268 21.732 0 14 0z"
      fill="#E8959A"
    />
    <text
      x="14"
      y="17"
      textAnchor="middle"
      dominantBaseline="central"
      fill="white"
      fontSize="14"
      fontWeight="700"
      fontFamily="Inter, system-ui, sans-serif"
    >
      W
    </text>
  </svg>
);

export default WyshkitLogo;
