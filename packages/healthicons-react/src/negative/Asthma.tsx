import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAsthma = (
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
      <g clipPath="url(#asthma_svg__a)" fill="#000">
        <path d="M15.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM39.242 19.62l.463-1.72-2.536-.676-.349 1.294 2.422 1.102Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM5.918 6.044C6.275 6.015 6.636 6 7 6c7.18 0 13 5.82 13 13v1.697l2.796 4.194C23.682 26.22 22.729 28 21.13 28H20v2a1 1 0 0 1-1 1h-1a2 2 0 0 0-2 2h3a1 1 0 0 1 1 1v3c0 1.448-.77 2.715-1.917 3.416-.715.436-1.484.494-2.16.405-.666-.088-1.303-.324-1.826-.549L10 38.517V43a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.041a1 1 0 0 1 .918-.997Zm30.802 8.99a1 1 0 0 0-1.223.706l-.493 1.83a1 1 0 0 0-1.372.65L31.247 27H28a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6.204a5 5 0 0 0 4.82-3.673l2.94-10.678a1 1 0 0 0-.551-1.177l-.294-.132.777-2.888a1 1 0 0 0-.708-1.226l-4.468-1.192ZM26 35v-7h-2v7h2Z"
        />
      </g>
      <defs>
        <clipPath id="asthma_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAsthma);
export default ForwardRef;
