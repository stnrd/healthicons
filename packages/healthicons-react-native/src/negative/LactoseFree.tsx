import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactoseFree = (passedProps: SvgProps) => {
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
      <G clipPath="url(#lactose-free_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm37.416 36.001A17.933 17.933 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l4.942 4.943a1 1 0 0 1-1.414 1.414l-4.97-4.97A17.937 17.937 0 0 0 6 24c0 9.941 8.059 18 18 18 4.61 0 8.817-1.734 12.001-4.584L30 31.414v4.151C30 36.91 28.925 38 27.6 38h-7.2c-1.325 0-2.4-1.09-2.4-2.435V22.174l2.4-9.13s-1.2-.61-1.2-1.827S19.8 10 21.6 10h4.8c1.8 0 2.4 0 2.4 1.217 0 1.218-1.2 1.826-1.2 1.826l2.4 9.13v6.413L37.416 36ZM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-4-20.447s2.667-1.245 4 0c1.333 1.245 4 1.245 4 1.245V35a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V23.553Z"
        />
      </G>
      <Defs>
        <ClipPath id="lactose-free_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgLactoseFree;
