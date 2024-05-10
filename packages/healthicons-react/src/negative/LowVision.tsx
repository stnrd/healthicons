import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLowVision = (
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
      <g clipPath="url(#low_vision_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.777 9.293a1 1 0 0 0-1.414 1.414l3.91 3.91a27.591 27.591 0 0 0-8.077 6.247 4.709 4.709 0 0 0 0 6.272C8.636 31.03 15.204 36 24.07 36c3.279 0 6.243-.68 8.852-1.734l4.44 4.441a1 1 0 0 0 1.415-1.414l-3.91-3.91a27.591 27.591 0 0 0 8.076-6.247 4.709 4.709 0 0 0 0-6.272C39.503 16.97 32.936 12 24.07 12c-3.28 0-6.244.68-8.853 1.734l-4.44-4.441ZM13.067 17a25.313 25.313 0 0 0-2.972 2h7.56l-2-2H13.068Zm-6.372 5.188c.35-.396.734-.803 1.15-1.213.072.016.147.025.225.025h11.585l2 2H6.193a2.79 2.79 0 0 1 .502-.812ZM6.193 25c.115.289.283.564.502.812.35.396.734.803 1.15 1.213.072-.016.147-.025.225-.025h17.585l-2-2H6.193Zm6.875 6a25.313 25.313 0 0 1-2.973-2h17.56l2 2H13.068Zm4.537 2a21.384 21.384 0 0 0 12.929 0H17.605Zm14.208-2.67-2.853-2.853A5.973 5.973 0 0 0 30.07 24c0-.926-.21-1.803-.585-2.587a2 2 0 1 1-2.828-2.828A5.976 5.976 0 0 0 24.07 18c-1.296 0-2.496.41-3.477 1.11l-2.852-2.853c3.917-3.21 9.707-2.998 13.378.65 3.685 3.663 3.92 9.484.694 13.422Zm1.558 1.557-.138-.138c3.881-4.579 3.777-11.376-.297-15.836 3.717 1.66 6.61 4.126 8.508 6.275a2.709 2.709 0 0 1 0 3.624c-1.824 2.065-4.565 4.422-8.073 6.075Z"
        />
      </g>
      <defs>
        <clipPath id="low_vision_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLowVision);
export default ForwardRef;
