import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoad = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.056 40.001c-.062 1.103.84 2 1.944 2h14c1.105 0 1.989-.899 2.111-1.997a18.002 18.002 0 0 1 15.893-15.893C41.102 23.99 42 23.105 42 22.001V8c0-1.105-.896-2.007-1.999-1.945A36 36 0 0 0 6.056 40Zm30.957-24.363a27.01 27.01 0 0 1 2.213-.394l-.269-1.982a29 29 0 0 0-2.377.423l.433 1.953Zm-8.299 3.357a27.01 27.01 0 0 1 4.01-2.025l-.75-1.854a28.995 28.995 0 0 0-4.307 2.175l1.047 1.704Zm-5.248 4.209a27.045 27.045 0 0 1 1.63-1.547l-1.315-1.507a29.02 29.02 0 0 0-3.358 3.463l1.547 1.268a27.01 27.01 0 0 1 1.496-1.677Zm-5.946 9.445a26.999 26.999 0 0 1 1.9-4.07l-1.735-.994a29 29 0 0 0-2.041 4.372l1.876.692Zm-1.525 6.553c.078-.748.187-1.49.325-2.224l-1.965-.372c-.149.788-.266 1.585-.35 2.388l1.99.208Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPavedRoad;
