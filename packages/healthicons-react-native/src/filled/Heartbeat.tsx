import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeartbeat = (passedProps: SvgProps) => {
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
      <Path d="M26.542 11.149a1.5 1.5 0 0 1 2.87-.153L33.515 22.5c1.461-.002 2.388-.272 3.37-1.008a4.018 4.018 0 0 1 1.028-.904L38 20.5v.035a4 4 0 1 1 0 6.93v.035l-.089-.088c-.37-.227-.7-.513-.978-.845-.91-.658-1.765-.884-3.031-.92h-1.394a1.5 1.5 0 0 1-1.412-.997l-2.817-7.9-4.838 20.101a1.5 1.5 0 0 1-2.874.144l-5.649-16.18-1.522 3.88a1.5 1.5 0 0 1-1.396.951H4v-3h6.977l2.627-6.694a1.5 1.5 0 0 1 2.812.054l5.302 15.185 4.824-20.042Z" />
    </Svg>
  );
};
export default SvgHeartbeat;
