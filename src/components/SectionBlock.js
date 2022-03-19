import "./SectionBlock.css"


export default function SectionBlock(props) {
  return (
    <section>
        <div className="section-block">
          <img src={props.logo} alt={props.title}/>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
    </section>
  )
}