import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleSexWorker = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M14.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.649 20c.05.352.093.729.132 1.122.218 2.245.219 4.679.219 5.378a1.5 1.5 0 0 0 3 0v-.007c0-.707 0-3.264-.233-5.662-.116-1.19-.297-2.43-.597-3.406-.148-.479-.355-1.002-.671-1.436-.317-.434-.909-.989-1.81-.989H9.31c-.901 0-1.493.555-1.81.99-.316.433-.523.956-.67 1.435-.3.976-.482 2.217-.598 3.406C6 23.229 6 25.786 6 26.493v.007a1.5 1.5 0 0 0 3 0c0-.7 0-3.133.22-5.378.038-.393.082-.77.131-1.122H10v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h1.31l.85 10.62A1.5 1.5 0 0 0 19 40.5V20h.649Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 12a4 4 0 0 1 4-4h1V6h2v2h1a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2h-1v4h1a4 4 0 0 1 0 8h-1v2h-2v-2h-1a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h1v-4h-1a4 4 0 0 1-4-4Zm2 0a2 2 0 0 0 2 2h1v-4h-1a2 2 0 0 0-2 2Zm8 6a2 2 0 0 0-2-2h-1v4h1a2 2 0 0 0 2-2ZM24 35c0-1.306.835-2.417 2-2.83V26h2v1h10v-1h2v6.17c1.165.413 2 1.524 2 2.83v7h-2v-3H26v3h-2v-7Zm10-6h-2v3h2v-3Zm-7 5a1 1 0 0 0-1 1v2h14v-2a1 1 0 0 0-1-1H27Zm9-5v3h2v-3h-2Zm-6 0h-2v3h2v-3Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMaleSexWorker);
export default ForwardRef;
