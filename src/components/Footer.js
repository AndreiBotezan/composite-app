import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <ul className='footer-content'>
        <li>COMPOSITE {new Date().getFullYear()}</li>
        <li><a href="google.com" target='_blank'>About us</a></li>
        <li><a href="google.com" target='_blank'>| Contact us</a></li>
      </ul>
    </div>
  )
}
