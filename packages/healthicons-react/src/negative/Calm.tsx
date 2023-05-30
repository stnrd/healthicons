import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCalm = (
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
      <g
        clipPath="url(#calm_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#333"
      >
        <path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16ZM13.743 24.35c-.12.738.381 1.445 1.064 1.883.714.457 1.732.707 2.93.53a3.794 3.794 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.643 1.448a.5.5 0 0 0-.667.39Zm20.076 0c.119.738-.382 1.445-1.065 1.883-.714.457-1.731.707-2.93.53a3.794 3.794 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39Zm-2.732 8.084c-.167.394-.439.773-.772 1.12C29.022 34.9 26.757 36 24.013 36c-2.737 0-5.037-1.096-6.31-2.455a3.966 3.966 0 0 1-.753-1.102c-.16-.366-.271-.832-.151-1.306.136-.54.535-.927 1.052-1.082.453-.136.94-.082 1.388.044 2.353.614 3.5.888 4.638.893 1.135.005 2.308-.258 4.704-.894l.014-.004c.493-.123.997-.168 1.454-.05.496.13.946.462 1.135 1.016.17.498.064.994-.097 1.374Z" />
        <path d="M0 0h48v48H0V0Zm24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z" />
      </g>
      <defs>
        <clipPath id="calm_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCalm);
export default ForwardRef;
