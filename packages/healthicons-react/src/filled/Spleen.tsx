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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.657 24.15c.068-.032.135-.063.203-.093l.044-.013c.306-.094.61-.051.995.161.419.23.852.613 1.364 1.104l.232.226c.421.408.899.872 1.382 1.227.582.428 1.338.83 2.225.748.541-.05.935-.543.879-1.1-.057-.558-.541-.97-1.083-.92-.19.018-.46-.055-.89-.371-.361-.267-.719-.613-1.141-1.022l-.27-.26c-.17-.164-.352-.336-.544-.507.597-.02 1.229.017 1.906.11a.975.975 0 0 0 1.095-.873 1.026 1.026 0 0 0-.864-1.138c-2.53-.344-4.624-.015-6.653 1.01-.236.12-.47.248-.703.385.53.408 1.077.806 1.636 1.191l.187.134a9.575 9.575 0 0 0-.23.113c-1.692.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017 1.034 1.034 0 0 1-.004-1.434c1.888-1.923 3.569-3.432 5.303-4.451-6.341-4.876-10.273-11.197-2.627-15.9C29.023-2.802 44.11 26.834 33.396 40.29c-1.242 1.559-6.038 6.898-12.14 3.719-6.988-3.64-5.063-7.908-3.29-11.836 1.362-3.021 2.635-5.842-.309-8.023Zm9.733-.998c-1.182-4.076-4.029-7.874-8.05-11.4l1.32-1.504c4.18 3.666 7.324 7.77 8.65 12.347 1.338 4.614.794 9.591-2.187 14.895l-1.744-.98c2.75-4.892 3.181-9.318 2.01-13.358Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSpleen);
export default ForwardRef;
