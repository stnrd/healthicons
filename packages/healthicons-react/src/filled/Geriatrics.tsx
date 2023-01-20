import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGeriatrics = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm11.693 10.68c1.16-1.833 3.173-3.68 6.174-3.68a2 2 0 0 1 1.938 1.508l1.155 4.555 2.424.474a2 2 0 1 1-.768 3.926l-3.666-.717a2 2 0 0 1-1.555-1.471l-.216-.85C22.511 25.193 22 27.303 22 29.5V36a2 2 0 1 1-4 0v-5.98l-.068-.125a44.349 44.349 0 0 1-.72-1.376 22.689 22.689 0 0 1-.756-1.651 8.84 8.84 0 0 1-.293-.838A3.807 3.807 0 0 1 16 25c0-1.41.558-3.528 1.693-5.32Zm8.454 9.316a2.5 2.5 0 0 1 2.5-2.5h.084a2.584 2.584 0 0 1 2.584 2.585v7.975a1 1 0 1 1-2 0V29.08a.584.584 0 0 0-.584-.584h-.085a.5.5 0 0 0-.5.5h-2ZM29.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGeriatrics);
export default ForwardRef;
