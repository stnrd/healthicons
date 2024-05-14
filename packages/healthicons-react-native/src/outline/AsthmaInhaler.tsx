import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAsthmaInhaler = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.331 6.741a1 1 0 0 0-1.225-.707L7.38 8.104a1 1 0 0 0-.707 1.225l1.506 5.622-1.074.489a1 1 0 0 0-.55 1.174l5.675 20.708A5 5 0 0 0 17.051 41H30a1 1 0 0 0 1-1v-1h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-3v-1a1 1 0 0 0-1-1h-6.17l-4.273-15.947a1 1 0 0 0-1.38-.651l-.771.35-1.075-4.01ZM8.707 16.907l9.224-4.196 4.166 15.548a1 1 0 0 0 .966.741H29v10H17.051a3 3 0 0 1-2.893-2.207l-5.45-19.886Zm6.853-5.315-5.536 2.52-1.161-4.334 5.795-1.553.902 3.367ZM31 37v-6h2v6h-2Z"
      />
      <Path d="M42 31a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM38 33a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM38 37a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM43 34a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM43 38a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </Svg>
  );
};
export default SvgAsthmaInhaler;
