export interface IIconProps {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}
export function AlphaIcon({ className = 'h-6 w-6', fill = 'none', stroke = 'currentColor', strokeWidth = '3' }: IIconProps) {
  return (
    <svg className={className} fill={fill} width="64px" height="64px" viewBox="0 0 24 24" id="alpha" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          id="primary"
          d="M20,6S16.43,19,9.05,19c-5.64,0-6.32-3.35-6-6.23C3.45,9.61,6.35,5,10.74,5c7,0,4.35,14,10.26,14"
        />
      </g>
    </svg>
  );
}
