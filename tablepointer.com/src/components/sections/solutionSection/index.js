import { h } from 'preact'
import style from './style'
import CircleHeading from '../../circleHeading'
import HomeContent from  '../../../../content/home.json'

const SolutionsSection = () => (
    <div class={style.container}>
        <CircleHeading headingText={HomeContent.solutionHeading} showButton={false}/>
        <div class={style.content}>
            <p class={style.text}>{HomeContent.solutionText}</p>
            <div class={style.image} />
        </div>
    </div>
)

export default SolutionsSection