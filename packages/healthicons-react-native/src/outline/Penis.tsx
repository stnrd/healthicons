import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPenis = (passedProps: SvgProps) => {
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
        d="M9 14a9.003 9.003 0 0 1 5.625-8.346l.75 1.854A7.003 7.003 0 0 0 11 14v16.378l-.667.235c-.874.31-1.083.58-1.172.763-.134.28-.16.683-.16 1.624 0 1.677.686 3.454 1.817 4.808C11.948 39.162 13.438 40 15 40c1.562 0 3.052-.838 4.182-2.192C20.313 36.454 21 34.677 21 33c0-.941-.027-1.344-.161-1.624-.089-.184-.298-.454-1.172-.763L19 30.378V20a5 5 0 0 1 5-5h1v11c0 3.29 3.3 6 7 6s7-2.71 7-6V16h2v10c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.83A3.001 3.001 0 0 0 21 20v9c.756.358 1.313.827 1.641 1.51.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091C19.314 40.77 17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41.328-.682.885-1.151 1.641-1.51V14Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 15a6 6 0 0 1 6-6h15v2H20a4 4 0 0 0-4 4v26h-2V15Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgPenis;
