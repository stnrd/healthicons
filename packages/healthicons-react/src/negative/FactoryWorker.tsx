import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFactoryWorker = (
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
      <g clipPath="url(#factory_worker_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm13 16.5c0 1.198 1.144 2.287 3.01 3.093a8 8 0 1 0 15.98 0C33.856 18.787 35 17.698 35 16.5c0-.627-.314-1.225-.881-1.768-.496.446-1.194.835-2.079 1.157-1.797.656-4.558 1.111-8.566 1.111-2.991 0-5.479-.464-7.25-1.11-.882-.322-1.626-.703-2.17-1.124a4.612 4.612 0 0 1-.113-.09C13.336 15.233 13 15.85 13 16.5ZM24 26a6 6 0 0 0 5.994-5.726C28.27 20.734 26.21 21 24 21s-4.27-.267-5.994-.726A6 6 0 0 0 24 26Zm-3 14h-8v-7.82a30.684 30.684 0 0 1 3.35-1.07l-1.29 3.548-.585 1.61 1.69-.282L21 35.181V40Zm-10-6.921V40H8v-4c0-.278.115-.671.594-1.201.49-.542 1.268-1.117 2.332-1.681l.074-.04Zm12-.857v3.675c.205.052.525.103 1 .103s.795-.05 1-.103V32l2-1.5V42H6v-6c0-3.661 6.52-6.273 12.353-7.392L23 32.222ZM20 8.308c-2.271.975-3.998 2.755-4.681 4.907.33.246.857.528 1.59.796 1.517.553 3.766.989 6.565.989 3.886 0 6.389-.445 7.88-.99.67-.244 1.099-.495 1.355-.703-.662-2.194-2.405-4.01-4.709-4.999V11a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 1 1-2 0V8.308Zm12.57 17.34c.578-.59 1.38.005 1.204.811l-.026.118a2.817 2.817 0 1 0 5.504 0l-.026-.118c-.176-.806.626-1.4 1.204-.81A5.482 5.482 0 0 1 42 29.495a5.496 5.496 0 0 1-2.582 4.663c-.28.176-.418.511-.418.841v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-5c0-.33-.139-.665-.418-.84A5.496 5.496 0 0 1 31 29.495c0-1.498.599-2.856 1.57-3.848Z"
        />
      </g>
      <defs>
        <clipPath id="factory_worker_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFactoryWorker);
export default ForwardRef;
