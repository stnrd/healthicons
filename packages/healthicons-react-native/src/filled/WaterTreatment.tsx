import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWaterTreatment = (passedProps: SvgProps) => {
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
      <Path d="M30 26.818C30 30.232 27.314 33 24 33s-6-2.768-6-6.182C18 21.41 24 15 24 15s6 6.41 6 11.818Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 31c2.153 0 4-1.816 4-4.182 0-2.08-1.206-4.613-2.67-6.838A30.846 30.846 0 0 0 24 18.12a30.935 30.935 0 0 0-1.33 1.86C21.207 22.206 20 24.737 20 26.819 20 29.184 21.847 31 24 31Zm-1.303-14.46C20.932 18.767 18 23.037 18 26.818 18 30.232 20.686 33 24 33s6-2.768 6-6.182c0-3.78-2.932-8.05-4.697-10.278C24.543 15.58 24 15 24 15s-.544.58-1.303 1.54Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.86 10.867A16 16 0 0 0 28.784 39.27l.598 1.908A18 18 0 0 1 13.718 9.225l1.143 1.642ZM33.14 37.133A16 16 0 0 0 19.216 8.732l-.598-1.909a18 18 0 0 1 15.663 31.952l-1.143-1.642Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 10H7V8h9v9h-2v-7ZM34 38h7v2h-9v-9h2v7Z"
      />
    </Svg>
  );
};
export default SvgWaterTreatment;
