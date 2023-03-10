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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.818 12.864A1.157 1.157 0 0 0 8.455 14.5l.818-.819 4.09 4.09-3.272 3.274a1.157 1.157 0 0 0 1.636 1.636l1.636-1.636L16.318 24H8.374c-.63 0-1.233.253-1.679.703A2.413 2.413 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69A12.123 12.123 0 0 0 15.5 42a12.122 12.122 0 0 0 6.84-4.31 12.325 12.325 0 0 0 2.422-5.246l2.51 2.511a5.787 5.787 0 0 0 6.206 1.296l1.158 1.159a2.313 2.313 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.313 2.313 0 0 0-.6-2.235l-1.158-1.159a5.786 5.786 0 0 0 .352-2.85 5.76 5.76 0 0 0-1.647-3.355l-13.91-13.91 1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273-4.09-4.09.817-.818a1.157 1.157 0 0 0-1.636-1.637l-6.546 6.546ZM26.547 31.4l5.353-5.353-11.77-11.77-5.353 5.354L19.147 24h3.479c.63 0 1.233.253 1.678.703.446.45.696 1.06.696 1.697v3.454l1.547 1.546Zm-9.689-17.123-4.09-4.09-2.08 2.08 4.09 4.09 2.08-2.08Zm18.813 20.45a5.86 5.86 0 0 1-.445.444l.824.824a.314.314 0 1 0 .445-.444l-.824-.824Zm-2.135-7.044.504.504a3.77 3.77 0 0 1 1.095 3.008 3.789 3.789 0 0 1-.247 1.054l-2.14 2.139a3.786 3.786 0 0 1-4.061-.847l-.504-.504 5.353-5.354ZM17 29a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSyringeVaccine);
export default ForwardRef;
