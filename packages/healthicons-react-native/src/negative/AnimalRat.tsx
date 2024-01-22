import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalRat = (passedProps: SvgProps) => {
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
      <G clipPath="url(#animal_rat_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14.751 17.088c-.86.859-1.816 2.576-2.251 4.214l-.08.018A10.842 10.842 0 0 0 4 31.89c0 .2.162.361.361.361H44v-2.754c0-1.631-.295-3.194-.834-4.637.537-1.267.834-2.657.834-4.113C44 14.788 39.05 10 33 10a1 1 0 1 0 0 2c4.995 0 9 3.94 9 8.747 0 .522-.047 1.034-.137 1.531a13.306 13.306 0 0 0-1.607-2.01l-2.785.01c-2.002.224-3.45 1.733-4.5 3.435-.512.832-.895 1.656-1.18 2.295l-.104.234c-.098.22-.188.424-.263.577a2.912 2.912 0 0 1-.186.337 1.32 1.32 0 0 1-.196.234c-.069.064-.32.288-.72.288h-4.935c-1.514 0-2.84 1.066-3.253 2.572v2H20v-1c0-3.038 2.373-5.572 5.387-5.572h4.361l.093-.209.002-.003.121-.273c.295-.66.721-1.582 1.305-2.53 1.112-1.803 2.93-3.92 5.731-4.34l.861-.007a13.184 13.184 0 0 0-7.107-2.066c-3.288 0-6.54.612-9.591 1.797a4.031 4.031 0 0 0-6.412-.96ZM13 26.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.05-3.238c1.286-.406 2.484-1.134 2.988-1.638a2.031 2.031 0 0 0-2.873-2.872c-.503.503-1.232 1.701-1.637 2.988-.197.624-.277 1.145-.267 1.512.004.118.015.198.026.25.052.012.133.023.25.026.368.01.889-.07 1.513-.266Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="animal_rat_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAnimalRat;
