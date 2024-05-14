import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCpr = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm14.967 5.006C19.025 14.32 16 15.7 16 18.271V31a1 1 0 1 0 2 0v-9a1 1 0 0 1 1.664-.747l7.658 6.806A5 5 0 0 1 29 31.796V39a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-6a1 1 0 0 1-.99-1.141l.924-6.467a6.588 6.588 0 0 0-2.203-5.906l-9.764-8.48Zm-6.68 16.277A2.988 2.988 0 0 1 14 31V18.271c0-4.287 5.042-6.586 8.278-3.775l9.765 8.48a8.59 8.59 0 0 1 2.87 7.7L34.154 36H39a3 3 0 1 1 0 6h-9a3 3 0 0 1-3-3v-7.204a3 3 0 0 0-1.007-2.242L20 24.227V31c0 .459-.103.894-.287 1.283.197.069.39.15.579.245l3.447 1.724A4.09 4.09 0 0 1 21.909 42H12.09a4.09 4.09 0 0 1-1.829-7.748l3.447-1.724c.188-.094.382-.176.58-.245ZM17 40a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm4 0h.91a2.09 2.09 0 0 0 .935-3.96l-1.073-.536c.148.473.228.975.228 1.496a4.978 4.978 0 0 1-1 3Zm-8 0h-.91a2.09 2.09 0 0 1-.935-3.96l1.073-.536A4.998 4.998 0 0 0 12 37c0 1.126.372 2.164 1 3Z"
      />
    </Svg>
  );
};
export default SvgCpr;
