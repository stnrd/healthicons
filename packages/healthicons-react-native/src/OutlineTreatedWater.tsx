import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineTreatedWater = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M8 36.202a4.002 4.002 0 0 0 3 3.874V42h2v-1.798h16V42h2v-1.924c1.725-.444 3-2.01 3-3.874v-3.19h1.506a1 1 0 0 1 1 1v1.696H41v-1.19a6.002 6.002 0 0 0-4.898-5.9h3.1v-2h-4.494v1.9h-1.427a3.737 3.737 0 0 0-.901-.872A3.697 3.697 0 0 0 30.286 27s.683-.713 1.463-1.81C32.79 23.726 34 21.582 34 19.53V5.643H8V19.53c0 2.053 1.211 4.197 2.25 5.66A17.658 17.658 0 0 0 11.715 27 3.71 3.71 0 0 0 8 30.714v5.488ZM25.598 29l.402-.419V25.5h-2V29h-2v-3.5h-2V29h-2v-3.5h-2v3.081l.402.419h-4.688c-.947 0-1.714.767-1.714 1.714v1.475c.214.125.428.235.643.33 2.13.956 4.259.52 6.389-1.305 2.796 2.397 5.592 2.397 8.389 0 2.13 1.826 4.259 2.26 6.389 1.306a6.51 6.51 0 0 0 .19-.09v-1.716c0-.947-.767-1.714-1.714-1.714h-4.688ZM32 19.53c0 1.188-.65 2.637-1.519 3.97H11.519C10.649 22.167 10 20.718 10 19.53v-2.814c8.346 1.6 13.515 1.622 22-.092v2.906Zm0-4.948c-8.584 1.768-13.544 1.747-22 .097V7.643h22v6.94Zm-2.174 23.62a2 2 0 0 0 1.983-2V34.66a7.103 7.103 0 0 1-2.194.352c-1.495 0-2.897-.481-4.195-1.308-1.297.827-2.7 1.308-4.194 1.308-1.495 0-2.897-.482-4.194-1.308-1.297.826-2.7 1.308-4.195 1.308a7.103 7.103 0 0 1-2.194-.352v1.542a2 2 0 0 0 1.983 2h17.2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M39.5 42c.828 0 1.5-.814 1.5-1.818C41 38.59 39.5 37 39.5 37S38 38.59 38 40.182c0 1.004.672 1.818 1.5 1.818Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineTreatedWater);
export default ForwardRef;
