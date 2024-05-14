import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFemale0306M = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8 32.6a3 3 0 0 1 .6 4.2l-3 4A3 3 0 0 1 13 42H9a3 3 0 1 1 0-6h2.5l2.1-2.8a3 3 0 0 1 4.2-.6ZM27.235 29H25.177l.812 13h.826c.413 0 .823-.05 1.224-.146L27.235 29Zm2.751 11.952A6.01 6.01 0 0 0 31 40.024l.57-.655c.224.249.442.598.67.961.502.802 1.045 1.67 1.78 1.67h5.589c.67 0 1.178-.295 1.652-.821s.74-1.239.74-1.982c0-.744-.266-1.457-.74-1.982-.474-.526-1.116-.822-1.786-.822H36.27l-.57-.262c-.428-.476-.935-1.116-1.486-1.813-1.328-1.68-2.92-3.69-4.319-4.546a5.36 5.36 0 0 0-.628-.33l.72 11.51ZM21.5 29h1.673l.812 13h-1.9L21.5 29Z"
      />
      <Path d="M40 21.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5 26a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-4a6.002 6.002 0 0 1-5 5.917V20h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3H9a1 1 0 1 1 0-2h2v-2.083A6.002 6.002 0 0 1 12 6a6 6 0 0 1 6 6Z"
      />
    </Svg>
  );
};
export default SvgBabyFemale0306M;
