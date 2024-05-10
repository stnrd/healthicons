import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEcoCare = (passedProps: SvgProps) => {
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
      <Path d="m24.433 28.279-1.867-.707c.5-1.32 1.35-2.752 2.69-4.241l1.487 1.338c-1.183 1.315-1.901 2.53-2.31 3.61Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.563 7C10.035 7 6 12.64 6 18.724 6 32.304 24 41 24 41s18-9.256 18-22.276C42 12.642 37.965 7 32.437 7c-3.835 0-6.68 2.531-8.437 6.121C22.243 9.531 19.398 7 15.562 7ZM17 24.959c0 2.807 3.142 3.703 5.441 2.957-1.098 3.251-.078 5.784.83 6.764l1.467-1.36c-.364-.392-1.2-2.014-.509-4.422 1.207 2.237 6.771 2.519 6.771-1.7V16c-2.882 2.439-5.961 3.403-8.495 4.197C19.323 21.193 17 21.92 17 24.959Z"
      />
    </Svg>
  );
};
export default SvgEcoCare;
