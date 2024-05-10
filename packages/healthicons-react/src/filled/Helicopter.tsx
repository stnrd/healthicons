import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHelicopter = (
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
        d="m43.926 20.624-1.806-4.45 1.834-5.876-1.909-.596-1.74 5.575-10.328.869c-2.595 0-4.911.132-6.977.371V14a1 1 0 1 0-2 0v2.795C13.498 18.019 9.744 20.82 8 23.87c-1.153 2.017-1.352 4.028-1.269 5.517.042.745.155 1.368.259 1.809a8.167 8.167 0 0 0 .203.715l.005.014.002.006.001.002.799-.294-.798.295a1 1 0 0 0 .29.415L8 31.751c-.507.599-.504.602-.5.605l.007.006.015.012a.816.816 0 0 0 .083.059 1.078 1.078 0 0 0 .253.119c.094.032.202.058.331.082.259.05.68.104 1.395.157 1.433.106 4.134.209 9.243.209 2.652 0 4.788-.428 6.49-1.263a8.614 8.614 0 0 0 3.792-3.577c1.54-2.72 1.849-6.323 1.887-10.093l9.413-.791 1.664 4.1 1.853-.752ZM9 27v-.367V27Zm.204-1h10.31c.063-.14.135-.335.215-.59.224-.727.443-1.744.636-2.848.229-1.312.409-2.675.518-3.72-6.811 1.193-9.834 3.726-11.147 6.021-.217.38-.392.761-.532 1.137Z"
      />
      <path d="M5 10a1 1 0 1 0 0 2h33.005a1 1 0 1 0 0-2H5ZM4.375 34.22a1 1 0 0 1 1.406.155c.22.276.783.6 1.758.88.924.265 2.037.44 3.135.554a38.511 38.511 0 0 0 4.083.192h.082l.01-.001H30.5a1 1 0 0 1 0 2H14.847l-.073.001-.271.001a40.498 40.498 0 0 1-4.034-.204c-1.152-.119-2.396-.31-3.481-.62-1.034-.297-2.133-.758-2.769-1.553a1 1 0 0 1 .156-1.406Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHelicopter);
export default ForwardRef;
