import { h } from 'preact'
import DashComponent from '../../dashComponent'
import HomeContent from '../../../../content/home.json'

const DashboardSection = () => (
	<div>
		<DashComponent
			headingText={HomeContent.dashboardOneTitle}
			pText={HomeContent.dashboardOneText}
			img="dashone.png"
		/>
		<DashComponent
			headingText={HomeContent.dashboardTwoTitle}
			pText={HomeContent.dashboardTwoText}
			img="dashtwo.png"
		/>
		<DashComponent
			headingText={HomeContent.dashboardThreeTitle}
			pText={HomeContent.dashboardThreeText}
			img="dashthree.png"
		/>
	</div>
)

export default DashboardSection