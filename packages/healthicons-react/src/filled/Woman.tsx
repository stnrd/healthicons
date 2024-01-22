import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWoman = (
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
        d="M28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.5 21c0 2.53-2.336 11.045-3.191 14.078a.997.997 0 0 0 .81 1.258c5.986.9 9.78.871 15.767-.005a.996.996 0 0 0 .816-1.25c-.845-3.091-3.2-11.893-3.202-14.078V19.495c.398.5.769 1.245.997 2.05l.022.077c.139.492.191.676.24.862.03.111.058.223.104.403.129.505.393 1.546 1.203 4.622a2 2 0 1 0 3.868-1.018c-.77-2.926-1.044-4-1.184-4.551a40.565 40.565 0 0 0-.405-1.485c-.344-1.217-.931-2.469-1.724-3.462C31.873 16.056 30.648 15 29 15H19c-1.648 0-2.873 1.056-3.621 1.993-.793.993-1.38 2.245-1.724 3.462-.256.903-.26.92-.405 1.485-.14.551-.414 1.625-1.184 4.551a2 2 0 1 0 3.868 1.018c.81-3.076 1.074-4.117 1.203-4.622.046-.18.074-.292.104-.403.049-.186.101-.37.24-.861l.022-.078c.228-.805.6-1.55.997-2.05V21Zm0 21.388V38.57c1.41.21 2.713.341 3.988.398l-1.04 3.814a1.5 1.5 0 0 1-2.948-.394Zm8.053.394-1.042-3.82a40.785 40.785 0 0 0 3.989-.405v3.83a1.5 1.5 0 0 1-2.947.395Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWoman);
export default ForwardRef;
