import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodVessel = (passedProps: SvgProps) => {
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
        d="M18 25.31V6h2v20.363c0 1.22-1.403 1.94-2.39 1.176L5.836 18.412l1.225-1.58 5.877 4.555-.725-6.575 1.988-.219.937 8.5L18 25.31Zm8-5.056V6h2v13.43l2.143-1.082 1.38-6.266 1.954.43-1.03 4.674 7.603-3.836.9 1.786-12.77 6.442c-.957.484-2.18-.17-2.18-1.324Zm15.54-2.98.92 1.776-6.089 3.16 5.365 1.305-.472 1.943-7.594-1.847-5.15 2.673a.94.94 0 0 0-.52.83V42h-2V27.113c0-1.102.624-2.099 1.598-2.604l13.941-7.234ZM9.088 26.926l-4.696-3.59 1.214-1.589 13.236 10.119A2.951 2.951 0 0 1 20 34.21V42h-2v-7.79a.951.951 0 0 0-.371-.756l-6.51-4.978-5.392 1.359-.489-1.94 3.85-.97Z"
        fill="#000"
      />
      <Path
        d="M25.227 12.85a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.055ZM23.227 21.85a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.056ZM24.227 28.85a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.056ZM23.227 37.85a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.056ZM23.227 8.85a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.055Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBloodVessel;
