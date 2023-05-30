import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthDataSync = (
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
      <g clipPath="url(#health_data_sync_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20 4a3 3 0 0 0-3 3h-3a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h10v-2H14a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h3a1 1 0 0 1 1 1v16h2V10a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3h-8Zm-1 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V7Zm4 12v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3Zm1 14.665v-4h2v1.688l1.398-1.313a7 7 0 0 1 11.538 2.625l-1.885.667a5.001 5.001 0 0 0-8.273-1.845l-1.253 1.178H29v2h-4a1 1 0 0 1-1-1Zm15.667 1.667h-4v2h1.475l-1.254 1.178a5 5 0 0 1-8.273-1.845l-1.884.667a7 7 0 0 0 11.538 2.625l1.398-1.313v1.688h2v-4a1 1 0 0 0-1-1Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="health_data_sync_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHealthDataSync);
export default ForwardRef;
