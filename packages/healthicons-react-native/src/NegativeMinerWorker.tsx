import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeMinerWorker = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M0 0h48v48H0V0Zm31.904 18.76a8 8 0 1 1-15.809 0c-2.606-.914-3.958-2.396-2.492-4.447.038.181.087.356.148.525a1 1 0 1 0 1.882-.676c-.172-.479-.197-1.24.045-2.15a6 6 0 0 1 .282-.25A7.488 7.488 0 0 1 18 8.954v3.526a1 1 0 0 0 2 0V7.71a8.928 8.928 0 0 1 3-.69v3.46a1 1 0 0 0 2 0V7.075c1.123.127 2.124.412 3 .807v4.598a1 1 0 0 0 2 0V9.131c.995.835 1.697 1.829 2.1 2.818a3.9 3.9 0 0 1 .235.122c.216.803.212 1.542.017 2.098a1 1 0 1 0 1.887.662c.06-.173.11-.35.15-.53 1.479 2.057.127 3.543-2.485 4.459Zm-13.865.554c.842.17 1.742.3 2.674.391a3.501 3.501 0 0 0 6.574 0c.932-.09 1.832-.221 2.674-.391a6 6 0 1 1-11.923 0ZM24 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-13a1 1 0 1 0-2 0h2Zm7 22.134V42H16V29.134a39.478 39.478 0 0 1 3.534-.734L23 31h2l3.466-2.6c1.15.184 2.348.43 3.534.735Zm-20 1.291a29.243 29.243 0 0 1 2-.717V42h-2V30.425ZM36 42h-2V29.708c.687.22 1.357.459 2 .717V42ZM10 31.345C7.635 32.597 6 34.167 6 36v6h4V31.345ZM38 42h4v-6c0-1.833-1.635-3.404-4-4.655V42Zm-12-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeMinerWorker);
export default ForwardRef;
