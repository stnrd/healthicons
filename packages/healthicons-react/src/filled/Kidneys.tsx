import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgKidneys = (
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
        d="M12.548 30.753c-10.864-4.582-6.577-20.049.965-22.604 3.129-1.06 6.58 2.457 6.559 4.64-.01.944-.497 1.865-1.005 2.824-.666 1.26-1.368 2.585-1.07 4.118.525 2.7 1.113 7.256-.402 9.418-1.515 2.163-3.038 2.451-5.047 1.604ZM34.347 8.149c7.542 2.555 11.83 18.022.965 22.604-2.009.848-3.532.559-5.047-1.604-1.515-2.162-.927-6.718-.402-9.418.298-1.533-.404-2.859-1.07-4.118-.508-.959-.995-1.88-1.004-2.824-.022-2.183 3.43-5.7 6.558-4.64ZM28.618 22.78l.07.997H28.7l.003-.001a1.286 1.286 0 0 0-.168.036 1.552 1.552 0 0 0-.473.226c-.29.206-.716.664-.716 1.82v14.466h-2V25.858c0-1.766.71-2.847 1.555-3.45a3.554 3.554 0 0 1 1.46-.603 2.47 2.47 0 0 1 .16-.02l.016-.002H28.548c0-.001.002-.001.07.997ZM19.242 22.78c-.068.997-.069.997-.07.997h-.012l-.003-.001.024.003a1.553 1.553 0 0 1 .617.258c.29.207.716.665.716 1.821v14.466h2V25.858c0-1.766-.71-2.847-1.556-3.45a3.552 3.552 0 0 0-1.46-.603 2.472 2.472 0 0 0-.16-.02l-.015-.002H19.312c0-.001-.001-.001-.07.997Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgKidneys);
export default ForwardRef;
