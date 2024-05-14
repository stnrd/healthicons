import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetesPeople = (passedProps: SvgProps) => {
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
        d="M33.93 24.08h6.75a3.32 3.32 0 1 0 0-6.64H23.754l2.286-.836c2.201-.805 2.835-3.615 1.192-5.286a3.223 3.223 0 0 0-3.398-.771L11.85 14.892A11.91 11.91 0 0 0 4 26.09C4 32.667 9.332 38 15.91 38h11.064a3 3 0 0 0 3-3v-.639c0-.35-.06-.687-.17-1h.54a3 3 0 0 0 3-3v-.64c0-.584-.166-1.13-.455-1.59a2.996 2.996 0 0 0 1.212-2.41v-.64c0-.35-.06-.687-.171-1ZM42 20.76a1.32 1.32 0 0 0-1.32-1.32H23.754c-2.236 0-2.786-3.11-.687-3.878l2.286-.836a1.223 1.223 0 0 0-.837-2.3l-11.984 4.347A9.91 9.91 0 0 0 6 26.089C6 31.563 10.437 36 15.91 36h11.064a1 1 0 0 0 1-1v-.639a1 1 0 0 0-1-1h-3.736v-2h7.107a1 1 0 0 0 1-1v-.64a1 1 0 0 0-1-1h-4.827v-2H31.1a1 1 0 0 0 1-1v-.64a1 1 0 0 0-1-1h-5.583v-2h10.485A1.12 1.12 0 0 1 36 22c0-.828.895-1.5 2-1.5s2 .672 2 1.5c0 .027 0 .054-.003.08h.683A1.32 1.32 0 0 0 42 20.76Z"
      />
      <Path d="M41.003 30.14c0 1.6-1.32 2.858-3 2.858s-3-1.258-3-2.858 3-5.142 3-5.142 3 3.657 3 5.142Z" />
    </Svg>
  );
};
export default SvgDiabetesPeople;
