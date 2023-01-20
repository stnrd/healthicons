import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusMutation = (
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
        d="M12.857 8c-.46 0-.923.2-1.28.593-.36.396-.577.952-.577 1.549V18a1 1 0 1 1-2 0v-7.858c0-1.07.385-2.112 1.097-2.894C10.81 6.462 11.802 6 12.857 6H22.5a1 1 0 1 1 0 2h-9.643Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.293 14.293a1 1 0 0 1 1.414 0L10 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414ZM29.5 40h5.643c.46 0 .923-.2 1.28-.593.36-.396.577-.952.577-1.549V30a1 1 0 1 1 2 0v7.858c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.707 33.707a1 1 0 0 1-1.414 0L38 31.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414Z"
        fill="#333"
      />
      <path d="M17 37a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 26a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM15 21a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM22.293 22.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.293 26.293 3-3 1.414 1.414-3 3-1.414-1.414ZM27 29a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 31a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM26.707 36.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m22.707 34.293 3 3-1.414 1.414-3-3 1.414-1.414ZM15 41a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 36a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM8.293 36.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m13.707 35.707-3 3-1.414-1.414 3-3 1.414 1.414ZM7 29a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 31a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM11.707 22.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.293 27.707-3-3 1.414-1.414 3 3-1.414 1.414ZM18 21v4.09h-2V21h2Z"
        fill="#333"
      />
      <path d="M34 18.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 10.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4ZM28.8 14a5.2 5.2 0 1 1 10.4 0 5.2 5.2 0 0 1-10.4 0ZM32.3 7a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 10.5V7.7h2v2.8h-2ZM37.493 7.693a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m36.093 10.493 2.1-2.1 1.414 1.414-2.1 2.1-1.414-1.414ZM41 12.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.2 14a1 1 0 0 1 1-1H41a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1-1ZM41.007 17.493a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 1 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m38.207 16.093 2.1 2.1-1.414 1.414-2.1-2.1 1.414-1.414ZM32.3 21a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 17.2a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1ZM27.693 17.493a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m31.907 17.507-2.1 2.1-1.414-1.414 2.1-2.1 1.414 1.414ZM27 12.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 14a1 1 0 0 1 1-1h2.8a1 1 0 1 1 0 2H27a1 1 0 0 1-1-1ZM30.507 7.693a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 0 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m30.493 11.907-2.1-2.1 1.414-1.414 2.1 2.1-1.414 1.414Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusMutation);
export default ForwardRef;
