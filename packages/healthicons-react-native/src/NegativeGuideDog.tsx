import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeGuideDog = (
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
        d="M48 0H0v48h48V0ZM23.5 24.914l4.797-4.797c1.664.022 3.398-.04 4.786-.09.834-.03 1.543-.055 2.036-.055 3.405 0 5.138 5.55 6.252 9.116.234.748.44 1.408.629 1.912.452.767-.095 1.253-.5 1L37 26.228s3 5.272 3 7.25V38a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h.518c.03-.194-.05-.408-.174-.737a9.942 9.942 0 0 1-.344-1.06c-.053-.202-.281-.346-.652-.58-.92-.578-2.71-1.704-4.848-5.623-2.933 1.697-5.268 2.264-8 2.629v-6.715Zm-2 .586v6.364l-.56.06h-.007l-.933.101v5.25c0 .25.006.445.011.593.009.256.012.37-.03.392a.037.037 0 0 1-.016.003A1 1 0 0 1 19 39h-3a1 1 0 1 1 0-2h.295c2.08-2.17.684-6.328.205-6.975-.121-.164-.253-.336-.391-.518-.75-.985-1.716-2.254-2.523-4.007H21.5Zm.586-2h-9.264a18.252 18.252 0 0 1-.71-3.553 21.91 21.91 0 0 1-1.112.025c-1.164 0-2.96-.078-3.5-.472-1-1.325-1.5-3.972-1.5-3.972s2.787-.951 4-1.381c0-3.224 4.168-5.064 6.286-2.348.526-.002 1.126.168 1.688.512 1.016.624 1.4 3.436 1.18 4.709 1.605 1.89 3.658 2.666 6.346 2.952l.103.011 11.69-11.69a1 1 0 1 1 1.414 1.414L28.414 20h-2.828l-3.5 3.5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeGuideDog);
export default ForwardRef;
