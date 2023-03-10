import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntensityConcentrationBioassays = (
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
        d="M28.384 29c-.75 0-1.069-.189-1.204-.319l2.679-.445a1.906 1.906 0 0 1-.05.08c-.25.367-.652.684-1.425.684ZM37.62 28.681c-.135.13-.454.319-1.204.319-.773 0-1.176-.317-1.424-.685a1.906 1.906 0 0 1-.05-.079l2.678.445Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.467 12h-5.934v2.195a5 5 0 0 1-1.692 3.75l-1.826 1.61A3 3 0 0 0 25 21.806V37a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V21.805a3 3 0 0 0-1.015-2.25l-1.826-1.61a5 5 0 0 1-1.692-3.75V12ZM33 21.5a.5.5 0 0 0-1 0v2.728c-.28.264-.523.745-.698 1.366l-.802-.801V23.5a.5.5 0 0 0-.146-.354l-1.5-1.5a.5.5 0 0 0-.708.708l1.354 1.353V25a.5.5 0 0 0 .146.354l1.425 1.424c-.01.082-.018.164-.026.248l-5.007.831c-.157.714.093 2.143 2.346 2.143 1.55 0 2.3-.946 2.617-1.862.004.327.023.643.055.945L28.7 30.85a.5.5 0 0 0-.164.586l.317.792-1.045.435a.5.5 0 1 0 .384.924l1.5-.626a.5.5 0 0 0 .272-.647l-.357-.894 1.638-1.229c.043.175.09.34.143.493l-.372 1.441a.497.497 0 0 0-.016.125v.7l-1.39 1.738a.5.5 0 1 0 .78.624l1.5-1.875a.5.5 0 0 0 .11-.312v-.812l.115-.446A.664.664 0 0 0 32.5 32c.15 0 .293-.058.43-.166l.07.238v1.053a.5.5 0 0 0 .11.312l1.5 1.875a.5.5 0 1 0 .78-.624L34 32.95V32a.498.498 0 0 0-.02-.142l-.357-1.205c.04-.12.077-.246.111-.379l1.655 1.158-.353.882a.5.5 0 0 0 .272.648l1.5.624a.5.5 0 1 0 .384-.922l-1.045-.436.317-.792a.5.5 0 0 0-.177-.596l-2.355-1.648c.024-.2.041-.407.053-.619.39.758 1.128 1.427 2.43 1.427 2.254 0 2.504-1.429 2.347-2.143l-4.804-.797a9.581 9.581 0 0 0-.03-.282l1.425-1.424A.5.5 0 0 0 35.5 25v-1.293l1.353-1.353a.5.5 0 0 0-.707-.708l-1.5 1.5a.5.5 0 0 0-.146.354v1.293l-.801.801c-.176-.621-.418-1.102-.699-1.366V21.5Z"
        fill="#333"
      />
      <path
        d="M10 9.771h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689v-7.688c0-.705-.384-1.352-1-1.69v-.695ZM18 40V30h-2v10h2ZM12 34h2v6h-2v-6ZM8 40v-3h2v3H8Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM28 6a2 2 0 0 0-2 2v4h1.533v2.195a3 3 0 0 1-1.015 2.25l-1.826 1.61A5 5 0 0 0 23 21.806V37a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V21.805a5 5 0 0 0-1.692-3.75l-1.826-1.61a3 3 0 0 1-1.015-2.25V12H39V8a2 2 0 0 0-2-2h-9ZM8 21.49c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10.057v3.771H18v.74c0 .704-.384 1.351-1 1.689v7.6c.616.338 1 .985 1 1.69v.739h.057v3.77H8v-4.51ZM6 30a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V30Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIntensityConcentrationBioassays);
export default ForwardRef;
