import {Headline} from '../Component/Headline'
import { Link } from '../Component/Link'
import styles from '../styles/Home.module.css'

export function Mian(props) {
  return (
      <main className={styles.main}>
        <Headline page = {props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Link />
      </main>
      
  );
}
