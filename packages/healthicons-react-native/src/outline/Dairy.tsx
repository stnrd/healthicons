import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDairy = (passedProps: SvgProps) => {
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
        d="M21.675 6 18 21.623v18.899c0 .913.68 1.478 1.306 1.478h10.388c.627 0 1.306-.565 1.306-1.478V21.623L27.325 6h-5.65Zm-2.37 1.34s-.53.044-.99-.234c-.352-.212-.662-.613-.662-1.367C17.653 4 18.479 4 20.958 4h7.084c2.479 0 3.305 0 3.305 1.74 0 .753-.31 1.154-.662 1.367-.46.277-.99.232-.99.232L33 21.391v19.13C33 42.444 31.52 44 29.694 44H19.306C17.48 44 16 42.443 16 40.522v-19.13l3.306-14.053Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.406 23.837 17 22.923c-.407-.913-.406-.914-.406-.914h.002l.005-.003.014-.006.048-.02a13.087 13.087 0 0 1 .778-.294 13.733 13.733 0 0 1 2.009-.526c1.51-.27 3.68-.35 5.215 1.016.952.848 2.472 1.328 3.885 1.58a16.64 16.64 0 0 0 2.412.244H31v2h-.068l-.168-.005a18.595 18.595 0 0 1-2.564-.27c-1.503-.268-3.484-.826-4.865-2.055-.799-.71-2.128-.792-3.535-.541a11.734 11.734 0 0 0-2.357.692l-.031.013-.006.003Z"
        fill="#000"
      />
      <Path d="M19 5h11l-1 2h-9l-1-2Z" fill="#000" />
    </Svg>
  );
};
export default SvgDairy;
