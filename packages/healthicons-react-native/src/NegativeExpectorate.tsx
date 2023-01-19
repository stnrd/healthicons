import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeExpectorate = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm24 40c.085 0 .17 0 .254-.002.149.651.38 1.328.735 1.975A18 18 0 0 1 24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6s18 8.059 18 18c0 .21-.004.421-.01.63a5.811 5.811 0 0 0-1.99-.594V24c0-8.837-7.163-16-16-16S8 15.163 8 24s7.163 16 16 16Zm1-5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm14.107-7.987c1.454-.14 2.743.86 2.881 2.232.138 1.373-.93 2.6-2.383 2.74-2.303.222-4.855-2.042-4.855-2.042s2.054-2.708 4.357-2.93ZM31.43 42.532c-1.146.832-2.764.525-3.614-.686-1.348-1.92-.62-5.346-.62-5.346s3.423.411 4.77 2.33c.85 1.212.61 2.869-.536 3.702Zm8.734-8.12c1.752 1.017 2.379 3.21 1.4 4.895-.98 1.687-3.194 2.229-4.946 1.212-2.776-1.612-3.778-6.278-3.778-6.278s4.548-1.441 7.324.17Zm-21.61-16.244a1 1 0 0 0-1.292 1.507c.721.789.848 1.161.85 1.363.001.18-.1.526-.824 1.26a1 1 0 0 0 1.267 1.534l3-2a1 1 0 0 0 0-1.664l-3-2Zm16.205.18a1 1 0 0 0-1.314-.18l-3 2a1 1 0 0 0 0 1.664l3 2a1 1 0 0 0 1.267-1.534c-.724-.734-.825-1.08-.824-1.26.002-.202.129-.574.85-1.363a1 1 0 0 0 .02-1.326Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeExpectorate);
export default ForwardRef;
