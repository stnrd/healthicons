import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineMediumLevel = (
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
        d="M6.109 24a17.926 17.926 0 0 1 4.956-10.52l3.056 3.055 1.415-1.414-3.001-3A17.925 17.925 0 0 1 23 8.027V13h2V8.027a17.924 17.924 0 0 1 10.465 4.094L32.585 15 34 16.414l2.935-2.935A17.926 17.926 0 0 1 41.891 24h-4.207v2H42a17.905 17.905 0 0 1-4.106 11.427l-3.42-3.42-1.415 1.414 3.477 3.477-.012.012 1.391 1.437A19.928 19.928 0 0 0 44 25.99C44 14.95 35.045 6 24 6S4 14.949 4 25.99a19.923 19.923 0 0 0 5.79 14.065l1.42-1.407-.019-.02 3.006-3.005-1.414-1.414-2.919 2.918A17.902 17.902 0 0 1 6 26h4.053v-2H6.109Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m22.996 23.884-2.37 13.82c-.028.392.088.781.326 1.094l1.923 2.212c1.125.49 1.625.49 2.568 0l1.922-2.212c.238-.313.354-.702.326-1.094L25.31 23.902c-.145-1.997-2.17-2.015-2.314-.018Zm2.666 13.825-1.508-8.742-1.5 8.742 1.411 1.622c.077.026.124.038.15.043l1.447-1.665Zm-1.477 1.673.01-.002a.04.04 0 0 1-.01.002Zm-.886-15.44v-.003.003Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineMediumLevel);
export default ForwardRef;
