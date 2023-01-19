import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPsychology = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h5.389V30.762C11.345 28.487 9 25.422 9 21.45c0-3.302 1.378-6.469 3.83-8.803C15.284 10.311 18.61 9 22.08 9a18.941 18.941 0 0 1 7.669 1.607 11.983 11.983 0 0 1 4.815 3.509 9.853 9.853 0 0 1 1.843 5.478c.01.45.004.876-.002 1.288-.022 1.457-.04 2.74.691 4.256 0 0 2.164 1.947 1.88 3.509-.286 1.562-3.104 1.992-3.104 1.992 0 8.409-10.7 4.9-10.7 4.9V42H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M26.27 22.455c.643 0 .439-.19.971-.543a3.27 3.27 0 0 0 1.828.53l2.066-.731a3.19 3.19 0 0 0 1.132-1.834c.15-.72.042-1.468-.306-2.119a3.258 3.258 0 0 0-1.609-1.459 3.116 3.116 0 0 0-1.128-1.765l-2.017-.687h-.227a3.238 3.238 0 0 0-1.893-1.277l-3.49-.237a3.256 3.256 0 0 0-1.925.829 3.277 3.277 0 0 0-2.507.418c-.52.33-.93.798-1.182 1.35l-1.644 1.132a3.071 3.071 0 0 0-.627 1.862c-.004.28.034.559.113.828a3.071 3.071 0 0 0 .216 4.044c.045.57.25 1.118.592 1.584a3.21 3.21 0 0 0 1.35 1.057c.622.38 1.15.89 1.542 1.495.393.604.555 1.286.642 1.996h3.43v-3.314a3.086 3.086 0 0 1 .487-1.666c.319-.5.498-.903 1.04-1.163a3.63 3.63 0 0 0 1.34-.873 3.264 3.264 0 0 0 1.805.543Zm6.063 2.795a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M21.5 32.333h-3.333v-2H21.5v2Zm0 3.334h-3.333v-2H21.5v2Zm0 3.333h-3.333v-2H21.5v2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPsychology);
export default ForwardRef;
