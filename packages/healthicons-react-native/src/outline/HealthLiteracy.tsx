import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthLiteracy = (passedProps: SvgProps) => {
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
      <Path d="M27 37a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.408 10.427A71.39 71.39 0 0 0 24 11.24a71.371 71.371 0 0 0-4.408-.813c1.245.49 2.51 1.077 3.845 1.722a.998.998 0 0 1 .563.898c0-.383.218-.732.563-.898 1.335-.645 2.6-1.233 3.845-1.722ZM24 35.401c0 .578-.473 1-1 1.007v.197c-6.269-1.061-10.698-1.128-17-.022v-23.55a52.497 52.497 0 0 1 2-.417v-2.033c-1.026.184-2.1.412-3.243.688a.991.991 0 0 0-.757.965v25.539c0 .633.583 1.105 1.204.987 7.076-1.35 11.525-1.27 18.604.015.065.012.13.017.193.017s.127-.005.191-.017c7.079-1.285 11.528-1.365 18.604-.015A1.012 1.012 0 0 0 44 37.775V12.236a.991.991 0 0 0-.757-.965A55.778 55.778 0 0 0 40 10.583v2.033c.644.12 1.308.26 2 .417v23.55c-6.302-1.106-10.731-1.04-17 .022v-.197c-.527-.008-1-.43-1-1.007Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10.507v22.548c.001.002.003.005.007.008a.064.064 0 0 0 .053.013c5.34-.98 9.353.22 13.915 2.33a.03.03 0 0 0 .008.002h.002a.027.027 0 0 0 .012-.004.02.02 0 0 0 .003-.002V13.048c-4.98-2.404-8.734-3.88-14-2.541Zm14 2.541ZM8.474 8.577c6.019-1.541 10.347.232 15.398 2.671a1.998 1.998 0 0 1 1.128 1.8V35.4c0 1.487-1.547 2.428-2.864 1.82-4.38-2.025-7.95-3.052-12.715-2.177C8.211 35.266 7 34.364 7 33.055V10.492c0-.88.583-1.687 1.474-1.915Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 10.507v22.548c-.001.002-.003.005-.008.008a.064.064 0 0 1-.052.013c-5.34-.98-9.352.22-13.915 2.33a.03.03 0 0 1-.008.002h-.002a.027.027 0 0 1-.012-.004L25 35.4V13.047c4.98-2.404 8.734-3.88 14-2.54Zm-14 2.54Zm14.526-4.47c-6.019-1.541-10.347.232-15.398 2.671a2 2 0 0 0-1.128 1.8v22.354c0 1.487 1.547 2.428 2.864 1.819 4.38-2.025 7.95-3.052 12.715-2.177 1.21.222 2.421-.679 2.421-1.989V10.492a1.97 1.97 0 0 0-1.474-1.915Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 14a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.56 19.34c-1.03.27-2.11.737-3.582 1.538a1 1 0 0 1-.956-1.756c1.537-.837 2.778-1.388 4.03-1.717 1.26-.33 2.482-.423 3.962-.402a1 1 0 0 1-.028 2c-1.377-.02-2.402.068-3.426.337ZM11.51 27.5c2.916-.028 4.535.247 7.632 1.434l.716-1.868c-3.32-1.272-5.188-1.597-8.368-1.566l.02 2ZM11.51 22.5c2.916-.028 4.535.247 7.632 1.434l.716-1.868c-3.32-1.272-5.188-1.597-8.368-1.566l.02 2ZM11.51 17.5c2.916-.028 4.535.247 7.632 1.434l.716-1.868c-3.32-1.272-5.188-1.597-8.368-1.566l.02 2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHealthLiteracy;
