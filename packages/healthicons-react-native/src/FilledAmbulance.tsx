import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAmbulance = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28 15h2v4h5.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-6v-2h4v-6.124a1 1 0 0 0-.322-.735l-5.282-4.876a1 1 0 0 0-.678-.265H30v12h2v2h-3.5v-1H28V15ZM12 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-10H29v-2h14v2ZM33 16a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M6 14h22a2 2 0 0 1 2 2v19H15.874a4 4 0 1 0-7.748 0H4V16a2 2 0 0 1 2-2Zm10 8v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M14 17h6v3h3v6h-3v3h-4.682a6.002 6.002 0 0 1 2.599 4H28V16H6v17h.083A6.002 6.002 0 0 1 14 28.341V26h-3v-6h3v-3ZM8.126 33a4.007 4.007 0 0 0 0 2H4V16a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v19H15.874a4.01 4.01 0 0 0 0-2 4.002 4.002 0 0 0-7.748 0ZM16 22h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3Zm19-2h-4v-2h4v2Zm-2-6.5a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm3.5 3.5a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-.741-2.829a1 1 0 0 1 .07-1.412l.914-.828a1 1 0 1 1 1.343 1.482l-.914.828a1 1 0 0 1-1.413-.07Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAmbulance);
export default ForwardRef;
