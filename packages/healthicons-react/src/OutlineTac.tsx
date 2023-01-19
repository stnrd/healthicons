import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineTac = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M38.214 31.353A15.931 15.931 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 2.651.645 5.151 1.786 7.353L8.73 33.535A17.916 17.916 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18c0 3.502-1 6.77-2.73 9.535l-1.056-2.182Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 17a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.058 25.253c.042-.098.087-.194.135-.287A10.049 10.049 0 0 1 14 23c0-5.523 4.477-10 10-10s10 4.477 10 10c0 .673-.066 1.33-.193 1.966.048.093.093.189.135.287l4.727 11.19C39.783 39.082 37.847 42 34.984 42H13.016c-2.863 0-4.799-2.92-3.685-5.556l4.727-11.19ZM24 15a8 8 0 0 0-7.997 8.208c.464-.224.974-.36 1.505-.391a6.47 6.47 0 0 0 .414 1.993h-.179a2 2 0 0 0-1.842 1.221l-4.727 11.191A2 2 0 0 0 13.016 40h.322a3.492 3.492 0 0 1-.055-2.879l2.48-5.788A5.5 5.5 0 0 1 20.82 28h6.362a5.5 5.5 0 0 1 5.055 3.333l2.48 5.788a3.49 3.49 0 0 1-.054 2.88h.322a2 2 0 0 0 1.843-2.779L32.1 26.032a2 2 0 0 0-1.843-1.222h-.18a6.474 6.474 0 0 0 .415-1.993c.531.03 1.041.167 1.505.39A8 8 0 0 0 24 15Zm8.09 24.879a1.495 1.495 0 0 1-.564.121h-.051a1.506 1.506 0 0 1-.97-.376 1.005 1.005 0 0 0-.113-.087l-1.963-4.908a1 1 0 0 0-1.857.742L28.422 40h-8.846l1.851-4.629a1 1 0 0 0-1.857-.742l-1.963 4.908a.944.944 0 0 0-.113.087 1.51 1.51 0 0 1-.97.376h-.05a1.5 1.5 0 0 1-1.353-2.091l2.48-5.788A3.5 3.5 0 0 1 20.819 30h6.362a3.5 3.5 0 0 1 3.217 2.121l2.48 5.788a1.5 1.5 0 0 1-.787 1.97Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M19.376 12.381a12 12 0 0 1 9.184.065l.779-1.842a14 14 0 0 0-10.715-.076l.752 1.853Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineTac);
export default ForwardRef;
