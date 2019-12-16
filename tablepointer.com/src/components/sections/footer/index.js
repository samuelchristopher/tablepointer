import { h } from 'preact'
import { Link } from 'preact-router'
import style from './style'

const Footer = () => (
    <footer class={style.container}>
        <div class={style.logo}></div>
        <Link class={style.link} href="/contact">Contact Us</Link>
        <p>Copyright TablePointer. All rights reserved.</p>
    </footer>
)

export default Footer