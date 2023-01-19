import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineGeriatrics = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M26.147 28.996a2.5 2.5 0 0 1 2.5-2.5h.084a2.584 2.584 0 0 1 2.584 2.585v7.975a1 1 0 1 1-2 0V29.08a.584.584 0 0 0-.584-.584h-.085a.5.5 0 0 0-.5.5h-2ZM20 27a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0v-7a2 2 0 0 1 2-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M23.867 18C22.4 19.816 20 24.414 20 29.5c0 0-2-3.5-2-4.5 0-2 1.732-7 5.867-7Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M17.693 19.68c1.16-1.833 3.173-3.68 6.174-3.68a2 2 0 0 1 1.938 1.508l1.155 4.555 2.424.474a2 2 0 1 1-.768 3.926l-3.666-.717a2 2 0 0 1-1.555-1.471l-.216-.85C22.511 25.193 22 27.303 22 29.5a2 2 0 0 1-3.736.992L20 29.5l-1.736.992-.008-.013-.019-.033a34.622 34.622 0 0 1-.305-.55 44.349 44.349 0 0 1-.72-1.377 22.689 22.689 0 0 1-.756-1.651 8.84 8.84 0 0 1-.293-.838A3.807 3.807 0 0 1 16 25c0-1.41.558-3.528 1.693-5.32Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M33 14.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineGeriatrics);
export default ForwardRef;
