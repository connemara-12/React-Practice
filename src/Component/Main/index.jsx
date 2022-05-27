import {Headline} from 'src/Component/Headline'
import { Link } from 'src/Component/Link'
import classes  from 'src/Component/Main/Main.module.css'

export function Mian(props) {
  return (
      <main className={classes .main}>
        <Headline page = {props.page}>
          <code className={classes .code}>pages/{props.page}.js</code>
        </Headline>
        <Link />
      </main>
      
  );
}
