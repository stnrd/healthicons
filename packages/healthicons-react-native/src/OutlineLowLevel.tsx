import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineLowLevel = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        d="M6.109 24a17.926 17.926 0 0 1 4.956-10.52l3.056 3.055 1.415-1.414-3.001-3A17.925 17.925 0 0 1 23 8.027V13h2V8.027a17.924 17.924 0 0 1 10.465 4.094L32.585 15 34 16.414l2.935-2.935A17.926 17.926 0 0 1 41.891 24h-4.207v2H42a17.905 17.905 0 0 1-4.106 11.427l-3.42-3.42-1.415 1.414 3.478 3.477-.013.012 1.391 1.437A19.928 19.928 0 0 0 44 25.99C44 14.95 35.045 6 24 6S4 14.949 4 25.99a19.923 19.923 0 0 0 5.79 14.065l1.42-1.407-.019-.02 3.006-3.005-1.414-1.414-2.919 2.918A17.902 17.902 0 0 1 6 26h4.053v-2H6.109Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m11.566 31.136 12.927 5.433c.375.116.78.091 1.14-.07l2.588-1.373c.732-.985.845-1.472.58-2.502l-1.72-2.372a1.615 1.615 0 0 0-.991-.565l-13.983-.8c-1.978-.311-2.454 1.657-.541 2.25Zm14.07.529-8.857-.508 8.177 3.437 1.899-1.007c.042-.07.064-.113.075-.136l-1.294-1.786Zm1.295 1.816v-.009.01Zm-15.24-2.628h-.004.004Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineLowLevel);
export default ForwardRef;
