import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgProviderFst = (passedProps: SvgProps) => {
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
        d="M8 8v7h7V8H8ZM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm26 27v7h7v-7h-7Zm-1-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9Zm-1.609-2.023-3.184-3.184-1.414 1.414 3.184 3.184 1.414-1.414Zm-8.714-8.714 3.977 3.977-1.414 1.415-3.977-3.978v4.218h-2v-7.632h7.632v2h-4.218Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgProviderFst;
