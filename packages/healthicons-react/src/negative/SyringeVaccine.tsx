import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSyringeVaccine = (
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
      <g clipPath="url(#syringe-vaccine_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24.762 32.444a12.326 12.326 0 0 1-2.422 5.245A12.122 12.122 0 0 1 15.5 42a12.123 12.123 0 0 1-6.84-4.311A12.35 12.35 0 0 1 6 29.999v-3.6c0-.636.25-1.246.695-1.696A2.362 2.362 0 0 1 8.375 24h7.943l-2.955-2.955-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273-4.09-4.09-.82.818a1.157 1.157 0 1 1-1.636-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817 4.09 4.09 3.273-3.272a1.157 1.157 0 0 1 1.637 1.636l-1.637 1.637 13.91 13.91a5.787 5.787 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.313 2.313 0 0 1-2.236-.6l-1.158-1.158a5.787 5.787 0 0 1-6.205-1.296l-2.511-2.511ZM20.13 14.277l11.77 11.77-5.354 5.353L25 29.854V26.4c0-.637-.25-1.247-.695-1.697a2.362 2.362 0 0 0-1.68-.703h-3.479l-4.369-4.37 5.354-5.353Zm-3.273 0-4.09-4.09-2.08 2.08 4.09 4.09 2.08-2.08Zm18.03 17.972-2.14 2.139a3.786 3.786 0 0 1-4.061-.847l-.504-.504 5.353-5.354.504.504a3.786 3.786 0 0 1 .848 4.062Zm.338 2.922.824.824a.314.314 0 1 0 .445-.444l-.824-.824a5.926 5.926 0 0 1-.445.444ZM16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="syringe-vaccine_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSyringeVaccine);
export default ForwardRef;
