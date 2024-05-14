import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOdontologyImplant = (
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
      <g clipPath="url(#odontology-implant_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm22.796 30.753a134.222 134.222 0 0 1-5.42-.174l-2.78 1.001-.03-.13a1.986 1.986 0 0 1 .042-1.06c-3.027-.256-5.17-.634-5.383-1.104 0-2.564-.855-5.232-1.685-7.82-1.368-4.263-2.665-8.307.05-11.301 4.362-4.812 9.73-5.841 15.91-1.031l.03-.02 6.817 4.962a1 1 0 1 0 1.177-1.617l-6.086-4.43c3.16-1.57 9.53-3.751 14.14 1.105 4.12 4.341 2.14 8.877.233 13.242-1.036 2.373-2.05 4.696-2.05 6.91-.483.846-4.652 1.296-9.663 1.433l-12.65 4.554-.4-1.73 7.748-2.79ZM16.3 38.966l16.795-6.046.34-1.47a2.01 2.01 0 0 0 .05-.544L15.9 37.236l.399 1.73Zm16.26-3.728-15.547 5.597a3.001 3.001 0 0 0 2.027 1.145l13.049-4.698.471-2.044ZM28.613 42H24.89l6.665-2.4-.017.075A3 3 0 0 1 28.613 42Z"
        />
      </g>
      <defs>
        <clipPath id="odontology-implant_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOdontologyImplant);
export default ForwardRef;
