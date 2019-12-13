import { h } from 'preact'
import PrimaryButton from '../primaryButton'
import style from './style'

const CircleHeading = ({ headingText, showButton, buttonHref, buttonText }) => (
    <div>
        <div class={style.container}>
            <div class={style.circles}/>
            <h1 class={style.text}>{ headingText }</h1>           
        </div>
        {showButton ? <div class={style.circleheading__button} ><PrimaryButton linkHREF={buttonHref} text={buttonText}/></div> : ''}
    </div>
)

export default CircleHeading