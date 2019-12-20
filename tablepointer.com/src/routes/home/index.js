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
		<CircleHeading headingText={HomeContent.headingText} showButton={true} buttonHref="/contact" buttonText={HomeContent.buttonText}/>
		<BenefitsSection />
		<KitchensSection />
		<DashboardSection />
		<SolutionsSection />
		<BottomCTASection />
	</div>
);

export default Home;
