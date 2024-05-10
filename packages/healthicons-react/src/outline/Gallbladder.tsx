import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGallbladder = (
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
        d="M28.561 19.985A7.68 7.68 0 0 1 30 21.245V6h2v11.308c.758-1.007 1.74-1.88 2.966-2.654 2.24-1.413 2.838-2.974 2.756-4.122-.085-1.19-.904-2.205-2.038-2.583l.632-1.898c1.866.622 3.256 2.305 3.401 4.34a5.12 5.12 0 0 1-.32 2.164 43.467 43.467 0 0 1 4.357-1.386l.492 1.938c-1.866.474-5.83 1.736-8.212 3.239-1.349.85-2.268 1.783-2.892 2.85-.621 1.061-.985 2.312-1.142 3.854V42h-2V27c0-2.681-1.096-4.366-2.561-5.36-1.282-.87-2.91-1.252-4.48-1.21a3.999 3.999 0 0 1-2.042 4.082C19.95 25.041 19 25.894 19 27v6h-.019A6.5 6.5 0 0 1 6.02 33H6v-3c0-7.18 5.82-13 13-13 1.255 0 2.374.578 3.108 1.481 2.134-.218 4.534.201 6.453 1.504ZM19 19c-6.075 0-11 4.925-11 11v2.675l.013.173a4.5 4.5 0 0 0 8.974 0l.013-.173V27c0-1.16.506-2.095 1.078-2.762.563-.657 1.26-1.142 1.88-1.481A1.999 1.999 0 0 0 19 19Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGallbladder);
export default ForwardRef;
