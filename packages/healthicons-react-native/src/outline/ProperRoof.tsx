import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgProperRoof = (passedProps: SvgProps) => {
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
        d="M24 8.054 9.935 22.93C12.093 23.44 16.248 24 24 24s11.907-.56 14.065-1.07L24 8.055Zm16.664 14.715c.482.51.463 1.224-.171 1.495C38.856 24.962 34.634 26 24 26c-10.634 0-14.856-1.038-16.493-1.736-.634-.271-.653-.985-.171-1.495L22.619 6.603a1.882 1.882 0 0 1 2.762 0L40.664 22.77Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 25h2v14.24c.127.056.315.12.573.185.716.181 1.712.31 2.761.4a52.705 52.705 0 0 0 3.166.16v-4.722c0-2.462 2.04-4.763 5-4.763s5 2.301 5 4.763v4.723l.3-.008a52.705 52.705 0 0 0 2.866-.154c1.049-.088 2.045-.218 2.76-.398a3.89 3.89 0 0 0 .574-.185V25l1-.001h1v14.566c0 .732-.543 1.15-.857 1.334-.354.21-.795.355-1.226.464-.878.223-2.007.362-3.083.453a60.533 60.533 0 0 1-4.233.182l-.074.001H28.001L28 41h-1v-5.737c0-1.363-1.151-2.763-3-2.763s-3 1.4-3 2.763V41h-1v1H19.899l-.276-.003a60.533 60.533 0 0 1-3.957-.18c-1.076-.09-2.205-.23-3.083-.453-.431-.109-.872-.254-1.226-.464-.314-.185-.857-.602-.857-1.334V25ZM20 41v1h1v-1h-1Zm8 0h-1v1h1v-1Zm7.671-1.852-.013.01a.07.07 0 0 1 .013-.01Zm-23.342 0 .013.01a.068.068 0 0 1-.013-.01Z"
        fill="#333"
      />
      <Path d="M22 12 11 24.5l5-.5 6-12ZM24 12v13.5h-4L24 12Z" fill="#333" />
    </Svg>
  );
};
export default SvgProperRoof;
