import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMinistryOfHealth = (passedProps: SvgProps) => {
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
        d="M23.375 5.22a1 1 0 0 1 1.25 0L39.35 17H42v6H6v-6h2.65L23.374 5.22ZM25 10v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2ZM24 25a4 4 0 0 0-4 4v8h-6v-4h-2v-8H8v8H6v4H4v6h40v-6h-2v-4h-2v-8h-4v8h-2v4h-6v-8a4 4 0 0 0-4-4Zm0 2a2 2 0 0 1 2 2v8h-4v-8a2 2 0 0 1 2-2Z"
      />
    </Svg>
  );
};
export default SvgMinistryOfHealth;
