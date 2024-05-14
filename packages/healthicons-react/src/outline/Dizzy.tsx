import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDizzy = (
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
      <path d="M28.707 17.293a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L31.914 20.5l1.793-1.793a1 1 0 0 0-1.414-1.414L30.5 19.086l-1.793-1.793ZM15.707 17.293a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L18.914 20.5l1.793-1.793a1 1 0 0 0-1.414-1.414L17.5 19.086l-1.793-1.793Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 32c0 3.314-3.134 4-7 4s-7-.686-7-4 3.134-6 7-6 7 2.686 7 6Zm-2 0c0 .502-.114.763-.213.912-.105.157-.295.339-.677.515-.843.39-2.213.573-4.11.573-1.896 0-3.267-.183-4.11-.573-.382-.176-.572-.358-.677-.515-.1-.149-.213-.41-.213-.912 0-1.931 1.938-4 5-4 3.062 0 5 2.069 5 4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDizzy);
export default ForwardRef;
