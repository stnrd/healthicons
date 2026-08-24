import { generateImport } from '../../../lib/import-export.js';

function injectProps(svg) {
  return svg.replace(/<svg([^>]*)>/, `<svg$1 {...rest} ref={props.ref}>`);
}

export function getTemplate(healthIconsContextPath, componentName, svgContent) {
  const contextImport = generateImport(
    ['HealthIconsContext'],
    healthIconsContextPath,
  );

  return `
import { splitProps, mergeProps, useContext, type JSX } from "solid-js";
${contextImport}

export const ${componentName} = (props: Partial<JSX.SvgSVGAttributes<SVGSVGElement>>) => {
  const context = useContext(HealthIconsContext);
  const allProps = mergeProps(context || {}, props);
  const [_, rest] = splitProps(allProps, ["ref"]);
  return ${injectProps(svgContent)};
};

export default ${componentName};
`;
}

export default getTemplate;
