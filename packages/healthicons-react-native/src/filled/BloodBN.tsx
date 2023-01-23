import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodBN = (passedProps: SvgProps) => {
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
        d="M16 11a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a4 4 0 0 0 2.646-7A4 4 0 0 0 21 11h-5Zm7 4a2 2 0 0 1-2 2h-4v-4h4a2 2 0 0 1 2 2Zm0 6a2 2 0 0 0-2-2h-4v4h4a2 2 0 0 0 2-2Z"
        fill="#333"
      />
      <Path
        d="M26 18a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 38c2.21 0 4-1.777 4-3.97V10.328c0-2.192-1.79-3.97-4-3.97h-6l-1.132-1.155a4.022 4.022 0 0 0-5.736 0L20 6.358h-6c-2.21 0-4 1.777-4 3.97V34.03C10 36.223 11.79 38 14 38h4v2h5v4h2v-4h5v-2h4ZM26.571 7.758a2 2 0 0 0 1.429.6h6c1.12 0 2 .896 2 1.97v17.21a8.441 8.441 0 0 0-.925-.625c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.171.025-2.368-.02-3.651-.069l-.53-.02A68.676 68.676 0 0 0 12 28.972V10.327c0-1.073.88-1.97 2-1.97h6a2 2 0 0 0 1.429-.6l1.132-1.155a2.021 2.021 0 0 1 2.878 0l1.132 1.156Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBloodBN;
