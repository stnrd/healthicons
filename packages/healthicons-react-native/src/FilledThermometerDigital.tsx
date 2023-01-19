import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledThermometerDigital = (
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
        d="m19.535 7.38-1.523-2.383-.009.005a2.049 2.049 0 0 0-.098-.172l-.028-.044a2 2 0 0 0-2.762-.61L10.8 6.934a2 2 0 0 0-.609 2.762l.029.044c.036.057.074.11.115.162l-.009.005 1.523 2.384 7.686-4.91Zm-6.61 6.596 5.75 9c.614.96 1.123 1.37 1.791 1.907.306.246.645.519 1.043.883.174.16.39.327.658.535 1.488 1.156 4.553 3.537 10.543 12.356.04-.036.082-.068.128-.098l1.708-1.09a.956.956 0 0 1 .137-.074c-5.48-9.139-6.35-12.923-6.773-14.76-.076-.331-.138-.6-.21-.824a19.842 19.842 0 0 1-.362-1.317c-.207-.833-.364-1.466-.978-2.427l-5.749-9-7.685 4.909Zm22.788 25.113c.441.714.908 1.457 1.402 2.232l.646 1.01a1.108 1.108 0 0 1-1.867 1.193l-.596-.933a177.877 177.877 0 0 0-1.486-2.289.993.993 0 0 0 .103-.057l1.708-1.091a1.01 1.01 0 0 0 .09-.066ZM19.147 12.422l4.91 7.685-2.562 1.636-4.91-7.685 2.562-1.636Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledThermometerDigital);
export default ForwardRef;
