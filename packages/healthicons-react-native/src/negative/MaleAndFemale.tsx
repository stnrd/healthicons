import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleAndFemale = (passedProps: SvgProps) => {
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
      <G clipPath="url(#male_and_female_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm14.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm5.148 7c.05.352.094.729.132 1.122C20 23.367 20 25.8 20 26.5a1.5 1.5 0 1 0 3 0v-.007c0-.707 0-3.264-.234-5.662-.115-1.19-.296-2.43-.597-3.406-.147-.479-.355-1.002-.67-1.436-.317-.434-.91-.989-1.81-.989H9.31c-.901 0-1.494.555-1.81.99-.316.433-.524.956-.67 1.435-.301.976-.482 2.217-.598 3.406C6 23.229 6 25.786 6 26.493v.007a1.5 1.5 0 0 0 3 0c0-.7 0-3.133.22-5.378.037-.393.081-.77.131-1.122H10v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h1.31l.85 10.62A1.5 1.5 0 0 0 19 40.5V20h.648ZM33.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm4 2a1.5 1.5 0 0 1 .367.046c1.113.28 1.861.959 2.332 1.886.413.81.614 1.82.78 2.822l1 6a1.5 1.5 0 1 1-2.959.493l-1-6a14.708 14.708 0 0 0-.265-1.309L37.5 22c0 1.606 1.703 10.36 2.298 13.37a.99.99 0 0 1-.83 1.173c-4.12.599-6.816.618-10.938.004a.989.989 0 0 1-.823-1.177C27.806 32.408 29.5 23.87 29.5 22l-.255-3.061c-.087.327-.173.752-.265 1.309l-1 6a1.5 1.5 0 0 1-2.96-.493l1-6c.167-1.003.368-2.011.78-2.823.471-.926 1.22-1.605 2.334-1.885.119-.03.241-.046.364-.046H37.5Zm-7.869 23.111.377 3.013a1 1 0 0 0 1.962.119l.72-2.88c-.992-.037-2-.121-3.059-.252Zm4.685.274.714 2.857a1 1 0 0 0 1.962-.118l.364-2.913a34.722 34.722 0 0 1-3.04.174Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="male_and_female_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMaleAndFemale;
