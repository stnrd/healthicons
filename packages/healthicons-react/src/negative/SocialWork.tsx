import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialWork = (
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
      <g clipPath="url(#social-work_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-6v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h-7v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H9a3 3 0 0 1-3-3V9Zm29.6 23.685c-.51.835-1.063 1.395-1.61 1.95-.416.421-.829.84-1.217 1.372V37H27v-.993c.052-.41.217-.994.362-1.51.13-.457.243-.86.25-1.043.02-.544.786-1.537.786-1.537l2.348-2.828s.664-.67 1.045-1.414c.38-.744 1.19.192 1.297.861.107.67-.097 1.022-.097 1.022l-1.342 2.547s1.555-2.035 2.038-2.853c.245-.414.313-1.292.39-2.272.074-.956.156-2.009.416-2.828.527-1.66 2.052-1.244 2.317-.503.264.742.204 5.642.108 6.458-.075.64-.478 1.266-.934 1.971-.126.196-.256.397-.384.607Zm-22.643 1.95c.417.421.831.84 1.22 1.372V37H20v-.993c-.098-.773-.27-2.166-.285-2.553-.021-.544-.789-1.537-.789-1.537l-2.355-2.828s-.667-.67-1.049-1.414c-.381-.744-1.193.192-1.301.861-.108.67.097 1.022.097 1.022l1.346 2.547s-1.56-2.035-2.045-2.853c-.245-.414-.314-1.292-.39-2.272-.075-.956-.157-2.009-.418-2.828-.529-1.66-2.06-1.244-2.325-.503-.265.742-.564 5.642-.468 6.458.076.64.48 1.266.938 1.971.126.196.257.397.385.607.512.835 1.067 1.395 1.616 1.95ZM15 17.207C15 13.987 17.018 11 19.781 11c1.918 0 3.34 1.34 4.219 3.24.878-1.9 2.301-3.24 4.219-3.24C30.982 11 33 13.987 33 17.207 33 24.1 24 29 24 29s-9-4.604-9-11.793Z"
        />
      </g>
      <defs>
        <clipPath id="social-work_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSocialWork);
export default ForwardRef;
