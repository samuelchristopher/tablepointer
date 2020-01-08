import { h } from 'preact'
import style from './style'

const BenefitComponent = ({ icon, headingText, pText }) => (
    <div class={style.container}>
        <div class={`${style.icon} ${icon == "energy" ? style.icon__energy : ''} ${icon == "profit" ? style.icon__profit : ''} ${icon == "safe" ? style.icon__safe : ''}`}/>
        <div class={style.textcontainer}>
            <h2 class={style.heading}>{ headingText }</h2>
            <p class={style.text}>{ pText }</p>
        </div>
    </div>
)

export default BenefitComponent