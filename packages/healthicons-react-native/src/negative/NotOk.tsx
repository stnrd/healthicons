import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNotOk = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0Zm-8 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm2 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-12.567 7.544C28.345 30.026 26.271 29 23.893 29c-2.469 0-4.608 1.104-5.66 2.717-.453.696-.886 2.802.767 2.283 4.813-1.6 5.28-1.542 10 0 1.317.472 1.07-1.424.674-2.115-.048-.083-.106-.16-.164-.238l-.077-.103ZM13.631 21.35c-.119.738.381 1.445 1.065 1.883.713.457 1.73.707 2.93.53a3.794 3.794 0 0 0 2.653-1.665c.504-.764.712-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39Zm20.076 0c.119.738-.382 1.445-1.065 1.883-.713.457-1.73.707-2.93.53a3.794 3.794 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNotOk);
export default ForwardRef;
