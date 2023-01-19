import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDisinfectingWipes = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M28 33.165V27c-3.205.61-4.969.63-8 0v6.165c3.094.9 4.881 1 8 0Zm-.115-24.588a1 1 0 0 1 .538 1.308l-2.5 6a1 1 0 0 1-1.846-.77l2.5-6a1 1 0 0 1 1.308-.538Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33.414 5.09a1 1 0 0 1 .516 1.278l-3.838 9.687C31.282 16.58 32 17.258 32 18c0 .024 0 .048-.002.072H32V41c0 1.657-3.582 3-8 3s-8-1.343-8-3V18.072h.002A1.139 1.139 0 0 1 16 18c0-.793.82-1.514 2.16-2.05L15.044 5.793a1 1 0 0 1 1.711-.949l.012.013c.013.014.037.04.071.073.069.067.178.167.325.283.296.231.736.516 1.304.722 1.088.396 2.762.55 4.987-.773 2.072-1.46 4.638-1.41 6.529-1.085a15.967 15.967 0 0 1 3.35.977l.056.025.017.007.005.002.003.002ZM23.94 21c-2.252-.006-4.283-.361-5.727-.928H18v20.637c.172.138.504.337 1.045.54 1.17.439 2.922.751 4.955.751s3.784-.312 4.955-.751c.541-.203.873-.402 1.045-.54V20.07h-.214c-1.444.568-3.475.923-5.727.929h-.119Zm5.702-14.952c-1.725-.297-3.64-.25-5.062.766a.988.988 0 0 1-.066.044c-2.76 1.655-5.075 1.56-6.732.957l-.03-.011L20.85 17.9h6.359l4.488-11.328a13.948 13.948 0 0 0-2.055-.525ZM17.898 40.615a.023.023 0 0 0-.003-.004v.001l.003.003Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDisinfectingWipes);
export default ForwardRef;
