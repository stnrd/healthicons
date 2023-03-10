import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoad = (
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
        d="M6.056 40.001c-.062 1.103.84 2 1.944 2h14c1.105 0 1.989-.899 2.111-1.997a18.002 18.002 0 0 1 15.893-15.893C41.102 23.99 42 23.105 42 22.001V8c0-1.105-.896-2.007-1.999-1.945A36 36 0 0 0 6.056 40Zm30.957-24.363a27.01 27.01 0 0 1 2.213-.394l-.068-.496-.134-.99-.067-.496a29 29 0 0 0-2.377.423l.108.488.217.977.108.488Zm-8.299 3.357a27.01 27.01 0 0 1 4.01-2.025l-.188-.463-.375-.927-.188-.464a28.995 28.995 0 0 0-4.306 2.175l.262.426.523.852.262.426Zm-5.248 4.209a27.045 27.045 0 0 1 1.63-1.547l-.329-.377-.657-.753-.329-.377a29.02 29.02 0 0 0-3.358 3.463l.387.317.773.634.387.317a27.01 27.01 0 0 1 1.496-1.677Zm-5.946 9.445a26.999 26.999 0 0 1 1.9-4.07l-.433-.248-.868-.497-.434-.248a29 29 0 0 0-2.041 4.37l.469.174.938.346.47.173Zm-1.525 6.553c.078-.748.187-1.49.325-2.224l-.49-.093-.983-.186-.492-.093c-.149.788-.266 1.585-.35 2.388l.498.052.994.104.498.052Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPavedRoad);
export default ForwardRef;
