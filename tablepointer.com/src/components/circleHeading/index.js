import { h } from 'preact'
import style from './style'

const CircleHeading = ({ text }) => (
    <div class={style.container}>
        <div class={style.circles}/>
        <h1 class={style.text}>{ text }</h1>
    </div>
)

export default CircleHeading