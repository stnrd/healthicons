import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSugar = (passedProps: SvgProps) => {
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
      <G clipPath="url(#sugar_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm34.459 10.048a1 1 0 0 1 .973.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.285.034 1 1 0 0 1-.909-.518l-4.326-4.27a1 1 0 1 1 1.405-1.424l3.231 3.19 1.902-8.37-6.626-5.619-.76 2.322a1 1 0 0 1-1.9-.622l1.176-3.595a1 1 0 0 1 .644-.64l10.588-3.406Zm-3.12 20.574 2.025-8.912 6.4-1.745a1 1 0 0 0-.527-1.93l-6.825 1.862-6.063-5.14 8.176-2.63 7.374 6.607-2.1 9.62-8.46 2.268ZM11.707 15.038a1 1 0 0 0-.965.239L4.31 21.416a1 1 0 0 0-.275.984l.016.062a1 1 0 0 0 .289 1.068l1.992 7.37a1 1 0 0 0 .69.7l7.23 2.064a1 1 0 0 0 1.032.295l.009.003a1 1 0 0 0 .936-.212l6.432-5.666a1 1 0 0 0 .308-.999l-2.297-8.972a1 1 0 0 0-.695-.713l-8.27-2.362Zm3.967 16.535 5.205-4.585-2.003-7.823-7.167-2.046-5.263 5.023 6.26 1.738 3.587-3.587a1 1 0 0 1 1.414 1.414l-3.6 3.6 1.567 6.266Zm-2.108-.184-1.395-5.581-5.561-1.545 1.505 5.57 5.451 1.556Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="sugar_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSugar;
