import { h } from 'preact'
import style from './style'
import CircleHeading from '../../components/circleHeading'

const Contact = () => (
	<div>
		<CircleHeading headingText="Contact Us" showButton={false} />
		<p class={style.p}>
			Please send an email to <a class={style.link} href="mailto:hello@tablepointer.com?subject=Start Saving Now">hello@tablepointer.com</a> and one of our
			representatives will be in touch.
		</p>
	</div>
)

export default Contact