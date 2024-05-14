import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMicroscope = (passedProps: SvgProps) => {
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
        d="m19.773 8.302 1.49-.848.98 1.698a3.025 3.025 0 0 1 3.55 1.352l4.522 7.777a2.977 2.977 0 0 1-1.095 4.085l-.848.486.677 1.309-2.674 1.362-.61-1.177-.666.382a3.023 3.023 0 0 1-4.111-1.101l-2.922-5.024c-2.563 1.474-4.33 3.12-5.278 5.002-.798 1.584-1.06 3.426-.62 5.637A9.955 9.955 0 0 1 17 28c3.27 0 6.173 1.57 7.997 3.996l12.087-6.811.992 1.736-12.042 6.786A10.052 10.052 0 0 1 26.8 40H40a1 1 0 1 1 0 2H7.832A9.966 9.966 0 0 1 7 38a9.976 9.976 0 0 1 3.404-7.516c-.762-2.927-.545-5.51.597-7.778 1.186-2.354 3.306-4.247 6.06-5.832l-.596-1.024a2.978 2.978 0 0 1 .253-3.368l-1.062-1.838 1.509-.859-1.241-2.227 2.63-1.444 1.219 2.188Zm8.807 10.973L24.057 11.5a1.008 1.008 0 0 0-1.37-.368l-4.122 2.363a.992.992 0 0 0-.365 1.361l4.523 7.777c.277.478.891.642 1.37.367l4.122-2.362a.992.992 0 0 0 .365-1.362ZM24.749 40A8.022 8.022 0 0 0 25 38c0-1.18-.255-2.3-.714-3.308L19.482 37.4l-.992-1.736 4.746-2.675A8 8 0 0 0 9.252 40h15.497Z"
      />
    </Svg>
  );
};
export default SvgMicroscope;
