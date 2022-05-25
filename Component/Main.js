import {Headline} from '../Component/Headline'
import { Link } from '../Component/Link'
import classes  from './Main.module.css'

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
