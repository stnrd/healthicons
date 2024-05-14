import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSample = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.142 4 4 18.142l7.778 7.778L25.92 11.778 18.142 4Zm-1.328 4.35-1.415 1.415 4.95 4.95 1.414-1.415-4.95-4.95Zm-3.536 3.536L11.864 13.3l4.95 4.95 1.414-1.414-4.95-4.95Zm-3.536 3.536-1.414 1.414 4.95 4.95 1.414-1.415-4.95-4.95Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11.864 23.2 11.314-11.314 17.677 17.678a8 8 0 0 1-11.313 11.313L11.864 23.2Zm2.828 0 16.264 16.263a6 6 0 0 0 8.485-8.485L23.178 14.714 14.692 23.2Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.642 23.907 7.779-7.778 12.02 12.02-7.778 7.779-12.02-12.021Zm2.829 0 9.192 9.192 4.95-4.95-9.192-9.192-4.95 4.95Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.066 29.917c-1.414.707-3.182 2.475-3.536 3.536l6.718 6.717a7 7 0 0 0 9.9-9.899l-2.122-2.12-6.363 6.363-4.597-4.597Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24.755 33.263 6.2 6.2a6 6 0 0 0 8.486-8.485l-1.415-1.414-6.363 6.364-4.755-4.755a9.269 9.269 0 0 0-1.3 1.087c-.371.37-.658.718-.853 1.003Zm-.562-2.418c.712-.712 1.593-1.406 2.426-1.822l.12-.06.656-.132 4.268 4.268 6.363-6.363 2.83 2.828a8 8 0 0 1-11.314 11.313l-7.072-7.07.083-.585.029-.085c.253-.761.924-1.605 1.611-2.292Z"
      />
    </Svg>
  );
};
export default SvgMedicalSample;
