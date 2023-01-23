import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMinerWorker = (passedProps: SvgProps) => {
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
        d="M29 13.48a1 1 0 0 1-1-1V7.882a10.025 10.025 0 0 0-3-.807v3.405a1 1 0 0 1-2 0V7.02a8.928 8.928 0 0 0-3 .69v4.77a1 1 0 0 1-2 0V8.954a7.488 7.488 0 0 0-2.04 2.808c-.096.08-.19.163-.282.25-.243.91-.217 1.671-.045 2.15a1 1 0 0 1-1.882.676 3.997 3.997 0 0 1-.148-.525c-1.466 2.051-.114 3.533 2.493 4.447a8 8 0 1 0 15.809 0c2.611-.916 3.963-2.402 2.484-4.459-.04.18-.09.357-.15.53a1 1 0 1 1-1.887-.662c.195-.556.2-1.295-.017-2.098a3.9 3.9 0 0 0-.236-.122c-.402-.99-1.104-1.983-2.099-2.818v3.35a1 1 0 0 1-1 1Zm-4.356 6.375a1.5 1.5 0 1 0-1.288-2.71 1.5 1.5 0 0 0 1.288 2.71ZM24 22c1.51 0 2.796-.956 3.287-2.295a26.68 26.68 0 0 0 2.674-.391 6 6 0 1 1-11.923 0c.843.17 1.743.3 2.675.39A3.501 3.501 0 0 0 24 22Z"
        fill="#333"
      />
      <Path d="M25 7a1 1 0 1 0-2 0h2Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.466 28.4c1.15.184 2.348.43 3.534.735V42H16V29.134a39.478 39.478 0 0 1 3.534-.734L23 31h2l3.466-2.6ZM26 37a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#333"
      />
      <Path
        d="M12 30.425a29.243 29.243 0 0 1 2-.717V42h-2V30.425ZM34 29.708c.687.22 1.357.459 2 .717V42h-2V29.708ZM10 31.345C7.635 32.597 6 34.167 6 36v6h4V31.345ZM42 36c0-1.833-1.635-3.404-4-4.655V42h4v-6Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgMinerWorker;
