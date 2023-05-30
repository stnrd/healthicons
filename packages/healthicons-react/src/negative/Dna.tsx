import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDna = (
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
      <g clipPath="url(#dna_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM35 6v3.23a16.91 16.91 0 0 1-10.629 15.698c-.119.048-.237.097-.355.148l-.016.007A14.896 14.896 0 0 0 17.185 31h13.63a14.906 14.906 0 0 0-4.569-4.71 18.91 18.91 0 0 0 1.95-1.078A16.915 16.915 0 0 1 34.907 37H35v5h-2v-3H15v3h-2v-5h.092A16.912 16.912 0 0 1 23.63 23.072c.119-.048.237-.097.355-.148l.016-.007A14.896 14.896 0 0 0 30.815 17h-13.63a14.906 14.906 0 0 0 4.569 4.71 18.91 18.91 0 0 0-1.95 1.078A16.91 16.91 0 0 1 13 9.23V6h2v3h18V6h2ZM16.162 33h15.677c.53 1.264.89 2.608 1.056 4h-17.79a14.876 14.876 0 0 1 1.056-4Zm15.677-18H16.162a14.876 14.876 0 0 1-1.057-4h17.79a14.876 14.876 0 0 1-1.057 4Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="dna_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDna);
export default ForwardRef;
