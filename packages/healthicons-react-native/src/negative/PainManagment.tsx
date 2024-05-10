import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPainManagment = (passedProps: SvgProps) => {
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
      <G clipPath="url(#pain_managment_svg__a)" fill="#000">
        <Path d="M28.96 10.011c.386.071.644.455.576.857l-1.068 6.299-2.703-1.799-.97 3.994a.71.71 0 0 1-.864.535.742.742 0 0 1-.515-.897l1.454-5.983 2.568 1.71.698-4.116a.714.714 0 0 1 .823-.6ZM14.37 12.878a.695.695 0 0 0-.976.248.756.756 0 0 0 .239 1.016l3.839 2.423-2.698 2.048 5.21 3.855c.319.237.763.16.99-.173a.758.758 0 0 0-.167-1.03l-3.602-2.667 2.827-2.146-5.662-3.574ZM10.09 28.058a.755.755 0 0 1 .274-1.006l5.645-3.28.39 3.516 3.868-1.878a.7.7 0 0 1 .945.358c.166.37.012.81-.344.982l-5.655 2.744-.372-3.35-3.784 2.199a.696.696 0 0 1-.967-.285ZM20.046 37.997c-.391-.038-.679-.398-.643-.804l.57-6.443 2.875 1.582.662-4.135a.714.714 0 0 1 .817-.607c.387.067.649.447.585.85l-.985 6.158-2.734-1.504-.375 4.235a.719.719 0 0 1-.773.668ZM37.631 21.382a.755.755 0 0 0 .281-1.004.697.697 0 0 0-.965-.292l-3.542 2.02-.327-3.166-5.416 2.574a.752.752 0 0 0-.35.98.7.7 0 0 0 .94.365l3.623-1.722.344 3.332 5.412-3.087ZM34.224 33.776a.695.695 0 0 1-.976.248l-5.344-3.372 2.642-2.006-3.307-2.447a.758.758 0 0 1-.166-1.03.693.693 0 0 1 .99-.175l4.914 3.637-2.513 1.907 3.521 2.223a.756.756 0 0 1 .239 1.015Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
        />
      </G>
      <Defs>
        <ClipPath id="pain_managment_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPainManagment;
