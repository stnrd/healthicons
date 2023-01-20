import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpeechLanguageTherapy = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.434 10c-.261 0-.52.01-.776.032a.713.713 0 0 0-.658.708v27.55c0 .392.32.71.717.71h2.15a.714.714 0 0 0 .717-.71v-5.186l2.937 1.247c.375.16.832.328 1.309.39.485.063 1.036.022 1.548-.288a2.836 2.836 0 0 0 1.375-2.427v-2.131a.714.714 0 0 0-.717-.71l-2.206-.711c0-.785.697-.71 1.49-.71h.716a.714.714 0 0 0 .717-.711v-1.421h.81c1.146 0 1.829-1.265 1.194-2.21l-2.004-2.98v-1.205c0-5.101-4.172-9.237-9.32-9.237Zm7.168 11.013a1.07 1.07 0 0 1-1.075 1.066 1.07 1.07 0 0 1-1.075-1.066 1.07 1.07 0 0 1 1.075-1.066 1.07 1.07 0 0 1 1.075 1.066ZM25.495 30.084A2.408 2.408 0 0 0 26.686 28c0-.893-.48-1.67-1.19-2.084l1.01-1.727A4.408 4.408 0 0 1 28.684 28a4.408 4.408 0 0 1-2.18 3.81l-1.01-1.726ZM30.895 28c0-2.067-.9-3.786-2.113-4.663l1.173-1.62c1.807 1.307 2.94 3.672 2.94 6.283 0 2.61-1.133 4.976-2.94 6.284l-1.173-1.62c1.213-.878 2.113-2.597 2.113-4.664Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.115 35.217c1.726-1.369 2.99-4.036 2.99-7.217s-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783 0 3.655-1.445 6.958-3.747 8.783l-1.242-1.566Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSpeechLanguageTherapy);
export default ForwardRef;
