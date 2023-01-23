import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAmbulance = (passedProps: SvgProps) => {
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
        d="M28 15h2v4h5.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-6v-2h4v-6.124a1 1 0 0 0-.322-.735l-5.282-4.876a1 1 0 0 0-.678-.265H30v12h2v2h-3.5v-1H28V15ZM12 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM43 28H29v-2h14v2ZM33 16a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14h22a2 2 0 0 1 2 2v19H15.874a4 4 0 1 0-7.748 0H4V16a2 2 0 0 1 2-2Zm10 8v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 17h6v3h3v6h-3v3h-4.682a6.002 6.002 0 0 1 2.599 4H28V16H6v17h.083A6.002 6.002 0 0 1 14 28.341V26h-3v-6h3v-3ZM8.126 33a4.007 4.007 0 0 0 0 2H4V16a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v19H15.874a4.01 4.01 0 0 0 0-2 4.002 4.002 0 0 0-7.748 0ZM16 22h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3ZM35 20h-4v-2h4v2ZM33 13.5a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1ZM36.5 17a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM35.759 14.171a1 1 0 0 1 .07-1.412l.914-.828a1 1 0 1 1 1.343 1.482l-.914.828a1 1 0 0 1-1.413-.07Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgAmbulance;
