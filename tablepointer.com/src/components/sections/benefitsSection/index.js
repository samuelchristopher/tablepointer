import { h } from 'preact'
import style from './style'
import BenefitComponent from '../../benefitComponent'

const BenefitsSection = () => (
    <div class={style.container}>
        <BenefitComponent icon="energy" headingText="Reduce Energy Costs" pText="TablePointer's customized technology and data analysis solutions can result in energy savings of up to 30% per restaurant location."/>
        <BenefitComponent icon="profit" headingText="Increase Profitability" pText="For many kitchens and restaurants, utility bills account for nearly one third of total costs and an energy savings of just 20% can result in an additional 1% of profit."/>
        <BenefitComponent icon="safe" headingText="Zero Risk or Investment" pText="TablePointer’s system requires zero upfront costs and is paid for by taking a share of the energy savings that it generates."/>
    </div>
)

export default BenefitsSection