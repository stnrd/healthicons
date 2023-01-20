import React from "react";

export type HealthIconsContextValue = Partial<React.SVGProps<SVGSVGElement>>;
export const HealthIconsContext = React.createContext<HealthIconsContextValue>(
  {}
);

export interface HealthIconsProviderProps {
  iconProps?: Partial<React.SVGProps<SVGSVGElement>>;
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
