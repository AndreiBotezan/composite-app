import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <ul className='footer-content'>
        <li>COMPOSITE {new Date().getFullYear()}</li>
        <li><a href="https://www.google.com/" target='_blank' rel='noreferrer'>About us</a></li>
        <li><a href="https://www.google.com/" target='_blank'rel='noreferrer'>| Contact us</a></li>
      </ul>
    </div>
  )
}
