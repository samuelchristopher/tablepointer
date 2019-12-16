import { h } from 'preact'
import style from './style'
import PrimaryButton from '../../primaryButton'

const BottomCTASection = () => (
    <div class={style.container}>
        <h1 class={style.heading}>See how much you could start saving today</h1>
        <PrimaryButton text={"Start Saving"} linkHREF="/contact" />
    </div>
)

export default BottomCTASection