import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCrossCountryMotorcycle = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M37.5 35a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M28.907 10.58A1 1 0 0 0 28 10h-5v2h4.361l9.232 19.92a1 1 0 0 0 1.814-.84l-9.5-20.5ZM10.5 35a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21.5 31.5a1 1 0 0 1-1 1h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="m28.053 23.894 1-2a2 2 0 0 0 0-1.788l-1-2A2 2 0 0 0 26.263 17h-3.28a8 8 0 0 0-2.563.422l-3.145 1.063a1 1 0 0 0-.494 1.528l3.253 4.567a1 1 0 0 0 .815.42h5.415a2 2 0 0 0 1.789-1.106ZM5 19h8.096a1 1 0 0 1 .788.383l2.882 3.68a.5.5 0 0 1-.449.806L4.89 22.599a1 1 0 0 1-.89-.994V20a1 1 0 0 1 1-1Zm23 8h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4Zm5.309-12h3.93a.5.5 0 0 1 .41.213l2.8 4a.5.5 0 0 1-.41.787h-4.73a.5.5 0 0 1-.447-.276l-2-4a.5.5 0 0 1 .447-.724Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCrossCountryMotorcycle);
export default ForwardRef;
