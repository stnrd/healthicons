const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  props[0].name = "passedProps";
  return tpl`
    ${imports}
import { HealthIconsContext } from './HealthIconsContext'

${interfaces}


const ${componentName} = (${props}) => {
  const context = React.useContext(HealthIconsContext);
  const props = { ...context, ...passedProps };
  return (
    ${jsx}
  );
}
${exports}
  `;
};

module.exports = template;
