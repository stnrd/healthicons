import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgQuestionTriangle = (passedProps: SvgProps) => {
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
        d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.402 42H7.598a1 1 0 0 1-.899-1.437L23.101 6.849Zm4.591 15.133c1.03.684 1.807 1.793 1.807 3.28 0 1.578-.637 2.738-1.668 3.448a4.522 4.522 0 0 1-1.33.614V30.5a1.5 1.5 0 0 1-3 0v-2.441a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.228-.322a.698.698 0 0 0 .24-.272c.06-.12.13-.334.13-.707 0-.313-.123-.552-.468-.782-.392-.26-1.022-.453-1.779-.476-.748-.024-1.475.122-2.01.381-.536.26-.732.552-.788.767a1.5 1.5 0 1 1-2.905-.746c.344-1.341 1.347-2.218 2.385-2.72 1.04-.505 2.263-.718 3.413-.681 1.143.036 2.363.324 3.345.977ZM25 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgQuestionTriangle;
