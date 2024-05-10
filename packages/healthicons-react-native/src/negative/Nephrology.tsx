import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNephrology = (passedProps: SvgProps) => {
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
      {...props}
    >
      <G clipPath="url(#nephrology_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h12.012V27.363c0-.855-.309-1.155-.481-1.278a1.027 1.027 0 0 0-.403-.169l-.01-.001h.014l.004.001h.004l.07-.997c.068-.998.07-.998.07-.998h.003l.006.001.015.001a1.352 1.352 0 0 1 .141.019 3.025 3.025 0 0 1 1.245.515c.73.518 1.322 1.44 1.322 2.905V42h1.836V27.363c0-1.465.593-2.388 1.322-2.907a3.026 3.026 0 0 1 1.35-.529l.037-.004h.014l.006-.001h.004s.002 0 .07.997c.069.998.07.997.07.997h.014l.007-.001-.01.001a1.026 1.026 0 0 0-.402.17c-.173.122-.482.422-.482 1.277V42H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm23.198 7.306c5.986 2.029 9.39 14.305.766 17.942-1.594.672-2.803.443-4.006-1.273-1.202-1.717-.735-5.333-.319-7.476.237-1.216-.32-2.269-.85-3.268-.402-.761-.789-1.492-.796-2.241-.018-1.734 2.722-4.525 5.205-3.684Zm-16.536 0c-5.986 2.029-9.389 14.305-.766 17.942 1.595.672 2.804.443 4.006-1.273 1.202-1.717.736-5.333.32-7.476-.237-1.216.32-2.269.848-3.268.403-.761.79-1.492.798-2.241.017-1.734-2.723-4.525-5.206-3.684Z"
        />
      </G>
      <Defs>
        <ClipPath id="nephrology_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgNephrology;
