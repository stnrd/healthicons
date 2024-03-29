import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpleen = (
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
      <g clipPath="url(#spleen_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17.657 24.15c.068-.032.135-.063.203-.093a.995.995 0 0 0 .044-.013c.306-.094.61-.051.995.161.419.23.852.613 1.364 1.104l.232.225c.421.409.899.873 1.382 1.228.582.428 1.338.83 2.225.748.541-.05.935-.543.878-1.1-.056-.558-.54-.97-1.082-.92-.19.018-.46-.056-.89-.371-.361-.267-.719-.613-1.141-1.022l-.27-.26c-.17-.164-.352-.336-.544-.507.597-.02 1.229.017 1.906.11a.975.975 0 0 0 1.095-.873 1.026 1.026 0 0 0-.864-1.138c-2.53-.344-4.624-.015-6.653 1.01-.236.12-.47.248-.703.385.53.408 1.077.806 1.636 1.191l.187.134a9.762 9.762 0 0 0-.23.113c-1.692.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017 1.034 1.034 0 0 1-.004-1.434c1.888-1.923 3.569-3.432 5.303-4.451-6.341-4.876-10.273-11.197-2.627-15.9C29.023-2.802 44.11 26.834 33.396 40.29c-1.242 1.559-6.038 6.898-12.141 3.719-6.987-3.64-5.062-7.908-3.29-11.836 1.363-3.021 2.636-5.842-.308-8.023Zm1.684-12.398c4.02 3.526 6.867 7.324 8.049 11.4 1.17 4.04.739 8.466-2.01 13.358l1.743.98c2.98-5.304 3.524-10.281 2.188-14.895-1.327-4.577-4.47-8.68-8.652-12.347l-1.318 1.504Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="spleen_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSpleen);
export default ForwardRef;
