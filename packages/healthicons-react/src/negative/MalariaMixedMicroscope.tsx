import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaMixedMicroscope = (
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
        clipPath="url(#malaria_mixed_microscope_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#333"
      >
        <path d="M9.693 22.308c1.18 1.527 4.627.841 7.698-1.533 3.072-2.373 4.606-5.536 3.426-7.063-1.18-1.527-4.628-.84-7.7 1.533-3.07 2.374-4.604 5.536-3.424 7.063Zm3.876-1.918a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.794-3.406a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.726 1.906a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.71-2.813a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0ZM31.387 27.85c3.287 1.984 5.151 4.918 4.165 6.551-.987 1.634-4.451 1.35-7.738-.634-3.286-1.985-5.15-4.918-4.164-6.552.986-1.634 4.45-1.35 7.737.635Zm1.032 4.048a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.454-.732a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906Zm-2.691-2.127a.447.447 0 1 1-.894 0 .447.447 0 0 1 .894 0Zm1.042 1.673a.768.768 0 1 0 0-1.536.768.768 0 0 0 0 1.536ZM32.406 16.002c1.645 3.519 1.562 7.034-.188 7.852-1.749.819-4.5-1.37-6.147-4.889-1.646-3.518-1.562-7.033.187-7.852 1.75-.818 4.502 1.371 6.148 4.89ZM30.3 17.076a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.5-1.48a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.076 3.954a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0ZM20.568 30.933c1.784 3.549 1.8 7.145.035 8.032-1.764.887-4.64-1.271-6.425-4.82-1.784-3.55-1.8-7.145-.036-8.032 1.765-.887 4.642 1.27 6.426 4.82Zm-2.11 2.087a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.085-1.897a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906Zm-1.206-1.496a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.7 6.209a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" />
        <path d="M48 0H0v48h48V0ZM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" />
      </g>
      <defs>
        <clipPath id="malaria_mixed_microscope_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaMixedMicroscope);
export default ForwardRef;
