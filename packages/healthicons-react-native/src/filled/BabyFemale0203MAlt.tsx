import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFemale0203MAlt = (passedProps: SvgProps) => {
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
      <Path d="M33 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-4a6.002 6.002 0 0 1-5 5.917V20h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3H9a1 1 0 1 1 0-2h2v-2.083A6.002 6.002 0 0 1 12 6a6 6 0 0 1 6 6ZM24 16.447v4.897c3.071 1.398 6.463 3.894 9.42 6.957 2.956 3.064 5.542 6.763 6.933 10.61C41.467 37.508 42 35.775 42 34.042v-.854c-1.444-3.671-4.435-7.344-8.014-10.434a40.928 40.928 0 0 0-6.371-4.522 32.032 32.032 0 0 1-.568-.318A30.838 30.838 0 0 0 24 16.447Zm10.032 3.744c.427.341.847.69 1.261 1.048 2.6 2.245 4.969 4.84 6.707 7.592V17c-3.042 2.178-5.51 3.186-7.968 3.191Zm4.681 20.111c.012.036.025.07.04.104-1.189.822-2.716 1.383-4.601 1.546a36.08 36.08 0 0 0-3.223-5.534c-2.152-3.041-4.639-5.553-6.929-6.987v-5.865c2.58 1.327 5.428 3.479 7.98 6.124 3.017 3.126 5.545 6.865 6.733 10.612ZM24 31.867v2.174c0 3.208 2.487 7.421 7.93 7.912a34.28 34.28 0 0 0-2.633-4.38c-1.706-2.41-3.578-4.39-5.297-5.706Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBabyFemale0203MAlt;
