import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVespaMotorcycle = (passedProps: SvgProps) => {
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
        d="M14.5 35a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 3a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM38 35a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 3a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
        fill="#333"
      />
      <Path
        d="M33.358 33.28c-.544.096-1.072-.27-1.068-.822a5.5 5.5 0 0 1 10.654-1.878c.193.517-.179 1.041-.723 1.137l-8.863 1.563Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.371 28.812a4.5 4.5 0 0 0-7.076 3.464l8.642-1.524a4.5 4.5 0 0 0-1.566-1.94Zm1.678 1.92Zm-5.388-4.635a6.5 6.5 0 0 1 7.22 4.134c.456 1.222-.458 2.29-1.486 2.47l-8.863 1.564c-1.027.18-2.251-.51-2.242-1.814a6.5 6.5 0 0 1 5.371-6.354Z"
        fill="#333"
      />
      <Path d="M9 21a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1H9v-1Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.83 20c.11.313.17.65.17 1v1H9v-1a2.995 2.995 0 0 1 3-3h9c1.306 0 2.418.835 2.83 2Z"
        fill="#333"
      />
      <Path
        d="M4 32.6C4 27.85 8.516 24 14.086 24h8.07c.466 0 .844.322.844.72v6.48c0 .994-.945 1.8-2.111 1.8H4.469C4.21 33 4 32.82 4 32.6Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 26h-6.914c-4.007 0-6.982 2.282-7.836 5h14.639a.45.45 0 0 0 .111-.013V26Zm-6.914-2C8.516 24 4 27.85 4 32.6c0 .22.21.4.47.4h16.419C22.055 33 23 32.194 23 31.2v-6.48c0-.398-.378-.72-.844-.72h-8.07ZM30.805 18.563 29 33h3.5l2.5-4.329V19h-2.5a3.484 3.484 0 0 1-1.695-.437Z"
        fill="#333"
      />
      <Path
        d="M29 13.5a3.5 3.5 0 0 1 3.5-3.5h3.885c.34 0 .615.275.615.615v5.77c0 .34-.276.615-.615.615H32.5a3.5 3.5 0 0 1-3.5-3.5Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 12h-2.5a1.5 1.5 0 0 0 0 3H35v-3Zm-2.5-2a3.5 3.5 0 1 0 0 7h3.885c.34 0 .615-.276.615-.615v-5.77a.615.615 0 0 0-.615-.615H32.5Z"
        fill="#333"
      />
      <Path
        d="m25.346 11 4.925.866-.347 1.97L25 12.97l.346-1.97ZM21 26h10l-1.765 7H21v-7Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVespaMotorcycle;
