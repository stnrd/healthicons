import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalPig = (
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
      <g clipPath="url(#animal-pig_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm20.208 13c-4.646 0-7.192.935-8.807 2.274-1.352-.426-2.551-.346-4.401.175 1.252.907 1.936 1.553 2.402 2.288-.233.4-.448.806-.663 1.211C7.738 20.84 6.747 22.711 4 23.762v3.32c1.98 1.96 5.972 3.312 9.108 2.87.574 1.349 1.61 2.14 2.892 2.576V36a1 1 0 0 0-1 1v1h4v-5.005c1.72.043 3.56-.184 5.207-.387l.77-.094c-.689-.948-1.04-2.149-.968-3.565a1 1 0 0 1 1.998.102c-.072 1.4.425 2.323 1.226 2.933.76.578 1.88.935 3.266 1.004.168-.008.335-.02.501-.037V36a1 1 0 0 0-1 1v1h4v-5.832c3.532-1.543 6-5.067 6-9.168 0-1.94-.552-3.75-1.507-5.282a12.95 12.95 0 0 0 1.119-.77 9.214 9.214 0 0 0 1.033-.924c.172 0 .341-.002.506-.006.266-.006.513-.015.747-.023.348-.013.67-.025.99-.025a1 1 0 1 0 0-2c-.31 0-.662.012-1.008.024.076-.275.12-.566.12-.87 0-.858-.326-1.579-.874-2.078a2.795 2.795 0 0 0-1.873-.71 2.782 2.782 0 0 0-1.878.705c-.551.5-.875 1.223-.875 2.084 0 .851.3 1.56.888 2.06.207.176.436.314.674.422-.286.202-.562.377-.8.518a9.973 9.973 0 0 0-6.298-3.08V13H20.207ZM13 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm27-7.875c0 .25-.087.536-.282.856a4.749 4.749 0 0 1-.19-.025c-.46-.07-.715-.185-.844-.295-.083-.07-.184-.19-.184-.536 0-.336.114-.508.219-.603a.785.785 0 0 1 .529-.185c.218 0 .408.076.532.19.108.097.22.269.22.598Z"
        />
      </g>
      <defs>
        <clipPath id="animal-pig_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalPig);
export default ForwardRef;
