import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEnzyme = (
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
        d="M9.071 24.929c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0l7.222-7.222-14.142-14.142-7.222 7.222Zm8.636-8.636L31.85 30.435l6.92-6.92c3.906-3.906 3.906-10.237 0-14.142-3.905-3.906-10.236-3.906-14.142 0l-6.92 6.92Zm12.361-1.775a2 2 0 1 0 3.864-1.036l1.932-.517a4 4 0 1 1-4.9-2.829l.518 1.932a2 2 0 0 0-1.414 2.45Zm5.808 4.199c-.824 1.22-2.6 1.893-4.553 1.804-1.957-.089-3.652-.922-4.34-2.167a1 1 0 1 0-1.75.968c1.154 2.087 3.665 3.091 5.999 3.197 2.338.107 4.94-.667 6.301-2.682a1 1 0 1 0-1.657-1.12Zm-20.092 17.85a.784.784 0 0 0 0-1.567v-2A2.783 2.783 0 1 1 13 35.783h2c0 .433.35.784.784.784Zm-1.741-9.07c1.204-.85 3.102-.85 4.897-.074 1.798.777 3.088 2.157 3.29 3.565a1 1 0 1 0 1.98-.285c-.34-2.36-2.332-4.19-4.477-5.116-2.148-.928-4.855-1.127-6.843.275a1 1 0 0 0 1.153 1.634Zm3.095 3.318c-1.169-.488-2.313-.474-2.964-.056a1 1 0 0 1-1.08-1.683c1.433-.92 3.345-.72 4.815-.106 1.46.61 2.942 1.822 3.234 3.468a1 1 0 1 1-1.969.35c-.12-.676-.858-1.48-2.036-1.973ZM10.5 35a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEnzyme);
export default ForwardRef;
