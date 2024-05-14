import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeadache = (passedProps: SvgProps) => {
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
      <G clipPath="url(#headache_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14.774 4.367a1 1 0 0 0-1.548 1.266L15.89 8.89h-1.812a1 1 0 0 0-.724 1.69l2.966 3.11a1 1 0 0 0 1.447-1.379l-1.354-1.421H18a1 1 0 0 0 .774-1.633l-4-4.89Zm19.86-.141a1 1 0 0 0-1.408.14l-4 4.89A1 1 0 0 0 30 10.889h1.587l-1.354 1.421a1 1 0 0 0 1.447 1.38l2.966-3.111a1 1 0 0 0-.724-1.69H32.11l2.664-3.256a1 1 0 0 0-.14-1.407Zm-9.835.495c-.194-.495-.782-.724-1.312-.51-.53.213-.801.788-.607 1.283l.695 1.77-1.019-.2a1.097 1.097 0 0 0-1.024.353.965.965 0 0 0-.182 1.018l1.5 3.5c.21.49.805.701 1.329.474.524-.228.779-.81.569-1.299L24 9.365l.95.186c.368.073.759-.06 1.015-.341a.969.969 0 0 0 .202-1.003L24.8 4.72Zm9.169 32.137a2 2 0 0 0-.688-1.894l-3-2.5a1.996 1.996 0 0 0-.28-.196v-3.99l4.171.695a2 2 0 0 0 2.202-2.675l-3-8a2 2 0 0 0-3.746 1.404l1.784 4.755-2.233-.372a3.056 3.056 0 0 0-1.91.307c-.336.174-.935.467-1.599.712-.703.26-1.294.396-1.669.396s-.966-.136-1.67-.396a14.603 14.603 0 0 1-1.598-.712 3.056 3.056 0 0 0-1.91-.307l-2.233.372 1.784-4.755a2 2 0 0 0-3.746-1.404l-3 8a2 2 0 0 0 2.202 2.675L18 28.278v3.99a1.997 1.997 0 0 0-.28.196l-3 2.5a2 2 0 0 0-.688 1.894l1 5.5a2 2 0 0 0 3.96-.54l-.396-4.357.075-.054c4.211-.806 6.555-.811 10.655-.002l.078.056-.396 4.358a2 2 0 0 0 3.96.539l1-5.5ZM28 19a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </G>
      <Defs>
        <ClipPath id="headache_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgHeadache;
