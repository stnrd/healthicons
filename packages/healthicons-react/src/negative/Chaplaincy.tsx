import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChaplaincy = (
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
      <g clipPath="url(#chaplaincy_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm10.621 31.507L18.058 36.5l-7.255-5.402a1 1 0 0 1-.204-1.4l2.076-2.782a1 1 0 0 1 1.418-.188l6.687 5.244a1 1 0 0 1 .383.787v3.907a1 1 0 0 1-1.542.841ZM30.107 36.5l-1.564 1.007a1 1 0 0 1-1.541-.84v-3.908a1 1 0 0 1 .382-.787l6.687-5.244a1 1 0 0 1 1.418.188l2.076 2.782a1 1 0 0 1-.204 1.4L30.107 36.5Zm2.322-13.225c.117-.845.235-1.697.11-2.758-.032-.267-.055-.528-.078-.78-.082-.914-.155-1.724-.553-2.326-.508-.77-4.39-4.803-5.188-5.267-.797-.464-2.58-.817-1.22 2.356.249.58.49 1.004.798 1.547.135.236.282.494.448.798.124.228.251.448.373.659.361.628.674 1.172.726 1.562.139 1.029.144 3.823.144 3.823l-.586-3.094s-.063-.441-.657-.947C26.152 18.342 25 18 25 19.066V25s0 1 .5 2 .744 1.41 1.218 2.142l.73.858 5.053-4-.229-.729c-.02-.719.069-1.355.157-1.996Zm-16.694 0c.089.641.177 1.277.157 1.996l-.23.729 5.055 4 .729-.858c.474-.733.718-1.142 1.218-2.142s.5-2 .5-2v-5.934c0-1.066-1.152-.724-1.746-.218-.594.506-.657.947-.657.947l-.586 3.094s.005-2.794.144-3.823c.053-.39.365-.933.727-1.562.12-.21.248-.431.372-.659.166-.304.313-.562.448-.798.308-.543.55-.967.798-1.547 1.36-3.173-.423-2.82-1.22-2.356-.798.464-4.68 4.497-5.188 5.267-.398.602-.47 1.412-.553 2.325-.023.253-.046.514-.078.78-.124 1.062-.007 1.915.11 2.759Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="chaplaincy_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChaplaincy);
export default ForwardRef;
