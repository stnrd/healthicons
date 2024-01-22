import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRheumatology = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm32 15c0-5.97-3.737-11.068-9-13.08V8h10a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H29v-2.92c5.263-2.012 9-7.11 9-13.08ZM27 8v7.681c0 .843.342 1.65.948 2.235l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.106 3.106 0 0 0 21 15.68V8h6Zm0 32v-7.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234V40h6ZM10 24c0 5.97 3.737 11.068 9 13.08V40H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10v2.92c-5.263 2.012-9 7.11-9 13.08Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRheumatology);
export default ForwardRef;
