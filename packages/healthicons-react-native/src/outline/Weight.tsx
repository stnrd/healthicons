import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWeight = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.851 16.25c.742.819.515 2.076-.39 2.71l-4.872 3.418c-.904.634-2.14.378-3.033-.27a6.037 6.037 0 0 0-3.455-1.156 6.049 6.049 0 0 0-3.492 1.04c-.915.619-2.158.834-3.04.17l-4.757-3.578c-.882-.664-1.068-1.929-.299-2.722a16 16 0 0 1 23.338.389Zm-1.655 1.156a14 14 0 0 0-20.067-.334l4.638 3.488a.35.35 0 0 0 .13.006c.157-.014.377-.086.59-.23a8.048 8.048 0 0 1 4.8-1.38c.038-.08.088-.156.149-.226l2.746-3.158a1 1 0 0 1 1.51 1.312l-2.155 2.478a8.043 8.043 0 0 1 2.195 1.127c.208.151.425.23.582.25.076.01.116.003.13-.001l4.752-3.332Zm-4.743 3.329-.008.003c.004-.003.007-.004.008-.003Zm-10.694-.178s.003 0 .008.003l-.008-.003Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.216 42a4 4 0 0 0 3.994-3.778l1.556-28A4 4 0 0 0 37.772 6H10.228a4 4 0 0 0-3.993 4.222l1.555 28A4 4 0 0 0 11.784 42h24.432Zm-24.432-2h24.432a2 2 0 0 0 1.997-1.89l1.556-28A2 2 0 0 0 37.772 8H10.228a2 2 0 0 0-1.997 2.11l1.556 28A2 2 0 0 0 11.784 40Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgWeight;
