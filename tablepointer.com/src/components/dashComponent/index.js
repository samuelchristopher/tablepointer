import { h } from 'preact'
import style from './style'

const DashComponent = ({ headingText, pText, img }) => (
    <div class={style.container}>
        <div class={style.textcontainer}>
            <h1 class={style.heading}>{ headingText }</h1>
            <p class={style.p}>{ pText }</p>
        </div>
        <div class={style.image}
            style={{ backgroundImage: `url(../../assets/images/${img})` }}/>
    </div>
)

export default DashComponent