import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPhone = (passedProps: SvgProps) => {
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
        d="M8.889 8A.894.894 0 0 0 8 8.889C8 26.073 21.927 40 39.111 40a.894.894 0 0 0 .889-.889V32.52a.894.894 0 0 0-.889-.889c-2.449 0-4.84-.395-7.057-1.127l-.01-.004a.878.878 0 0 0-.896.215l-4.67 4.67-.648-.332c-5.531-2.834-10.067-7.348-12.883-12.884l-.33-.647 4.67-4.67a.896.896 0 0 0 .226-.913 22.458 22.458 0 0 1-1.124-7.05A.894.894 0 0 0 15.5 8H8.889ZM6 8.889A2.894 2.894 0 0 1 8.889 6H15.5a2.894 2.894 0 0 1 2.889 2.889c0 2.254.36 4.415 1.026 6.43l.002.006.002.007c.315 1.001.085 2.13-.719 2.934l-3.634 3.635A27.624 27.624 0 0 0 26.1 32.933l3.634-3.633a2.878 2.878 0 0 1 2.953-.694 20.546 20.546 0 0 0 6.424 1.024A2.894 2.894 0 0 1 42 32.519v6.592A2.894 2.894 0 0 1 39.111 42C20.822 42 6 27.178 6 8.889Z"
      />
    </Svg>
  );
};
export default SvgPhone;
