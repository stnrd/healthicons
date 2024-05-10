import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTravel = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648 2.017.143 5.434.323 9.929.323 2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0c-.74-.027-1.42-.058-2.036-.09a8 8 0 1 0 15.64 0c.816-.043 1.522-.088 2.109-.13.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6Zm-5 6.828-2.492 2.492c1.93.097 4.462.18 7.492.18 3.03 0 5.562-.083 7.492-.18L29 12.828V8.62a13.77 13.77 0 0 0-.302-.08C27.656 8.276 26.07 8 24 8c-2.071 0-3.656.276-4.698.54-.106.026-.207.053-.302.08v4.208ZM30.148 9.01Zm0 0-.002-.002.001.001Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24.288 28.042 6.542 1.947 5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797 6.46-1.923A.979.979 0 0 1 24 28c.083 0 .166.01.247.031l.008.002a.892.892 0 0 1 .033.01ZM25 30.341l5 1.488V40h-5v-9.659Zm-7 1.488 5-1.488V40h-5v-8.17Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 36a1 1 0 0 0-1 1v3h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9Zm-3 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6v-5ZM39 36a1 1 0 0 1 1 1v3h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2Zm3 1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTravel);
export default ForwardRef;
