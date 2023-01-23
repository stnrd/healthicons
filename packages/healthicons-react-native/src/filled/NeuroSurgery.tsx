import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNeuroSurgery = (passedProps: SvgProps) => {
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
        d="M24 10.75c0-.912.128-1.796.367-2.637 3.924 5.769 6.546 9.07 13.526 12.529-.92.233-1.89.358-2.893.358-6.137 0-11-4.649-11-10.25Zm-2 0a11.6 11.6 0 0 1 .613-3.727c-2.57.12-5.096.711-7.435 1.745a13.18 13.18 0 0 0-5.297 3.86 10.838 10.838 0 0 0-2.027 6.025c-.012.495-.005.964.002 1.418.023 1.601.044 3.012-.761 4.681 0 0-2.38 2.141-2.066 3.86.313 1.718 3.413 2.19 3.413 2.19 0 6.942 6.629 6.5 9.938 5.848l.196-.04c.99-.206 1.637-.418 1.637-.418v1.304s.069.22.281.527c.057.081.123.17.202.261.62.73 1.97 1.703 4.748 1.703 2.094.165 5.678-1.205 6.628-3.138v-5.91c2.813-2.104 5.084-4.82 5.738-8.226-.906.188-1.846.287-2.81.287-7.118 0-13-5.425-13-12.25ZM40.132 37v-7a2 2 0 0 1 2-2c1.105 0 2.019.902 1.847 1.994-.733 4.67-3.847 7.006-3.847 7.006Zm1.5-10a1.5 1.5 0 0 0 1.5-1.5v-2.086l-2.812 2.813a1.5 1.5 0 0 0 1.312.773Zm-1.5-5.586v2.172l3-3v-2.172l-3 3Zm0-9.914v7.086l3-3V11.5a1.5 1.5 0 0 0-3 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgNeuroSurgery;
