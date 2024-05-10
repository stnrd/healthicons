import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPwid = (
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
        d="M35.293 15.707 34 14.414 31.914 16.5l2.793 2.793-1.414 1.414L32 19.414l-5.879 5.879a3.001 3.001 0 0 1-3.528.529L21.414 27h9.172l3-3H38c.889 0 1.687.386 2.236 1H41a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3.998 3.998 0 0 1-3.465-2h-15.05a7 7 0 0 1-4.95-2.05L7.47 30.884 6.223 32.19a1 1 0 0 1-1.446-1.38l1.278-1.34L4 27.414V12.477c0-1.434 1.82-2.05 2.692-.911l7.318 9.57 1.267-1.326a1 1 0 0 1 1.446 1.38l-1.483 1.555 2.954 3.863a1 1 0 0 0 .452.332l2.532-2.532a3.001 3.001 0 0 1 .53-3.53L27.585 15l-1.293-1.293 1.414-1.414 2.793 2.793L32.586 13l-1.293-1.293 1.414-1.414 4 4-1.414 1.414ZM17.187 28.4a2.998 2.998 0 0 1-.582-.576l-2.763-3.614-4.99 5.228 3.098 3.099A5 5 0 0 0 15.485 34H32a2 2 0 0 0 2 2h1a4.978 4.978 0 0 1-1-3v-2.6h1.346A2.987 2.987 0 0 1 35 29v-1h2v1a1 1 0 0 0 1 1h1v-3a1 1 0 0 0-1-1h-3.586l-3 3h-12l-2 2h-2.828l2.6-2.601ZM29 16.414 30.586 18 28.5 20.086 26.914 18.5 29 16.414Zm-16.388 6.187-5.175 5.422L6 26.586V13.954l6.612 8.647ZM42 35a1 1 0 0 1-1 1h-2a3 3 0 0 1-3-3v-1.764c.53.475 1.232.764 2 .764h3v-5a1 1 0 0 1 1 1v7ZM25.5 19.914l-2.379 2.379a1 1 0 0 0 0 1.414l.172.172a1 1 0 0 0 1.414 0l2.379-2.379-1.586-1.586Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPwid);
export default ForwardRef;
