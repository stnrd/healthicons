import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFruits = (passedProps: SvgProps) => {
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
        d="M9.614 16.63c1.556-1.608 3.112-2.144 5.186-1.072 1.868.965 2.895 1.061 3.838 1.071.983-.01 2.052-.106 3.998-1.071 2.16-1.072 3.78-.536 5.401 1.072 1.91 1.896 2.5 3.87 2.701 5.361.024.12.044.24.063.36a3.501 3.501 0 0 0-.912 6.306l-.079.203a3.5 3.5 0 1 0-3.52 6.02c-.095.117-.188.228-.277.331-.835.869-1.785 1.426-2.815 1.256-3.24-.537-3.78-.537-4.32-.537h-.47c-.518 0-1.037 0-4.148.537-2.49.428-4.49-3.753-5.482-5.896-1.56-3.363-1.871-6.8-1.757-8.58.193-1.492.76-3.465 2.593-5.36Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.845 18.09a4.5 4.5 0 0 1 2.716 5.755c-.032.089-.075.17-.127.243a4.503 4.503 0 0 1 .88 5.801c-.281.448-.639.843-1.055 1.166a4.48 4.48 0 0 1-.519 2.585 4.5 4.5 0 1 1-5.108 7.341 4.5 4.5 0 0 1-7.093-4.988 4.5 4.5 0 0 1 0-8.987 4.5 4.5 0 0 1 4.501-5.999c.01-.067.026-.135.05-.202a4.5 4.5 0 0 1 5.755-2.715Zm-1.983 21.307a2.5 2.5 0 1 0 2.578-4.153 1.005 1.005 0 0 1-.1-.042c-.665.46-1.46.746-2.318.792.167.47.258.978.258 1.506 0 .678-.15 1.32-.418 1.897Zm.16-12.39a4.496 4.496 0 0 1 3.49 1.977 2.514 2.514 0 0 0 .457-1.091 2.5 2.5 0 0 0-3.692-2.573 4.496 4.496 0 0 1-.255 1.686Zm-.283-3.648a4.51 4.51 0 0 1 2.943-.2 2.5 2.5 0 0 0-4.71-1.678.971.971 0 0 1-.029.072 4.52 4.52 0 0 1 1.796 1.806ZM31.78 23a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-1.5 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM7.565 8.001h1.133c2.84 0 5.514 1.277 7.466 2.972a11.959 11.959 0 0 1 1.716 1.832v-2.239a1 1 0 1 1 2 0v6.6a.998.998 0 0 1-.38.785V18h-.068a.995.995 0 0 1-1.106-.002c-2.44-.044-4.892-.993-6.822-2.516-1.976-1.56-3.476-3.78-3.798-6.358l-.14-1.124Zm9.746 7.91c-.354-1.091-1.196-2.332-2.458-3.428-1.36-1.18-3.08-2.079-4.884-2.376.483 1.462 1.473 2.779 2.774 3.806 1.333 1.051 2.947 1.76 4.568 1.999Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m37.968 9.144.182 1.118c.455 2.803-.377 5.648-1.738 7.846-1.338 2.162-3.334 3.92-5.415 4.258l-.987.16-.16-.986c-.4-2.465.142-5.11 1.364-7.31 1.223-2.2 3.175-4.036 5.667-4.767l1.087-.319Zm-1.694 2.71c-1.365.712-2.507 1.9-3.312 3.348-.824 1.484-1.266 3.19-1.241 4.83 1.02-.525 2.11-1.555 2.99-2.977.948-1.53 1.559-3.373 1.564-5.2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgFruits;
