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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.581 11.867a2.5 2.5 0 0 1 4.756-.254l3.75 9.887h2.582a5 5 0 1 1 0 5h-4.307a2.5 2.5 0 0 1-2.337-1.613l-1.587-4.183-4.036 15.429a2.5 2.5 0 0 1-4.765.23l-4.713-12.824-.597 1.52A2.5 2.5 0 0 1 10 26.646H4v-2h6a.5.5 0 0 0 .466-.317l2.519-6.421 6.529 17.764a.5.5 0 0 0 .953-.045l5.62-21.486 3.808 10.036a.5.5 0 0 0 .467.323h5.68a3 3 0 1 0 0-1h-5.335l-4.24-11.177a.5.5 0 0 0-.95.05l-5.614 21.459-6.434-17.505a.5.5 0 0 0-.934-.01l-2.876 7.33H4v-2h4.295l2.378-6.06a2.5 2.5 0 0 1 4.674.05L19.58 27.16l4-15.292Z"
      />
    </Svg>
  );
};
export default SvgHeartbeat;
