import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlutenFree = (passedProps: SvgProps) => {
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
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-7.999 13.416A17.933 17.933 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.738 1.83-9.049 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18 0 4.61-1.734 8.817-4.584 12.001l-8.545-8.544A5.726 5.726 0 0 0 31 23l-2.162.34A5.723 5.723 0 0 0 25 25.766v-2.923l1.162-.183A5.73 5.73 0 0 0 31 17l-2.162.34A5.723 5.723 0 0 0 25 19.766V18l.465-.465a5 5 0 0 0 0-7.07L24 9l-1.464 1.464a5 5 0 0 0 0 7.071L23 18v1.766a5.723 5.723 0 0 0-3.838-2.426L17 17a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.723 5.723 0 0 0-3.838-2.426L17 23a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.723 5.723 0 0 0-3.838-2.426L17 29a5.73 5.73 0 0 0 4.838 5.66l1.162.183V38h2v-3.547a1.78 1.78 0 0 0 1.162.207 5.727 5.727 0 0 0 4.15-2.935l5.69 5.69Zm-7.907-7.907-1.057-1.058a5.753 5.753 0 0 1-.875.209L25 28.843v2.923a5.727 5.727 0 0 1 3.094-2.257Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgGlutenFree;
