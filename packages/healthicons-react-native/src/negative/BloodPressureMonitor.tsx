import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodPressureMonitor = (passedProps: SvgProps) => {
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
      <G clipPath="url(#blood-pressure-monitor_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm6 13c0 .04.001.082.003.122H6V32.84c0 1.985 1.665 3.253 3.43 3.985 1.64.68 3.715 1.06 5.8 1.152.388 1.064 1.23 1.903 2.244 2.523 1.399.855 3.264 1.393 5.255 1.644 3.966.499 8.804-.1 12.17-2.085 2.966-1.747 4.057-4.738 4.457-8.542.28-2.654.236-5.882.187-9.603a541.08 541.08 0 0 1-.035-3.061A3.502 3.502 0 0 0 42 15.5v-6a3.5 3.5 0 1 0-7 0v6a3.501 3.501 0 0 0 2.507 3.357c.009 1.125.023 2.2.037 3.226v.001c.049 3.651.09 6.694-.177 9.224-.377 3.58-1.34 5.766-3.483 7.028-2.88 1.697-7.237 2.285-10.905 1.823-1.827-.23-3.389-.71-4.462-1.366-.434-.265-.765-.542-1.006-.828 1.824-.103 3.605-.433 5.053-1.022 1.778-.723 3.389-1.999 3.435-4.014A7.002 7.002 0 0 0 26 19.071v-5.949h-.003C26 13.082 26 13.041 26 13c0-2.761-4.477-5-10-5S6 10.239 6 13Zm12 13a7.001 7.001 0 0 0 5.997 6.929c-.044.778-.673 1.545-2.186 2.161-1.525.621-3.632.933-5.8.909a20.927 20.927 0 0 1-.92-.031V17.98c.3.013.603.02.909.02 3.271 0 6.175-.785 8-2v3.07A7.001 7.001 0 0 0 18 26Zm4.177-11.253C23.774 13.948 24 13.215 24 13c0-.215-.226-.948-1.823-1.747C20.699 10.515 18.518 10 16 10s-4.7.515-6.177 1.253C8.226 12.052 8 12.785 8 13c0 .215.226.948 1.823 1.747C11.301 15.485 13.482 16 16 16s4.7-.515 6.177-1.253ZM25 21.5l-1.5 5 1.5 2 1.5-2-1.5-5Z"
        />
      </G>
      <Defs>
        <ClipPath id="blood-pressure-monitor_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBloodPressureMonitor;
