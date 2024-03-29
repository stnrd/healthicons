import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSperm = (
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
      <g clipPath="url(#sperm_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM29.822 15.284c.134.41.07.874-.235 1.18l-.28.282a.507.507 0 0 1-.389.163l-3.224-.12c-4.575-.172-8 4.438-6.483 8.725l.274.774c.587 1.657-.747 3.437-2.515 3.355l-1.965-.091c-2.905-.135-5.242 2.556-4.698 5.409l.311 1.629c.162.849-.447 1.681-1.311 1.792l-1.571.202a1.467 1.467 0 1 0 .373 2.91l1.46-.187c2.594-.332 4.421-2.83 3.935-5.378l-.311-1.628c-.182-.951.598-1.848 1.566-1.803l1.964.09c3.89.181 6.825-3.733 5.534-7.38l-.274-.774c-.817-2.309 1.027-4.79 3.49-4.699l3.225.12a3.55 3.55 0 0 0 2.72-1.14l.24-.24c.3-.302.756-.37 1.162-.245 2.137.662 4.85-.087 6.868-2.105 2.687-2.687 3.123-6.609.973-8.76-2.15-2.15-6.072-1.713-8.76.974-2.041 2.042-2.784 4.796-2.08 6.945Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="sperm_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSperm);
export default ForwardRef;
