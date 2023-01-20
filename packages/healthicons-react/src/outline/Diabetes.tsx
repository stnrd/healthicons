import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetes = (
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
        d="M41.975 20.681a1.32 1.32 0 0 0-1.32-1.318l-16.926.013c-2.236.002-2.79-3.108-.69-3.877l2.285-.838a1.223 1.223 0 0 0-.84-2.298l-11.98 4.355A9.91 9.91 0 0 0 5.98 26.04c.004 5.474 4.445 9.907 9.918 9.903l11.064-.01a1 1 0 0 0 .999-1v-.64a1 1 0 0 0-1.001-1l-3.736.004-.002-2 7.107-.006a1 1 0 0 0 .999-1.001v-.64a1 1 0 0 0-1.001-1l-4.827.005-.002-2 5.583-.005a1 1 0 0 0 .999-1v-.64a1 1 0 0 0-1.001-1l-5.583.005-.002-2 15.162-.012a1.32 1.32 0 0 0 1.32-1.322Zm-8.067 3.327 6.75-.005a3.32 3.32 0 0 0-.005-6.64l-16.926.013 2.285-.837c2.2-.807 2.832-3.618 1.188-5.288a3.224 3.224 0 0 0-3.399-.768l-11.98 4.355A11.91 11.91 0 0 0 3.98 26.042c.005 6.578 5.342 11.906 11.92 11.9l11.063-.008a3 3 0 0 0 2.998-3.003v-.64c0-.35-.061-.687-.172-1h.541a3 3 0 0 0 2.998-3.003v-.64c-.001-.584-.169-1.13-.458-1.59a2.995 2.995 0 0 0 1.21-2.41v-.64c0-.35-.061-.687-.172-1Z"
        fill="#333"
      />
      <path
        d="M40.983 30.565c.002 1.6-1.317 2.858-2.997 2.86-1.68 0-3.001-1.255-3.002-2.855-.002-1.6 2.995-5.146 2.995-5.146s3.003 3.655 3.005 5.14ZM39.976 21.923c.001.828-.894 1.5-1.998 1.502-1.105 0-2.001-.67-2.002-1.499 0-.828.895-1.5 2-1.502 1.104 0 2 .67 2 1.499Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiabetes);
export default ForwardRef;
