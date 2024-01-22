import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLlin = (passedProps: SvgProps) => {
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
        d="M19 12c0-1.451 1.718-2.662 4-2.94V6h2v3.06c2.282.278 4 1.489 4 2.94 0 .305-.076.6-.217.877a1 1 0 0 1 .166.307l1 3a1 1 0 0 1-1.898.632l-.839-2.517c-.869.438-1.989.701-3.212.701s-2.343-.264-3.212-.7l-.84 2.516a1 1 0 0 1-1.897-.632l1-3a.997.997 0 0 1 .166-.307A1.92 1.92 0 0 1 19 12ZM17.223 18.578a1 1 0 0 1 .077 1.412l-2.11 2.355a1 1 0 1 1-1.49-1.335l2.11-2.355a1 1 0 0 1 1.413-.077ZM11.447 24.394a1 1 0 1 0-.894-1.788L8 23.882V27.5a1 1 0 1 0 2 0v-2.382l1.447-.724ZM6.106 41.947a1 1 0 0 1 .447-1.341L8 39.882V37.5a1 1 0 1 1 2 0v3.618l-2.553 1.276a1 1 0 0 1-1.341-.447ZM10 31a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3ZM30.7 19.99a1 1 0 1 1 1.49-1.335l2.11 2.355a1 1 0 0 1-1.49 1.335L30.7 19.99ZM36.106 23.053a1 1 0 0 0 .447 1.341l1.447.724V27.5a1 1 0 1 0 2 0v-3.618l-2.553-1.276a1 1 0 0 0-1.341.447ZM41.447 40.606a1 1 0 1 1-.894 1.788L38 41.118V37.5a1 1 0 1 1 2 0v2.382l1.447.724ZM39 30a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1ZM16 27v15h2v-4h13v4h2v-6H18v-9h-2Z"
        fill="#000"
      />
      <Path d="M20 32a1.5 1.5 0 1 0 0 3h12a1.5 1.5 0 0 0 0-3H20Z" fill="#000" />
    </Svg>
  );
};
export default SvgLlin;
