function template() {
  return `
import { createContext, mergeProps, type JSX } from "solid-js";

type HealthIconsContextValue = Partial<JSX.SvgSVGAttributes<SVGSVGElement>>;

export const HealthIconsContext = createContext<HealthIconsContextValue>({});

export interface HealthIconsProviderProps {
  iconProps?: Partial<JSX.SvgSVGAttributes<SVGSVGElement>>;
  children: JSX.Element | JSX.Element[];
}

export function HealthIconsProvider(props: HealthIconsProviderProps) {
  const merged = mergeProps(props.iconProps || {});
  return (
    <HealthIconsContext.Provider value={merged}>
      {props.children}
    </HealthIconsContext.Provider>
  );
}
`;
}

export default template;
