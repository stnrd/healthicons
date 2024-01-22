import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWar = (
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
        d="M9.007 24c-1.104 0-2.021-.9-1.87-1.995C8.07 15.218 13.696 10 20.5 10c4.997 0 9.36 2.815 11.694 7H43a1 1 0 1 1 0 2h-9.886c.352.956.607 1.962.75 3.005.15 1.095-.767 1.995-1.872 1.995H9.007Zm11.937-2H9.159c.92-5.728 5.697-10 11.341-10 5.644 0 10.422 4.273 11.341 10H20.944ZM18 32a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM24 35a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM36 32a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.187 26c-2.174 0-3.709 2.006-3.021 3.949l1.397 3.948C6.43 36.347 8.864 38 11.606 38h24.788c2.742 0 5.176-1.653 6.043-4.103l1.397-3.948c.688-1.943-.847-3.949-3.021-3.949H7.187Zm34.621 2.461c-.197-.257-.54-.461-.995-.461H7.187c-.455 0-.799.204-.995.461a.84.84 0 0 0-.14.82l1.397 3.95C8.013 34.823 9.649 36 11.606 36h24.788c1.957 0 3.593-1.176 4.157-2.77l1.398-3.948a.84.84 0 0 0-.141-.82Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWar);
export default ForwardRef;
