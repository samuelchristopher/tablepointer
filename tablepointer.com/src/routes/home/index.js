import { h } from 'preact'
import style from './style'

import CircleHeading from '../../components/circleHeading'
import BenefitsSection from '../../components/sections/benefitsSection'

const Home = () => (
	<div>
		<CircleHeading headingText={"Your Complete Energy Partner"} showButton={true} buttonHref={"google.com"} buttonText={"Start Saving"}/>
		<BenefitsSection />
	</div>
);

export default Home;
