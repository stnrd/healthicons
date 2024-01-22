import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRmnh = (
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
      <g clipPath="url(#rmnh_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM36.98 9.84a3.84 3.84 0 1 1-7.68 0 3.84 3.84 0 0 1 7.68 0Zm1.272 5.386a1.5 1.5 0 0 0-1.471-.614l-7.274 1.213a2.5 2.5 0 0 0-1.825 1.348L25.318 21.9a1.5 1.5 0 0 0 .165 1.602l3.6 4.548a1.5 1.5 0 0 0 2.353-1.862l-1.802-2.276c.175-.219.4-.404.667-.538l2.06-1.03-.726-.245a1 1 0 0 1-.682-.948v-1.92a1 1 0 1 1 2 0v1.202l1.795.604a1.944 1.944 0 1 1 1.85.875 2.003 2.003 0 0 1 .447.913l-1.174 1.418a1.5 1.5 0 1 0 2.313 1.912l3.472-4.2a1.5 1.5 0 0 0 .069-1.822l-3.473-4.908ZM28.087 29.134a2.397 2.397 0 0 0 4.569-1.014h.003a4.3 4.3 0 0 0 2.286-.653 2.395 2.395 0 0 0 3.612.537c.763 3.073 1.512 5.314 1.976 6.582.224.616-.166 1.302-.816 1.38-3.977.479-8.579.49-12.544-.008a.984.984 0 0 1-.801-1.29c.42-1.287 1.124-3.481 1.715-5.534ZM28 40.5v-2.486c1.275.19 2.464.316 3.622.38l-.674 2.497A1.5 1.5 0 0 1 28 40.5Zm8.052.39-.676-2.504A41.55 41.55 0 0 0 39 38v2.5a1.5 1.5 0 0 1-2.948.39Zm-13.2-11.741a1.5 1.5 0 1 0-.705-2.916c-2.86.692-5.018 1.003-7.142.995-2.127-.008-4.29-.336-7.168-.999a1.5 1.5 0 0 0-.674 2.924c1.706.392 3.223.685 4.668.865v4.334a1.518 1.518 0 0 0-.022.127l-.733 5.834a1.5 1.5 0 0 0 2.962.465l1.093-5.795 1.092 5.795a1.5 1.5 0 0 0 2.963-.465l-.734-5.834a1.535 1.535 0 0 0-.022-.127v-4.35c1.37-.178 2.812-.464 4.423-.853ZM15 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="rmnh_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRmnh);
export default ForwardRef;
