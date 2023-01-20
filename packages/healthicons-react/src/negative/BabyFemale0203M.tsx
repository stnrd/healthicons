import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFemale0203M = (
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
        d="M0 0h48v48H0V0Zm30 17a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-5 11v-2h10v2H25Zm10-4H25v-1.49c-1.698-.249-3.484-.61-5.459-1.076a2 2 0 1 1 .918-3.893c3.835.903 6.717 1.35 9.548 1.361 2.826.01 5.7-.413 9.513-1.356a2 2 0 1 1 .96 3.883c-1.984.491-3.778.86-5.48 1.107V24Zm-9.716 6a4.042 4.042 0 0 0 2.037 1.98c.2.089.425.2.627.301l.12.06c.248.122.489.238.732.341.508.215.903.318 1.2.318.297 0 .692-.103 1.2-.318.243-.103.484-.219.733-.342l.119-.059c.202-.1.427-.212.627-.301A4.042 4.042 0 0 0 34.715 30h-9.43Zm-1.303 1.7c.478.807 1.272 1.62 2.454 2.156a3.51 3.51 0 0 0-.508.602c-.5.745-.93 1.665-.93 2.532 0 .792.325 1.474.57 1.99l.019.038c.272.57.444.954.444 1.36 0 .913-.785 1.622-1.711 1.622-.864 0-1.547-.575-2.056-1.688-.497-1.087-.688-2.429-.688-3.322 0-2.242.854-3.94 2.406-5.29Zm12.038 0c-.477.807-1.272 1.619-2.454 2.156.178.168.348.363.509.602.5.745.93 1.665.93 2.532 0 .792-.325 1.474-.572 1.99l-.018.038c-.272.57-.443.954-.443 1.36 0 .913.784 1.622 1.71 1.622.864 0 1.547-.575 2.056-1.688.497-1.087.688-2.429.688-3.322 0-2.242-.854-3.94-2.406-5.29ZM14 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2 0a5.002 5.002 0 0 1-4 4.9V18h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h2v-2.1A5.002 5.002 0 0 1 11 6a5 5 0 0 1 5 5Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyFemale0203M);
export default ForwardRef;
