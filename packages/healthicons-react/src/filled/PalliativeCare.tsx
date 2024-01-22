import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPalliativeCare = (
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
        d="M17.031 7C11.811 7 8 12.453 8 18.333c0 1.58.246 3.093.68 4.53.212.703.469 1.388.763 2.054C13.55 34.205 25 39.867 25 39.867s2.533-1.334 5.644-3.694c-1.97-1.392-4.694-3.747-6.008-6.821a10.031 10.031 0 0 1-.407-1.134 8.897 8.897 0 0 1-.362-2.498c0-3.245 2.033-6.253 4.816-6.253 1.932 0 3.365 1.35 4.25 3.264.885-1.914 2.319-3.264 4.25-3.264 1.842 0 3.354 1.316 4.167 3.146.415-1.37.65-2.8.65-4.28C42 12.453 38.189 7 32.969 7c-3.622 0-6.31 2.447-7.969 5.917C23.341 9.447 20.653 7 17.031 7ZM40.456 25.101a1.133 1.133 0 0 1 1.117 1.15c-.05 3.71-1.845 6.235-3.589 7.8a12.9 12.9 0 0 1-2.374 1.685 11.151 11.151 0 0 1-1.026.499c-.029.011-.052.02-.069.028l-.021.008-.008.003-.003.001a1.134 1.134 0 0 1-.802-2.12l.005-.002.036-.015a8.945 8.945 0 0 0 .794-.388 10.638 10.638 0 0 0 1.954-1.385c1.413-1.268 2.797-3.234 2.837-6.146a1.133 1.133 0 0 1 1.149-1.118Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPalliativeCare);
export default ForwardRef;
