import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForestPersons = (
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
      <path d="M21.41 13.002c.092-.414.14-.845.14-1.288C21.55 8.558 19.108 6 16.095 6c-3.012 0-5.454 2.558-5.454 5.714 0 .443.048.874.139 1.288-1.68.7-2.867 2.418-2.867 4.426 0 .488.07.957.2 1.4A3.81 3.81 0 0 0 9.905 26H15v13H7.5a1.5 1.5 0 0 0 0 3h33a1.5 1.5 0 0 0 0-3h-1.477a1 1 0 0 0 .902-1.38l-1.616-3.929a.999.999 0 0 0-.239-.348l-2.795-2.632.938-3.609c.29.53.591 1.01.95 1.416.44.498.954.873 1.61 1.12.636.238 1.36.338 2.2.362a1 1 0 0 0 .055-2c-.726-.02-1.206-.105-1.553-.235a1.939 1.939 0 0 1-.813-.57c-.258-.293-.513-.702-.833-1.311-.187-.356-.376-.74-.592-1.18-.162-.33-.34-.69-.544-1.095-.355-.702-1.102-1.136-1.703-1.358-.605-.224-1.43-.37-2.126-.121-3.005 1.071-4.706 3.353-5.81 6.543a1 1 0 0 0 1.891.654c.61-1.762 1.365-3.073 2.385-4.006l-.326 3.588a1 1 0 0 0 .31.819l5.228 4.923 1.533 3.73a1 1 0 0 0 .902.619H28.01c.21-.002.42-.07.6-.207l3-2.308a1 1 0 0 0 .347-.504l.862-2.855-1.653-1.565-.201.786-.83 2.749-2.745 2.111a1 1 0 0 0 .6 1.793H17V26h5.286a3.81 3.81 0 0 0 1.792-7.172c.13-.443.199-.912.199-1.4 0-2.008-1.187-3.726-2.866-4.426ZM38 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgForestPersons);
export default ForwardRef;
