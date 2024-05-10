import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTelemedicine = (passedProps: SvgProps) => {
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
        d="M8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Zm4 25.38v-.666c0-2.518 3.73-4.885 7.333-5.706.585-.133.519.71.667.992H27.833c.152-.289.499-1.068.834-.992.753.172 1.511.411 2.24.705l.023-.011.007.014.005.01C33.685 26.842 36 28.732 36 30.714V34h3V10H9v24h3v-2.62Zm3.495-2.54c.533-.39 1.164-.749 1.846-1.058a6.71 6.71 0 0 0 .25 1.51l.006.018a2 2 0 1 0 1.304-.296 5.398 5.398 0 0 1-.234-1.57l.126.239H29.04l.23-.437c.179.058.357.12.534.184.005.22-.013.472-.048.73a5.398 5.398 0 0 1-.182.84h-.907a.667.667 0 0 0-.597.369l-.666 1.333a.666.666 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.666.666 0 0 0-.07-.298l-.667-1.334a.667.667 0 0 0-.597-.368h-.377a7.104 7.104 0 0 0 .16-1c.811.41 1.507.879 2.02 1.357.732.683.864 1.158.864 1.356V34H14v-3.287c0-.274.264-.975 1.495-1.873ZM19.332 31a.672.672 0 0 1-.666.677A.672.672 0 0 1 18 31c0-.383.308-.677.667-.677.359 0 .666.294.666.677ZM24 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
    </Svg>
  );
};
export default SvgTelemedicine;
