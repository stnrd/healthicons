import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalSpider = (
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
        d="M30 28c0 5.523-2.686 10-6 10s-6-4.477-6-10 2.686-10 6-10 6 4.477 6 10Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.804 6.02a1 1 0 0 1 1.177.784l1.5 7.5a1 1 0 0 1-.187.804l-6.5 8.5a1 1 0 1 1-1.588-1.215l6.225-8.14-1.412-7.057a1 1 0 0 1 .785-1.176ZM15.196 6.02a1 1 0 0 0-1.177.784l-1.5 7.5a1 1 0 0 0 .187.804l6.5 8.5a1 1 0 1 0 1.588-1.215l-6.225-8.14 1.412-7.057a1 1 0 0 0-.785-1.176ZM41.7 17.285a1 1 0 0 1 .015 1.414l-4.4 4.5a1.001 1.001 0 0 1-.36.236l-6.6 2.5a1 1 0 0 1-.71-1.87l6.394-2.422 4.246-4.342a1 1 0 0 1 1.414-.016ZM37.851 41.937a1 1 0 0 0 .585-1.288l-3-8a1 1 0 0 0-.45-.523l-4.5-2.5a1 1 0 0 0-.972 1.748l4.179 2.322 2.87 7.655a1 1 0 0 0 1.288.586ZM39.603 32.798a1 1 0 0 0 .195-1.4l-3.4-4.5a1 1 0 0 0-.887-.394l-5.6.5a1 1 0 1 0 .178 1.992l5.047-.45 3.066 4.057a1 1 0 0 0 1.4.195ZM6.3 17.285a1 1 0 0 0-.015 1.414l4.4 4.5c.102.104.225.185.36.236l6.6 2.5a1 1 0 0 0 .71-1.87l-6.394-2.422-4.246-4.342a1 1 0 0 0-1.414-.016ZM10.149 41.937a1 1 0 0 1-.585-1.288l3-8a1 1 0 0 1 .45-.523l4.5-2.5a1 1 0 0 1 .972 1.748l-4.179 2.322-2.87 7.655a1 1 0 0 1-1.288.586ZM8.397 32.798a1 1 0 0 1-.195-1.4l3.4-4.5a1 1 0 0 1 .887-.394l5.6.5a1 1 0 1 1-.178 1.992l-5.048-.45-3.065 4.057a1 1 0 0 1-1.4.195ZM22 14.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1ZM26 14.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path d="M23 16h2v3h-2v-3Z" fill="#333" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalSpider);
export default ForwardRef;
