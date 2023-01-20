import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUmbrella = (
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
        d="M23.99 4a1 1 0 0 1 1 1v1.005c8.438.467 15.33 6.732 16.76 14.877a18.142 18.142 0 0 1 .245 2.141c.016.293-.34.343-.557.147a7.233 7.233 0 0 0-1.528-1.056 7.187 7.187 0 0 0-3.302-.798c-2.17 0-4.117.958-5.44 2.474a.664.664 0 0 1-.498.233.657.657 0 0 1-.454-.187 8.993 8.993 0 0 0-5.24-2.463V39.5a2.5 2.5 0 0 0 5 0V38a1 1 0 1 1 2 0v1.5a4.5 4.5 0 1 1-9 0V21.37a8.993 8.993 0 0 0-5.28 2.476.62.62 0 0 1-.43.177.627.627 0 0 1-.471-.22 7.201 7.201 0 0 0-5.451-2.487 7.188 7.188 0 0 0-4.83 1.854c-.218.196-.573.146-.557-.147a18.226 18.226 0 0 1 .245-2.14C7.633 12.727 14.54 6.458 22.99 6.002V5a1 1 0 0 1 1-1Zm0 4c-.072 0-.142-.008-.209-.022-7.301.087-13.43 5.051-15.28 11.785a9.208 9.208 0 0 1 2.843-.447c2.287 0 4.381.835 5.991 2.213a10.981 10.981 0 0 1 6.626-2.213c2.493 0 4.795.83 6.641 2.225a9.188 9.188 0 0 1 6.006-2.225 9.21 9.21 0 0 1 2.842.447C37.603 13.037 31.486 8.077 24.197 7.98A1.005 1.005 0 0 1 23.99 8Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUmbrella);
export default ForwardRef;
