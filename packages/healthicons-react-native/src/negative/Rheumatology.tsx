import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRheumatology = (passedProps: SvgProps) => {
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
      <G clipPath="url(#rheumatology_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM21 6h6v9.682c0 .842.342 1.649.948 2.234l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.106 3.106 0 0 0 21 15.68V6ZM9 6h10v4.92c-5.263 2.012-9 7.11-9 13.08s3.737 11.068 9 13.08V42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm18 36h-6v-9.682c0-.842-.342-1.649-.948-2.234l-.421-.406a2.53 2.53 0 0 1 2.89-4.085l.205.103a2.85 2.85 0 0 0 2.548 0l.206-.103a2.53 2.53 0 0 1 2.89 4.085l-.422.406A3.106 3.106 0 0 0 27 32.318V42Zm12 0H29v-4.92c5.263-2.012 9-7.11 9-13.08s-3.737-11.068-9-13.08V6h10a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="rheumatology_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRheumatology;
