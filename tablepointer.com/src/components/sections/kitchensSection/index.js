import { h } from 'preact'
import style from './style'
import HomeContent from '../../../../content/home.json'

const KitchensSection = () => (
    <div class={style.container}>
        <div class={style.content}>
            <h1>We Help Commercial Kitchens Take Control of Energy Costs</h1>
            <p>TablePointer is the complete energy management partner for restaurants. The TablePointer system intelligently monitors and controls critical HVAC, refrigeration, lighting and ventilation equipment to actively save energy while providing complete visibility and control across your entire portfolio.</p>
            <p>After analyzing your energy data, utility bills and operations, TablePointer experts will recommend the right combination of technology and behaviors to reduce your energy consumption by up to 30%.</p>
        </div>
    </div>
)

export default KitchensSection