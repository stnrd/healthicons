import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.985 9.686a1.14 1.14 0 0 0 .012-.269c.002-.072.003-.144.003-.217h-.04C34.482 7.407 29.757 6 24 6c-5.758 0-10.482 1.407-10.96 3.2H13c0 .073.001.145.003.217a1.149 1.149 0 0 0 .012.27C13.326 14.605 18.33 18.2 24 18.2c5.67 0 10.674-3.594 10.985-8.514Zm-1.88-.574-.013.015.012-.015Zm-.545.388a7.94 7.94 0 0 0-1.388-.569C29.426 8.375 26.89 8 24 8c-2.89 0-5.426.375-7.172.931a7.94 7.94 0 0 0-1.388.569c.327.18.784.377 1.388.569C18.574 10.624 21.11 11 24 11c2.89 0 5.426-.376 7.172-.931A7.938 7.938 0 0 0 32.56 9.5Zm-17.664-.388.012.015c-.01-.01-.012-.015-.012-.015Zm17.462 2.663C30.341 12.525 27.345 13 24 13c-3.345 0-6.34-.475-8.358-1.225C16.936 14.293 20.072 16.2 24 16.2c3.927 0 7.064-1.907 8.358-4.425Z"
        fill="#000"
      />
      <Path
        d="m33.541 25.015.459-.462s-5.6-13.83-18.836-.487L6 33.303V42h10.69l6.795-6.849c-.823-1.29-1.142-2.656-1.028-3.989.16-1.858 1.15-3.523 2.523-4.73 2.186-1.919 5.553-2.826 8.561-1.417Z"
        fill="#000"
      />
      <Path
        d="M32 26.568c-2.014-.619-4.17.023-5.7 1.368-1.063.933-1.743 2.147-1.85 3.397-.063.738.069 1.536.493 2.35L32 26.567Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgContactLenses;
