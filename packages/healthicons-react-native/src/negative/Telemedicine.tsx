import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#telemedicine_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Zm31 28V10H9v24h3v-2.62c0-2.022 2.407-4.622 5.22-5.726.008.414.047 1.558.104 2.012.061.49.145.978.236 1.379.02.086.04.17.062.25A1.999 1.999 0 0 0 18.667 33a2 2 0 0 0 .26-3.983 6.058 6.058 0 0 1-.067-.27c-.08-.349-.156-.791-.213-1.246-.094-.754-.141-1.543-.084-2.303.257-.073.514-.14.77-.198.259-.059.434.39.562.718.04.1.074.189.105.248 1.305 0 2.653.008 4 .017 1.347.008 2.695.017 4 .017.038-.073.078-.177.122-.291.13-.34.294-.766.545-.709.357.081.716.178 1.072.289 0 .258.004.521.009.788.017.968.034 1.977-.204 2.923h-.877a.667.667 0 0 0-.597.369l-.666 1.333a.666.666 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.666.666 0 0 0-.07-.298l-.667-1.334a.667.667 0 0 0-.597-.368h-.423c.212-1.06.226-2.126.225-3.202C33.793 26.922 36 29.444 36 31.38V34h3Zm-20.333-2.323a.672.672 0 0 0 .666-.677.672.672 0 0 0-.666-.677A.672.672 0 0 0 18 31c0 .383.308.677.667.677ZM24 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        />
      </G>
      <Defs>
        <ClipPath id="telemedicine_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgTelemedicine;
