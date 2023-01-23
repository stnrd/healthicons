import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntensiveCareUnit = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.667 11.111V10h2v1.111a1 1 0 0 0 1 1h4a2 2 0 0 1 2 2V24a1 1 0 1 1-2 0v-9.889h-4a3 3 0 0 1-3-3Z"
        fill="#333"
      />
      <Path
        d="M27.889 15.667a1 1 0 0 1 1-1h2.666a1 1 0 0 1 1 1v4.222a1 1 0 0 1-1 1H28.89a1 1 0 0 1-1-1v-4.222Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.889 16.667v2.222h.666v-2.222h-.666Zm-1-2a1 1 0 0 0-1 1v4.222a1 1 0 0 0 1 1h2.666a1 1 0 0 0 1-1v-4.222a1 1 0 0 0-1-1H28.89Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.222 15.056v-2.723h2v2.723h-2Z"
        fill="#333"
      />
      <Path
        d="M34.94 23.274H20.974a.238.238 0 0 1-.169-.07l-4.749-4.782a3.075 3.075 0 0 0-4.37 0 3.137 3.137 0 0 0 0 4.415l6.306 6.349a.874.874 0 0 0 .62.258H34.94c1.69 0 3.06-1.381 3.06-3.085s-1.37-3.085-3.06-3.085Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.94 25.274H20.974c-.598 0-1.17-.24-1.588-.661l1.42-1.41c.044.046.105.07.168.07H34.94c1.69 0 3.06 1.382 3.06 3.086s-1.37 3.085-3.06 3.085H18.612a.874.874 0 0 1-.62-.258l-6.307-6.35a3.137 3.137 0 0 1 0-4.414 3.075 3.075 0 0 1 4.371 0l4.75 4.781-1.42 1.41-4.749-4.781a1.075 1.075 0 0 0-1.533 0 1.138 1.138 0 0 0 0 1.595l5.977 6.017h15.86c.569 0 1.059-.47 1.059-1.085s-.49-1.085-1.06-1.085Z"
        fill="#333"
      />
      <Path d="m12 23 2 .91V33h-2V23Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23v10h2v-9.09L12 23Z"
        fill="#333"
      />
      <Path d="M33 29h2v4h-2v-4Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 29v4h2v-4h-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 33.556H10v-2h28v2Z"
        fill="#333"
      />
      <Path
        d="M17 35.278a2.722 2.722 0 1 1-5.444 0 2.722 2.722 0 0 1 5.444 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.278 36a.722.722 0 1 0 0-1.444.722.722 0 0 0 0 1.444Zm0 2a2.722 2.722 0 1 0 0-5.444 2.722 2.722 0 0 0 0 5.444Z"
        fill="#333"
      />
      <Path
        d="M36.444 35.278a2.722 2.722 0 1 1-5.444 0 2.722 2.722 0 0 1 5.444 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.722 36a.722.722 0 1 0 0-1.444.722.722 0 0 0 0 1.444Zm0 2a2.722 2.722 0 1 0 0-5.444 2.722 2.722 0 0 0 0 5.444ZM15.103 16.923a3.156 3.156 0 0 1 4.462.002l1.4 1.4a3.154 3.154 0 0 1-.001 4.462L19.82 23.93l-1.414-1.415 1.143-1.143a1.155 1.155 0 0 0 0-1.633l-1.4-1.4a1.156 1.156 0 0 0-1.633-.001l-1.143 1.142-1.414-1.415 1.143-1.142Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgIntensiveCareUnit;
