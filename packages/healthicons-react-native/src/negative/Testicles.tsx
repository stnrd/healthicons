import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTesticles = (passedProps: SvgProps) => {
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
      <G clipPath="url(#testicles_svg__a)" fill="#000">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM13.087 6.846c1.1-.674 2.354-.846 3.47-.846H39a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.18 5.18 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091C19.314 40.77 17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153Z"
        />
        <Path d="M28 20a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5Z" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M35 6v10h-2V6h2Z" />
      </G>
      <Defs>
        <ClipPath id="testicles_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgTesticles;
