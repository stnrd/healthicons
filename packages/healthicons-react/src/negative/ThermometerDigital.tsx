import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgThermometerDigital = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#thermometer-digital_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18.012 4.997l1.523 2.384-7.686 4.909-1.522-2.384.008-.005a2.018 2.018 0 0 1-.115-.162l-.028-.044a2 2 0 0 1 .608-2.762l4.314-2.756a2 2 0 0 1 2.763.609l.028.044c.036.057.069.114.098.172l.009-.005Zm.663 17.979-5.749-9 7.685-4.91 5.75 9c.613.962.77 1.595.977 2.428.095.38.2.803.363 1.317.071.225.133.492.209.823.422 1.838 1.292 5.622 6.773 14.761a1.01 1.01 0 0 0-.137.073l-1.708 1.091a1 1 0 0 0-.128.097c-5.99-8.819-9.055-11.2-10.543-12.355-.268-.208-.484-.376-.658-.535a19.901 19.901 0 0 0-1.043-.883c-.668-.537-1.177-.946-1.79-1.907Zm18.44 18.344c-.494-.774-.96-1.517-1.401-2.231-.03.023-.06.045-.091.065l-1.708 1.09c-.034.022-.068.041-.103.058.478.724.973 1.486 1.486 2.289l.596.933a1.108 1.108 0 1 0 1.867-1.192l-.646-1.012ZM24.057 20.107l-4.91-7.685-2.561 1.636 4.909 7.685 2.562-1.636Z"
        />
      </g>
      <defs>
        <clipPath id="thermometer-digital_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgThermometerDigital);
export default ForwardRef;
