import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBloodBag = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18 40h5v4h2v-4h5v-2h4a4 4 0 0 0 4-4V10.114a4 4 0 0 0-4-4h-6L26.868 4.95a4 4 0 0 0-5.736 0L20 6.114h-6a4 4 0 0 0-4 4V34a4 4 0 0 0 4 4h4v2Zm8.566-32.492A2 2 0 0 0 28 8.114h6a2 2 0 0 1 2 2V27.54a8.438 8.438 0 0 0-.925-.626c-1.825-1.062-4.464-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.17.025-2.368-.02-3.651-.069a286.62 286.62 0 0 0-.53-.02A68.78 68.78 0 0 0 12 28.97V10.115a2 2 0 0 1 2-2h6a2 2 0 0 0 1.434-.606l1.132-1.164a2 2 0 0 1 2.868 0l1.132 1.164ZM12 30.971V34a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-3.67a7.004 7.004 0 0 0-1.931-1.688c-1.294-.753-3.154-1.2-5.56.22-2.958 1.744-5.743 2.197-8.585 2.257-1.234.026-2.494-.022-3.77-.07l-.527-.02A66.444 66.444 0 0 0 12 30.971Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBloodBag);
export default ForwardRef;
