import * as React from "react";
import Svg, { SvgProps, Path, Rect, Circle } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMarketStall = (
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
        d="M9.263 6c-.378 0-.715.262-.845.656L6.11 13.667a2.2 2.2 0 0 0-.11.687v2.789C6 18.72 7.151 20 8.571 20c1.42 0 2.572-1.28 2.572-2.857 0 1.578 1.151 2.857 2.571 2.857 1.42 0 2.572-1.28 2.572-2.857 0 1.578 1.151 2.857 2.571 2.857 1.42 0 2.57-1.278 2.572-2.855C21.429 18.722 22.58 20 24 20c1.42 0 2.571-1.28 2.571-2.857 0 1.578 1.152 2.857 2.572 2.857 1.42 0 2.57-1.278 2.571-2.855.001 1.577 1.152 2.855 2.572 2.855 1.42 0 2.571-1.28 2.571-2.857 0 1.578 1.151 2.857 2.572 2.857C40.849 20 42 18.72 42 17.143v-2.789a2.2 2.2 0 0 0-.11-.687l-2.308-7.01c-.13-.395-.467-.657-.845-.657H9.263Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M10 21.23V29H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h33a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H38v-7.77a3.916 3.916 0 0 1-1.143-.703 3.953 3.953 0 0 1-.857.576V29H12v-7.897a3.953 3.953 0 0 1-.857-.576c-.336.295-.72.535-1.143.703Zm26-1.957c.085-.085.165-.176.24-.273H36v.273ZM37.474 19a2.75 2.75 0 0 0 .526.519V19h-.526ZM10 19.519a2.63 2.63 0 0 0 .526-.519H10v.519ZM11.76 19H12v.273a2.766 2.766 0 0 1-.24-.273ZM8.5 33a.5.5 0 0 0-.5.5V41a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-7.5a.5.5 0 0 0-.5-.5h-31Z"
        clipRule="evenodd"
      />
      <Rect width={4} height={3} x={14} y={26} fill="#333" rx={0.5} />
      <Rect width={4} height={2} x={16} y={27} fill="#333" rx={0.5} />
      <Circle cx={22.5} cy={27.5} r={1.5} fill="#333" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMarketStall);
export default ForwardRef;
