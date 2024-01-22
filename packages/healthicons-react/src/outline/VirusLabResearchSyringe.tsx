import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusLabResearchSyringe = (
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
        d="M6.818 12.864A1.157 1.157 0 1 0 8.455 14.5l.818-.819 4.09 4.09-3.272 3.274a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636 2.076 2.076a10.066 10.066 0 0 1 2.781-.047l-3.443-3.443 5.354-5.354L31.9 26.047l-5.076 5.076a10.06 10.06 0 0 1 .055 3.438l.394.394a5.787 5.787 0 0 0 6.205 1.296l1.158 1.159a2.313 2.313 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.313 2.313 0 0 0-.6-2.235l-1.158-1.159a5.787 5.787 0 0 0-1.295-6.205l-13.91-13.91 1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273-4.09-4.09.817-.818a1.157 1.157 0 1 0-1.636-1.637l-6.546 6.546Zm25.93 21.524 2.14-2.14a3.787 3.787 0 0 0-.848-4.06l-.504-.505-5.353 5.354.504.504a3.786 3.786 0 0 0 4.061.847Zm3.302 1.607-.824-.824a5.935 5.935 0 0 0 .445-.444l.824.824a.314.314 0 1 1-.445.444ZM16.86 14.277l-4.09-4.09-2.082 2.08 4.09 4.09 2.082-2.08Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.243 28.828A4.972 4.972 0 0 1 16 28.1V27a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 22 26.586L23.414 28A1 1 0 1 1 22 29.414l-.828.829c.347.524.598 1.119.728 1.757H23a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0h-1.1a4.972 4.972 0 0 1-.728 1.757l.828.829A1 1 0 0 1 23.414 38L22 39.414A1 1 0 1 1 20.586 38l-.829-.828A4.97 4.97 0 0 1 18 37.9V39a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2v-1.1a4.97 4.97 0 0 1-1.757-.728l-.829.828A1 1 0 1 1 12 39.414L10.586 38A1 1 0 0 1 12 36.586l.828-.829A4.972 4.972 0 0 1 12.1 34H11a1 1 0 0 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L12 29.414A1 1 0 1 1 10.586 28l.697-.698.01-.01.01-.009.697-.697A1 1 0 0 1 13.414 28l.829.828ZM14 33a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusLabResearchSyringe);
export default ForwardRef;
