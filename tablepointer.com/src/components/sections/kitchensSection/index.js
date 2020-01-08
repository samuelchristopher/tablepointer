import { h } from 'preact'
import style from './style'
import HomeContent from '../../../../content/home.json'

const KitchensSection = () => (
	<div class={style.container}>
		<div class={style.content}>
			<h1>{HomeContent.kitchenSectionTitle}</h1>
			<p class={style.text}>{HomeContent.kitchenSectionPOne}</p>
			<p class={style.text}>{HomeContent.kitchenSectionPTwo}</p>
		</div>
	</div>
)

export default KitchensSection