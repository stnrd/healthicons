import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDischargeLounge = (
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
      <path d="M23 11v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v26h-2.666c0-.062-.006-.124-.018-.187l-1.29-6.767 1.935-6.771a1 1 0 0 0-1.923-.55l-1.199 4.198H27v2h1.308v1.692h-.539a1 1 0 0 0-.39 1.921l-1.332 4.16A.999.999 0 0 0 26 35h-4a1 1 0 0 0-.048-.305l-1.33-4.159a1 1 0 0 0-.391-1.92h-.539v-1.693H21v-2h-7.84l-1.199-4.198a1 1 0 1 0-1.922.55l1.934 6.771-1.289 6.767a1.013 1.013 0 0 0-.018.187H8V9Zm31 31a1 1 0 0 0 1-1v-2H8v2a1 1 0 0 0 1 1h30Zm-4.982-11.813.081.428h-3.791v-1.692h3.96l-.23.802a1 1 0 0 0-.02.462ZM35.315 35l-.762-4H29.33l-1.28 4h7.265Zm-21.333-6.813-.081.428h3.791v-1.692h-3.96l.23.802a1 1 0 0 1 .02.462ZM12.685 35l.762-4h5.223l1.28 4h-7.265Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDischargeLounge);
export default ForwardRef;
