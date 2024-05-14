import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMilitaryWorker = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6c-5.293 0-9.583 4.477-9.583 10 0 .576-.637 1.816-1.176 2.764-.235.412.177.923.628.777a48.29 48.29 0 0 1 2.208-.654 8 8 0 1 0 15.846 0 48.29 48.29 0 0 1 2.208.654c.452.146.863-.365.628-.777-.54-.948-1.176-2.188-1.176-2.764 0-5.523-4.29-10-9.583-10Zm-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.181.181 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.181.181 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.181.181 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.181.181 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125l.494-1.52Zm-5.712 9.698a6 6 0 1 0 11.77 0c-4.14-1.002-7.63-1.002-11.77 0Z"
      />
      <path d="m35 24 5-2.857V9h2v23l-7-3v-5ZM35.726 31.728 32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556l3.242-10.807Zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776 1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341Z"
      />
      <path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788l3.694-1.85Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMilitaryWorker);
export default ForwardRef;
