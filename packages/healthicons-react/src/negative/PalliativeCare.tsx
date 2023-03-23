import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPalliativeCare = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#palliative-care_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM8 18.333C8 12.453 11.812 7 17.031 7c3.622 0 6.31 2.447 7.969 5.917C26.659 9.447 29.347 7 32.969 7 38.189 7 42 12.454 42 18.333c0 1.48-.235 2.91-.65 4.28-.813-1.83-2.325-3.146-4.167-3.146-1.931 0-3.365 1.35-4.25 3.264-.885-1.915-2.318-3.264-4.25-3.264-2.783 0-4.816 3.008-4.816 6.253 0 .871.131 1.706.362 2.498.113.388.25.766.407 1.134 1.314 3.074 4.038 5.429 6.008 6.82C27.533 38.533 25 39.867 25 39.867s-11.451-5.662-15.557-14.95a17.778 17.778 0 0 1-.763-2.054 15.625 15.625 0 0 1-.68-4.53Zm33.573 7.917a1.133 1.133 0 0 0-2.266-.031c-.04 2.912-1.424 4.878-2.837 6.146a10.638 10.638 0 0 1-1.954 1.385 8.967 8.967 0 0 1-.794.388l-.024.01-.012.005-.005.002a1.133 1.133 0 0 0 .802 2.12l.004-.001.007-.003.021-.008.033-.014.036-.014c.057-.024.136-.057.234-.102.196-.088.468-.219.792-.397a12.9 12.9 0 0 0 2.374-1.684c1.744-1.566 3.538-4.09 3.59-7.802Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="palliative-care_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPalliativeCare);
export default ForwardRef;
