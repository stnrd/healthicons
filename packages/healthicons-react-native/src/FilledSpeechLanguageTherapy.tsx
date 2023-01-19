import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSpeechLanguageTherapy = (
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
        fillRule="evenodd"
        d="M11.765 6c-4.322 0-4.64.013-4.955.04a.882.882 0 0 0-.81.878v34.2c0 .487.395.882.882.882h6.647a.882.882 0 0 0 .882-.882v-6.437l3.615 1.548c.462.198 1.024.407 1.61.484.598.079 1.276.028 1.907-.357a3.526 3.526 0 0 0 1.691-3.013v-2.646a.882.882 0 0 0-.882-.882l-2.716-.882c0-.974.86-.882 1.834-.882h.882a.882.882 0 0 0 .882-.882v-1.764h.998c1.41 0 2.25-1.57 1.469-2.743l-2.467-3.698v-1.497C23.234 11.133 18.1 6 11.764 6Zm8.822 13.672a1.323 1.323 0 1 1-2.646-.001 1.323 1.323 0 0 1 2.646 0Zm7.908 12.412A2.408 2.408 0 0 0 29.686 30c0-.893-.48-1.67-1.19-2.084l1.01-1.727a4.408 4.408 0 0 1 2.18 3.81 4.407 4.407 0 0 1-2.18 3.811l-1.01-1.727Zm3.287 2.579c1.213-.877 2.113-2.596 2.113-4.663s-.9-3.786-2.113-4.663l1.173-1.62c1.807 1.307 2.94 3.672 2.94 6.283 0 2.61-1.133 4.976-2.94 6.284l-1.173-1.62Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M38.105 30c0-3.181-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783 0 3.655-1.445 6.958-3.747 8.783l-1.243-1.567c1.726-1.368 2.99-4.035 2.99-7.216Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSpeechLanguageTherapy);
export default ForwardRef;
