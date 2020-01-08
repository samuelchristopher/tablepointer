import { h } from 'preact'
import style from './style'
import PrimaryButton from '../../primaryButton'
import HomeContent from '../../../../content/home.json'

const BottomCTASection = () => (
    <div class={style.container}>
        <h1 class={style.heading}>{HomeContent.bottomCTAHeading}</h1>
        <PrimaryButton text={HomeContent.buttonText} linkHREF="/contact" />
    </div>
)

export default BottomCTASection