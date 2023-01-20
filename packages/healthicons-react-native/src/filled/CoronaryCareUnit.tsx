import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCoronaryCareUnit = (
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
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm9.78 6c-3.81 0-6.59 3.982-6.59 8.276 0 .997.133 1.957.374 2.877h3.287L19.37 17l2.199 7.569 2.69-3.403h5.702A1.03 1.03 0 0 1 31 22.188a1.03 1.03 0 0 1-1.039 1.021h-4.685L20.696 29l-1.956-6.732-1.674 2.927h-3.774C16.33 31.911 24.595 36 24.595 36S37 29.467 37 20.276C37 15.983 34.219 12 30.41 12c-2.644 0-4.605 1.787-5.815 4.32C23.384 13.787 21.423 12 18.78 12ZM10 23.153h2.554l.73 2.043H10v-2.043Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCoronaryCareUnit);
export default ForwardRef;
