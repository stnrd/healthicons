import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgYoungPeople = (passedProps: SvgProps) => {
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
        d="M33 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5.307 13.27c.58 1.89 1.308 3.873 1.762 5.07a.999.999 0 0 1-.745 1.34c-4.538.835-7.663.813-12.594-.013a1.01 1.01 0 0 1-.761-1.37c.471-1.19 1.208-3.133 1.78-5.02-1.816-.18-3.249-2.294-3.249-4.876 0-2.7 1.567-4.89 3.5-4.89h.013A1.328 1.328 0 0 1 29.329 18h7.343a1.328 1.328 0 0 1 1.315 1.513H38c1.933 0 3.5 2.189 3.5 4.889 0 2.555-1.404 4.653-3.193 4.87Zm-8.345-5.761c.405-.902.538-2.26.538-4.009h2c0 1.75-.117 3.498-.712 4.827-.31.689-.763 1.304-1.425 1.74-.664.438-1.459.643-2.363.643v-2c.596 0 .988-.132 1.262-.313.276-.181.51-.462.7-.888ZM35.5 19.5c0 1.75.133 3.107.538 4.009.19.426.424.707.7.888.274.18.666.314 1.262.314v2c-.904 0-1.7-.207-2.363-.644-.662-.436-1.115-1.051-1.425-1.74-.595-1.33-.712-3.076-.712-4.827h2ZM28.5 37.151V38.5a1.5 1.5 0 0 0 2.948.39l.395-1.464a36.268 36.268 0 0 1-3.343-.275Zm6.641.218.41 1.522A1.5 1.5 0 0 0 38.5 38.5V37a42.28 42.28 0 0 1-3.359.37ZM14.445 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3.68 23.996A2 2 0 0 0 20 38v-8.701c1.974-.3 3.501-2.358 3.501-4.852 0-2.57-1.62-4.676-3.681-4.874A1 1 0 0 0 19 18h-8a1 1 0 0 0-.82 1.573c-2.06.2-3.68 2.305-3.68 4.874 0 2.493 1.527 4.55 3.5 4.851V38a2 2 0 0 0 3.983.256L14.791 32h.444l.78 6.248a2 2 0 0 0 2.11 1.748ZM11.527 23.67c.413-.852.578-2.201.578-4.112h2c0 1.92-.147 3.682-.777 4.984-.329.678-.8 1.259-1.466 1.661-.661.4-1.438.578-2.307.578v-2c.595 0 .993-.12 1.272-.29.275-.165.508-.422.7-.821Zm6.146-4.112c0 1.91.165 3.26.578 4.112.193.399.426.655.7.822.28.168.677.29 1.272.29v2c-.868 0-1.646-.18-2.307-.579-.665-.402-1.137-.983-1.465-1.661-.63-1.302-.778-3.065-.778-4.984h2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgYoungPeople;
