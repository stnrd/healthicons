import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMicroscope = (passedProps: SvgProps) => {
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
        d="m21.263 7.453-1.49.848-1.22-2.187-2.63 1.444 1.242 2.227-1.508.858 1.06 1.839a2.978 2.978 0 0 0-.252 3.368l.596 1.024c-2.754 1.585-4.874 3.478-6.06 5.831-1.142 2.27-1.359 4.851-.597 7.779A9.976 9.976 0 0 0 7 38c0 1.422.297 2.775.832 4H40a1 1 0 1 0 0-2H26.8a10.05 10.05 0 0 0-.766-6.293l12.042-6.786-.992-1.736-12.08 6.807.992 1.736-6.514 3.671-.992-1.736 6.508-3.668A9.985 9.985 0 0 0 17 28c-1.752 0-3.4.45-4.831 1.242-.442-2.211-.18-4.053.619-5.637.948-1.882 2.715-3.528 5.278-5.002l2.922 5.024a3.023 3.023 0 0 0 4.11 1.101l.668-.382.609 1.177 2.674-1.362-.677-1.309.848-.486a2.977 2.977 0 0 0 1.095-4.085l-4.523-7.777a3.025 3.025 0 0 0-3.549-1.352l-.98-1.699Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgMicroscope;
