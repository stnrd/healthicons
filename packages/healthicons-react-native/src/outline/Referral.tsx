import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgReferral = (passedProps: SvgProps) => {
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
      <Path d="M16 9v3h-3v2h3v3h2v-3h3v-2h-3V9h-2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6a3 3 0 0 0-3 3v1H6v19h22V10h-4V9a3 3 0 0 0-3-3h-8Zm8 14a3 3 0 0 0 3-3v-1h2v11h-5v-6h-8v6H8V16h2v1a3 3 0 0 0 3 3h8ZM12 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9Zm-4 3h2v2H8v-2Zm18 2h-2v-2h2v2Zm-7 9v4h-4v-4h4ZM30 28a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4Zm4-2a2 2 0 1 0 0 4 2 2 0 1 0 0-4ZM34 33c-2.67 0-8 1.462-8 4.364V40h-9c-.729 0-1.202-.263-1.503-.602C15.18 39.041 15 38.537 15 38v-3.586l3.293 3.293 1.414-1.414L14 30.586l-5.707 5.707 1.414 1.414L13 34.414V38c0 .963.32 1.959 1.003 2.727C14.702 41.513 15.729 42 17 42h25v-4.636C42 34.462 36.67 33 34 33Zm-5.706 3.867c-.283.285-.294.441-.294.497V40h12v-2.636c0-.056-.01-.212-.294-.497-.3-.303-.805-.634-1.506-.94C36.788 35.308 35.06 35 34 35s-2.788.31-4.2.926c-.701.306-1.205.638-1.506.941Z"
      />
    </Svg>
  );
};
export default SvgReferral;
