import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPhysicalTherapy = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#physical-therapy_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm25 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM17.313 29h2.935l3.864 3.813 1.92 4.427a2 2 0 1 0 3.67-1.591l-2.075-4.784a2 2 0 0 0-.43-.627L25.943 29H34a2 2 0 0 1 2 2v7h2v-7a4 4 0 0 0-4-4h-3.992a2 2 0 0 0 .038-4c-1.625-.037-2.08-.307-2.397-.593-.225-.202-.482-.516-.846-1.074-.261-.402-.53-.853-.863-1.41-.14-.237-.294-.493-.462-.772l-.04-.066a8.402 8.402 0 0 0-.423-.657c-.188-.253-.544-.674-1.142-.923-.6-.25-1.156-.206-1.493-.153-.319.05-.66.148-.932.226-.847.243-1.543.882-1.99 1.367A9.575 9.575 0 0 0 18.039 21c-.76 1.47-1.435 3.716-.483 5.823.027.061.058.12.09.177H14a4 4 0 0 0-4 4v7h2v-7a2 2 0 0 1 2-2h3.16l-.126.5-1.025 3.46-1.508 2.43a2 2 0 0 0 3.399 2.109l1.65-2.66c.093-.151.167-.315.217-.486l.693-2.335L17.313 29Zm12.681-2h-6.078l-1.183-1.167 1.247-1.557c.295.393.62.768.993 1.104 1.346 1.212 2.937 1.572 4.98 1.62a2.431 2.431 0 0 0 .041 0Z"
        />
      </g>
      <defs>
        <clipPath id="physical-therapy_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPhysicalTherapy);
export default ForwardRef;
