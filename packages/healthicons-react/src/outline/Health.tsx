import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealth = (
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
      <path d="M22 22v-7h4v7h7v4h-7l-.001 7h-4v-7h-7v-4h7Z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.823 36.991c2.448 2.211 5.13 4.037 8.158 5.477 1.622.77 3.546.7 5.101-.187 2.623-1.496 4.906-3.297 7.113-5.29 4.678-4.226 7.406-10.041 7.585-16.174l.209-7.151c.024-.832.001-2.666.001-2.666-1.047-.173-2.105-.3-3.162-.426-3.27-.392-6.526-.781-9.383-2.528l-2.037-1.245a5.537 5.537 0 0 0-5.737 0L19.72 7.994c-3.267 1.996-7.248 2.374-11.101 2.74-.873.083-1.74.166-2.59.266 0 0-.024 1.845 0 2.689l.209 7.128c.179 6.133 2.906 11.948 7.585 16.174Zm-5.804-24.19c0 .32.003.615.01.83l.208 7.128c.163 5.57 2.64 10.876 6.926 14.748 2.312 2.087 4.833 3.802 7.677 5.154a3.545 3.545 0 0 0 3.252-.117c2.455-1.4 4.619-3.101 6.763-5.037 4.286-3.872 6.763-9.177 6.926-14.748l.209-7.152c.006-.223.01-.538.01-.874-.468-.06-.944-.117-1.43-.176l-.054-.006a68.637 68.637 0 0 1-3.322-.455c-2.244-.38-4.592-.999-6.792-2.343l-2.037-1.246a3.537 3.537 0 0 0-3.651 0L20.763 9.7c-2.32 1.417-4.88 2.089-7.347 2.486-1.53.246-3.178.403-4.721.551l-.676.065Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHealth);
export default ForwardRef;
