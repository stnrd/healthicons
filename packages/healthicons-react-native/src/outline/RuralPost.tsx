import * as React from "react";
import Svg, { SvgProps, Mask, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRuralPost = (passedProps: SvgProps) => {
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
      <Mask id="rural_post_svg__a" fill="#fff">
        <Path d="M23 12H5v2h18v-2Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 16H6v21H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-1V16h-3v2h1v19h-3V25h-8v12H8V18h15v-2Zm12 21h-4V27h4v10Z"
        />
        <Path d="M39 14v-2h4v2h-4Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 32v-7h15v7h1v2H10v-2h1Zm2-5h11v5H13v-5Z"
        />
        <Path d="M35 10h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z" />
      </Mask>
      <Path
        d="M32 14v-1h-2v1h2Zm-3 1h-1v2h1v-2ZM6 13v5h2v-5H6Zm34 0v5h2v-5h-2Zm-10 1v4h2v-4h-2Zm-1 3h4v-2h-4v2Zm-6-5h2v-2h-2v2ZM5 12v-2H3v2h2Zm0 2H3v2h2v-2Zm18 0v2h2v-2h-2Zm0 2h2v-2h-2v2ZM6 16v-2H4v2h2Zm0 21v2h2v-2H6Zm36 0h-2v2h2v-2Zm0-21h2v-2h-2v2Zm-3 0v-2h-2v2h2Zm0 2h-2v2h2v-2Zm1 0h2v-2h-2v2Zm0 19v2h2v-2h-2Zm-3 0h-2v2h2v-2Zm0-12h2v-2h-2v2Zm-8 0v-2h-2v2h2Zm0 12v2h2v-2h-2ZM8 37H6v2h2v-2Zm0-19v-2H6v2h2Zm15 0v2h2v-2h-2Zm16-6v-2h-2v2h2Zm0 2h-2v2h2v-2Zm4-2h2v-2h-2v2Zm0 2v2h2v-2h-2ZM31 37h-2v2h2v-2Zm4 0v2h2v-2h-2Zm-4-10v-2h-2v2h2Zm4 0h2v-2h-2v2Zm-11 0h2v-2h-2v2Zm-11 0v-2h-2v2h2Zm11 5v2h2v-2h-2Zm-11 0h-2v2h2v-2Zm-2 0v2h2v-2h-2Zm0-7v-2H9v2h2Zm15 0h2v-2h-2v2Zm0 7h-2v2h2v-2Zm1 0h2v-2h-2v2Zm0 2v2h2v-2h-2Zm-17 0H8v2h2v-2Zm0-2v-2H8v2h2Zm13-22H5v4h18v-4ZM3 12v2h4v-2H3Zm2 4h18v-4H5v4Zm20-2v-2h-4v2h4ZM5 39h1v-4H5v4Zm1-1a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4Zm-1-1a1 1 0 0 1 1 1H2a3 3 0 0 0 3 3v-4Zm37 1a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4Zm1 1a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-1 0h1v-4h-1v4Zm-5-23v2h4v-2h-4Zm2 4h1v-4h-1v4Zm-1-2v19h4V18h-4Zm2 17h-3v4h3v-4Zm-11 0H8v4h21v-4Zm-19 2V18H6v19h4ZM8 20h15v-4H8v4Zm17-2v-2h-4v2h4Zm12-6v2h4v-2h-4Zm6-2h-4v4h4v-4Zm2 4v-2h-4v2h4Zm-6 2h4v-4h-4v4Zm-8 23h4v-4h-4v4Zm-2-12v10h4V27h-4Zm6-2h-4v4h4v-4Zm2 12V27h-4v10h4ZM24 25H13v4h11v-4Zm2 7v-5h-4v5h4Zm-13 2h11v-4H13v4Zm-2-7v5h4v-5h-4Zm16 3h-1v4h1v-4Zm2 4v-2h-4v2h4ZM8 32v2h4v-2H8Zm3-2h-1v4h1v-4Zm16-18h8V8h-8v4Zm8 0v8h4v-8h-4Zm0 8h-8v4h8v-4Zm-8 0v-8h-4v8h4Zm0 0h-4a4 4 0 0 0 4 4v-4Zm8 0v4a4 4 0 0 0 4-4h-4Zm0-8h4a4 4 0 0 0-4-4v4Zm-8-4a4 4 0 0 0-4 4h4V8ZM6 18h17v-4H6v4Zm2 19V16H4v21h4Zm35 0H5v4h38v-4Zm-3-21v21h4V16h-4Zm-1 2h3v-4h-3v4Zm0 19V25h-4v12h4Zm-2-14h-8v4h8v-4Zm-10 2v12h4V25h-4ZM9 25v7h4v-7H9Zm17-2H11v4h15v-4Zm2 9v-7h-4v7h4Zm-18 4h17v-4H10v4Z"
        fill="#333"
        mask="url(#rural_post_svg__a)"
      />
    </Svg>
  );
};
export default SvgRuralPost;
