import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthWorkerForm = (passedProps: SvgProps) => {
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
        d="M13 9a1 1 0 0 0-1 1v31a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-5.583V7H35a3 3 0 0 1 3 3v31a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h5.583v2H13Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8ZM15 21a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM15 16a1 1 0 0 1 1-1h15.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1ZM17 29v2h2v-2h-2Zm-1-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4ZM28 29a1 1 0 1 0 .002-1.998A1 1 0 0 0 28 29Zm0 2a3 3 0 1 0 0-6 3 3 0 1 0 0 6ZM24 35.28a.927.927 0 0 1 .055-.059c.164-.16.48-.372.976-.583 1-.425 2.234-.638 2.969-.638.735 0 1.969.213 2.969.638.496.21.812.423.976.583a.927.927 0 0 1 .055.058V37h-8v-1.72ZM28 32c-2.003 0-6 1.066-6 3.182V39h12v-3.818C34 33.066 30.003 32 28 32Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHealthWorkerForm;
