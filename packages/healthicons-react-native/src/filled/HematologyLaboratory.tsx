import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHematologyLaboratory = (passedProps: SvgProps) => {
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm11.8 10h7.4v1c0 .285.223.721.65 1.204a6.096 6.096 0 0 0 .744.706l.008.006.398.3V21h-2v-.82a8.019 8.019 0 0 1-.65-.651c-.317-.36-.727-.893-.962-1.529h-3.843c-.052.11-.106.21-.157.3-.205.36-.465.716-.706 1.02-.243.306-.485.579-.664.774l-.018.02V31.5a3.5 3.5 0 0 0 6.663 1.5h2.13A5.5 5.5 0 0 1 19 31.5V19.302l.29-.293.003-.002.012-.013.051-.052.189-.2c.158-.173.366-.41.572-.668.21-.263.4-.529.532-.762.103-.182.136-.282.146-.313l.004-.011v.001l.001.004V16ZM32 28.09c0 1.608-1.343 2.91-3 2.91s-3-1.302-3-2.91c0-2.544 3-5.09 3-5.09s3 2.546 3 5.09ZM29 10h-9v4h9v-4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHematologyLaboratory;
