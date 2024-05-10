import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodVessel = (
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
      <g clipPath="url(#blood_vessel_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 6h10v13.43l2.143-1.082 1.38-6.266 1.953.43-1.043 4.736 7.576-3.597 2.269 5.293-5.98 3.248 5.438 1.323-.473 1.943-7.593-1.847-5.151 2.673a.94.94 0 0 0-.52.83V42H18v-7.79a.95.95 0 0 0-.37-.756l-.007-.005-6.348-5.012-5.547 1.398-.489-1.94 4.055-1.021-4.42-3.49 1.507-6.027 6.617 4.569-.784-7.114 1.988-.219.965 8.757-.092.01L18 25.38V6Zm4.905 4.227a1 1 0 1 0-1.055-1.7 1 1 0 0 0 1.055 1.7Zm2.322 2.623a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.055Zm-2 9a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.056Zm.678 8.377a1 1 0 1 0-1.055-1.7 1 1 0 0 0 1.055 1.7Zm-.678 7.622a1 1 0 1 1-1.7 1.056 1 1 0 0 1 1.7-1.056Z"
        />
      </g>
      <defs>
        <clipPath id="blood_vessel_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodVessel);
export default ForwardRef;
