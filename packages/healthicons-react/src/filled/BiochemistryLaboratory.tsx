import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBiochemistryLaboratory = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm27 5c0 2.689-1.718 4.158-4 5.678-1.257-.837-2.343-1.659-3.065-2.678H33a1 1 0 1 0 0-2h-4.914A5.617 5.617 0 0 1 28 11h-2c0 3.411 2.077 5.381 4.188 6.865-.831.558-1.657 1.163-2.338 1.856C26.778 20.81 26 22.174 26 24s.778 3.19 1.85 4.28c.681.692 1.507 1.297 2.338 1.855C28.078 31.619 26 33.589 26 37h2c0-2.689 1.718-4.158 4-5.678 1.257.837 2.343 1.659 3.065 2.678H31a1 1 0 1 0 0 2h4.914c.056.314.086.647.086 1h2c0-3.411-2.077-5.381-4.188-6.865.831-.558 1.657-1.163 2.338-1.856C37.222 27.19 38 25.826 38 24s-.778-3.19-1.85-4.28c-.681-.692-1.507-1.297-2.338-1.855C35.922 16.381 38 14.411 38 11h-2Zm-6.6 10c.704-.682 1.596-1.28 2.6-1.933 1.004.653 1.897 1.251 2.6 1.933h-5.2Zm-1.272 2c-.084.31-.128.642-.128 1s.044.69.128 1h7.744c.084-.31.128-.642.128-1s-.044-.69-.128-1h-7.744ZM32 28.933c-1.004-.653-1.896-1.251-2.6-1.933h5.2c-.703.682-1.596 1.28-2.6 1.933ZM13 17a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v4.048l4.231 6.85c1.646 2.665-.27 6.102-3.403 6.102h-6.656c-3.132 0-5.05-3.437-3.403-6.102L15 24.048V20h-1a1 1 0 0 1-1-1v-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBiochemistryLaboratory);
export default ForwardRef;
