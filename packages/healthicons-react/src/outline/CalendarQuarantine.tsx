import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCalendarQuarantine = (
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
        d="M18.896 31a5.17 5.17 0 0 0 .788 1.902l-.584.584a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.584-.584c.565.38 1.21.653 1.902.788v.942A1 1 0 0 0 23.3 38h1.4a1 1 0 0 0 .3-1.954v-.942a5.18 5.18 0 0 0 2.303-1.087l.883.883a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.02-1.02c.244-.453.423-.946.524-1.466h.942A1 1 0 0 0 32 30.7v-1.4a1 1 0 0 0-1.954-.3h-.942a5.17 5.17 0 0 0-.788-1.902l.584-.584a1 1 0 0 0 1.407-1.421l-1.4-1.4a1 1 0 0 0-1.421 1.407l-.584.584A5.169 5.169 0 0 0 25 24.896v-.942A1 1 0 0 0 24.7 22h-1.4a1 1 0 0 0-.3 1.954v.942a5.169 5.169 0 0 0-1.902.788l-.584-.584a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.584.584A5.17 5.17 0 0 0 18.896 29h-.942a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3h.942Zm1.904-1a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6a1 1 0 0 0-1 1v2h-5a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h28c1.658 0 3-1.347 3-3.002V12.002A3.002 3.002 0 0 0 38 9h-3v2h3c.55 0 1 .448 1 1.002V18H9v-6a1 1 0 0 1 1-1h5v1a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm-6 34a1 1 0 0 1-1-1V20h30v18.998C39 39.55 38.55 40 38 40H10Z"
      />
      <path d="M32 13a1 1 0 0 1-1-1v-1H19V9h12V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCalendarQuarantine);
export default ForwardRef;
