import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmokingCessationAlt = (
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
      <path d="M30 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM26 15.222c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.222 3.222 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0 2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864v-.642Z" />
      <path d="M28.852 15.383a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.152v1.892a1 1 0 1 0 2 0v-1.892a4.144 4.144 0 0 0-1.466-3.166 3.138 3.138 0 0 0 .835-2.136v-1.003a3.522 3.522 0 0 0-3.522-3.522 1 1 0 1 0 0 2c.84 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102ZM33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm13.416-7.999A17.933 17.933 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l12.442 12.443a1 1 0 0 1 .16.207H26a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10.086L10.823 11.737A17.937 17.937 0 0 0 6 24c0 9.941 8.059 18 18 18 4.61 0 8.817-1.734 12.001-4.584l-5.208-5.209a1 1 0 0 1 1.414-1.414L37.416 36Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSmokingCessationAlt);
export default ForwardRef;
