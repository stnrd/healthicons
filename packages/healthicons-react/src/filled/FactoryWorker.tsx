import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFactoryWorker = (
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
        d="M15.319 13.215c.683-2.152 2.41-3.932 4.681-4.907V11a1 1 0 1 0 2 0V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 1 0 2 0V8.308c2.304.989 4.047 2.805 4.71 4.999-.257.208-.686.46-1.355.704-1.492.544-3.995.989-7.881.989-2.799 0-5.048-.436-6.566-.99-.732-.267-1.258-.549-1.589-.795Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.04 15.89c.885-.324 1.583-.712 2.079-1.158.567.543.881 1.14.881 1.768 0 1.198-1.144 2.287-3.01 3.093a8 8 0 1 1-15.98 0C14.144 18.787 13 17.698 13 16.5c0-.65.336-1.267.941-1.824l.113.09c.544.421 1.288.802 2.17 1.123 1.771.647 4.259 1.111 7.25 1.111 4.008 0 6.769-.455 8.566-1.11Zm-14.034 4.384a6 6 0 0 0 11.988 0C28.27 20.734 26.21 21 24 21s-4.27-.267-5.994-.726ZM6 42h21V30.5L25 32v3.897A4.067 4.067 0 0 1 24 36c-.475 0-.795-.05-1-.103v-3.675l-4.647-3.614C12.52 29.728 6 32.338 6 36v6Zm7-2h8v-4.82l-6.525 1.088 1.876-5.158A30.684 30.684 0 0 0 13 32.18V40Zm-5 0h3v-6.921l-.074.039c-1.064.564-1.842 1.139-2.332 1.68C8.114 35.33 8 35.723 8 36v4Z"
        fill="#000"
      />
      <path
        d="M32.57 25.65c.578-.59 1.38.005 1.204.812l-.026.118a2.817 2.817 0 1 0 5.504 0l-.026-.118c-.176-.807.626-1.401 1.204-.811A5.482 5.482 0 0 1 42 29.499a5.496 5.496 0 0 1-2.583 4.664c-.279.174-.417.508-.417.837v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-5c0-.329-.138-.663-.417-.837A5.496 5.496 0 0 1 31 29.498c0-1.498.599-2.857 1.57-3.848Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFactoryWorker);
export default ForwardRef;
