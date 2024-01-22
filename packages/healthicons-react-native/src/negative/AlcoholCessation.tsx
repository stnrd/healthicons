import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlcoholCessation = (passedProps: SvgProps) => {
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
      <G clipPath="url(#alcohol_cessation_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 42c4.61 0 8.817-1.734 12.001-4.584L29 30.414v5.936c0 .911-.754 1.65-1.683 1.65h-6.74c-.87 0-1.577-.692-1.577-1.546v-9.368a9.984 9.984 0 0 1 3.402-7.487.496.496 0 0 0 .17-.372V10.7c0-.387.32-.7.714-.7h1.785c.395 0 .715.313.715.7v8.54c0 .134.054.264.152.36A10.143 10.143 0 0 1 29 26.843v.742L37.416 36A17.933 17.933 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l7.442 7.443a1 1 0 0 1-1.414 1.414l-7.47-7.47A17.937 17.937 0 0 0 6 24c0 9.941 8.059 18 18 18Zm3-16h-6v5h6v-5Zm-3 18c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="alcohol_cessation_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAlcoholCessation;
