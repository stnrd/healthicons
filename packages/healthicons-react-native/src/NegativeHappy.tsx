import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeHappy = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M30.24 31.072c.387-.604.736-1.272 1.036-2h-14.43v.285c.271.619.578 1.19.913 1.715h12.482Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-9.258-10.5c1.72 4.452 5.22 7.5 9.258 7.5 4.038 0 7.538-3.048 9.258-7.5l.05-.129C33.755 28.18 32.8 27 31.527 27H16.472c-1.273 0-2.228 1.18-1.78 2.371l.049.129Zm6.56-7.392c.13-.358.091-.795-.016-1.193a4.172 4.172 0 0 0-.61-1.28c-.581-.829-1.544-1.591-2.845-1.646-1.347-.056-2.353.799-2.973 1.706a5.56 5.56 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931.176-.148.347-.29.505-.415.562-.444 1-.697 1.362-.715.345-.017.743.18 1.245.556.18.134.354.276.534.424l.195.159c.244.197.504.399.765.557a.5.5 0 0 0 .73-.257Zm5.311 0c-.13-.358-.09-.795.017-1.193.112-.416.319-.863.61-1.28.58-.829 1.544-1.591 2.845-1.646 1.346-.056 2.353.799 2.973 1.706.314.46.548.958.695 1.416.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.93a23.77 23.77 0 0 0-.505-.416c-.563-.444-1-.697-1.363-.715-.345-.017-.743.18-1.244.556-.18.134-.354.276-.534.424l-.196.159a7.15 7.15 0 0 1-.765.557.5.5 0 0 1-.729-.257Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0Zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeHappy);
export default ForwardRef;
