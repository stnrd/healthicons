import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgObstetricsmonia = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.485 32.283c-4.686 4.686-12.284 4.686-16.97 0-4.28-4.28-4.651-10.99-1.113-15.692l1.871-.6c1.706-.55 2.997 1.565 1.73 2.833-2.02 2.02-.59 5.476 2.268 5.476h.638c.893 0 1.675.6 1.905 1.463l.298 1.117a1.5 1.5 0 0 0-.97-.083l-3.96.99a1.5 1.5 0 1 0 .727 2.91l2.505-.626.626 2.505a1.5 1.5 0 0 0 1.62 1.127c5.182-.576 7.542-4.241 8.17-5.914a1.5 1.5 0 0 0-1.52-2.023l-1.955.15-.683-2.73a1.5 1.5 0 1 0-2.91.727l.99 3.96a1.5 1.5 0 0 0 1.57 1.132l.04-.003a6.857 6.857 0 0 1-1.825 1.149l-1.273-4.774a3.472 3.472 0 0 0-3.355-2.577h-.637c-1.522 0-2.284-1.84-1.208-2.916 2.202-2.201.292-5.765-2.544-5.472 4.712-3.764 11.601-3.464 15.965.9 4.687 4.686 4.687 12.284 0 16.97Zm1.415 1.414c-5.468 5.467-14.332 5.467-19.8 0-5.467-5.468-5.467-14.332 0-19.8 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8Zm-4.465-9.405a2.8 2.8 0 1 0 3.96-3.96 2.8 2.8 0 0 0-3.96 3.96Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgObstetricsmonia);
export default ForwardRef;
