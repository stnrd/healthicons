import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBabyFemale0203MAlt = (
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
        d="M48 0H0v48h48V0Zm-9 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-27 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-4a6.002 6.002 0 0 1-5 5.917V20h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3H9a1 1 0 1 1 0-2h2v-2.083A6.002 6.002 0 0 1 12 6a6 6 0 0 1 6 6Zm6 9.344v-4.897c.99.407 2.012.9 3.047 1.466.191.11.38.215.568.317a40.935 40.935 0 0 1 6.371 4.522c3.579 3.091 6.57 6.764 8.014 10.434v.855c0 1.733-.533 3.466-1.647 4.87-1.391-3.847-3.977-7.546-6.934-10.61-2.956-3.063-6.348-5.56-9.419-6.957Zm11.293-.105a43.267 43.267 0 0 0-1.26-1.048C36.49 20.186 38.957 19.178 42 17v11.83c-1.738-2.752-4.107-5.346-6.707-7.591Zm3.46 19.167a1.022 1.022 0 0 1-.04-.104c-1.188-3.748-3.716-7.486-6.733-10.612-2.552-2.645-5.4-4.797-7.98-6.124v5.865c2.29 1.433 4.777 3.946 6.93 6.987a36.08 36.08 0 0 1 3.222 5.534c1.885-.163 3.412-.724 4.6-1.546ZM24 34.041v-2.175c1.72 1.317 3.591 3.297 5.297 5.707a34.278 34.278 0 0 1 2.633 4.38C26.487 41.462 24 37.248 24 34.04Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBabyFemale0203MAlt);
export default ForwardRef;
