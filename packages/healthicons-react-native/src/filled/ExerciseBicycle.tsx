import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseBicycle = (passedProps: SvgProps) => {
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
        d="M35.4 36.2a1 1 0 0 1 1.4.2l2.7 3.6H41a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2h1l-1.8-2.4a1 1 0 0 1 .2-1.4Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 38a9 9 0 1 0-7.485-14h7.062a5.423 5.423 0 0 1 1.43 10.655l-6.202 1.695A8.959 8.959 0 0 0 33 38Zm-6.924-3.25 7.403-2.025A3.423 3.423 0 0 0 32.577 26h-8.065A8.985 8.985 0 0 0 24 29c0 2.186.78 4.19 2.076 5.75Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.569 37.668a8.964 8.964 0 0 1-2.764-1.318l6.202-1.695A5.423 5.423 0 0 0 32.577 24h-7.062a9.05 9.05 0 0 1 1.827-2 9 9 0 1 1 3.227 15.668Zm9.428-8.46a7 7 0 0 0-7.207-7.206 7.424 7.424 0 0 1 7.207 7.207ZM26.076 34.75l7.403-2.024A3.423 3.423 0 0 0 32.577 26h-8.065A8.985 8.985 0 0 0 24 29c0 2.186.78 4.19 2.076 5.75ZM26.07 28c-.047.326-.071.66-.071 1 0 1.256.33 2.431.907 3.449l6.045-1.653A1.423 1.423 0 0 0 32.577 28H26.07ZM13.6 36.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2Z"
      />
      <Path d="M7 41a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 40a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H8ZM8 32.02A6.02 6.02 0 0 1 14.02 26h18.56a3.42 3.42 0 0 1 .94 6.709l-17.847 5.099C11.828 38.906 8 36.018 8 32.02Zm7.732.98A2 2 0 0 1 12 32a2 2 0 0 1 3.732-1H19a1 1 0 1 1 0 2h-3.268Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 32.01v.01c0 2.67 2.556 4.598 5.124 3.865L18.22 35h-1.575A4 4 0 0 1 10 32.01ZM14.01 28h18.57a1.42 1.42 0 0 1 .39 2.786l-11.922 3.406A3 3 0 0 0 19 29h-2.355a3.986 3.986 0 0 0-2.635-1Zm1.722 5A2 2 0 0 1 12 32a2 2 0 0 1 3.732-1H19a1 1 0 1 1 0 2h-3.268Zm-1.712-7A6.02 6.02 0 0 0 8 32.02c0 3.999 3.828 6.886 7.673 5.788l17.846-5.1A3.42 3.42 0 0 0 32.58 26H14.02Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.702 18.046a1 1 0 0 1 1.252.656l2.5 8a1 1 0 0 1-1.909.596l-2.5-8a1 1 0 0 1 .657-1.252ZM35.343 6.06a1 1 0 0 1 .596 1.283l-1 2.738a1 1 0 0 1-.574.588l-3.588 1.405 3.161 8.58a1 1 0 1 1-1.876.692l-3.5-9.5a1 1 0 0 1 .573-1.277l4.08-1.598.846-2.314a1 1 0 0 1 1.282-.596Z"
      />
      <Path d="M6 17.15a2.85 2.85 0 0 1 3.134-2.837l4.502.45a2.625 2.625 0 0 1-.26 5.237H8.85A2.85 2.85 0 0 1 6 17.15Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m13.438 16.754-4.503-.45A.85.85 0 1 0 8.85 18h4.525a.625.625 0 0 0 .063-1.246Zm-4.304-2.44A2.85 2.85 0 1 0 8.85 20h4.525a2.625 2.625 0 0 0 .261-5.236l-4.502-.45Z"
      />
    </Svg>
  );
};
export default SvgExerciseBicycle;