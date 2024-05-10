import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgElderly = (
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
      <g clipPath="url(#elderly_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm22 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-9 9.4a8.97 8.97 0 0 0-.484.535c-1.057 1.267-1.713 2.718-1.799 3.62a1.5 1.5 0 0 1-2.986-.285c.163-1.716 1.201-3.721 2.481-5.256C11.457 17.522 13.332 16 15.434 16h5.614c1.28 0 2.495.515 3.552 1.248C25.66 16.515 26.879 16 28.162 16h4.628c2.103 0 3.978 1.522 5.222 3.014 1.28 1.535 2.318 3.54 2.481 5.256a1.5 1.5 0 0 1-2.986.285c-.086-.902-.742-2.353-1.799-3.62a7.81 7.81 0 0 0-1.208-1.183v2.925c0 5.605 1.2 9.578 1.937 11.491.248.643-.15 1.4-.834 1.487-3.663.466-6.853.467-10.546-.04a.986.986 0 0 1-.825-1.194c.547-2.479 1.875-8.66 1.896-10.31-.207-.777-.74-1.809-1.532-2.783-.884 1.083-1.446 2.236-1.596 3.032V38a2 2 0 0 1-3.988.22L18.21 31h-.42l-.802 7.22A2 2 0 0 1 13 38V20.4Zm-7 8.1a2.5 2.5 0 0 1 5 0V39a1 1 0 1 1-2 0V28.5a.5.5 0 0 0-1 0v1.013a1 1 0 1 1-2 0V28.5ZM30.5 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 11a2.5 2.5 0 0 0-2.5 2.5v1.013a1 1 0 1 0 2 0V28.5a.5.5 0 1 1 1 0V39a1 1 0 1 0 2 0V28.5a2.5 2.5 0 0 0-2.5-2.5Zm-14 13.388v-2.236a35.91 35.91 0 0 0 3.588.282l-.64 2.348a1.5 1.5 0 0 1-2.948-.394Zm7.053.394-.654-2.397A41.646 41.646 0 0 0 35.5 37v2.388a1.5 1.5 0 0 1-2.947.394Z"
        />
      </g>
      <defs>
        <clipPath id="elderly_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgElderly);
export default ForwardRef;
