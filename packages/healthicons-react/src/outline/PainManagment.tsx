import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPainManagment = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.046 37.997c-.391-.038-.679-.398-.643-.804l.57-6.443 2.875 1.582.662-4.135a.714.714 0 0 1 .817-.607c.387.067.649.447.585.85l-.985 6.158-2.734-1.504-.375 4.235a.719.719 0 0 1-.773.668ZM10.09 28.058a.755.755 0 0 1 .274-1.006l5.645-3.28.39 3.516 3.868-1.878a.7.7 0 0 1 .945.358c.166.37.012.81-.344.982l-5.655 2.744-.372-3.35-3.784 2.199a.696.696 0 0 1-.967-.285ZM13.394 13.126a.695.695 0 0 1 .976-.248l5.662 3.574-2.827 2.146 3.602 2.666c.32.237.395.698.167 1.03a.693.693 0 0 1-.99.174l-5.21-3.855 2.698-2.048-3.84-2.423a.756.756 0 0 1-.238-1.016ZM28.96 10.011c.386.071.644.455.576.857l-1.068 6.299-2.703-1.799-.97 3.994a.71.71 0 0 1-.864.535.742.742 0 0 1-.515-.897l1.454-5.983 2.568 1.71.698-4.116a.714.714 0 0 1 .823-.6ZM37.912 20.378a.755.755 0 0 1-.281 1.004l-5.412 3.087-.344-3.332-3.622 1.722a.7.7 0 0 1-.942-.365.752.752 0 0 1 .351-.98l5.416-2.574.327 3.167 3.542-2.021a.697.697 0 0 1 .965.292ZM34.224 33.776a.695.695 0 0 1-.976.248l-5.344-3.372 2.642-2.006-3.307-2.447a.758.758 0 0 1-.166-1.03.693.693 0 0 1 .99-.175l4.914 3.637-2.513 1.907 3.521 2.223a.756.756 0 0 1 .239 1.015Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPainManagment);
export default ForwardRef;
