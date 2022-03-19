import SectionBlock from "../components/SectionBlock"
import content1 from '../img/content1.jpg'
import content2 from '../img/content2.jpg'
import content3 from '../img/content3.jpg'
import content4 from '../img/content4.jpg'

export default function Section() {
  return (
    <div className="section-container">
      <SectionBlock 
        logo={content1}
        title="Responsive Desing"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non neque placerat, ullamcorper est eget, blandit sem. Nullam id augue non neque venenatis fringilla in vel ante. Maecenas facilisis turpis odio, vel egestas sem consequat ac. Donec tempus in nibh eu suscipit. Maecenas sed gravida tortor. Proin eu orci gravida, elementum felis vitae, vestibulum urna."
      />
      <SectionBlock 
        logo={content2}
        title="Bootstrap"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non neque placerat, ullamcorper est eget, blandit sem. Nullam id augue non neque venenatis fringilla in vel ante. Maecenas facilisis turpis odio, vel egestas sem consequat ac. Donec tempus in nibh eu suscipit. Maecenas sed gravida tortor. Proin eu orci gravida, elementum felis vitae, vestibulum urna."
      />
      <SectionBlock 
        logo={content3}
        title="Google Web Fonts"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non neque placerat, ullamcorper est eget, blandit sem. Nullam id augue non neque venenatis fringilla in vel ante. Maecenas facilisis turpis odio, vel egestas sem consequat ac. Donec tempus in nibh eu suscipit. Maecenas sed gravida tortor. Proin eu orci gravida, elementum felis vitae, vestibulum urna."
      />
      <SectionBlock 
        logo={content4}
        title="User Friendly"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non neque placerat, ullamcorper est eget, blandit sem. Nullam id augue non neque venenatis fringilla in vel ante. Maecenas facilisis turpis odio, vel egestas sem consequat ac. Donec tempus in nibh eu suscipit. Maecenas sed gravida tortor. Proin eu orci gravida, elementum felis vitae, vestibulum urna."
      />
    </div>
  )
}