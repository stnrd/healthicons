import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOpenMrsLogo = (passedProps: SvgProps) => {
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
        d="M24.012 12.354c-3.22 0-6.135 1.305-8.244 3.414L15.76 8.08C18.228 6.808 21.044 6 24.012 6c2.966 0 5.767.718 8.234 1.989l-.008 7.763a11.62 11.62 0 0 0-8.226-3.398Zm-.017 23.292c3.22 0 6.133-1.304 8.242-3.413l-.006 7.778A17.927 17.927 0 0 1 23.995 42c-2.968 0-5.767-.719-8.236-1.99l.009-7.763a11.625 11.625 0 0 0 8.227 3.398Zm-8.228-3.413a11.618 11.618 0 0 1-3.414-8.241c0-3.212 1.299-6.119 3.399-8.228l-7.763-.008A17.94 17.94 0 0 0 6 23.992c0 2.967.718 5.768 1.99 8.236l7.777.005ZM35.647 24a11.62 11.62 0 0 0-3.414-8.243l7.778.006a17.938 17.938 0 0 1 1.99 8.237c0 2.966-.718 5.767-1.99 8.235l-7.763-.009A11.617 11.617 0 0 0 35.647 24Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgOpenMrsLogo;
