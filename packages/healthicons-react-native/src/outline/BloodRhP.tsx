import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodRhP = (passedProps: SvgProps) => {
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
        d="M27.612 5.535a5.018 5.018 0 0 0-7.224 0l-.528.548H15c-2.755 0-5 2.22-5 4.974v21.97C10 35.778 12.245 38 15 38h3v2h5v4h2v-4h5v-2h3c2.755 0 5-2.22 5-4.974V23h-2v4.539a8.442 8.442 0 0 0-.925-.626c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.17.025-2.368-.02-3.651-.069l-.53-.02A68.776 68.776 0 0 0 12 28.97V11.058c0-1.636 1.337-2.974 3-2.974h5.286a1 1 0 0 0 .72-.307l.823-.855a3.018 3.018 0 0 1 4.342 0l.823.855a1 1 0 0 0 .72.307h5.616c1.48 0 2.67 1.19 2.67 2.646V15h2v-4.271c0-2.572-2.097-4.646-4.67-4.646h-5.19l-.528-.548ZM15.627 31.029A66.435 66.435 0 0 0 12 30.971v2.055C12 34.662 13.337 36 15 36h18c1.663 0 3-1.338 3-2.974V30.33a7.004 7.004 0 0 0-1.931-1.688c-1.294-.752-3.155-1.2-5.56.22-2.958 1.745-5.743 2.198-8.585 2.258-1.234.026-2.494-.022-3.77-.07l-.527-.02Z"
      />
      <Path d="M25 14a1 1 0 0 1 1 1v3h3v-3a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0v-3h-3v3a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-3h1.49l1.605 3.424a1 1 0 0 0 1.81-.848l-1.383-2.95C21.42 19.102 22 18.095 22 17c0-1.595-1.227-3-2.875-3H16Zm4 3c0 .614-.452 1-.875 1H17v-2h2.125c.423 0 .875.386.875 1Z"
      />
      <Path d="M32 19a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" />
    </Svg>
  );
};
export default SvgBloodRhP;
