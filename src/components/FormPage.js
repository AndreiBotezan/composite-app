import React, {useState} from 'react'
import './FormPage.css'

export default function FormPage() {
  const [formData, setFormData] = useState({
    demoStart: "",
    demoHour: "",
    fullName: "",
    email: ""

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
  //               message: "Datele au fost salvate cu success !"
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
        <label htmlFor="date">Date from:</label>
        <input 
          type="date" 
          name="demoStart" 
          onChange={handleChange}
          value={formData.date}
        />

        <label htmlFor="hour">Hour:</label>
        <input 
          type="time" 
          name="demoHour"
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

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
            />
        <button>SEND REQUEST</button>
      </form>
    </div>
  )
}