import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineMoneyBag = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333 1 1 0 1 0 1.886-.666ZM23 24a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628.212-.114.44-.231.684-.35Zm17.379 6.307 2.957-4.323c-2.75.198-6.022.844-9.172 1.756-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002ZM16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891-.116 2.293-1.018 4.252-3.078 5.708-2.147 1.517-5.758 2.627-11.537 2.627-5.785 0-9.413-1.091-11.58-2.591-2.075-1.438-2.986-3.37-3.115-5.632-.135-2.35.585-5.093 1.932-7.87 1.285-2.648 3.078-5.197 5.005-7.274Zm-1.15-6.714c.8.238 1.636.445 2.484.602 2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineMoneyBag);
export default ForwardRef;
