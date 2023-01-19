import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineLeg = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20.525 4.78A1 1 0 0 1 21.5 4H34a1 1 0 0 1 .991 1.132c-.533 3.997-2.9 8.16-5.044 11.25a53.667 53.667 0 0 1-3.699 4.728l.78 1.247a9 9 0 0 1 1.358 5.178l-.37 8.115 1.537 1.792a3.934 3.934 0 0 1-4.747 6.08l-.06-.031a3 3 0 0 0-1.879-.269l-4.01.73a3 3 0 0 1-.537.048H15a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h2.814l5.425-2.086-3.854-11.133A7.001 7.001 0 0 1 17 23.49v-2.322c0-.519.058-1.036.172-1.542L20.525 4.78Zm3.747 15.534.004-.003.015-.017a35.245 35.245 0 0 0 .309-.34c.214-.24.524-.593.899-1.041a51.686 51.686 0 0 0 2.804-3.67C30.185 12.53 32.087 9.18 32.804 6H22.3l-3.176 14.068A5 5 0 0 0 19 21.169v2.322a5 5 0 0 0 .275 1.635l4.17 12.047a1 1 0 0 1-.586 1.26l-6.5 2.5A1 1 0 0 1 16 41h-2a1 1 0 0 0 1 1h3.32c.06 0 .12-.005.178-.016l4.011-.73a5 5 0 0 1 3.13.448l.062.03a1.934 1.934 0 0 0 2.333-2.989l-1.793-2.092a1 1 0 0 1-.24-.696l.387-8.51a7 7 0 0 0-1.057-4.029l-1.179-1.886a1.001 1.001 0 0 1 .12-1.216Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineLeg);
export default ForwardRef;
