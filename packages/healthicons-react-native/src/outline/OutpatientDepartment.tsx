import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutpatientDepartment = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.58 24.137a1.5 1.5 0 0 1 1.5 1.5v10.818a1.5 1.5 0 0 1-3 0V25.637a1.5 1.5 0 0 1 1.5-1.5ZM22.955 14.07c-.36 1.321-1.59 2.294-3.054 2.294-1.746 0-3.16-1.384-3.16-3.091 0-.121.007-.241.02-.36 1.197.703 2.255 1.107 3.362 1.255.928.124 1.842.062 2.832-.097Zm-5.313-2.96a3.186 3.186 0 0 1 2.259-.928c1.308 0 2.43.777 2.91 1.885-.962.165-1.707.215-2.422.119-.806-.108-1.645-.412-2.747-1.075Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.548 10.479a3.177 3.177 0 0 0-.905.632l.131.078c.822.483 1.497.761 2.127.908.165.038.327.067.488.089.67.09 1.37.051 2.248-.09l.174-.03a3.048 3.048 0 0 0-.613-.915 3.174 3.174 0 0 0-2.297-.969c-.484 0-.943.107-1.353.297Zm4.407 3.592c-.109.4-.297.767-.548 1.085a3.18 3.18 0 0 1-2.578 1.207c-1.416-.03-2.603-.973-2.97-2.251a3.028 3.028 0 0 1-.097-1.198c.22.13.437.25.65.359.861.444 1.665.725 2.489.862l.222.033c.928.124 1.842.062 2.832-.097Z"
        fill="#333"
      />
      <Path
        d="M25.431 12.886c0 1.067-.53 1.932-1.185 1.932-.654 0-1.185-.865-1.185-1.932 0-1.066.53-1.931 1.185-1.931s1.185.864 1.185 1.931Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.165 13.679c.186.671.6 1.14 1.081 1.14.482 0 .896-.469 1.081-1.14a2.14 2.14 0 0 1-1.08.276 2.14 2.14 0 0 1-1.082-.276Zm2.162-1.585a2.14 2.14 0 0 0-1.08-.276 2.14 2.14 0 0 0-1.082.276c.186-.672.6-1.14 1.081-1.14.482 0 .896.468 1.081 1.14ZM12.24 20.002c1.095-1.559 2.785-2.82 4.896-2.82a1.5 1.5 0 0 1 1.45 1.119l1.174 4.467h2.906a1.5 1.5 0 1 1 0 3h-4.063a1.5 1.5 0 0 1-1.451-1.119l-.577-2.197c-.87 1.866-1.614 4.332-1.614 7.048a1.5 1.5 0 0 1-2.79.763l1.29-.763-1.29.763-.003-.004-.005-.008-.016-.026-.053-.093c-.044-.079-.107-.19-.181-.328a19.364 19.364 0 0 1-.545-1.09c-.198-.43-.407-.933-.569-1.441-.156-.49-.299-1.08-.299-1.658 0-2.012.64-4.048 1.74-5.613Z"
        fill="#333"
      />
      <Path
        d="M37.282 16.364c0 1.707-1.414 3.09-3.16 3.09-1.745 0-3.16-1.383-3.16-3.09 0-1.707 1.415-3.091 3.16-3.091 1.746 0 3.16 1.384 3.16 3.09Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.28 16.376c.002-.002.002-.004.002-.012l-.001-.012a.097.097 0 0 0-.022-.029.188.188 0 0 0-.137-.05.188.188 0 0 0-.137.05.096.096 0 0 0-.021.029c-.001.001-.002.004-.002.012s0 .01.002.012a.097.097 0 0 0 .021.029c.027.026.07.05.137.05s.11-.024.137-.05a.097.097 0 0 0 .022-.03Zm-.158 3.079c1.746 0 3.16-1.384 3.16-3.091 0-1.707-1.414-3.091-3.16-3.091-1.745 0-3.16 1.384-3.16 3.09 0 1.708 1.415 3.092 3.16 3.092ZM31.444 21.329a1.5 1.5 0 0 1 .34 2.093c-.9 1.25-1.372 2.186-1.609 3.166-.241.997-.27 2.162-.091 3.919a1.5 1.5 0 1 1-2.985.304c-.192-1.894-.197-3.45.16-4.928.362-1.495 1.064-2.79 2.091-4.215a1.5 1.5 0 0 1 2.094-.34Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.58 19.532a1.5 1.5 0 0 1 1.672.841l2.11 4.587h3.13a1.5 1.5 0 1 1 0 3h-4.091a1.5 1.5 0 0 1-1.363-.873l-1.806-3.927-.056.06c-.604.679-1.403 2.096-1.452 4.97.05.04.122.09.218.15.42.257 1.048.519 1.775.765.71.24 1.435.438 2.013.588l.388.1.343.09c.093.024.19.05.272.075.04.012.096.03.154.051h.002c.023.01.201.072.38.2a1.665 1.665 0 0 1 .284.257c.039.044.074.088.1.12.053.069.11.148.168.228.117.163.265.378.43.62.33.486.748 1.117 1.157 1.737a416.55 416.55 0 0 1 1.473 2.257l.137.211-2.519 1.63-.135-.208a441.686 441.686 0 0 0-1.463-2.24 153.25 153.25 0 0 0-1.133-1.703l-.264-.385-.118-.03-.413-.107a33.1 33.1 0 0 1-2.216-.65c-.794-.267-1.673-.614-2.381-1.048-.353-.216-.732-.495-1.038-.852-.309-.361-.617-.895-.617-1.576 0-3.634 1.003-5.883 2.214-7.244a5.891 5.891 0 0 1 1.695-1.334 4.6 4.6 0 0 1 .825-.33l.074-.018.029-.007.012-.002.005-.002h.003c.001 0 .003 0 .312 1.467l-.31-1.468ZM34.5 37.27a1.5 1.5 0 1 0 2.518-1.63L34.5 37.27Z"
        fill="#333"
      />
      <Path d="M17.53 30.273h11.852v2.318H17.53v-2.318Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.382 30.273H17.53v2.318h11.852v-2.318Z"
        fill="#333"
      />
      <Path d="M17.53 38v-6.182h1.58V38h-1.58Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.53 31.818V38h1.58v-6.182h-1.58Z"
        fill="#333"
      />
      <Path d="M27.802 38v-6.182h1.58V38h-1.58Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.802 31.818V38h1.58v-6.182h-1.58Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgOutpatientDepartment;
