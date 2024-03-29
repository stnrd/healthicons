import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPlantationWorker = (
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
      <g clipPath="url(#plantation_worker_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10 4.477 10 10 10Zm-10 3.229V35h-1a1 1 0 0 0-1 1v6H6v-6.462c0-3.235 3.69-5.2 8-6.31ZM18 35h-2v-6.22a43.31 43.31 0 0 1 4-.574V30a2 2 0 0 0 2 2h4c.532 0 1.016-.208 1.374-.547.033.11.068.222.105.337.16.482.395 1.083.74 1.67.081.135.175.283.283.436a3.001 3.001 0 0 0-1.406 1.847C26.21 35.89 25.16 36 24 36c-3.5 0-6-1-6-1Zm10 1.783 1-.144-1 .144ZM24 38c1.183 0 2.262-.103 3.191-.246.068.292.162.65.288 1.036.118.356.277.778.492 1.21H14v-3h3.651l.177.059c.336.108.811.249 1.401.388 1.178.277 2.834.553 4.771.553Zm4-8.217 1-.143-1 .143Zm1.544-1.4.253.617-.253-.617ZM37 27.355c.873-.666 2-1.822 2-3.355 0-1.903-1.739-3.227-2.569-3.75a.802.802 0 0 0-.862 0C34.739 20.773 33 22.097 33 24c0 1.533 1.127 2.69 2 3.355v2.346a2.311 2.311 0 0 0-.438-.317c-1.383-.774-3.163-.2-4.034.172a.804.804 0 0 0-.488.836c.102.909.47 2.62 1.785 3.231 1.09.507 2.343.408 3.175.246v1.832a2.311 2.311 0 0 0-.438-.317c-1.383-.773-3.163-.2-4.034.172a.804.804 0 0 0-.488.836c.102.909.47 2.62 1.785 3.231 1.09.507 2.343.408 3.175.246V41a1 1 0 1 0 2 0v-1.13c.832.161 2.085.26 3.175-.247 1.315-.61 1.683-2.322 1.785-3.231a.804.804 0 0 0-.488-.836c-.87-.372-2.65-.945-4.034-.172A2.311 2.311 0 0 0 37 35.7V33.87c.832.162 2.085.26 3.175-.246 1.315-.61 1.683-2.322 1.785-3.231a.804.804 0 0 0-.488-.836c-.87-.372-2.65-.946-4.034-.172A2.311 2.311 0 0 0 37 29.7v-2.346Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="plantation_worker_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPlantationWorker);
export default ForwardRef;
