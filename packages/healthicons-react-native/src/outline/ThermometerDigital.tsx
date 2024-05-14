import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgThermometerDigital = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="m35.972 39.531-1.867 1.193 1.79 2.8a1.108 1.108 0 0 0 1.866-1.192l-1.789-2.801ZM24.057 20.107l-4.91-7.685-2.561 1.636 4.909 7.685 2.562-1.636Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m33.032 39.036.1.157L35 38l-.1-.157C27.796 26.698 27.8 24.166 27.8 22.75c0-.343.001-.62-.1-.94-.164-.514-.268-.936-.363-1.317-.207-.833-.364-1.466-.978-2.427L17.877 4.786a2 2 0 0 0-2.762-.61L10.8 6.934a2 2 0 0 0-.609 2.762l8.484 13.281c.614.96 1.123 1.37 1.791 1.907.306.246.645.519 1.043.883.247.227.5.343.812.487 1.285.592 3.587 1.653 10.711 12.783ZM11.877 8.618l4.314-2.756 1.699 2.66-4.32 2.748-1.693-2.652Zm2.77 4.337 4.32-2.748 5.708 8.936c.434.68.53 1.057.722 1.832l.003.012c.094.38.211.852.394 1.427v.008l.002.014c.002.02.003.053.005.106v.206c0 .89.032 2.066.901 4.32-1.681-1.735-2.735-2.259-3.544-2.632a10.536 10.536 0 0 1-.282-.136.31.31 0 0 0-.018-.011c-.445-.407-.825-.712-1.13-.957l-.009-.008c-.622-.5-.924-.745-1.358-1.425l-5.713-8.944Z"
      />
    </Svg>
  );
};
export default SvgThermometerDigital;
