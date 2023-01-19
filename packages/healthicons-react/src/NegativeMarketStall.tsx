import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeMarketStall = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM8.418 6.656c.13-.394.467-.656.845-.656h29.474c.378 0 .715.262.845.656l2.308 7.011c.073.22.11.453.11.687v2.789C42 18.72 40.849 20 39.429 20c-.529 0-1.02-.177-1.429-.481a2.606 2.606 0 0 1-.183-.15l-.023-.02a2.73 2.73 0 0 1-.31-.336 3.036 3.036 0 0 1-.627-1.87c0 .709-.232 1.358-.617 1.857-.07.091-.146.177-.225.258a2.426 2.426 0 0 1-1.73.742c-1.419 0-2.57-1.278-2.57-2.855C31.712 18.722 30.561 20 29.142 20c-1.42 0-2.572-1.28-2.572-2.857C26.571 18.72 25.421 20 24 20c-1.42 0-2.57-1.278-2.571-2.855C21.427 18.722 20.277 20 18.857 20c-1.42 0-2.571-1.28-2.571-2.857 0 1.578-1.152 2.857-2.572 2.857-.658 0-1.26-.275-1.714-.727a2.747 2.747 0 0 1-.23-.26 3.036 3.036 0 0 1-.627-1.87c0 .709-.233 1.358-.617 1.857a2.617 2.617 0 0 1-.517.512c-.41.308-.905.488-1.438.488C7.151 20 6 18.72 6 17.143v-2.789a2.2 2.2 0 0 1 .11-.687l2.308-7.01ZM10 21.23V29H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h33a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H38v-7.77a3.916 3.916 0 0 1-1.143-.703 3.953 3.953 0 0 1-.857.576V29H22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3h-3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H18v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H12v-7.897a3.953 3.953 0 0 1-.857-.576c-.336.295-.72.535-1.143.703ZM8.5 33a.5.5 0 0 0-.5.5V41a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-7.5a.5.5 0 0 0-.5-.5h-31Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeMarketStall);
export default ForwardRef;
