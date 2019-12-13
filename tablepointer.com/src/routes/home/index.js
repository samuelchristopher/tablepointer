import { h } from 'preact'
import style from './style'

import CircleHeading from '../../components/circleHeading'
import BenefitsSection from '../../components/sections/benefitsSection'
import KitchensSection from '../../components/sections/kitchensSection'

const Home = () => (
	<div>
		<CircleHeading headingText={"Your Complete Energy Partner"} showButton={true} buttonHref={"google.com"} buttonText={"Start Saving"}/>
		<BenefitsSection />
		<KitchensSection />
	</div>
);

export default Home;
