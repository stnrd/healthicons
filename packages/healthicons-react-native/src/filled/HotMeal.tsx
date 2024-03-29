import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHotMeal = (passedProps: SvgProps) => {
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
        d="M5 28a1 1 0 1 0 0 2h3a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8h3a1 1 0 1 0 0-2H5Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.105 10.053 24 10.5l.895.447-.002.003-.012.025-.05.11a8.972 8.972 0 0 0-.6 1.861c-.236 1.179-.149 2.222.476 2.847 1.375 1.375 1.288 3.332 1.024 4.653a10.96 10.96 0 0 1-.806 2.438l-.02.043-.007.013-.002.005-.001.001L24 22.5l-.895-.447.002-.003.012-.025.05-.11a8.972 8.972 0 0 0 .6-1.861c.236-1.179.149-2.222-.476-2.847-1.375-1.375-1.288-3.332-1.024-4.653a10.96 10.96 0 0 1 .806-2.438l.02-.043.007-.013.002-.004.001-.002Zm1.79.893ZM15.17 12.441l.83.56c.829.559.83.558.83.558v-.001.001l-.013.02a6.128 6.128 0 0 0-.246.43 5.79 5.79 0 0 0-.45 1.127c-.24.892-.154 1.596.474 2.06 1.622 1.202 1.536 2.999 1.214 4.19a7.783 7.783 0 0 1-.605 1.528 8.037 8.037 0 0 1-.363.627l-.008.012-.002.004-.001.001s-.001.002-.83-.558-.83-.559-.83-.559l.013-.019.054-.086c.047-.079.115-.196.192-.344.155-.298.333-.698.45-1.128.24-.892.154-1.595-.474-2.06-1.622-1.202-1.536-2.998-1.214-4.19.165-.612.409-1.15.605-1.528a8.108 8.108 0 0 1 .363-.626l.007-.012.003-.005.002-.002ZM32.17 12.441l.83.56c.829.559.83.558.83.558v-.001.001l-.013.02a6.128 6.128 0 0 0-.246.43 5.79 5.79 0 0 0-.45 1.127c-.24.892-.154 1.596.474 2.06 1.622 1.202 1.536 2.999 1.214 4.19a7.783 7.783 0 0 1-.605 1.528 8.037 8.037 0 0 1-.362.627l-.008.012-.003.004-.001.001s-.001.002-.83-.558-.83-.559-.83-.559l.013-.019.054-.086c.047-.079.115-.196.192-.344.155-.298.333-.698.45-1.128.24-.892.154-1.595-.474-2.06-1.622-1.202-1.536-2.998-1.214-4.19.165-.612.409-1.15.605-1.528a8.108 8.108 0 0 1 .362-.626l.008-.012.003-.005.002-.002Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgHotMeal;
