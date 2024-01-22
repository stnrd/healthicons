import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPalmBranchesRoof = (
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
        d="M24 6c-.585 0-1.045.383-.997.83l.252 2.317a1.93 1.93 0 0 0-.166.078l-.922-2.034c-.178-.393-.708-.512-1.147-.259-.44.254-.6.772-.35 1.123l1.448 2.022L7.336 24.93c-.482.484-.463 1.162.171 1.42.66.267 1.741.587 3.493.874v12.34c0 .703.496 1.123.812 1.321.344.216.768.364 1.178.475.836.224 1.906.365 2.92.456a54.039 54.039 0 0 0 3.993.183h1.097v-6c0-1.424 1.307-3 3-3s3 1.576 3 3v6h1.096l.26-.003a54.039 54.039 0 0 0 3.733-.18c1.015-.091 2.085-.232 2.92-.456.411-.11.835-.26 1.179-.475.316-.198.812-.618.812-1.32V27.225c1.752-.287 2.833-.607 3.493-.875.634-.257.653-.935.171-1.42L25.977 10.173l1.52-2.12c.25-.35.087-.866-.352-1.12-.44-.253-.968-.136-1.145.255l-.957 2.114a1.93 1.93 0 0 0-.298-.154l.252-2.317C25.044 6.383 24.585 6 24 6Zm4 35v1-1Zm-8 0v1-1Zm4-29.98L10.072 25.018C12.282 25.493 16.43 26 24 26c7.57 0 11.718-.507 13.928-.983L24 11.02ZM24 28c4.906 0 8.448-.21 11-.501v11.758c-.113.05-.28.11-.51.172-.664.179-1.594.307-2.58.396a46.572 46.572 0 0 1-2.91.16V36c0-2.4-2.078-5-5-5s-5 2.6-5 5v3.984l-.22-.006a46.577 46.577 0 0 1-2.69-.153c-.986-.089-1.916-.217-2.58-.396a3.486 3.486 0 0 1-.51-.172V27.499c2.552.291 6.094.501 11 .501Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPalmBranchesRoof);
export default ForwardRef;
