import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGluten = (
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
      <g clipPath="url(#gluten_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25 4h-2v4.63l-.39.455a7.767 7.767 0 0 0-1.869 4.895 7.236 7.236 0 0 0-.249-.1L19 13.31V6h-2v9.58c0 .886.167 1.744.476 2.538l-.059-.027A1 1 0 0 0 16 19v1.939a6.99 6.99 0 0 0 .724 3.1A1.001 1.001 0 0 0 16 25v1.939a6.99 6.99 0 0 0 .724 3.1A1.001 1.001 0 0 0 16 31v1.938a7 7 0 0 0 4.079 6.362L23 40.64V44h2v-3.359l2.921-1.341A7 7 0 0 0 32 32.939V31a1 1 0 0 0-.724-.961 6.99 6.99 0 0 0 .724-3.1V25a1 1 0 0 0-.724-.961 6.99 6.99 0 0 0 .724-3.1V19a1 1 0 0 0-1.417-.909l-.06.027c.26-.667.42-1.38.464-2.118H31V6h-2v7.31l-1.492.57a7.236 7.236 0 0 0-.25.1 7.767 7.767 0 0 0-1.868-4.895L25 8.63V4Zm-1 12.815a7.014 7.014 0 0 0-1.121-1.414A5.768 5.768 0 0 1 24 10.542a5.768 5.768 0 0 1 1.121 4.859c-.434.422-.81.897-1.121 1.414Zm1 15.625 2.087-.958A5 5 0 0 0 30 26.94v-.38l-2.954 1.357A3.512 3.512 0 0 0 25 31.107v1.333Zm4-16.86v-.129l-.78.297A5 5 0 0 0 25 20.421v.128l.78-.297A5 5 0 0 0 29 15.579Zm-6 4.84a5 5 0 0 0-3.22-4.672l-.78-.297v.128a5 5 0 0 0 3.22 4.673l.78.297v-.128Zm2 4.687v1.333l2.087-.958A5 5 0 0 0 30 20.94v-.38l-2.954 1.357A3.512 3.512 0 0 0 25 25.107Zm-4.913-3.59A5 5 0 0 1 23 26.062v.38l-2.087-.959A5 5 0 0 1 18 20.94v-.38l2.087.959ZM23 32.063a5 5 0 0 0-2.913-4.544L18 26.56v.379a5 5 0 0 0 2.913 4.543L23 32.44v-.378Zm-2.087 5.42L23 38.44v-.378a5 5 0 0 0-2.913-4.544L18 32.56v.378a5 5 0 0 0 2.913 4.544Zm6.174 0L25 38.44v-.378a5 5 0 0 1 2.913-4.544L30 32.56v.378a5 5 0 0 1-2.913 4.544Z"
        />
      </g>
      <defs>
        <clipPath id="gluten_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGluten);
export default ForwardRef;
