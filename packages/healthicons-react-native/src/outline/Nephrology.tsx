import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNephrology = (passedProps: SvgProps) => {
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
        d="M15.546 31.316c-7.901-3.778-5.026-15.951.379-17.866 2.241-.795 4.781 2.036 4.796 3.762.015 1.727-1.816 3.319-1.399 5.462.417 2.143.905 5.755-.157 7.444-1.063 1.69-2.158 1.896-3.619 1.198Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.47 26s.002 0 .03-1c.028-1 .03-1 .03-1h.011l.016.002a1.31 1.31 0 0 1 .145.014 2.493 2.493 0 0 1 1.177.513c.665.529 1.133 1.437 1.133 2.834V42h-2V27.363c0-.924-.288-1.197-.378-1.269a.492.492 0 0 0-.171-.09l-.035-.007h.01l.013.002h.019Z"
        fill="#333"
      />
      <Path
        d="M32.65 31.316c7.901-3.778 5.026-15.951-.379-17.866-2.242-.795-4.781 2.036-4.796 3.762-.015 1.727 1.815 3.319 1.399 5.462-.417 2.143-.905 5.755.157 7.444 1.063 1.69 2.158 1.896 3.619 1.198Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.726 26s-.002 0-.03-1l-.03-1h-.012l-.016.002a1.305 1.305 0 0 0-.144.014 2.491 2.491 0 0 0-1.177.513c-.665.529-1.133 1.437-1.133 2.834V42h2V27.363c0-.924.287-1.197.378-1.269a.492.492 0 0 1 .205-.097h-.009l-.014.002h-.018Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgNephrology;
