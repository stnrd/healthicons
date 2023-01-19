import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPpeFaceShield = (
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
      <Path
        fill="#333"
        d="m30.828 28.757-7.07 7.071-1.415-1.414 7.071-7.07 1.414 1.413Zm-3.535 9.193 5.657-5.657-1.414-1.414-5.657 5.657 1.414 1.414Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M11 16.616c-1.05-.5-1.95-1.08-2.63-1.74C7.558 14.086 7 13.115 7 12c0-1.217.661-2.257 1.594-3.084.934-.828 2.228-1.527 3.741-2.095C15.37 5.683 19.494 5 24 5c4.506 0 8.63.683 11.665 1.821 1.513.568 2.807 1.267 3.741 2.095C40.339 9.743 41 10.783 41 12c0 1.117-.559 2.087-1.37 2.875-.68.661-1.58 1.241-2.63 1.74v20.92l-3.57 2.38a17 17 0 0 1-18.86 0L11 37.535v-20.92ZM9 12c0-.44.234-.978.92-1.587.686-.608 1.735-1.201 3.117-1.72C15.794 7.66 19.67 7 24 7c4.33 0 8.206.66 10.963 1.694 1.382.518 2.43 1.111 3.116 1.719.687.609.921 1.147.921 1.587 0 .405-.197.89-.764 1.441-.316.308-.73.616-1.236.915V14a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v.356a6.532 6.532 0 0 1-1.236-.915C9.197 12.891 9 12.405 9 12Zm6.68 26.251L13 36.465V17h22v19.465l-2.68 1.786a15 15 0 0 1-16.64 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPpeFaceShield);
export default ForwardRef;
