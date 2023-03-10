import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGastroenterology = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.314 6.845c0 .16 0 3.752.002 3.896.034 3.607.501 5.376 1.418 6.32.806.831 2.164 1.233 4.714 1.308.202-2.036 1.014-3.66 2.207-4.817 1.373-1.332 3.192-1.987 4.991-1.987 1.8 0 3.619.655 4.992 1.987 1.385 1.343 2.256 3.316 2.256 5.83v8.333c0 2.354-.391 4.846-1.602 6.78-1.257 2.006-3.336 3.31-6.41 3.31-3.163 0-5.359-1.883-7.3-3.557l-.061-.054c-1.976-1.705-3.752-3.237-6.27-3.585-1.059.01-1.794.294-2.322.681-.549.402-.942.966-1.22 1.617-.57 1.333-.589 2.868-.561 3.528.005.13.008 1.548.01 2.88l.002 1.85v.833l-2 .003v-.834a3774.833 3774.833 0 0 0-.009-4.388l-.001-.196v-.065c-.032-.748-.029-2.647.719-4.396.38-.89.969-1.78 1.878-2.445.919-.673 2.098-1.069 3.567-1.069.395 0 .76.01 1.107.018.632.015 1.204.029 1.787-.015.852-.064 1.52-.247 2.065-.655 1.026-.77 2.001-2.655 2.115-7.587-2.648-.076-4.713-.496-6.09-1.914-1.529-1.577-1.948-4.124-1.982-7.696l-.002-3.914h2Zm3.564 23.499c1.04.685 1.955 1.477 2.808 2.214l.203.175c2.01 1.735 3.673 3.071 5.993 3.071 2.409 0 3.836-.968 4.715-2.371.923-1.475 1.297-3.528 1.297-5.718v-8.333c0-2.03-.69-3.466-1.649-4.395-.97-.94-2.275-1.422-3.598-1.422-1.324 0-2.63.482-3.6 1.422-.957.93-1.648 2.365-1.648 4.395 0 5.69-.987 8.72-2.927 10.174a4.953 4.953 0 0 1-1.594.788Z"
        fill="#333"
      />
      <Path
        d="M36.894 25.064c-4.545 3.935-7.196-3.936-12.877 0l-1.515 3.03-3.787 1.893s7.196 6.817 11.362 6.817 7.574-3.787 6.817-11.74Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgGastroenterology;
