import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineITrainingClass = (
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
        d="M6 6v28h22.387v-2H8V8h27v2.12h2V6H6Zm31 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M30.093 21.83a3 3 0 0 1 2.07-.83h4.082c1.464 0 2.827.498 3.877 1.49 1.01.954 1.536 2.177 1.751 3.336.338 1.822-.012 3.813-.873 5.578V39.5a2.5 2.5 0 0 1-4.966.411l-.534-3.204-.534 3.204A2.5 2.5 0 0 1 30 39.5v-9.407a3 3 0 0 1-1.5.402h-5.102a3 3 0 0 1 0-6h3.9l2.795-2.666ZM32 33.475V39.5a.5.5 0 0 0 .993.082l1.043-6.256a1 1 0 0 1 .986-.836h.956a1 1 0 0 1 .986.836l1.043 6.256A.5.5 0 0 0 39 39.5v-8.334a1 1 0 0 1 .112-.46c.772-1.49 1.053-3.123.795-4.515-.157-.846-.524-1.648-1.158-2.247-.647-.611-1.505-.944-2.504-.944h-4.081c-.257 0-.505.099-.691.276l-3.084 2.942a1 1 0 0 1-.69.277h-4.301a1 1 0 0 0 0 2H28.5a1 1 0 0 0 .69-.277l1.12-1.068a1 1 0 0 1 1.69.724v5.602Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineITrainingClass);
export default ForwardRef;
