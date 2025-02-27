function template(native) {
  const useClientDirective = native ? '' : '"use client";';

  const imports = [
    'import React from "react";',
    ...(native ? ['import type { SvgProps } from "react-native-svg";'] : []),
  ].join('\n');

  return `
${useClientDirective}
${imports}

type HealthIconsContextValue = Partial<${
  native ? 'SvgProps' : 'React.SVGProps<SVGSVGElement>'
}>;

export const HealthIconsContext = React.createContext<HealthIconsContextValue>({});

export interface HealthIconsProviderProps {
  iconProps?: Partial<${
    native ? `Omit<SvgProps, 'children'>` : 'React.SVGProps<SVGSVGElement>'
  }>;
  children: React.ReactNode;
}

export function HealthIconsProvider({ iconProps, children }: HealthIconsProviderProps) {
  return (
    <HealthIconsContext.Provider value={iconProps || {}} children={children} />
  );
}
`;
}

export default template;

export const exports = ['HealthIconsContext', 'HealthIconsProvider'];
