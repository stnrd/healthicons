import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCarbohydrates = (passedProps: SvgProps) => {
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
        d="M20.65 21h-4.3C10.634 21 6 25.634 6 31.35A4.65 4.65 0 0 0 10.65 36h15.7A4.65 4.65 0 0 0 31 31.35C31 25.634 26.366 21 20.65 21Zm-4.3-2C9.53 19 4 24.53 4 31.35A6.65 6.65 0 0 0 10.65 38h15.7A6.65 6.65 0 0 0 33 31.35C33 24.53 27.47 19 20.65 19h-4.3Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.16 23.072C12.397 24.364 12 25.94 12 27a1 1 0 1 1-2 0c0-1.44.504-3.365 1.44-4.947C12.363 20.49 13.88 19 16 19a1 1 0 1 1 0 2c-1.08 0-2.064.76-2.84 2.072ZM18.16 23.072C17.397 24.364 17 25.94 17 27a1 1 0 1 1-2 0c0-1.44.504-3.365 1.44-4.947C17.363 20.49 18.88 19 21 19a1 1 0 1 1 0 2c-1.08 0-2.064.76-2.84 2.072ZM25.09 19.989a1 1 0 0 1-.348 1.37c-.797.475-1.494 1.396-1.996 2.518C22.246 24.99 22 26.166 22 27a1 1 0 1 1-2 0c0-1.16.325-2.613.92-3.941.592-1.32 1.51-2.652 2.8-3.418a1 1 0 0 1 1.37.348ZM35 10a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1ZM43 10a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1ZM39 10a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 22a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V23a1 1 0 0 1 1-1ZM34 11v5.528a4 4 0 0 0 2.211 3.578L40 22v-5.528a4 4 0 0 0-2.211-3.578L34 11Zm2 3.236v2.292a2 2 0 0 0 1.106 1.789l.894.447v-2.292a2 2 0 0 0-1.106-1.789L36 14.236Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 17v5.528a4 4 0 0 0 2.211 3.578L40 28v-5.528a4 4 0 0 0-2.211-3.578L34 17Zm2 3.236v2.292a2 2 0 0 0 1.106 1.789l.894.447v-2.292a2 2 0 0 0-1.106-1.789L36 20.236Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 23v5.528a4 4 0 0 0 2.211 3.578L40 34v-5.528a4 4 0 0 0-2.211-3.578L34 23Zm2 3.236v2.292a2 2 0 0 0 1.106 1.789l.894.447v-2.292a2 2 0 0 0-1.106-1.789L36 26.236ZM44 11v5.528a4 4 0 0 1-2.211 3.578L38 22v-5.528a4 4 0 0 1 2.211-3.578L44 11Zm-2 3.236v2.292a2 2 0 0 1-1.106 1.789l-.894.447v-2.292a2 2 0 0 1 1.106-1.789l.894-.447Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 17v5.528a4 4 0 0 1-2.211 3.578L38 28v-5.528a4 4 0 0 1 2.211-3.578L44 17Zm-2 3.236v2.292a2 2 0 0 1-1.106 1.789l-.894.447v-2.292a2 2 0 0 1 1.106-1.789l.894-.447Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 23v5.528a4 4 0 0 1-2.211 3.578L38 34v-5.528a4 4 0 0 1 2.211-3.578L44 23Zm-2 3.236v2.292a2 2 0 0 1-1.106 1.789l-.894.447v-2.292a2 2 0 0 1 1.106-1.789l.894-.447Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgCarbohydrates;
