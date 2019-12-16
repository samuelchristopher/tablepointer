import { h } from 'preact'
import style from './style'
import CircleHeading from '../../components/circleHeading'

const Contact = () => (
  <div>
      <CircleHeading headingText="Contact Us" showButton={false}/>
      <p class={style.p}>Please send an email to hello@tablepointer.com and one of our representatives will be in touch.</p>
  </div>
)

export default Contact