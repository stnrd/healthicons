import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGallbladder = (
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
      <g clipPath="url(#gallbladder_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM30 6v15.245a7.68 7.68 0 0 0-1.439-1.26c-1.92-1.302-4.32-1.722-6.453-1.504A3.992 3.992 0 0 0 19 17c-7.18 0-13 5.82-13 13v3h.019a6.5 6.5 0 0 0 12.962 0H19v-6c0-1.105.949-1.959 1.918-2.489a3.999 3.999 0 0 0 2.042-4.082c1.569-.041 3.197.342 4.479 1.211C28.904 22.634 30 24.318 30 27v15h2V23.05c.157-1.542.52-2.793 1.142-3.854.624-1.067 1.543-2 2.892-2.85 2.381-1.503 6.346-2.765 8.212-3.239l-.492-1.938c-1.004.254-2.643.74-4.357 1.386a5.121 5.121 0 0 0 .32-2.165c-.145-2.034-1.535-3.717-3.4-4.339l-.633 1.898c1.134.378 1.953 1.393 2.038 2.583.082 1.148-.516 2.71-2.756 4.122-1.227.774-2.208 1.647-2.966 2.654V6h-2Z"
        />
      </g>
      <defs>
        <clipPath id="gallbladder_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGallbladder);
export default ForwardRef;
