import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusResearchAlt = (passedProps: SvgProps) => {
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
        d="M35 8a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L30.414 9A1 1 0 0 0 29 7.586l-.698.698-.01.009-.008.01-.698.697A1 1 0 0 0 29 10.414l.828.829A4.972 4.972 0 0 0 29.1 13H28a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 27.586 19L29 20.414A1 1 0 0 0 30.414 19l.829-.828A4.972 4.972 0 0 0 33 18.9V20a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1a4.972 4.972 0 0 0 1.757-.728l.829.828A1 1 0 0 0 39 20.414L40.414 19A1 1 0 0 0 39 17.586l-.828-.829A4.972 4.972 0 0 0 38.9 15H40a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a4.972 4.972 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 40.414 9L39 7.586A1 1 0 1 0 37.586 9l-.829.828A4.972 4.972 0 0 0 35 9.1V8Zm-20.049 3.157-1.732 1 1.085 1.88a3.001 3.001 0 0 0-.317 3.45l.222.385A11.49 11.49 0 0 0 9 27.5c0 1.248.2 2.452.568 3.58A9.482 9.482 0 0 0 6 38.5c0 .97.146 1.91.418 2.794l.217.706H39a1 1 0 0 0 0-2H24.882a9.567 9.567 0 0 0-.68-5.317l13.641-7.876-1-1.732-13.634 7.872A9.488 9.488 0 0 0 15.5 29a9.462 9.462 0 0 0-4.177.965A9.515 9.515 0 0 1 11 27.5a9.49 9.49 0 0 1 4.211-7.893l2.776 4.808a3 3 0 0 0 4.098 1.098l.866-.5 1 1.732 1.732-1-1-1.732.866-.5a3 3 0 0 0 1.098-4.098l-4-6.928a3.001 3.001 0 0 0-3.146-1.45l-1.086-1.88-1.732 1-1.5-2.598-1.732 1 1.5 2.598Zm8.258 21.79-4.552 2.628 1 1.732 4.545-2.624a9.49 9.49 0 0 0-.993-1.736Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgVirusResearchAlt;
