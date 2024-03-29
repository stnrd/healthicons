import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiscriminatingConcentrationBioassays = (passedProps: SvgProps) => {
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
      <G clipPath="url(#discriminating_concentration_bioassays_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM26 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v4h-1.533v2.195a3 3 0 0 0 1.015 2.25l1.826 1.61A5 5 0 0 1 42 21.806V37a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5V21.805a5 5 0 0 1 1.692-3.75l1.826-1.61a3 3 0 0 0 1.015-2.25V12H26V8Zm3.533 4h5.934v2.195a5 5 0 0 0 1.692 3.75l1.826 1.61A3 3 0 0 1 40 21.806V37a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V21.805a3 3 0 0 1 1.015-2.25l1.826-1.61a5 5 0 0 0 1.692-3.75V12Zm2.967 9a.5.5 0 0 1 .5.5v2.728c.28.264.523.745.699 1.366l.801-.801V23.5a.5.5 0 0 1 .146-.354l1.5-1.5a.5.5 0 0 1 .707.708L35.5 23.707V25a.5.5 0 0 1-.147.354l-1.424 1.424.03.282 4.803.797c.157.714-.093 2.143-2.346 2.143-1.303 0-2.04-.67-2.431-1.427-.012.212-.03.42-.053.62l2.355 1.647a.5.5 0 0 1 .177.596l-.317.792 1.045.435a.5.5 0 1 1-.384.924l-1.5-.626a.5.5 0 0 1-.272-.647l.353-.882-1.655-1.158a5.907 5.907 0 0 1-.111.38l.356 1.204c.014.046.021.094.021.142v.95l1.39 1.738a.5.5 0 1 1-.78.624l-1.5-1.875a.5.5 0 0 1-.11-.312v-1.053l-.07-.238a.688.688 0 0 1-.43.166.664.664 0 0 1-.385-.133l-.115.446v.812a.5.5 0 0 1-.11.312l-1.5 1.875a.5.5 0 1 1-.78-.624L31 32.95v-.7c0-.042.005-.084.016-.125l.372-1.441a5.921 5.921 0 0 1-.143-.493l-1.638 1.23.357.893a.5.5 0 0 1-.272.648l-1.5.624a.5.5 0 1 1-.384-.922l1.045-.436-.317-.792a.5.5 0 0 1 .164-.586l2.356-1.767c-.032-.302-.051-.618-.055-.945-.318.916-1.068 1.862-2.617 1.862-2.253 0-2.503-1.429-2.346-2.143l5.007-.831c.008-.084.016-.166.026-.248l-1.425-1.424A.5.5 0 0 1 29.5 25v-1.293l-1.354-1.353a.5.5 0 0 1 .707-.708l1.5 1.5a.5.5 0 0 1 .147.354v1.293l.802.801c.175-.621.418-1.102.698-1.366V21.5a.5.5 0 0 1 .5-.5Zm-5.32 7.681c.135.13.454.319 1.204.319.773 0 1.176-.317 1.424-.685.018-.026.035-.052.05-.079l-2.678.445Zm9.236.319c.75 0 1.069-.189 1.204-.319l-2.679-.445.05.08c.25.367.652.684 1.425.684ZM6.75 14.143H6V9h14v5.143h-.75v1.102c0 .66-.266 1.293-.738 1.755a.457.457 0 0 0-.137.327v13.346c0 .123.05.24.137.327.472.462.738 1.095.738 1.755v1.102H20V39H6v-5.143h.75v-1.102c0-.66.266-1.293.738-1.755a.457.457 0 0 0 .137-.327V17.327c0-.123-.05-.24-.137-.327a2.457 2.457 0 0 1-.738-1.755v-1.102Zm10.5 18.612v1.102H16V35a1 1 0 1 1-2 0v-1.143h-2V35a1 1 0 1 1-2 0v-1.143H8.75v-1.102c0-.123.05-.24.137-.326a2.457 2.457 0 0 0 .738-1.756V17.327c0-.66-.266-1.293-.738-1.756a.457.457 0 0 1-.137-.326v-1.102H10v-1.714a1 1 0 1 1 2 0v1.714h2v-1.714a1 1 0 1 1 2 0v1.714h1.25v1.102c0 .123-.05.24-.137.326a2.457 2.457 0 0 0-.738 1.756v13.346c0 .66.266 1.294.738 1.756a.457.457 0 0 1 .137.326Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="discriminating_concentration_bioassays_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgDiscriminatingConcentrationBioassays;
