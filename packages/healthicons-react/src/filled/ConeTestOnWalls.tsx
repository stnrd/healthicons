import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConeTestOnWalls = (
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
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        d="M18 13.756v.744l-2.138-.642-1.977-.593.76 1.92a15.878 15.878 0 0 1 .235.646c-.337-1.012-.716-1.762-1.089-2.244L13 12.564l-.791 1.023c-.373.482-.752 1.232-1.089 2.244C10.44 17.876 10 20.764 10 24c0 3.236.439 6.124 1.12 8.17.337 1.01.716 1.761 1.089 2.243L13 35.436l.791-1.023c.288-.373.58-.907.854-1.598l-.76 1.92 1.977-.594L18 33.5v3.143a1 1 0 0 1-.646.935l-8.323 3.153A1.5 1.5 0 0 1 7 39.328V8.672A1.5 1.5 0 0 1 9.031 7.27l8.323 3.153a1 1 0 0 1 .646.935v2.399Zm14.673 5.146.337-.854c.45-1.137 1.507-1.901 2.704-1.901 1.58 0 2.929 1.345 2.929 3.09 0 .165-.012.326-.035.483l-.1.668.583.341C40.22 21.392 41 22.665 41 24.147c0 1.48-.78 2.754-1.91 3.417l-.581.341.099.668c.023.157.035.318.035.483 0 1.745-1.349 3.09-2.929 3.09-1.266 0-2.377-.857-2.776-2.102l-.299-.936.734-.22-2.358-1.113C29.924 27.26 29 25.84 29 24s.924-3.26 2.015-3.775l2.36-1.113-.702-.21ZM15.289 30.714Z"
        fill="#333"
        stroke="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgConeTestOnWalls);
export default ForwardRef;
