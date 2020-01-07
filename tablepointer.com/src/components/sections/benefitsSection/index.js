import { h } from 'preact'
import style from './style'
import BenefitComponent from '../../benefitComponent'
import HomeContent from '../../../../content/home.json'

const BenefitsSection = () => (
	<div class={style.container}>
		<BenefitComponent
			icon="energy"
			headingText={HomeContent.benefitOneTitle}
			pText={HomeContent.benefitOneText}
		/>
		<BenefitComponent
			icon="profit"
			headingText={HomeContent.benefitTwoTitle}
			pText={HomeContent.benefitTwoText}
		/>
		<BenefitComponent
			icon="safe"
			headingText={HomeContent.benefitThreeTitle}
			pText={HomeContent.benefitThreeText}
		/>
	</div>
)

export default BenefitsSection