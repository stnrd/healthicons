import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCannabis = (
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
        d="M48 0H0v48h48V0ZM24.43 5.744 24 5.022l-.43.722C21.623 9.014 20.5 12.871 20.5 17c0 .968.062 1.922.182 2.856A18.675 18.675 0 0 0 9.224 12.39l-.748-.156.156.747a18.676 18.676 0 0 0 7.628 11.572A15.297 15.297 0 0 0 15 24.5c-3.417 0-6.603 1.137-9.294 3.096L5.15 28l.556.404C8.397 30.363 11.583 31.5 15 31.5c1.471 0 2.9-.21 4.263-.607-.25.333-.483.684-.696 1.053-1.158 2.006-1.57 4.26-1.332 6.498l.072.684.628-.28c2.058-.913 3.804-2.396 4.962-4.402.035-.06.07-.122.103-.183V41h2v-6.737l.103.183c1.158 2.006 2.904 3.489 4.962 4.403l.628.279.072-.684c.237-2.238-.174-4.492-1.332-6.498-.213-.369-.445-.72-.696-1.053 1.364.396 2.792.607 4.263.607 3.417 0 6.603-1.137 9.294-3.096L42.85 28l-.556-.404C39.603 25.637 36.417 24.5 33 24.5c-.424 0-.844.017-1.26.052a18.675 18.675 0 0 0 7.628-11.571l.156-.748-.747.156a18.675 18.675 0 0 0-11.459 7.467c.12-.934.182-1.888.182-2.856 0-4.129-1.123-7.986-3.07-11.256Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCannabis);
export default ForwardRef;
