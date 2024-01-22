import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrutches = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.031 10a2 2 0 0 0 1.97-2V4H16v4a2 2 0 0 0 1.957 2l.015.315c.02.404.055 1.027.116 1.914.123 1.773.35 4.602.768 8.839.15 1.519 1.04 2.877 1.747 3.953l.079.12c.384.587.716 1.1.959 1.599.24.494.355.902.355 1.262 0 .258 0 1.008.002 1.692L22 30.999a1 1 0 0 0 1 1v7.003a.998.998 0 1 0 1.997 0v-.007H25v-6.98h.01a1 1 0 0 0 1-1v-3.041c0-.356.115-.757.357-1.244.245-.491.58-.996.969-1.576l.064-.096c.715-1.066 1.627-2.427 1.748-3.976a5097.306 5097.306 0 0 1 .853-10.71l.03-.372Zm-2.023.21.017-.21H19.96l.01.216c.02.39.054 1 .115 1.875.037.534.083 1.167.142 1.91h7.476a3629.671 3629.671 0 0 1 .305-3.791Zm-3.874 16.794c.103-.414.263-.804.443-1.166.308-.618.713-1.222 1.08-1.772l.017-.024c.797-1.192 1.404-2.14 1.48-3.117l.39-4.925h-7.15c.117 1.36.266 2.973.453 4.872.098.991.716 1.964 1.509 3.174.37.566.777 1.187 1.084 1.82.173.354.326.735.428 1.138h.266Z"
        fill="#000"
      />
      <path
        d="M22.302 41.966c.134-.632 1.038-.973 1.684-.973.659 0 1.568.34 1.707.983l.15.686c.093.432-.108.877-.52 1.037-.388.151-.886.3-1.337.3-.422 0-.914-.15-1.303-.3-.414-.162-.62-.608-.527-1.043l.146-.69Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCrutches);
export default ForwardRef;
