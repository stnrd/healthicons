import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodBag = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 34.262V10.376a4 4 0 0 0-4-4h-6l-1.132-1.164a4 4 0 0 0-5.736 0L20 6.376h-6a4 4 0 0 0-4 4v23.886a4 4 0 0 0 4 4h4v2h5v4h2v-4h5v-2h4a4 4 0 0 0 4-4ZM26.566 7.77A2 2 0 0 0 28 8.376h6a2 2 0 0 1 2 2v17.425a8.441 8.441 0 0 0-.925-.626c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.924-7.61 1.98-1.171.025-2.368-.02-3.651-.069l-.53-.02a68.678 68.678 0 0 0-3.701-.06V10.377a2 2 0 0 1 2-2h6a2 2 0 0 0 1.434-.606l1.132-1.164a2 2 0 0 1 2.868 0l1.132 1.164Z"
      />
    </Svg>
  );
};
export default SvgBloodBag;
