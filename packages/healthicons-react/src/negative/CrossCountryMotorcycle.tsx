import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrossCountryMotorcycle = (
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
      <g clipPath="url(#cross_country_motorcycle_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm37.5 35a3.5 3.5 0 0 1-2.318-6.123l1.41 3.044a1 1 0 0 0 1.815-.841l-1.41-3.044A3.5 3.5 0 1 1 37.5 35Zm-3.608-8.907L27.362 12H23v-2h5a1 1 0 0 1 .907.58l6.8 14.67a6.5 6.5 0 1 1-1.814.842ZM10.5 35a3.5 3.5 0 1 1 3.355-4.5H10.5a1 1 0 0 0 0 2h3.355A3.502 3.502 0 0 1 10.5 35Zm6.424-2.5A6.502 6.502 0 0 1 4 31.5a6.5 6.5 0 0 1 12.924-1H20V29a2 2 0 0 1 2-2h6v4a2 2 0 0 1-2 2h-4c-.514 0-.983-.194-1.338-.513a1.011 1.011 0 0 1-.162.013h-3.576Zm11.129-8.606 1-2a2 2 0 0 0 0-1.788l-1-2A2 2 0 0 0 26.263 17h-3.28a8 8 0 0 0-2.563.422l-3.145 1.063a1 1 0 0 0-.494 1.528l3.253 4.567a1 1 0 0 0 .815.42h5.415a2 2 0 0 0 1.789-1.106ZM13.096 19H5a1 1 0 0 0-1 1v1.605a1 1 0 0 0 .89.994l11.427 1.27a.5.5 0 0 0 .45-.806l-2.883-3.68a1 1 0 0 0-.788-.383Zm24.144-4h-3.931a.5.5 0 0 0-.447.724l2 4a.5.5 0 0 0 .447.276h4.73a.5.5 0 0 0 .41-.787l-2.8-4a.5.5 0 0 0-.41-.213Z"
        />
      </g>
      <defs>
        <clipPath id="cross_country_motorcycle_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCrossCountryMotorcycle);
export default ForwardRef;
