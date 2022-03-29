import React, {useState} from 'react'
import './FormPage.css'

export default function FormPage() {
  const [formData, setFormData] = useState({
    dateFrom: "",
    hour: "",
    fullName: "",
    phone: ""

  })

  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

   function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)

  //   fetch("http://localhost:5000/contact-us", {
  //       method: "POST",
  //       body: formData
  //   })
  //   .then(function (response) {
  //       return response.json();
  //   })
  //   .then(function (data) {
  //       if (data.success) {
  //           this.setState({
  //               message: "Thank you for booking a demo!"
  //           });
  //       } else {
  //           this.setState({
  //               message: "Eroare incearca din nou !"
  //           });
  //       }
  //   });
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}
            className="contact-form">
              <h1>BOOK A DEMO</h1>
        <label htmlFor="date">Date from:</label>
        <input 
          type="date" 
          name="dateFrom" 
          onChange={handleChange}
          value={formData.dateFrom}
        />

        <label htmlFor="hour">Hour:</label>
        <input 
          type="time" 
          name="hour"
          onChange={handleChange}
          value={formData.hour}
        />

        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
            />

        <label htmlFor="tel">Email:</label>
        <input
          type="phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
            />
        <button>SEND REQUEST</button>
      </form>
    </div>
  )
}