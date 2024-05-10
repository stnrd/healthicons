import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSurgicalSterilization = (
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
        d="M24 36a3.98 3.98 0 0 1 2.185.649L28.002 4l.998.056.998-.056 1.817 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.553L28 40.03A4 4 0 1 1 24 36Zm5-13.944.665 11.956h-1.33L29 22.056Zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035ZM24 38a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM16 4.234l-1.514.909L15 6c-.514-.857-.516-.857-.516-.857l-.001.001-.004.002-.007.005-.018.011a2.342 2.342 0 0 0-.206.145 5.476 5.476 0 0 0-.486.418c-.389.374-.888.946-1.395 1.775-1.016 1.663-2.042 4.323-2.303 8.433-.08 1.253.645 2.308 1.678 2.789A2.493 2.493 0 0 0 11 20.5v21a2.5 2.5 0 0 0 5 0v-21c0-.894-.469-1.678-1.174-2.12A2.995 2.995 0 0 0 16 16V4.234ZM12.06 16.06c.236-3.714 1.132-6.025 1.94-7.394V16a1 1 0 0 1-1 1c-.569 0-.971-.454-.94-.94ZM14 20.586V20.5a.5.5 0 0 0-1 0v1.086l1-1Zm0 2.828v1.172l-1 1v-1.172l1-1Zm0 5.172v-1.172l-1 1v1.172l1-1Zm0 2.828V41.5a.5.5 0 0 1-1 0v-9.086l1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSurgicalSterilization);
export default ForwardRef;
