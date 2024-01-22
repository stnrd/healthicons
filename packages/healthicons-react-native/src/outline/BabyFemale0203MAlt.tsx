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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 17.917A6.002 6.002 0 0 0 12 6a6 6 0 0 0-1 11.917V20H9a1 1 0 1 0 0 2h2v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2v-2.083ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM33 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.432 16.098A1 1 0 0 1 42 17v17.041c0 2.189-.687 4.427-2.187 6.132C38.295 41.9 36.013 43 33 43c-6.209 0-9-5.166-9-8.959v-17.04h.67H24a1 1 0 0 1 1.602-.8c3.209 2.422 5.48 3.46 7.572 3.454 2.082-.005 4.232-1.044 7.199-3.434a1 1 0 0 1 1.059-.123Zm-8.635 9.182C30.36 22.713 27.87 20.51 26 19.126v5.011c3.905 3.074 9.605 8.773 12.773 14.12.656-.962 1.05-2.111 1.179-3.317-1.516-3.125-4.257-6.607-7.155-9.66Zm2.052 15.536c-2.886-3.45-6.248-6.632-8.849-8.679v-5.416c3.802 3.227 8.697 8.369 11.325 13.027-.675.486-1.495.86-2.476 1.068Zm-8.81-6.06c.3 2.751 2.32 5.908 6.31 6.22a63.793 63.793 0 0 0-6.31-6.22ZM40 31.018c-1.61-2.454-3.668-4.92-5.752-7.116a67.854 67.854 0 0 0-2.333-2.34c.421.062.842.093 1.264.092 2.282-.006 4.44-.95 6.821-2.64V31.02Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBabyFemale0203MAlt;
