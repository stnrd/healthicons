import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
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
      <Path d="M9 14a9.003 9.003 0 0 1 5.625-8.346l.75 1.854A7.003 7.003 0 0 0 11 13.999v16.378l-.667.236c-.874.309-1.083.579-1.172.763-.134.28-.16.683-.16 1.623 0 1.678.686 3.455 1.817 4.81 1.13 1.353 2.62 2.19 4.182 2.19 1.562 0 3.052-.837 4.182-2.19C20.313 36.453 21 34.676 21 32.998c0-.94-.027-1.343-.161-1.623-.089-.184-.298-.454-1.172-.763L19 30.377V20a5 5 0 0 1 5-5h1v11c0 3.29 3.3 6 7 6s7-2.71 7-6V16h2v10c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.83A3.001 3.001 0 0 0 21 20v9c.756.357 1.313.827 1.641 1.51.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091C19.314 40.77 17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41.328-.682.885-1.152 1.641-1.51V14Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 15a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0v-5a5.001 5.001 0 0 0-3-4.584V6h-2v9Zm3 10v-5a3 3 0 1 0-6 0v5a3 3 0 1 0 6 0Z"
      />
    </Svg>
  );
};
export default SvgTesticles;
