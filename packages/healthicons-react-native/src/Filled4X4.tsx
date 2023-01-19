import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled4X4 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16.736 8.579a3 3 0 0 1 3.674-2.122l16.42 4.4a3 3 0 0 1 2.122 3.675l-.13.483 2.214.593a1 1 0 0 1 .707 1.224l-.906 3.381a1 1 0 0 1-1.225.707l-2.213-.593-.416 1.555c.04.072.076.148.108.226l.858 2.14a2 2 0 0 1 .076 1.263l-1.23 4.59a2 2 0 0 1-2.45 1.414l-5.743-1.54 1.449-5.405a1 1 0 0 0-.707-1.225l-8.694-2.33a1 1 0 0 0-1.224.708l-1.45 5.406-6.234-1.67a2 2 0 0 1-1.414-2.45l1.197-4.47a2 2 0 0 1 .876-1.18l2.292-1.426.085-.05.405-1.509-2.314-.62a1 1 0 0 1-.707-1.224l.906-3.381a1 1 0 0 1 1.225-.707l2.313.62.13-.483Zm3.156-.19a1 1 0 0 0-1.224.707l-1.553 5.796 18.352 4.918 1.553-5.796a1 1 0 0 0-.707-1.225l-16.42-4.4Zm-4.624 15.326a1.5 1.5 0 1 0 .777-2.898 1.5 1.5 0 0 0-.777 2.898Zm19.224 3.598a1.5 1.5 0 1 1-2.898-.777 1.5 1.5 0 0 1 2.898.777Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M15 39c0-1.061-.474-2.078-1.318-2.829C12.838 35.421 11.693 35 10.5 35c-1.193 0-2.338.421-3.182 1.171C6.474 36.921 6 37.94 6 39v2a1 1 0 0 0 1 1h27.5a1 1 0 1 0 0-2H25a2 2 0 0 0-4 0 3 3 0 0 0-6 0v-1Zm2.645-10.055-5.796-1.553-.76 2.836a1 1 0 0 0 .707 1.225l3.864 1.035a1 1 0 0 0 1.225-.707l.76-2.836Zm10.8 2.941 5.796 1.553-.748 2.792a1 1 0 0 1-1.225.707l-3.864-1.035a1 1 0 0 1-.707-1.225l.748-2.792Zm-8.382-4.816 1.036-3.864 2.516.675-1.128 3.839-2.424-.65Zm4.357 1.167 1.127-3.839 2.313.62-1.035 3.864-2.405-.645Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilled4X4);
export default ForwardRef;
