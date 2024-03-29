import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInsecticideResistance = (
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
      <g clipPath="url(#insecticide_resistance_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25 35h3.586L23 40.586l-7.293-7.293-1.414 1.414L21.586 42H12v2h24v-2H24.414L30 36.414V40h2v-7h-7v2ZM24 4a1 1 0 0 1 1 1v6.95c.095.152.186.325.27.517l1.959-2.211.827-2.37a1 1 0 0 1 1.888.659l-.892 2.556a.999.999 0 0 1-.195.334l-2.48 2.797.523.06 9.22 1.062.643.074.195.618c.24.76.144 1.836-.745 2.683-.85.81-2.276 1.271-4.399 1.271-2.228 0-3.762-.693-4.738-1.695a4.597 4.597 0 0 1-1.077-1.762l.001.172c0 .745-.054 1.456-.151 2.104l2.51.962a1 1 0 0 1 .301.183l1.551 1.364 1.97.495a1 1 0 1 1-.487 1.94l-2.205-.555a1 1 0 0 1-.417-.218l-1.598-1.405-1.254-.482 1.555 1.303a1 1 0 0 1 .337.971l-.43 2.06 1.141 1.142a1 1 0 0 1-1.414 1.415l-1.524-1.524a1 1 0 0 1-.272-.912l.419-2.003-1.281-1.073a.996.996 0 0 1-.293-.412.84.84 0 0 1-.458.145.84.84 0 0 1-.458-.145.998.998 0 0 1-.202.325l-1.001 1.079.435 2.084a1 1 0 0 1-.271.912l-1.524 1.524a1 1 0 0 1-1.415-1.415l1.142-1.141-.43-2.06a1 1 0 0 1 .245-.886l1.227-1.321-.92.393-1.487 1.402a1 1 0 0 1-.443.242l-2.204.554a1 1 0 0 1-.487-1.94l1.952-.49 1.427-1.345a1 1 0 0 1 .292-.191l2.274-.974a14.22 14.22 0 0 1-.151-2.28 4.598 4.598 0 0 1-1.076 1.763C19.948 19.307 18.414 20 16.185 20c-2.122 0-3.548-.46-4.398-1.27-.889-.848-.986-1.923-.745-2.684l.195-.618.644-.074 9.219-1.061.522-.06-2.479-2.798a.999.999 0 0 1-.195-.334l-.892-2.556a1 1 0 0 1 1.888-.66l.827 2.37 1.959 2.211c.084-.19.175-.364.27-.515V5a1 1 0 0 1 1-1Zm10.888 13.225a1.032 1.032 0 0 1-.055.057c-.31.295-1.118.718-3.019.718-1.794 0-2.774-.544-3.306-1.09a2.653 2.653 0 0 1-.36-.46l6.74.775Zm-21.72.057a.994.994 0 0 1-.056-.057l6.74-.776a2.657 2.657 0 0 1-.36.46C18.96 17.457 17.98 18 16.186 18c-1.9 0-2.71-.423-3.019-.718Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="insecticide_resistance_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgInsecticideResistance);
export default ForwardRef;
