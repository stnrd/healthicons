import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWoozy = (
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
        d="M28 20.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
      />
      <path d="M15.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.232.689.024 1.618-.48 2.381a3.794 3.794 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53ZM16.592 31.381l.002-.001.028-.017a6.693 6.693 0 0 1 .62-.315 6.998 6.998 0 0 1 1.712-.514c1.327-.21 2.92-.016 4.28 1.608 1.924 2.3 4.302 2.588 6.125 2.3a9.001 9.001 0 0 0 3.04-1.085l.022-.013.031-.02.016-.01.006-.003.002-.001.002-.001a1 1 0 0 0-.416-1.837l-7.564-.919c-1.874-2.02-4.118-2.27-5.857-1.995a9.001 9.001 0 0 0-3.04 1.085l-.031.019-.022.013-.016.01-.006.004-.002.001-.002.001a1 1 0 0 0 1.07 1.69Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0-2c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWoozy);
export default ForwardRef;
