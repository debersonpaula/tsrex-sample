import jss from 'jss';
import jssCamelCase from 'jss-plugin-camel-case';
import jssNested from 'jss-plugin-nested';
import jssDefaultUnit from 'jss-plugin-default-unit';
import { Style } from 'jss/css';

export type Styles<Name extends string = any> = Record<Name, Style | Record<string, Style>>;

export function createJssStyle<Name extends string>(styles: Partial<Styles<Name>>) {
  jss.use(jssCamelCase());
  jss.use(jssNested());
  jss.use(jssDefaultUnit({}));
  return jss.createStyleSheet(styles).attach();
}
