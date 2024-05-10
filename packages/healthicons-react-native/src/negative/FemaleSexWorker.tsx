import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFemaleSexWorker = (passedProps: SvgProps) => {
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
      <G clipPath="url(#female_sex_worker_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM31 8a4 4 0 0 0 0 8h1v4h-1a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4h1v2h2v-2h1a4 4 0 0 0 0-8h-1v-4h1a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4h-1V6h-2v2h-1Zm0 2h1v4h-1a2 2 0 1 1 0-4Zm4 10h-1v-4h1a2 2 0 1 1 0 4Zm-20.5-7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm4 2a1.5 1.5 0 0 1 .367.046c1.113.28 1.862.959 2.333 1.886.412.81.613 1.82.78 2.822l1 6a1.5 1.5 0 1 1-2.96.493l-1-6a14.738 14.738 0 0 0-.265-1.309L18.5 22c0 1.606 1.703 10.36 2.298 13.37a.99.99 0 0 1-.829 1.173c-4.12.599-6.817.618-10.939.004a.989.989 0 0 1-.823-1.177c.6-2.962 2.293-11.5 2.293-13.37l-.255-3.061c-.087.327-.172.752-.265 1.309l-1 6a1.5 1.5 0 1 1-2.96-.493l1-6c.168-1.003.369-2.011.78-2.823.472-.926 1.22-1.605 2.334-1.885.119-.03.241-.046.364-.046H18.5Zm-7.869 23.111.377 3.013a1 1 0 0 0 1.962.119l.72-2.88c-.992-.037-2-.121-3.059-.252Zm4.685.274.714 2.857a1 1 0 0 0 1.962-.118l.365-2.913a34.722 34.722 0 0 1-3.041.174ZM24 35c0-1.306.835-2.417 2-2.83V26h2v1h10v-1h2v6.17c1.165.413 2 1.524 2 2.83v7h-2v-3H26v3h-2v-7Zm14-6h-2v3h2v-3Zm-4 0h-2v3h2v-3Zm-4 0h-2v3h2v-3Zm-3 5a1 1 0 0 0-1 1v2h14v-2a1 1 0 0 0-1-1H27Z"
        />
      </G>
      <Defs>
        <ClipPath id="female_sex_worker_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgFemaleSexWorker;
