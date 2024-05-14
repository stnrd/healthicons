import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFhirLogo = (passedProps: SvgProps) => {
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
      <G clipPath="url(#FHIR-logo_svg__a)">
        <G clipPath="url(#FHIR-logo_svg__b)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48 0H0v48h48V0ZM22.276 41.912c-2.552-4.257-3.245-9.91 2.374-15.55C31.406 19.578 27.5 10.5 25 6c0 .391.026.791.052 1.208.178 2.782.404 6.335-6.552 13.292-7.5 9-2.088 18.912 3.776 21.412Zm1.22.088c-1.196-2.593-2.444-8.865 1.18-12.5 6.528-6.73 5.48-12.627 5.335-12.983.268.424 5.389 8.73 1.62 17.983 2.175-1.256 3.1-2.971 3.369-3.5-1.126 9.124-6.882 10.626-11.504 11ZM30 16.5l.01.017c-.004-.011-.008-.017-.01-.017ZM11.318 28c.4-6 7.182-10.667 10.182-12.5-2.667 2.167-8.182 8.2-8.182 13 0 4.8 2 8.5 3 10-.21-.21-.436-.426-.671-.651-2.002-1.914-4.687-4.48-4.329-9.849Z"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="FHIR-logo_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
        <ClipPath id="FHIR-logo_svg__b">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgFhirLogo;
