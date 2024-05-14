import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPulseOximeterAlt = (passedProps: SvgProps) => {
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
      <G clipPath="url(#pulse-oximeter-alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM4 13a3 3 0 0 1 3-3h23c7.732 0 14 6.268 14 14s-6.268 14-14 14H7a3 3 0 0 1-3-3v-4.85a2 2 0 0 1 .383-1.176l1.234-1.698A2 2 0 0 0 6 26.1v-4.2a2 2 0 0 0-.383-1.176l-1.234-1.698A2 2 0 0 1 4 17.85V13Zm26 3H12a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a8 8 0 1 0 0-16Zm-18-2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18c5.523 0 10-4.477 10-10s-4.477-10-10-10H12Zm21 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-20-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2v-8Zm1 3a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7.25 4c0-.038-.016-.091-.078-.146a.446.446 0 0 0-.297-.104h-.75c-.216 0-.335.12-.364.194a.75.75 0 1 1-1.394-.554c.28-.704.994-1.14 1.758-1.14h.75c.95 0 1.875.703 1.875 1.75 0 .546-.266 1.015-.646 1.322l-1.08.928H26a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.489-1.319l2.625-2.255a.74.74 0 0 1 .022-.017c.074-.06.092-.119.092-.159Z"
        />
      </G>
      <Defs>
        <ClipPath id="pulse-oximeter-alt_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPulseOximeterAlt;
