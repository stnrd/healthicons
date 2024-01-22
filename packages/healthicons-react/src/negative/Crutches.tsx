import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrutches = (
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
      <g clipPath="url(#crutches_svg__a)">
        <path fill="#fff" d="M0 0h48v48H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM32 4H16v4a2 2 0 0 0 2 2V10.037l.001.028.004.109.02.44c.02.398.055 1.012.115 1.887.122 1.748.346 4.536.758 8.713.148 1.5 1.03 2.843 1.726 3.902l.078.12c.38.578.707 1.083.946 1.574.236.486.349.886.349 1.237l.001 1.668L22 31A1 1 0 0 0 23 32v7.002a.998.998 0 0 0 1.997.002H25V32a1 1 0 0 0 1-1v-2.995c0-.346.112-.738.352-1.216.241-.483.573-.98.957-1.55l.064-.097c.706-1.048 1.61-2.392 1.732-3.923a5078.131 5078.131 0 0 1 .843-10.547L30.02 10A2 2 0 0 0 32 8V4Zm-4.004 6H20v.001l.004.096.018.418c.02.383.054.985.114 1.847.032.467.072 1.011.12 1.638h7.416a3001.703 3001.703 0 0 1 .283-3.49l.041-.51Zm-3.862 17.004c.103-.394.257-.765.43-1.11.304-.61.705-1.206 1.069-1.747l.016-.024c.79-1.175 1.386-2.105 1.462-3.061.156-1.983.29-3.66.401-5.062h-7.09c.119 1.384.271 3.044.466 5.017.096.973.704 1.929 1.486 3.122.366.558.768 1.17 1.072 1.795.163.334.308.692.409 1.07h.279Zm-1.832 14.954c.134-.632 1.039-.972 1.684-.972.658 0 1.568.34 1.707.982l.15.694c.093.431-.107.875-.518 1.036-.389.151-.888.302-1.339.302-.422 0-.915-.151-1.305-.303-.413-.161-.618-.607-.526-1.041l.147-.698Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="crutches_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCrutches);
export default ForwardRef;
