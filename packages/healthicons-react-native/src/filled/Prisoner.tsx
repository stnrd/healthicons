import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPrisoner = (passedProps: SvgProps) => {
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
        d="M16 7c.918 0 2.006-.2 3.301-.437l.253-.047C20.915 6.267 22.453 6 24 6c1.6 0 3.17.266 4.541.516l.374.069C30.162 6.814 31.177 7 32 7a1 1 0 0 1 1 1v10a9 9 0 1 1-18 0V8a1 1 0 0 1 1-1Zm8 18a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7Zm4.604-12.884c.819.135 1.637.269 2.396.34v1.371c-.618-.066-1.316-.18-2.102-.308l-.376-.062C27.152 13.235 25.59 13 24 13c-1.536 0-3.065.236-4.427.457l-.257.042c-.855.14-1.624.265-2.316.334V12.46c.831-.072 1.715-.217 2.586-.36l.308-.05c1.37-.222 2.751-.431 4.106-.431 1.412 0 2.832.21 4.201.432l.403.065ZM23.47 29.005C31.077 28.87 42 31.642 42 36.04V42H6v-5.96c0-4.398 10.258-6.908 17.47-7.035ZM37.95 34c-.807-.453-1.817-.888-2.995-1.28-3.454-1.15-7.86-1.779-11.45-1.716-3.433.061-7.588.694-10.823 1.808-1.068.368-1.982.77-2.717 1.188H37.95ZM40 38v2H8v-2h32Z"
      />
    </Svg>
  );
};
export default SvgPrisoner;
