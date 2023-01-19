import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledChildCare = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M32.74 14.998a4.5 4.5 0 1 0 0-8.998 4.5 4.5 0 0 0 0 8.998Zm-12.003 5.471a2.643 2.643 0 1 0-3.75-3.728l-1.96 1.972H12.44a2.643 2.643 0 0 0 0 5.287h2.76a5 5 0 0 0 3.595-1.524l1.94-2.007Zm.178 8.72s-2.278-.425-3.21 0c-.694.316-3.38 1.28-4.705 1.752v8.86c.767-.044 2.293-.125 2.945-.099 1.943.079 3.394.54 4.861 1.006 1.369.435 2.752.875 4.56 1.012.456.034.898.079 1.327.122 1.55.156 2.922.294 4.058-.122 1.45-.531 9.732-4.566 10.767-5.628 1.036-1.062.518-3.93-2.692-3.399-1.583.262-3.42 1.016-5.084 1.699-1.71.701-3.239 1.329-4.13 1.275-1.76-.106-6.42-.956-6.42-.956l5.35.065s.756.04 1.794-.702c1.04-.742 1.968-2.867.415-2.867s-3.21-.532-3.21-.532l-6.626-1.486ZM6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V30.001Zm28.632-11.343a2.667 2.667 0 0 1 .004 5.334l-3.137.004c-.014 0-.027-.002-.04-.004a.234.234 0 0 0-.038-.003 2.292 2.292 0 0 1-1.703-.694l-.721-.722a4.652 4.652 0 0 1-3.342 1.423h-3.083l-.468-9.351h4.958a4 4 0 0 1 2.857 1.2l2.756 2.813h1.957Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledChildCare);
export default ForwardRef;
