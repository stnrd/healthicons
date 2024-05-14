import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlcoholCessation = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 4.61-1.734 8.817-4.584 12.001L29 27.586v-.742c0-2.717-1.102-5.324-3.062-7.245a.504.504 0 0 1-.152-.36V10.7c0-.387-.32-.7-.715-.7h-1.785a.707.707 0 0 0-.715.7v8.527a.496.496 0 0 1-.169.372A9.984 9.984 0 0 0 19 27.086v9.368c0 .854.706 1.546 1.577 1.546h6.74c.93 0 1.683-.739 1.683-1.65v-5.936l7.001 7.002A17.933 17.933 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.738 1.83-9.049 4.823-12.263l7.47 7.47a1 1 0 0 0 1.414-1.414l-7.442-7.442A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18Zm2 0c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-23 2h6v5h-6v-5Z"
      />
    </Svg>
  );
};
export default SvgAlcoholCessation;
