import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalSpider = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#animal-spider_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm29.97 29c-.01.168-.022.336-.037.502a.995.995 0 0 1 .553.124l4.5 2.5a1 1 0 0 1 .45.523l3 8a1 1 0 0 1-1.872.702l-2.871-7.655-4.058-2.255C28.794 35.27 26.588 38 24 38c-2.588 0-4.794-2.731-5.635-6.559l-4.058 2.255-2.87 7.655a1 1 0 0 1-1.873-.702l3-8a1 1 0 0 1 .45-.523l4.5-2.5a.995.995 0 0 1 .553-.124A16.654 16.654 0 0 1 18.03 29c-.04 0-.079 0-.119-.004l-5.048-.45-3.065 4.057a1 1 0 1 1-1.596-1.206l3.4-4.5a1 1 0 0 1 .887-.393l5.54.495c.021-.34.052-.676.092-1.006a.996.996 0 0 1-.475-.058l-6.6-2.5a1.001 1.001 0 0 1-.361-.236l-4.4-4.5a1 1 0 1 1 1.43-1.398l4.246 4.342 6.393 2.422c.04.015.078.032.115.052.093-.366.198-.72.315-1.062l-6.078-7.947a1 1 0 0 1-.187-.804l1.5-7.5a1 1 0 0 1 1.962.392l-1.412 7.056 5.152 6.737A7.772 7.772 0 0 1 21 19.338V15.5a1 1 0 1 1 2 0v.5h2v-.5a1 1 0 1 1 2 0v3.838c.47.453.9 1.01 1.279 1.651l5.152-6.737-1.412-7.056a1 1 0 0 1 1.962-.392l1.5 7.5a1 1 0 0 1-.187.803l-6.078 7.948c.117.342.222.696.315 1.062.037-.02.075-.037.115-.052l6.393-2.422 4.246-4.342a1 1 0 1 1 1.43 1.398l-4.4 4.5a1.001 1.001 0 0 1-.36.236l-6.6 2.5a.996.996 0 0 1-.476.058c.04.33.071.665.091 1.006l5.541-.495a1 1 0 0 1 .887.393l3.4 4.5a1 1 0 0 1-1.596 1.206l-3.066-4.058-5.047.451c-.04.004-.08.005-.119.004Z"
        />
      </g>
      <defs>
        <clipPath id="animal-spider_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalSpider);
export default ForwardRef;
