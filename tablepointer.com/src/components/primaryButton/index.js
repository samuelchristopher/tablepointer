import { h } from 'preact'
import { Link } from 'preact-router'
import style from './style'

const PrimaryButton = ({ text, linkHREF }) => (
    <Link class={style.button__primary} href={linkHREF}>
        { text }
    </Link>
)

export default PrimaryButton