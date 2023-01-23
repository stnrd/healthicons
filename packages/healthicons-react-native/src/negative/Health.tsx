import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealth = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM27.408 6.8a5.537 5.537 0 0 0-5.737 0L19.72 7.995c-3.267 1.996-7.248 2.374-11.101 2.74-.873.083-1.74.166-2.59.266 0 0-.024 1.845 0 2.689l.209 7.128c.179 6.133 2.906 11.948 7.585 16.174 2.448 2.211 5.13 4.037 8.158 5.477 1.622.77 3.546.7 5.101-.187 2.623-1.496 4.906-3.297 7.113-5.29 4.678-4.226 7.406-10.041 7.585-16.174l.209-7.151c.024-.832.001-2.666.001-2.666-1.047-.173-2.105-.3-3.162-.426-3.27-.392-6.526-.781-9.383-2.528l-2.037-1.245ZM22 15v7h-7v4h7v7h4v-7h7v-4h-7v-7h-4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHealth;
