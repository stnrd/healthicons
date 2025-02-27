export function getTemplate(native, healthIconsContextPath) {
  return (variables, { tpl }) => {
    variables.props[0].name = 'passedProps';

    // Workaround to fix ref type for React Native
    if (native) {
      variables.props[1].typeAnnotation.typeAnnotation.typeParameters.params[0].typeName.name
        = 'Svg';
    }

    const useClientDirective = native ? '' : '"use client"';

    return tpl`
  ${useClientDirective}
  ${variables.imports};
  import {HealthIconsContext} from "${healthIconsContextPath}"
 
  ${variables.interfaces};
  
  const ${variables.componentName} = (${variables.props}) => {
    const context = React.useContext(HealthIconsContext);
    const props = { ...context, ...passedProps };
    return ${variables.jsx}
  };
  
  ${variables.exports};
  `;
  };
}
