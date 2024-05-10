import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGroupDiscussionMeetingx3 = (
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
      <path d="M18.5 26c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 28a1.999 1.999 0 1 0 0-4 1.999 1.999 0 1 0 0 4Zm0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
      />
      <path d="M6 36.545C6 33.523 11.663 32 14.5 32c2.837 0 8.5 1.523 8.5 4.545V42H6v-5.455Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.334 35.983c-.316.312-.334.491-.334.563V40h13v-3.455c0-.07-.018-.25-.334-.562-.334-.329-.885-.682-1.64-1.005C17.506 34.327 15.65 34 14.5 34s-3.007.327-4.526.978c-.755.323-1.306.676-1.64 1.005ZM14.5 32C11.663 32 6 33.523 6 36.545V42h17v-5.455C23 33.523 17.337 32 14.5 32Z"
      />
      <path d="M37.5 26c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5 28a1.999 1.999 0 1 0 0-4 1.999 1.999 0 1 0 0 4Zm0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
      />
      <path d="M28 24c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 26a1.999 1.999 0 1 0 0-4 1.999 1.999 0 1 0 0 4Zm0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
      />
      <path d="M23 12.833A4.833 4.833 0 0 0 18.167 8h-3.169a4.998 4.998 0 0 0-.181 9.993L15 18v2s8-1.167 8-7.167ZM26 11.236A5.236 5.236 0 0 1 31.236 6H37a5 5 0 0 1 0 10h-2v3s-9-1.264-9-7.764ZM25 36.545C25 33.523 30.663 32 33.5 32c2.837 0 8.5 1.523 8.5 4.545V42H25v-5.455Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.334 35.983c-.316.312-.334.491-.334.563V40h13v-3.455c0-.07-.018-.25-.334-.562-.334-.329-.885-.682-1.64-1.005C36.506 34.327 34.65 34 33.5 34s-3.007.327-4.526.978c-.755.323-1.306.676-1.64 1.005ZM33.5 32c-2.837 0-8.5 1.523-8.5 4.545V42h17v-5.455C42 33.523 36.337 32 33.5 32ZM24 35v-.455c0-1.677-1.847-2.893-4.005-3.643A9.41 9.41 0 0 1 24 30a9.41 9.41 0 0 1 4.005.902c-2.158.75-4.005 1.966-4.005 3.643V35Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 35v-.455c0-.893.524-1.656 1.34-2.287l.141-.105c.697-.506 1.58-.923 2.524-1.25a9.496 9.496 0 0 0-2.968-.845 9.286 9.286 0 0 0-2.074 0 9.495 9.495 0 0 0-2.968.844c.943.328 1.827.745 2.523 1.25.048.035.095.07.141.106.817.63 1.34 1.394 1.34 2.287V35H24Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGroupDiscussionMeetingx3);
export default ForwardRef;
