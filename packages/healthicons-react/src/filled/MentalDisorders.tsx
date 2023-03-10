import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMentalDisorders = (
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
        d="M38.885 20.259c-.026 1.747-.049 3.286.83 5.107 0 0 2.596 2.336 2.254 4.21-.343 1.874-3.724 2.39-3.724 2.39 0 7.573-7.231 7.091-10.84 6.379a19.66 19.66 0 0 1-.215-.044c-1.08-.224-1.786-.455-1.786-.455v1.423s-.075.238-.307.574c-.062.09-.134.185-.22.285-.677.796-2.148 1.857-5.18 1.857-2.284.181-6.194-1.314-7.23-3.422v-6.449C8.814 29.384 6 25.707 6 20.94c0-3.963 1.654-7.763 4.597-10.564C13.54 7.574 17.532 6 21.695 6a22.73 22.73 0 0 1 9.202 1.929 14.38 14.38 0 0 1 5.779 4.21 11.825 11.825 0 0 1 2.211 6.573c.013.54.005 1.052-.002 1.547ZM27.45 21.88c-.156.175-.238.266-.727.266a3.917 3.917 0 0 1-2.166-.651c-.449.462-.998.82-1.608 1.047-.078.037-.15.077-.216.12-.345.219-.55.502-.76.836l-.108.175c-.052.085-.106.174-.164.265a3.704 3.704 0 0 0-.585 1.998v3.978H17c-.104-.852-.298-1.671-.77-2.396a5.821 5.821 0 0 0-1.851-1.794 3.853 3.853 0 0 1-1.619-1.268 3.703 3.703 0 0 1-.71-1.9 3.685 3.685 0 0 1-.26-4.853 3.346 3.346 0 0 1-.136-.995 3.686 3.686 0 0 1 .753-2.234l1.972-1.359a3.782 3.782 0 0 1 1.42-1.62 3.933 3.933 0 0 1 3.008-.501A3.906 3.906 0 0 1 21.116 10l4.189.284a3.885 3.885 0 0 1 2.27 1.532h.273l2.42.824a3.74 3.74 0 0 1 1.354 2.12 3.91 3.91 0 0 1 1.93 1.75c.42.781.55 1.679.369 2.542-.18.864-.66 1.64-1.359 2.201l-2.48.878a3.933 3.933 0 0 1-2.193-.636c-.234.155-.35.284-.44.385ZM34 25.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 32v2h-4v-2h4Zm-4 4v2h4v-2h-4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMentalDisorders);
export default ForwardRef;
