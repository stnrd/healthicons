import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPhysicalTherapy = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.477 13.746a3.746 3.746 0 1 1-7.493 0 3.746 3.746 0 0 1 7.492 0ZM14 30h5.828l4.394 4.336 2.066 4.764a2 2 0 0 0 3.67-1.592l-2.22-5.12a2 2 0 0 0-.43-.627L25.522 30H34a2 2 0 0 1 2 2v8h2v-8a4 4 0 0 0-4-4h-3.128a2 2 0 0 0-.42-3.945c-1.754-.04-2.28-.332-2.657-.671-.253-.229-.536-.576-.928-1.178-.282-.432-.572-.919-.928-1.516l-.493-.823-.043-.07a8.839 8.839 0 0 0-.446-.692c-.195-.263-.556-.69-1.162-.942-.609-.254-1.174-.21-1.523-.155a8.45 8.45 0 0 0-.98.238c-.868.249-1.591.908-2.065 1.423a10.109 10.109 0 0 0-1.5 2.169c-.805 1.558-1.505 3.913-.513 6.11l.024.052H14a4 4 0 0 0-4 4v8h2v-8a2 2 0 0 1 2-2Zm15.33-2h-5.834l-.956-.943 1.513-1.891c.318.426.666.83 1.066 1.19 1.175 1.058 2.53 1.498 4.211 1.644Zm-12.458 2.087 3.276 3.142-.829 2.797c-.05.17-.124.334-.218.486l-1.766 2.846a2 2 0 0 1-3.399-2.109l1.625-2.617 1.103-3.723.208-.822Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPhysicalTherapy);
export default ForwardRef;
