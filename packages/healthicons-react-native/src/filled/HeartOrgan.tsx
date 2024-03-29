import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeartOrgan = (passedProps: SvgProps) => {
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
        d="M20 6h4v2.644c1.273-.078 2.506-.004 3.614.23-4.7 1.85-6.863 6.605-7.217 7.383l-.022.048c-1.149-.174-2.393-.32-3.57-.309-1.214.104-2.391.283-4.33 1.375-.274.194-.642.51-1.143.994-.036-.027-.075-.05-.126-.083-.041-.025-.09-.056-.151-.096a11.58 11.58 0 0 0-1.174-.67c-1.016-.504-2.262-.933-3.483-.933v-3.879c2.111 0 4.01.717 5.305 1.36.449.223.843.445 1.17.643.288-.616.67-1.189 1.125-1.717L11.8 9.543l3.521-2.287 2.027 3.18c.834-.43 1.73-.787 2.651-1.068V6ZM30.757 14.691c-1.458.676-2.72 1.786-3.857 3.924 0 0-2.524-1.154-4.572-1.754 1.572-3.186 3.4-4.978 6.097-6.228 2.609-1.21 5.72-1.52 9.418-1.391L37.666 14c-3.41-.118-5.365-.025-6.91.691Z"
        fill="#000"
      />
      <Path
        d="M13.281 19.22c-7.263 6.478 3.112 22.672 11.413 22.672 8.3 0 19.73-16.18 11.413-23.598-.192-.171-.36-.325-.516-.468-.688-.63-1.145-1.05-2.414-1.804-2.552 0-4.09 2.553-4.79 4.109a1.16 1.16 0 0 1-.13.22l-1.615 4.49-.581 2.089a1 1 0 0 0 .045.665l.68 1.57 3.517-.408.231 1.986-3.309.385.215 3.151-1.995.136-.268-3.931-.906-2.095a3 3 0 0 1-.137-1.996l.017-.063-2.034.92-1.33 3.362-1.86-.736 1.054-2.662-3.21-.756.458-1.947 4.006.944L24.89 23.8l1.23-3.42c-3.168-1.489-9.674-3.985-12.84-1.162Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgHeartOrgan;
