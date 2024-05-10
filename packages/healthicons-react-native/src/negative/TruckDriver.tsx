import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTruckDriver = (passedProps: SvgProps) => {
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
      <G clipPath="url(#truck_driver_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm31.95 19.097c3.071-1.048 2.526-2.8 1.51-4.097H14.819c-1.271 1.349-2.111 3.188 1.219 4.218a8 8 0 1 0 15.912-.12Zm-1.962.519c-1.57.244-3.618.384-6.26.384-2.382 0-4.257-.113-5.72-.315a6 6 0 1 0 11.98-.069ZM23 32.062v4.109a3.007 3.007 0 0 0-1.88 1.987l-4.517-1.21A8.009 8.009 0 0 1 23 32.061Zm2 0v4.109c.904.32 1.61 1.06 1.88 1.987l4.517-1.21A8.009 8.009 0 0 0 25 32.061Zm6.922 6.815-5.204 1.395a3 3 0 0 1-5.436 0l-5.204-1.395A8.07 8.07 0 0 0 16 40v1a1 1 0 1 1-2 0v-.607a1.998 1.998 0 0 1-1.808.404l-1.932-.518a2 2 0 0 1-1.414-2.45l.776-2.897a2 2 0 0 1 2.45-1.414l1.932.517a1.995 1.995 0 0 1 1.28 1.058A9.997 9.997 0 0 1 24 30a9.997 9.997 0 0 1 8.713 5.089c.245-.501.698-.897 1.279-1.053l1.932-.518a2 2 0 0 1 2.45 1.415l.776 2.897a2 2 0 0 1-1.415 2.45l-1.931.518a1.998 1.998 0 0 1-1.804-.4V41a1 1 0 1 1-2 0v-1c0-.381-.027-.756-.078-1.123ZM24 40a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 9.5c0-.438 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5Zm7.5-.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
        />
      </G>
      <Defs>
        <ClipPath id="truck_driver_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgTruckDriver;
