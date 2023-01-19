import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineVirusMutation = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M12.857 8c-.46 0-.923.2-1.28.593A2.31 2.31 0 0 0 11 10.142V18a1 1 0 1 1-2 0v-7.858c0-1.07.385-2.112 1.097-2.894C10.81 6.462 11.802 6 12.857 6H22.5a1 1 0 1 1 0 2h-9.643Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M6.293 14.293a1 1 0 0 1 1.414 0L10 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414ZM29.5 40h5.643c.46 0 .923-.2 1.28-.593A2.31 2.31 0 0 0 37 37.858V30a1 1 0 1 1 2 0v7.858c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M41.707 33.707a1 1 0 0 1-1.414 0L38 31.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414ZM17 26a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm5-10a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm7.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m20.293 26.293 3-3 1.414 1.414-3 3-1.414-1.414ZM27 29a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M22 31a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm4.707 5.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m22.707 34.293 3 3-1.414 1.414-3-3 1.414-1.414ZM15 41a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M17 36a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm-8.707.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m13.707 35.707-3 3-1.414-1.414 3-3 1.414 1.414ZM7 29a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M6 31a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm5.707-8.707a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m12.293 27.707-3-3 1.414-1.414 3 3-1.414 1.414ZM18 21v4.09h-2V21h2Zm16-10.2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4ZM28.8 14a5.2 5.2 0 1 1 10.4 0 5.2 5.2 0 0 1-10.4 0Zm3.5-7a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M33 10.5V7.7h2v2.8h-2Zm4.493-2.807a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m36.093 10.493 2.1-2.1 1.414 1.414-2.1 2.1-1.414-1.414ZM41 12.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M37.2 14a1 1 0 0 1 1-1H41a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1-1Zm3.807 3.493a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 1 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m38.207 16.093 2.1 2.1-1.414 1.414-2.1-2.1 1.414-1.414ZM32.3 21a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M34 17.2a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1Zm-6.307.293a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m31.907 17.507-2.1 2.1-1.414-1.414 2.1-2.1 1.414 1.414ZM27 12.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M26 14a1 1 0 0 1 1-1h2.8a1 1 0 1 1 0 2H27a1 1 0 0 1-1-1Zm4.507-6.307a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 0 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m30.493 11.907-2.1-2.1 1.414-1.414 2.1 2.1-1.414 1.414Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineVirusMutation);
export default ForwardRef;
