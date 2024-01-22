import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
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
      <G clipPath="url(#security_worker_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17.118 30c-.019.004.184.007.555.01l4.284 6.425.543-2.935-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224.577 2.885 4.24-6.36c.29 0 .56.002.804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.713-6.325 11.118-7.558ZM33 34c.667.667 2 1.333 2 1.333S34.302 38 33 38s-2-2.667-2-2.667 1.333-.666 2-1.333Zm-1.186-15.72c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0ZM24.096 20c2.67-.007 4.543-.32 5.856-.766a6 6 0 1 1-11.903 0c1.312.447 3.185.759 5.855.766h.192ZM13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403Zm12 .403a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="security_worker_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSecurityWorker;
