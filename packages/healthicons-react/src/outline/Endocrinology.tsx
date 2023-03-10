import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEndocrinology = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.53 28.13c-.4.305-.868.519-1.366.628l-.025.005a3.61 3.61 0 0 1-.746.078h-.536v1.183h1.282a9.588 9.588 0 0 1 3.472.726 9.07 9.07 0 0 1 2.906 1.93 8.465 8.465 0 0 1 1.892 2.834 8.072 8.072 0 0 1 .586 3.303V42H9v-4.367c.056-2.039.957-3.977 2.51-5.399 1.544-1.412 3.61-2.204 5.76-2.21h1.603v-5.57c-1.41-1.037-2.442-2.462-2.95-4.077a7.633 7.633 0 0 1 .117-4.931c.584-1.592 1.681-2.973 3.139-3.95A8.957 8.957 0 0 1 24.172 10a9.043 9.043 0 0 1 5.126 1.623c1.482 1.042 2.572 2.501 3.111 4.166.175.619.368 2.44.368 2.44.31.782.638 1.547.967 2.311l.464 1.11a2.902 2.902 0 0 1 .348.966.875.875 0 0 1-.213.62.98.98 0 0 1-.6.326c-.015 0-.064.005-.132.01-.264.025-.815.077-.815-.01v2.093a3.113 3.113 0 0 1-1.003 2.254 3.39 3.39 0 0 1-.263.222Zm-.734-2.482c-.003.276-.12.567-.37.8a1.515 1.515 0 0 1-1.033.393h-.536a2 2 0 0 0-2 2v1.183a2 2 0 0 0 2 2h1.261c.942.021 1.868.216 2.724.573a7.07 7.07 0 0 1 2.266 1.502 6.466 6.466 0 0 1 1.447 2.164 6.073 6.073 0 0 1 .44 2.554V40H11v-2.337c.047-1.47.699-2.89 1.86-3.953 1.173-1.073 2.769-1.69 4.45-1.686h1.563a2 2 0 0 0 2-2v-5.57a2 2 0 0 0-.816-1.612c-1.08-.793-1.85-1.87-2.226-3.065a5.632 5.632 0 0 1 .087-3.643c.433-1.18 1.254-2.226 2.374-2.976A6.957 6.957 0 0 1 24.162 12a7.042 7.042 0 0 1 3.986 1.26c1.127.791 1.938 1.88 2.344 3.1.042.17.113.608.183 1.142a43.89 43.89 0 0 1 .105.866l.006.055.002.016c.02.18.063.356.129.524.32.81.659 1.598.984 2.355l.001.003.16.38a2 2 0 0 0-1.266 1.86v2.087Z"
        fill="#333"
      />
      <path
        d="M24 31.5c0 1.38-.448 2.5-1 2.5s-1-1.12-1-2.5.448-2.5 1-2.5 1 1.12 1 2.5Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 34c.552 0 1-1.12 1-2.5s-.448-2.5-1-2.5-1 1.12-1 2.5.448 2.5 1 2.5Z"
        fill="#333"
      />
      <path
        d="M26 31.5c0 1.38-.448 2.5-1 2.5s-1-1.12-1-2.5.448-2.5 1-2.5 1 1.12 1 2.5Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 34c.552 0 1-1.12 1-2.5s-.448-2.5-1-2.5-1 1.12-1 2.5.448 2.5 1 2.5ZM24 35a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V36a1 1 0 0 1 1-1Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEndocrinology);
export default ForwardRef;
