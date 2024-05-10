import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAncv = (passedProps: SvgProps) => {
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
      <Path d="M20 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM33 10a1 1 0 1 0-2 0v2.303l1.168 1.752a1 1 0 0 0 1.664-1.11L33 11.697V10Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM15.75 27.062c.404.323.895.464 1.373.434.011 1.32-.037 2.685-.09 4.178-.092 2.584-.197 5.55-.033 9.326v1a2 2 0 1 0 4 0v-1l1.462-7.692c.2-.061.448-.143.73-.25.677-.256 1.603-.675 2.484-1.316.877-.637 1.816-1.573 2.329-2.892.533-1.372.517-2.93-.148-4.593-1.148-2.869-3.243-5.346-4.943-7.046a32.874 32.874 0 0 0-2.248-2.048 26.331 26.331 0 0 0-.905-.718l-.058-.043-.017-.013-.006-.004-.004-.002-.143.196v-.001l.002-.001.141-.194A2.001 2.001 0 0 0 18.5 14h-2c-.763 0-1.372.332-1.732.572-.395.263-.75.592-1.05.906-.603.632-1.19 1.424-1.682 2.145a37.422 37.422 0 0 0-1.75 2.845l-.029.053-.008.014-.004.007a2 2 0 0 0 .507 2.52l5 4Zm.968-4.35L14.6 21.02c.222-.36.474-.752.74-1.142.16-.236.322-.463.48-.676.41 1.241.698 2.396.898 3.512Z"
      />
    </Svg>
  );
};
export default SvgAncv;
