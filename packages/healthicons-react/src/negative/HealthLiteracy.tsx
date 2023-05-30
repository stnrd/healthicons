import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthLiteracy = (
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
      <g clipPath="url(#health_literacy_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm25 36.419V13.177c5.317-2.504 9.342-4.055 15-2.64v23.431a.034.034 0 0 1-.007.007.058.058 0 0 1-.047.012c-5.732-1.047-10.014.213-14.923 2.435-.005.003-.008.003-.008.003h-.001a.026.026 0 0 1-.011-.004L25 36.419Zm17-25.895v.46c.406.089.82.185 1.243.287a.991.991 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.011 1.011 0 0 1 4 37.775V12.236c0-.458.311-.858.757-.965.423-.102.837-.198 1.243-.287v-.46c0-.885.589-1.694 1.484-1.92 6.15-1.546 10.628.092 15.757 2.477.25.052.503.104.759.16.256-.056.51-.108.76-.16 5.128-2.385 9.606-4.023 15.756-2.476A1.973 1.973 0 0 1 42 10.524Zm-34 .014c5.658-1.416 9.683.135 15 2.64v23.24l-.003.003a.026.026 0 0 1-.01.004h-.002l-.008-.002c-4.909-2.223-9.191-3.483-14.923-2.437a.058.058 0 0 1-.047-.011l-.004-.003-.001-.002L8 33.968V10.537ZM33 15a1 1 0 1 0-2 0v2.734c-.916.33-1.87.784-2.978 1.388a1 1 0 0 0 .956 1.756A23.365 23.365 0 0 1 31 19.882V23a1 1 0 1 0 2 0v-3.765c.884-.187 1.806-.249 2.986-.232a1 1 0 0 0 .028-2c-1.108-.016-2.071.032-3.014.196V15ZM19.142 28.934c-3.097-1.188-4.716-1.462-7.632-1.434l-.02-2c3.18-.03 5.048.294 8.368 1.566l-.716 1.868ZM11.51 22.5c2.916-.028 4.535.247 7.632 1.434l.716-1.868c-3.32-1.272-5.188-1.597-8.368-1.566l.02 2Zm7.632-3.566c-3.097-1.188-4.716-1.462-7.632-1.434l-.02-2c3.18-.03 5.048.293 8.368 1.566l-.716 1.868Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="health_literacy_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHealthLiteracy);
export default ForwardRef;
