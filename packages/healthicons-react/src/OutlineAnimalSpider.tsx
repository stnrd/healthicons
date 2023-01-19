import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAnimalSpider = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M32.804 6.02a1 1 0 0 1 1.177.784l1.5 7.5a1 1 0 0 1-.187.804l-6.5 8.5a1 1 0 1 1-1.588-1.215l6.225-8.14-1.412-7.057a1 1 0 0 1 .785-1.176Zm-17.608 0a1 1 0 0 0-1.177.784l-1.5 7.5a1 1 0 0 0 .187.804l6.5 8.5a1 1 0 1 0 1.588-1.215l-6.225-8.14 1.412-7.057a1 1 0 0 0-.785-1.176ZM41.7 17.285a1 1 0 0 1 .015 1.414l-4.4 4.5a1.001 1.001 0 0 1-.36.236l-6.6 2.5a1 1 0 0 1-.71-1.87l6.394-2.422 4.246-4.342a1 1 0 0 1 1.414-.016Zm-3.849 24.652a1 1 0 0 0 .585-1.288l-3-8a1 1 0 0 0-.45-.523l-4.5-2.5a1 1 0 0 0-.972 1.748l4.179 2.322 2.87 7.655a1 1 0 0 0 1.288.586Zm1.752-9.139a1 1 0 0 0 .195-1.4l-3.4-4.5a1 1 0 0 0-.887-.394l-5.6.5a1 1 0 1 0 .178 1.992l5.047-.45 3.066 4.057a1 1 0 0 0 1.4.195ZM6.3 17.285a1 1 0 0 0-.015 1.414l4.4 4.5c.102.104.225.185.36.236l6.6 2.5a1 1 0 0 0 .71-1.87l-6.394-2.422-4.246-4.342a1 1 0 0 0-1.414-.016Zm3.849 24.652a1 1 0 0 1-.585-1.288l3-8a1 1 0 0 1 .45-.523l4.5-2.5a1 1 0 0 1 .972 1.748l-4.179 2.322-2.87 7.655a1 1 0 0 1-1.288.586Zm-1.752-9.139a1 1 0 0 1-.195-1.4l3.4-4.5a1 1 0 0 1 .887-.394l5.6.5a1 1 0 1 1-.178 1.992l-5.048-.45-3.065 4.057a1 1 0 0 1-1.4.195Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m23 20.188-.612.59C21.105 22.015 20 24.65 20 28c0 2.462.603 4.593 1.472 6.042C22.366 35.532 23.322 36 24 36c.678 0 1.634-.468 2.528-1.958C27.398 32.592 28 30.462 28 28c0-3.35-1.105-5.985-2.388-7.222l-.612-.59V18h-2v2.188Zm4-.85c1.793 1.73 3 4.96 3 8.662 0 5.523-2.686 10-6 10s-6-4.477-6-10c0-3.701 1.207-6.933 3-8.662V15.5a1 1 0 1 1 2 0v.5h2v-.5a1 1 0 1 1 2 0v3.838Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAnimalSpider);
export default ForwardRef;
