import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseWalkSupported = (
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
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM24.825 13.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM23.752 28H38a2 2 0 0 1 2 2v12h2V30a4 4 0 0 0-4-4h-4.21a2 2 0 0 0-1.93-2.2c-1.07-.032-1.746-.165-2.217-.349-.432-.169-.77-.41-1.118-.816-.38-.442-.772-1.08-1.268-2.066a82.3 82.3 0 0 1-1.16-2.45 329.79 329.79 0 0 0-.584-1.264c-.508-1.091-1.292-2.08-2.405-2.656-1.162-.6-2.463-.635-3.705-.174-.57.212-.997.588-1.28.887-.306.323-.579.7-.818 1.092-.48.786-.907 1.771-1.224 2.852-.591 2.016-.866 4.622-.117 7.144H10a4 4 0 0 0-4 4v12h2V30a2 2 0 0 1 2-2h8.057l7.095 7.001 2.513 5.795a2 2 0 0 0 3.67-1.592l-2.667-6.15a2 2 0 0 0-.43-.628L23.752 28Zm.096-2 .515-2.373c.343.585.71 1.13 1.127 1.614.235.274.484.527.75.759h-2.392Zm-4.061 6.939-3.3-3.166-.365 1.454-1.342 4.528-1.98 3.19a2 2 0 0 0 3.4 2.11l2.12-3.42c.095-.151.168-.315.219-.486l1.247-4.21Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgExerciseWalkSupported);
export default ForwardRef;
