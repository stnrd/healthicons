import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFever = (passedProps: SvgProps) => {
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
      <G clipPath="url(#fever_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm31.588 7.673A17.932 17.932 0 0 0 24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18c0-1.87-.285-3.674-.815-5.37a7.012 7.012 0 0 1-1.8.959A16.01 16.01 0 0 1 40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8c2.407 0 4.69.532 6.739 1.484.24-.62.53-1.226.849-1.811ZM37 17a4 4 0 0 0 4-4c0-3.5-4-7-4-7s-4 3.5-4 7a4 4 0 0 0 4 4ZM17.376 31.353A11.972 11.972 0 0 0 16.593 33c-.387 1.003.42 2 1.495 2h3.29l-3.457-2.994 1.309-1.512L24.433 35h5.479c1.075 0 1.882-.997 1.495-2-1.377-3.562-4.177-6-7.407-6-2.093 0-4.005 1.023-5.466 2.712l-1.568-1.344a2 2 0 1 0-1.301 1.519l1.71 1.466ZM13.63 19.875c-.119.738.381 1.445 1.065 1.883.713.457 1.73.707 2.93.53a3.794 3.794 0 0 0 2.653-1.666c.504-.763.712-1.693.48-2.381a.5.5 0 0 0-.818-.204c-1.796 1.705-3.824 2.124-5.642 1.449a.5.5 0 0 0-.668.389Zm20.076 0c.119.738-.382 1.445-1.065 1.883-.713.457-1.73.707-2.93.53a3.794 3.794 0 0 1-2.653-1.666c-.504-.763-.712-1.693-.48-2.381a.5.5 0 0 1 .818-.204c1.796 1.705 3.824 2.124 5.642 1.449a.5.5 0 0 1 .668.389Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="fever_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgFever;
