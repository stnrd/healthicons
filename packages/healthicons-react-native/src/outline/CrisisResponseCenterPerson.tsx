import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrisisResponseCenterPerson = (passedProps: SvgProps) => {
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
      <Path d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6h17v12H6V6Zm9.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-7a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1ZM25 6h17v12H25V6Zm15.207 3.207-1.414-1.414-4.293 4.293-2.5-2.5-3.707 3.707 1.414 1.414L32 12.414l2.5 2.5 5.707-5.707ZM6 20v12h12.341A6.002 6.002 0 0 1 23 24.083V20H6Zm3 3v2h2v-2H9Zm0 6v-2h2v2H9Zm4-6v2h2v-2h-2Zm0 6v-2h2v2h-2Zm4-6v2h2v-2h-2ZM29.659 32A6.002 6.002 0 0 0 25 24.083V20h17v12H29.659ZM39 25h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2Zm-6 4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2h-6ZM17 37.545C17 35.853 21.664 35 24 35c2.336 0 7 .853 7 2.545V41H17v-3.455Zm1.779.627.019-.018c-.011.012-.02.017-.02.017ZM19 38.02c.247-.14.64-.305 1.183-.463C21.45 37.19 23.011 37 24 37c.989 0 2.55.19 3.817.558.543.158.936.323 1.183.462V39H19v-.98Zm10.22.15-.004-.004a.148.148 0 0 1-.007-.006l-.007-.007a.158.158 0 0 1 .02.017h-.003Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 30a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </Svg>
  );
};
export default SvgCrisisResponseCenterPerson;
