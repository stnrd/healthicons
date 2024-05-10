import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMobile = (passedProps: SvgProps) => {
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
      <G clipPath="url(#mobile_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm12.966 7.249a3 3 0 0 1 2.996-3.005l15.972-.026a3 3 0 0 1 3.005 2.995l.055 33.987A3 3 0 0 1 32 44.205l-15.972.026a3 3 0 0 1-3.005-2.995l-.056-33.987Zm2 .997a2 2 0 0 1 1.996-2.004L30.94 6.22a2 2 0 0 1 2.003 1.997l.044 26.99a2 2 0 0 1-1.997 2.003l-13.977.023a2 2 0 0 1-2.003-1.997l-.044-26.99Zm9.044 33.972a1.998 1.998 0 1 0-.008-3.996 1.998 1.998 0 0 0 .008 3.996Zm-.818-14.679.79.657.788-.652.016-.014c1.58-1.315 2.878-2.396 3.785-3.413s1.406-1.952 1.405-2.97c-.002-1.656-1.423-2.954-3.233-2.953-1.025 0-2.01.439-2.652 1.13l-.117.125-.117-.126c-.643-.69-1.629-1.125-2.653-1.125-1.81.002-3.23 1.303-3.228 2.959 0 1.018.5 1.952 1.41 2.967.911 1.018 2.217 2.1 3.806 3.416Z"
        />
      </G>
      <Defs>
        <ClipPath id="mobile_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMobile;
