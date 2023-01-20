import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIGroupsPerspectiveCrowd = (
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
        d="M28 16c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Zm-2 0a1.999 1.999 0 1 1-4 0 1.999 1.999 0 1 1 4 0ZM18 17.5c0 2.486-2.014 4.5-4.5 4.5A4.499 4.499 0 0 1 9 17.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5Zm-2 0c0 1.382-1.118 2.5-2.5 2.5a2.499 2.499 0 0 1-2.5-2.5c0-1.382 1.118-2.5 2.5-2.5s2.5 1.118 2.5 2.5ZM4 29.454C4 25.828 10.662 24 14 24c.801 0 1.794.105 2.84.316C18.133 23.31 20.673 22 24 22s5.867 1.31 7.16 2.316C32.206 24.105 33.199 24 34 24c3.337 0 10 1.827 10 5.454V36H4v-6.546Zm2 0c0-.236.094-.551.512-.973.437-.44 1.128-.884 2.037-1.281C10.38 26.4 12.605 26 14 26c1.395 0 3.622.4 5.45 1.2.91.397 1.601.842 2.038 1.281.418.422.512.737.512.973V34H6v-4.546Zm22.55-4.409A10.335 10.335 0 0 0 24 24c-1.875 0-3.432.495-4.55 1.045 2.44.897 4.55 2.368 4.55 4.41 0-2.042 2.11-3.513 4.55-4.41Zm-2.038 3.436c-.418.422-.512.737-.512.973V34h16v-4.546c0-.236-.094-.551-.512-.973-.437-.44-1.128-.884-2.037-1.281C37.62 26.4 35.395 26 34 26c-1.395 0-3.622.4-5.45 1.2-.91.397-1.601.842-2.038 1.281ZM34.5 22c2.486 0 4.5-2.014 4.5-4.5S36.986 13 34.5 13a4.499 4.499 0 0 0-4.5 4.5c0 2.486 2.014 4.5 4.5 4.5Zm0-2c1.382 0 2.5-1.118 2.5-2.5S35.882 15 34.5 15a2.499 2.499 0 0 0-2.5 2.5c0 1.382 1.118 2.5 2.5 2.5Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgIGroupsPerspectiveCrowd);
export default ForwardRef;
