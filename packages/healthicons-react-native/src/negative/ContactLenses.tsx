import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContactLenses = (passedProps: SvgProps) => {
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
      <G clipPath="url(#contact_lenses_svg__a)" fill="#000">
        <Path d="m33.104 9.112-.012.015.012-.015ZM32.56 9.5a7.94 7.94 0 0 0-1.388-.569C29.426 8.375 26.89 8 24 8c-2.89 0-5.426.375-7.172.931a7.94 7.94 0 0 0-1.388.569c.327.18.784.377 1.388.569C18.574 10.624 21.11 11 24 11c2.89 0 5.426-.376 7.172-.931A7.938 7.938 0 0 0 32.56 9.5ZM14.896 9.112l.012.015c-.01-.01-.012-.015-.012-.015ZM32.358 11.775C31.064 14.293 27.928 16.2 24 16.2c-3.927 0-7.064-1.907-8.358-4.425C17.659 12.525 20.655 13 24 13c3.345 0 6.34-.475 8.358-1.225Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM34 24.553l-.459.462c-3.008-1.41-6.375-.502-8.56 1.418-1.374 1.206-2.365 2.87-2.524 4.729-.114 1.333.205 2.699 1.028 3.99L16.691 42H6v-8.697l9.164-9.237C28.4 10.724 34 24.553 34 24.553Zm-7.7 3.383c1.53-1.345 3.686-1.987 5.7-1.368l-7.057 7.114c-.425-.813-.556-1.611-.493-2.35.107-1.25.787-2.463 1.85-3.396Zm8.685-18.25a1.14 1.14 0 0 0 .012-.269c.002-.072.003-.144.003-.217h-.04C34.482 7.407 29.757 6 24 6c-5.758 0-10.482 1.407-10.96 3.2H13c0 .073.001.145.003.217a1.149 1.149 0 0 0 .012.27C13.326 14.605 18.33 18.2 24 18.2c5.67 0 10.674-3.594 10.985-8.514Z"
        />
      </G>
      <Defs>
        <ClipPath id="contact_lenses_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgContactLenses;
