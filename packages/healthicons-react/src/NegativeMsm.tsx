import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeMsm = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm15.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM10 20h-.211c-.086.384-.166.797-.24 1.23C9.162 23.487 9 25.9 9 26.5a1.5 1.5 0 0 1-3 0c0-.798.182-3.384.592-5.777.205-1.193.48-2.428.854-3.396.183-.477.426-.984.76-1.397.324-.402.918-.93 1.794-.93h10v.023c.66.098 1.15.489 1.446.78.374.368.697.834.972 1.3.557.943 1.076 2.16 1.514 3.357l.068.187.068-.186c.438-1.198.957-2.415 1.514-3.358.275-.466.598-.932.972-1.3.296-.291.787-.682 1.446-.78V15h10c.876 0 1.47.527 1.794.93.334.413.577.92.76 1.396.374.969.65 2.204.854 3.397.41 2.393.592 4.98.592 5.777a1.5 1.5 0 0 1-3 0c0-.6-.162-3.013-.55-5.27a25.506 25.506 0 0 0-.239-1.23H38v20.5a1.5 1.5 0 0 1-2.995.12L34.155 30h-2.31l-.85 10.62A1.5 1.5 0 0 1 28 40.5V20h-.52c-.202.46-.402.964-.595 1.492a37.071 37.071 0 0 0-1.015 3.236 20.2 20.2 0 0 0-.287 1.228 6.977 6.977 0 0 0-.068.4c-.012.09-.014.134-.015.143 0 .002 0 .003 0 0a1.5 1.5 0 0 1-3 0c0 .003 0 .002 0 0 0-.01-.003-.053-.015-.142a6.977 6.977 0 0 0-.068-.4c-.064-.33-.161-.749-.287-1.229a37.13 37.13 0 0 0-1.015-3.236A26.212 26.212 0 0 0 20.52 20H20v20.5a1.5 1.5 0 0 1-2.995.12L16.155 30h-2.31l-.85 10.62A1.5 1.5 0 0 1 10 40.5V20ZM29 9.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeMsm);
export default ForwardRef;
