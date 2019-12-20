import { h } from 'preact'
import style from './style'
import HomeContent from '../../../content/home.json'

import CircleHeading from '../../components/circleHeading'
import BenefitsSection from '../../components/sections/benefitsSection'
import KitchensSection from '../../components/sections/kitchensSection'
import BottomCTASection from '../../components/sections/bottomCTASection'
import SolutionsSection from '../../components/sections/solutionSection'
import DashboardSection from '../../components/sections/dashboardSection'

console.log(HomeContent)

const Home = () => (
	<div>
		<CircleHeading headingText={"Your Complete Energy Partner"} showButton={true} buttonHref="/contact" buttonText={"Start Saving"}/>
		<p>this is from the home content: {HomeContent.title} </p>
		<BenefitsSection />
		<KitchensSection />
		<DashboardSection />
		<SolutionsSection />
		<BottomCTASection />
	</div>
);

export default Home;
