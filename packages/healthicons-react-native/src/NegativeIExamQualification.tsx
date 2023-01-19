import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeIExamQualification = (
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
        d="M48 0H0v48h48V0ZM28 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V15L28 4ZM15 32a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm6.923-21.385a1 1 0 0 0-1.846 0l-3.742 8.98a1.036 1.036 0 0 0-.017.042l-1.241 2.978a1 1 0 0 0 1.846.77L16.917 26h6.166l.994 2.385a1 1 0 0 0 1.846-.77l-1.241-2.978a1.036 1.036 0 0 0-.017-.042l-3.742-8.98ZM20 18.6l2.25 5.4h-4.5L20 18.6ZM30 21a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1ZM28 7l7 8h-6a1 1 0 0 1-1-1V7Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeIExamQualification);
export default ForwardRef;
