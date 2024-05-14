import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTooth = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM9.585 11.866c3.245-3.94 7.159-5.062 11.58-2.466l6.18 5.356a1 1 0 1 0 1.31-1.512l-3.598-3.118c2.68-1.588 8.396-4.039 12.524.747 3.02 3.5 2.763 7.133 1.643 10.69l-3.942 11.293c-1.153 3.927-1.975 5.14-3.995 6.845-1.198 1.013-2.55-.736-3.973-2.577-1.233-1.595-2.519-3.258-3.804-3.254-1.307.004-2.614 1.67-3.864 3.264-1.441 1.838-2.808 3.581-4.013 2.567-2.433-2.048-3.5-4.877-4.616-9.418-.215-.874-.541-1.923-.902-3.079-1.51-4.85-3.612-11.596-.53-15.338Z"
      />
    </Svg>
  );
};
export default SvgTooth;
