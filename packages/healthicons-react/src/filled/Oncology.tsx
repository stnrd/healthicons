import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOncology = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm13.28 18.133 4.02 5.196-4.02 5.133-5.073-3.896 5.072-6.433Zm-.186-15.525-2.165 2.845c-1.732 2.289-1.732 5.443 0 7.67l12.061 15.34L34 33.565l-4.825-6.186-5.814-7.422-2.474-2.154c.433-.248.928-.433 1.423-.433h3.65c.494 0 .989.123 1.422.37 0 .063.062.063.062.063l-2.474 2.154 4.02 5.196 2.35-2.97c1.732-2.226 1.732-5.38 0-7.669l-2.226-2.907c-.371-.495-.866-.928-1.423-1.175-.557-.31-1.175-.433-1.794-.433H22.31c-1.237 0-2.412.618-3.216 1.608Zm.927 4.113c-.015-.03-.03-.062-.062-.092-.68-.99-.556-1.35.124-2.279.557-.68 1.361-1.113 2.227-1.113h3.587c.433 0 .866.124 1.237.31.372.185.743.494.99.803.31.372.495.805.557 1.237.13.523.046.611-.166.834-.09.093-.201.21-.33.393-.061-.03-.138-.077-.216-.124-.077-.046-.154-.092-.216-.123-.557-.31-1.175-.433-1.794-.433h-3.587c-.619 0-1.237.185-1.794.433-.186.062-.371.123-.495.247-.03-.03-.046-.062-.062-.093Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOncology);
export default ForwardRef;
