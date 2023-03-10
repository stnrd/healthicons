import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGirl0105Y = (
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
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.702 18.28a3 3 0 1 1 1.596 5.784c-1.462.404-2.829.734-4.14.989.586 1.484 1.43 3.158 2.033 4.294.64 1.206-.076 2.743-1.482 2.942-5.155.731-8.766.711-14.333-.01-1.44-.185-2.173-1.77-1.498-2.992.652-1.18 1.543-2.906 2.103-4.436a68.78 68.78 0 0 1-3.244-.778 3 3 0 1 1 1.526-5.803c3.597.946 6.215 1.39 8.75 1.402 2.524.01 5.13-.41 8.689-1.392Zm1.762 2.626a1 1 0 0 0-1.23-.698c-3.66 1.01-6.459 1.476-9.23 1.464-2.775-.012-5.577-.502-9.25-1.467a1 1 0 1 0-.508 1.934c1.51.397 2.897.721 4.213.967l1.063.199-.281 1.044c-.535 1.985-1.811 4.457-2.612 5.906a.042.042 0 0 0-.004.009v.006a.048.048 0 0 0 .008.027c5.409.699 8.836.715 13.791.013a.038.038 0 0 0 .004-.015v-.003l-.004-.007c-.753-1.42-1.968-3.834-2.56-5.708l-.347-1.103 1.141-.185c1.579-.256 3.249-.64 5.108-1.153a1 1 0 0 0 .698-1.23ZM24 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 33.514V37a1.5 1.5 0 0 0 2.948.391l.94-3.483A38.92 38.92 0 0 1 19 33.514Zm7.11.387.942 3.49a1.5 1.5 0 0 0 2.948-.39V33.5a40.944 40.944 0 0 1-3.89.401Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGirl0105Y);
export default ForwardRef;
