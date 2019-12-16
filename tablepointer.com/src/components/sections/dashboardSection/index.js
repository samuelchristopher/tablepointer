import { h } from 'preact'
import DashComponent from '../../dashComponent'

const DashboardSection = () => (
    <div>
        <DashComponent 
            headingText="Insights and visibility across all outlets" 
            pText="TablePointer gathers detailed energy consumption data across an entire portfolio of restaurants and equipment to identify opportunities for saving energy and comparing sites against each other."
            img="dashone.png"/>
        <DashComponent 
            headingText="Reinforce energy saving behaviors" 
            pText="By analyzing energy consumption data, TablePointer analysts can recommend changes to standard operating procedures to optimize energy savings. Monitor the results and behaviors of employees and help them see how they directly contribute to energy saving. When something isn’t right or requires attention, managers and technicians receive alerts, straight to their mobile device."
            img="dashtwo.png"/>
        <DashComponent 
            headingText="Cool down energy costs with the latest technologies" 
            pText="TablePointer uses a combination of IoT sensors, machine learning and intelligent controls to improve the efficiency of high consuming appliances in the kitchen and restaurant including HVAC, refrigerators, lighting and exhaust fans. Each restaurant is assessed and audited to identify the right mix of technologies to achieve the most savings with the fastest payback."
            img="dashthree.png"/>
    </div>
)

export default DashboardSection