import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSyringe = (
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
      <g clipPath="url(#syringe_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM15 19.908l-.223.223 3.923 3.922c.187.187.388.35.6.49l5.243-5.242a3.807 3.807 0 0 0-.49-.601l-3.922-3.923-.222.222-1.414 1.414-2.08 2.081L15 19.908Zm6.545-6.545 3.923 3.923c.184.185.354.379.509.581l.036-.036 9.441 9.442a5.787 5.787 0 0 1 1.296 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.313 2.313 0 0 1-2.236-.6l-1.158-1.158a5.787 5.787 0 0 1-6.205-1.296l-9.442-9.442.036-.036a5.843 5.843 0 0 1-.581-.51l-3.923-3.922-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273-4.09-4.09-.82.818a1.157 1.157 0 1 1-1.636-1.636l.819-.819L9.05 11.13l2.08-2.08 1.415-1.415.818-.817A1.157 1.157 0 1 1 15 8.455l-.818.817 4.09 4.09 3.273-3.272a1.157 1.157 0 0 1 1.637 1.636l-1.637 1.637Zm-4.687 1.414-4.09-4.09-2.08 2.08 4.09 4.09 2.08-2.08ZM24.01 29.53a1.157 1.157 0 0 1 0-1.637l1.124-1.124a1.157 1.157 0 1 1 1.636 1.637l-1.123 1.124a1.157 1.157 0 0 1-1.637 0Zm3.366 1.542a1.157 1.157 0 1 0 1.637 1.637l1.03-1.03a1.157 1.157 0 1 0-1.637-1.637l-1.03 1.03Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="syringe_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSyringe);
export default ForwardRef;
