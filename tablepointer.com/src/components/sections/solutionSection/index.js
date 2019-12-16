import { h } from 'preact'
import style from './style'
import CircleHeading from '../../circleHeading'

const SolutionsSection = () => (
    <div class={style.container}>
        <CircleHeading headingText="A Solution That Pays For Itself" showButton={false}/>
        <div class={style.content}>
            <p class={style.text}>No upfront costs and no risk. TablePointer simply shares in the money that it saves. This simple OpEx arrangement means that restaurants always save money while the additional operational benefits of the system help combat other critical expenses, such as rising wages and maintenance costs.</p>
            <div class={style.image} />
        </div>
    </div>
)

export default SolutionsSection