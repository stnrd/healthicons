import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMilitaryWorker = (
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
        d="M0 0h48v48H0V0Zm18.115 18.823a6 6 0 1 0 11.77 0c-4.14-1.002-7.63-1.002-11.77 0Zm13.808.064a48.29 48.29 0 0 1 2.208.654c.452.146.863-.365.628-.777-.54-.948-1.176-2.188-1.176-2.764 0-5.523-4.29-10-9.583-10s-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764-.235.412.177.923.628.777a48.29 48.29 0 0 1 2.208-.654 8 8 0 1 0 15.846 0ZM42 42h-9.356l3.082-10.272C39.337 32.858 42 34.496 42 36.5V42ZM23.47 30.007c3.209-.053 7.008.372 10.328 1.186L30.556 42H6v-5.5c0-4.06 10.258-6.376 17.47-6.493Zm-10.023 5.099a1 1 0 1 0-.894 1.788l2 1a1 1 0 0 0 .894 0l2-1a1 1 0 1 0-.894-1.788L15 35.882l-1.553-.776Zm-.858-7.11a1 1 0 0 1-.447 1.342l-3.694 1.85a1 1 0 0 1-.896-1.788l3.695-1.85a1 1 0 0 1 1.342.447ZM40 9v12.143L35 24v5l7 3V9h-2Zm-16.173.125a.181.181 0 0 1 .345 0l.494 1.52a.181.181 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.181.181 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.181.181 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.181.181 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125l.494-1.52Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMilitaryWorker);
export default ForwardRef;
