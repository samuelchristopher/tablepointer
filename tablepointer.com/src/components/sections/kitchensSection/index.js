import { h } from 'preact'
import style from './style'
import HomeContent from '../../../../content/home.json'

const KitchensSection = () => (
	<div class={style.container}>
		<div class={style.content}>
			<h1>{HomeContent.kitchenSectionTitle}</h1>
			<p>{HomeContent.kitchenSectionPOne}</p>
			<p>{HomeContent.kitchenSectionPTwo}</p>
		</div>
	</div>
)

export default KitchensSection