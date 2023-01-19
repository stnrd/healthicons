import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineNose = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fill="#333"
        d="M30.404 5.085a1 1 0 0 1 .511 1.318L30 6l.915.403v.002l-.005.011-.015.033a29.36 29.36 0 0 1-.278.61 95.494 95.494 0 0 1-3.844 7.38c-2.484 4.283-5.925 9.363-9.595 12.008l-.002.001c-3.857 2.768-4.602 5.802-3.978 7.99.641 2.251 2.799 3.934 5.446 3.934h.472c.306-1.066 1.104-2.097 2.461-2.73 1.54-.718 3.72-.895 6.65-.215a1 1 0 1 1-.453 1.948c-2.671-.62-4.357-.384-5.351.08-.543.253-.901.582-1.126.918h.576A4.627 4.627 0 0 1 26.5 43h-2a2.627 2.627 0 0 0-2.627-2.627h-3.23c-3.504 0-6.473-2.243-7.369-5.388-.914-3.21.39-7.043 4.735-10.161 3.292-2.373 6.553-7.111 9.033-11.39a93.431 93.431 0 0 0 3.76-7.217 50.734 50.734 0 0 0 .266-.582l.013-.03.004-.008a1 1 0 0 1 1.319-.512Zm2.125 34.764c1.41-.88 2.708-2.768 3.227-4.858.53-2.139.286-4.663-1.66-6.685l-1.441 1.387c1.355 1.408 1.569 3.169 1.16 4.816-.421 1.695-1.462 3.093-2.344 3.642l1.058 1.698Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineNose);
export default ForwardRef;
