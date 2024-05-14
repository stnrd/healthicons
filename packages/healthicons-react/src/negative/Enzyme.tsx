import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEnzyme = (
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
      <g clipPath="url(#enzyme_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9.071 39.071c-3.905-3.905-3.905-10.237 0-14.142l7.222-7.222 14.142 14.142-7.222 7.222c-3.905 3.905-10.237 3.905-14.142 0Zm22.778-8.636L17.707 16.293l6.92-6.92c3.906-3.906 10.237-3.906 14.143 0 3.905 3.905 3.905 10.236 0 14.142l-6.92 6.92Zm.669-14.503a2 2 0 1 1-1.036-3.864l-.517-1.932a4 4 0 1 0 4.899 2.829l-1.932.517a2 2 0 0 1-1.414 2.45Zm-1.195 4.59c1.953.088 3.729-.585 4.553-1.805a1 1 0 0 1 1.657 1.12c-1.361 2.015-3.963 2.789-6.301 2.682-2.334-.106-4.845-1.11-6-3.197a1 1 0 0 1 1.75-.968c.69 1.245 2.384 2.078 4.341 2.167ZM16.567 35.782a.784.784 0 0 1-1.567 0h-2A2.783 2.783 0 1 0 15.784 33v2c.432 0 .783.35.783.783Zm2.373-8.36c-1.795-.776-3.694-.776-4.897.073a1 1 0 1 1-1.153-1.634c1.988-1.402 4.695-1.203 6.843-.275 2.145.927 4.137 2.755 4.477 5.116a1 1 0 0 1-1.98.285c-.202-1.408-1.492-2.788-3.29-3.565Zm-4.766 3.336c.651-.418 1.796-.431 2.964.056 1.178.492 1.916 1.297 2.036 1.973a1 1 0 1 0 1.97-.35c-.293-1.646-1.775-2.858-3.235-3.468-1.47-.614-3.382-.814-4.815.106a1 1 0 0 0 1.08 1.683ZM12 33.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </g>
      <defs>
        <clipPath id="enzyme_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEnzyme);
export default ForwardRef;
