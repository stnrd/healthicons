import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSecurityWorker = (passedProps: SvgProps) => {
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
        d="M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403Zm12 .403a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31.814 18.28c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0ZM24 20c2.721 0 4.623-.314 5.952-.766a6 6 0 1 1-11.903 0c1.328.452 3.23.766 5.951.766ZM25.5 30a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224.577 2.885 4.24-6.36c.29 0 .56.002.804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.713-6.325 11.118-7.558-.019.004.184.007.555.01l4.284 6.425.543-2.935-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1h3Zm9.5 5.333s-1.333-.666-2-1.333c-.667.667-2 1.333-2 1.333S31.698 38 33 38s2-2.667 2-2.667Z"
      />
    </Svg>
  );
};
export default SvgSecurityWorker;
