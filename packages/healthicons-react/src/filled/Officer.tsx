import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOfficer = (
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
        d="M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403Zm12.5-.53s-1.467-.534-2-1.067c-.533.533-2 1.067-2 1.067s.4 2.933 2 2.933 2-2.933 2-2.933ZM31.814 18.28c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0ZM24 20c2.721 0 4.623-.314 5.952-.766a6 6 0 1 1-11.903 0c1.328.452 3.23.766 5.951.766Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.879 28 6.477 5.457a1 1 0 0 0 1.288 0L31.121 28S42 31.393 42 35.467V42H6v-6.533C6 31.393 16.879 28 16.879 28Zm-4.154 9.207a1 1 0 0 1-.725-.961V35h7v1.246a1 1 0 0 1-.725.961l-2.5.715a1 1 0 0 1-.55 0l-2.5-.715Zm20.94-4.082a.17.17 0 0 0-.33 0l-.471 1.52a.174.174 0 0 1-.165.126h-1.526c-.167 0-.237.225-.101.328l1.234.94c.06.046.086.128.063.202l-.471 1.52c-.052.168.13.307.266.204l1.234-.94a.166.166 0 0 1 .204 0l1.234.94c.136.103.318-.036.267-.203l-.472-1.52a.186.186 0 0 1 .063-.203l1.234-.94c.136-.103.066-.328-.101-.328H34.3a.174.174 0 0 1-.165-.125l-.472-1.52Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOfficer);
export default ForwardRef;
