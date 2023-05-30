import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodAP = (passedProps: SvgProps) => {
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
      <G clipPath="url(#blood_a_p_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM28 8.358a2 2 0 0 1-1.429-.6L25.44 6.602a2.021 2.021 0 0 0-2.878 0l-1.132 1.156a2 2 0 0 1-1.429.6h-6c-1.12 0-2 .896-2 1.97V28.97a68.676 68.676 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V10.327c0-1.073-.88-1.97-2-1.97h-6ZM30 38h4c2.21 0 4-1.777 4-3.97V10.328c0-2.192-1.79-3.97-4-3.97h-6l-1.132-1.155a4.022 4.022 0 0 0-5.736 0L20 6.358h-6c-2.21 0-4 1.777-4 3.97V34.03C10 36.223 11.79 38 14 38h4v2h5v4h2v-4h5v-2Zm-9.077-27.385a1 1 0 0 0-1.846 0l-3.742 8.98a1.036 1.036 0 0 0-.017.042l-1.241 2.978a1 1 0 0 0 1.846.77L16.917 21h6.166l.994 2.385a1 1 0 0 0 1.846-.77l-1.241-2.978-.008-.02-.01-.022-3.74-8.98ZM20 13.6l2.25 5.4h-4.5L20 13.6ZM31 16h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="blood_a_p_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBloodAP;
