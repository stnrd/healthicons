import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCervicalCancer = (passedProps: SvgProps) => {
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
        d="M35.534 6h1.861c3.126 7.848 4.713 14.106 4.705 19.852-.008 5.614-1.538 10.66-4.504 16.148h-1.982c3.192-5.658 4.764-10.635 4.772-16.151C40.393 20.288 38.81 14.09 35.534 6ZM10.805 6h1.86c-3.276 8.09-4.858 14.288-4.85 19.849.007 5.516 1.58 10.493 4.771 16.151h-1.982C7.638 36.511 6.108 31.466 6.1 25.852 6.092 20.105 7.68 13.848 10.805 6ZM23.243 31.546V42h1.714V31.546l7.022-7.373-1.212-1.273-6.667 7-6.667-7-1.212 1.273 7.022 7.373Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m25.253 16.3 1.581-1.845c1.052-1.226 1.005-3.102-.106-4.269A1.861 1.861 0 0 0 25.38 9.6h-2.56c-.505 0-.99.21-1.348.586-1.11 1.167-1.158 3.043-.106 4.27l1.58 1.844-3.769 4.398 1.274 1.204 3.65-4.257 3.648 4.257 1.274-1.204-3.77-4.398Zm-2.433-4.9c-.05 0-.1.021-.135.059a1.35 1.35 0 0 0-.045 1.792l1.46 1.704 1.46-1.704a1.35 1.35 0 0 0-.045-1.792.187.187 0 0 0-.135-.059h-2.56Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCervicalCancer;
