import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledTongue = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20 22c0 2.21-1.12 4-2.5 4S15 24.21 15 22s1.12-4 2.5-4 2.5 1.79 2.5 4Zm10.5 4c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M27.874 41.582a17.855 17.855 0 0 0 3.276-1.058l.043-.019A18.04 18.04 0 0 0 38 35.316a18.036 18.036 0 0 0 2.325-3.721l.001-.004A17.932 17.932 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 7.333 4.385 13.642 10.676 16.447l.131.058c1.058.462 2.168.825 3.32 1.077A5.976 5.976 0 0 0 24 43a5.976 5.976 0 0 0 3.874-1.418ZM8 24c0 6.84 4.292 12.677 10.33 14.966A5.99 5.99 0 0 1 18 37v-2.122c-.92-.452-1.558-.992-2-1.522l-.025-.03C15 32.135 15 31 15 31s-.373-1.493 1.137-1.899l.06-.015c.225-.055.49-.086.803-.086h14.5c.12 0 .231.007.336.02l.016.003C33.5 29.242 33.5 31 33.5 31s-.133 1.332-1.5 2.621a7.263 7.263 0 0 1-2 1.308V37c0 .689-.116 1.35-.33 1.966a16.045 16.045 0 0 0 7.162-5.407l.018-.024.103-.14A15.915 15.915 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24Zm16 12a1 1 0 0 1-1-1v-4h-3v6a4 4 0 0 0 8 0v-6h-3v4a1 1 0 0 1-1 1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledTongue);
export default ForwardRef;
