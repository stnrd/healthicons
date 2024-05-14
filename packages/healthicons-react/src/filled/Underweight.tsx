import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUnderweight = (
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
      <path d="M28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.268 27.476a1.5 1.5 0 0 0 1.208-1.744c-.052-.285-.12-.722-.202-1.241-.16-1.023-.372-2.368-.606-3.516-.183-.898-.404-1.812-.673-2.545a5.27 5.27 0 0 0-.52-1.079c-.19-.287-.586-.795-1.267-.979-4.44-1.196-8-1.14-12.413.036-.68.181-1.076.687-1.267.974a5.24 5.24 0 0 0-.522 1.075c-.27.73-.49 1.64-.674 2.534-.235 1.15-.447 2.492-.607 3.512-.081.513-.149.944-.2 1.229a1.5 1.5 0 1 0 2.95.536c.078-.424.157-.93.245-1.49.149-.958.323-2.07.551-3.185.175-.853.36-1.585.55-2.097.043-.12.083-.213.116-.285.407-.104.806-.196 1.196-.277L21 25l-1.5 5.5v12a1.5 1.5 0 0 0 3 0v-12h3v12a1.5 1.5 0 0 0 3 0v-12L27 25l.872-6.101c.388.079.784.17 1.188.273.034.073.074.17.119.291.19.517.375 1.253.55 2.112.228 1.118.4 2.226.549 3.183.088.567.168 1.08.246 1.51a1.5 1.5 0 0 0 1.744 1.208Zm-3.313-8.494s.004.008.015.02a.099.099 0 0 0-.015-.02Zm-9.913.039s-.005.005-.014.02a.109.109 0 0 0 .014-.02Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUnderweight);
export default ForwardRef;
