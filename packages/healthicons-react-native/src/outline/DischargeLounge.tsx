import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDischargeLounge = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3Zm-12.275 6.038a1 1 0 0 0-.686 1.237l1.934 6.771-1.289 6.767a1.013 1.013 0 0 0-.018.187H7.5a1 1 0 1 0 0 2H40a1 1 0 1 0 0-2h-2.666c0-.062-.006-.124-.018-.187l-1.29-6.767 1.935-6.771a1 1 0 0 0-1.923-.55l-1.199 4.198H27v2h1.308v1.692h-.539a1 1 0 0 0-.39 1.921l-1.332 4.16A.999.999 0 0 0 26 35h-4a1 1 0 0 0-.048-.305l-1.33-4.159a1 1 0 0 0-.391-1.92h-.539v-1.693H21v-2h-7.84l-1.199-4.198a1 1 0 0 0-1.236-.687Zm19.583 8.577h3.791l-.081-.428a1 1 0 0 1 .02-.462l.23-.802h-3.96v1.692ZM29.33 31h5.223l.762 4H28.05l1.28-4Zm-11.638-4.077v1.692h-3.791l.081-.428a1 1 0 0 0-.02-.462l-.23-.802h3.96ZM13.447 31l-.762 4h7.265l-1.28-4h-5.223Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDischargeLounge;
