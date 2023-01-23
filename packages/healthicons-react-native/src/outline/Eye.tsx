import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEye = (passedProps: SvgProps) => {
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
        d="M26.393 18.466a6 6 0 1 0 3.627 4.752 3 3 0 0 0-3.627-4.752ZM24.07 28a4 4 0 0 0 4-4 2.987 2.987 0 0 0-.07 0 3 3 0 0 1-2.875-3.86A4.004 4.004 0 0 0 20.07 24a4 4 0 0 0 4 4ZM29 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.196 20.864c3.408-3.858 9.885-8.771 18.626-8.863L24 12h.07c8.866 0 15.433 4.97 18.873 8.864a4.709 4.709 0 0 1 0 6.272C39.503 31.03 32.936 36 24.07 36H24l-.178-.001c-8.74-.092-15.218-5.005-18.626-8.863a4.709 4.709 0 0 1 0-6.272Zm1.499 1.324c1.879-2.127 4.73-4.563 8.391-6.222A11.956 11.956 0 0 0 12 24c0 3.09 1.168 5.907 3.086 8.034-3.66-1.659-6.512-4.095-8.391-6.222a2.709 2.709 0 0 1 0-3.624ZM24.028 14l-.181.001C18.394 14.083 14 18.528 14 24s4.395 9.917 9.847 9.999l.181.001C29.538 33.985 34 29.513 34 24s-4.462-9.985-9.972-10ZM36 24c0 3.14-1.207 6-3.182 8.139 3.774-1.66 6.707-4.155 8.626-6.327a2.709 2.709 0 0 0 0-3.624c-1.919-2.172-4.852-4.667-8.626-6.327A11.957 11.957 0 0 1 36 24Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgEye;
