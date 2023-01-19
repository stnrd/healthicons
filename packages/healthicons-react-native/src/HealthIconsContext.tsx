import React from "react";
import { SvgProps } from "react-native-svg";

export type HealthIconsContextValue = Partial<SvgProps>;
export const HealthIconsContext = React.createContext<HealthIconsContextValue>(
  {}
);

export interface HealthIconsProviderProps {
  iconProps?: Partial<Omit<SvgProps, "children">>;
  children: React.ReactElement;
}
export function HealthIconsProvider({
  iconProps,
  children,
}: HealthIconsProviderProps) {
  return (
    <HealthIconsContext.Provider value={iconProps || {}} children={children} />
  );
}
