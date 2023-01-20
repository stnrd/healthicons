import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgThermometer = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M23.994 44.077a7.964 7.964 0 0 0 3.964-1.053l.05.05.198-.197a7.995 7.995 0 0 0 3.782-6.806 7.986 7.986 0 0 0-3.056-6.283 5.04 5.04 0 0 0 .05-.715l-.016-20a5 5 0 0 0-10 .008l.016 20c0 .243.018.482.051.715a8 8 0 0 0 4.961 14.282ZM20.28 31.361l-.006.004c-.215.17-.419.355-.609.552l8.49 8.477c.2-.192.386-.398.557-.615l-8.432-8.418Zm-2.071 3.1c.083-.297.187-.584.312-.86l7.952 7.94c-.275.125-.562.23-.858.313l-7.406-7.393Zm-.122 2.704a6.006 6.006 0 0 0 4.824 4.816l-4.824-4.816Zm2.9-7.924 8.709 8.694c.1-.306.175-.622.224-.947l-8.938-8.923.001 1.015c0 .054.002.108.005.161Zm-.007-4.004 8.551 8.537a6.02 6.02 0 0 0-1.835-2.415 2 2 0 0 1-.749-1.336l-5.953-5.943h-.015l.001 1.157Zm2.842-1.16 3.16 3.155-.001-1.172-1.987-1.983h-1.172Zm-2.845-1.997 6-.005-.001-2-2 .002a1 1 0 1 1-.002-2l2-.002-.002-2-2 .002a1 1 0 0 1-.001-2l2-.002-.002-2-2 .002a1 1 0 0 1-.001-2l2-.002-.001-1a3 3 0 0 0-6 .005l.01 13Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgThermometer);
export default ForwardRef;
