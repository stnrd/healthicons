import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptiveInjection = (passedProps: SvgProps) => {
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
      <G clipPath="url(#contraceptive_injection_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17.347 5.262A2 2 0 0 0 16 7.152V11h1.09c0 .212.068.425.206.607l1.51 1.978-5.362 1.756A5 5 0 0 0 10 20.092V39a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V20.092a5 5 0 0 0-3.444-4.751l-5.362-1.756 1.51-1.978a.996.996 0 0 0 .205-.607H32V7.152a2 2 0 0 0-1.347-1.89l-3.018-1.043A4 4 0 0 0 26.329 4H21.67a4 4 0 0 0-1.306.22l-3.018 1.042ZM28.651 11h-9.302l1.046 1.371a2 2 0 0 1-.967 3.114l-5.362 1.756A3 3 0 0 0 12 20.092V39a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V20.092a3 3 0 0 0-2.066-2.85l-5.362-1.757a2 2 0 0 1-.967-3.114L28.65 11ZM32 28a7.965 7.965 0 0 1-1.68 4.906l-3.113-3.113-1.414 1.414 3.113 3.113A8 8 0 0 1 17.68 23.095l4.113 4.112 1.414-1.414-4.113-4.113A8 8 0 0 1 32 28Zm2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-8.696-4.677c-.746.844-1.006 1.904-.737 2.688a4.29 4.29 0 0 0-.101.161c-.388.65-.506 1.25-.586 1.656l-.01.047c-.088.443-.127.504-.174.553-.056.057-.28.236-1.114.378-.906.154-1.608.348-2.08.686a1.69 1.69 0 0 0-.607.753c-.177.933-.49 2.662-.38 3.655.776-.685 1.198-1.64 1.49-2.302.179-.405.309-.7.442-.756.162-.068.494-.171 1.135-.28.967-.166 1.894-.35 2.398-.873.493-.51.598-1.014.673-1.394l.009-.045c.082-.413.177-.83.384-1.176l.003-.005c.745.023 1.6-.366 2.25-1.1.99-1.123 1.124-2.625.297-3.356-.827-.73-2.3-.412-3.292.71Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="contraceptive_injection_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgContraceptiveInjection;
