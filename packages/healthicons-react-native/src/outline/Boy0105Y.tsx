import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBoy0105Y = (passedProps: SvgProps) => {
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
        d="M34.468 20.948a1 1 0 0 0-1.22-.716c-3.662.954-6.466 1.394-9.244 1.383-2.782-.012-5.59-.475-9.263-1.385a1 1 0 1 0-.482 1.94c2.162.536 4.068.93 5.873 1.17l.868.116v5.481l-.992 7.939a1 1 0 0 0 1.975.308l1.5-8a1 1 0 0 0 .017-.18h2a1 1 0 0 0 .017.18l1.5 8a1 1 0 0 0 1.975-.308L28 28.938v-5.58l.844-.134c1.518-.24 3.126-.592 4.908-1.056a1 1 0 0 0 .716-1.22Zm-1.724-2.651a3 3 0 1 1 1.512 5.806 56.869 56.869 0 0 1-4.256.954v3.756l.977 7.815a3 3 0 0 1-5.926.925l-.551-2.94-.552 2.94a3 3 0 0 1-5.925-.925L19 28.813v-3.615c-1.64-.256-3.352-.622-5.222-1.086a3 3 0 1 1 1.444-5.824c3.602.893 6.235 1.316 8.79 1.326 2.545.01 5.167-.389 8.732-1.317Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBoy0105Y;
