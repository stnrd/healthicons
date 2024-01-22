import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaPvMicroscope = (
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
      <g
        clipPath="url(#malaria_pv_microscope_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path d="M9.693 21.994c1.18 1.527 4.627.84 7.698-1.533 3.072-2.374 4.606-5.536 3.426-7.063-1.18-1.527-4.628-.84-7.7 1.533-3.07 2.374-4.604 5.536-3.424 7.063Zm2.255-.494a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.068 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM31.387 27.535c3.287 1.985 5.151 4.918 4.165 6.552-.987 1.634-4.451 1.35-7.738-.635-3.286-1.984-5.15-4.917-4.164-6.551.986-1.634 4.45-1.35 7.737.634ZM33.947 32a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3.546.906a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906ZM32.218 23.54c1.75-.817 1.833-4.333.188-7.851-1.646-3.519-4.398-5.707-6.148-4.89-1.749.819-1.832 4.334-.187 7.853 1.646 3.518 4.398 5.707 6.147 4.889ZM29.948 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.7 2.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM20.568 30.618c1.784 3.55 1.8 7.146.035 8.033-1.764.887-4.64-1.272-6.425-4.82-1.784-3.55-1.8-7.146-.036-8.033 1.765-.887 4.642 1.271 6.426 4.82ZM18.948 35a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.453-2.094a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906Zm.947 3.794a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Z" />
        <path d="M48 0H0v48h48V0ZM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" />
      </g>
      <defs>
        <clipPath id="malaria_pv_microscope_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaPvMicroscope);
export default ForwardRef;
