import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAngry = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17.632 31.506a2.91 2.91 0 0 0-.472.878 2.696 2.696 0 0 0-.15 1.107c.04.416.23.956.779 1.277.508.297 1.096.268 1.616.138l.014-.004c2.396-.636 3.569-.899 4.704-.894 1.138.005 2.285.28 4.639.893.454.128.995.159 1.476-.13.497-.3.682-.788.738-1.154a2.601 2.601 0 0 0-.067-1.022 2.817 2.817 0 0 0-.371-.854 3.364 3.364 0 0 0-.351-.417l-.012-.012-.009-.01C28.843 29.854 26.504 29 23.986 29c-2.622 0-5.067.93-6.354 2.506Zm6.5.502c-1.406-.006-2.797.319-5.035.91l.03-.06a.573.573 0 0 1 .054-.087c.786-.963 2.56-1.771 4.806-1.771 2.142 0 3.868.738 4.703 1.651.03.034.06.066.084.09l.002.002.014.015.046.05c.032.035.041.047.042.048l.006.01c-2.066-.536-3.395-.852-4.752-.858ZM28 23.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-13-2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M16.889 20.357a27.598 27.598 0 0 0-4.334-1.046l.29-1.979c1.16.17 2.914.546 4.67 1.125 1.732.572 3.582 1.38 4.838 2.465l-1.308 1.513c-.95-.821-2.494-1.53-4.157-2.078Zm18.506-1.046a27.556 27.556 0 0 0-4.334 1.046c-1.663.549-3.206 1.257-4.157 2.078l-1.307-1.513c1.255-1.085 3.105-1.893 4.837-2.465a29.637 29.637 0 0 1 4.67-1.125l.29 1.979Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAngry);
export default ForwardRef;
