import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyMale0609M = (
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
      <g clipPath="url(#baby_male_0609m_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm35 22.536c1.702-.247 3.496-.616 5.48-1.107a2 2 0 0 0-.96-3.883c-3.813.943-6.687 1.367-9.513 1.356-2.831-.01-5.713-.458-9.549-1.361a2 2 0 1 0-.916 3.893c1.974.465 3.76.827 5.458 1.075V25h10v-2.464ZM25 27v1.94c0 .634.57 2.26 2.32 3.04.2.089.426.2.628.301l.12.06c.248.122.489.238.732.341.508.215.903.318 1.2.318.297 0 .692-.103 1.2-.318.243-.103.484-.219.733-.342l.119-.059c.202-.1.427-.212.627-.301C34.43 31.2 35 29.574 35 28.94V27H25Zm1.435 6.856c-1.182-.537-1.976-1.349-2.454-2.157-1.552 1.351-2.406 3.05-2.406 5.29 0 .894.191 2.236.688 3.323.509 1.113 1.192 1.688 2.056 1.688.926 0 1.71-.71 1.71-1.622 0-.406-.171-.79-.443-1.36l-.018-.038c-.246-.516-.571-1.198-.571-1.99 0-.867.43-1.787.93-2.532.16-.24.33-.434.508-.602Zm7.13 0c1.182-.537 1.976-1.35 2.454-2.157 1.552 1.35 2.406 3.05 2.406 5.29 0 .894-.191 2.236-.688 3.323C37.228 41.425 36.545 42 35.681 42c-.926 0-1.71-.71-1.71-1.622 0-.406.171-.79.443-1.36l.018-.038c.246-.516.572-1.198.572-1.99 0-.867-.43-1.787-.93-2.532-.161-.24-.331-.434-.509-.602ZM30 17a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-16-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2 0a5 5 0 1 1-1.903-3.925L17.172 8H15a1 1 0 1 1 0-2h4.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9.5l-3.108 3.108c.388.71.608 1.526.608 2.392Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="baby_male_0609m_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyMale0609M);
export default ForwardRef;
