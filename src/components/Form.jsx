import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      /> <br/>
      <textarea 
        placeholder="Enter your comment here"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <input 
        type="checkbox" 
        id="isFriendly"  
        name="checkbox"
        onChange={handleChange}
        checked={formData.isFriendly}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br/><br/>

      <fieldset>
        <legend>Current employment status</legend>

        <input 
          type="radio" 
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">
          Unemployed
        </label>

        <input 
          type="radio" 
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">
          Part-time
        </label>

        <input 
          type="radio" 
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">
          Full-time
        </label>
      </fieldset>

      <label htmlFor="favColor">What is your favourite colour?</label><br/>
      <select 
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
        >

        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select> <br/><br/>

      <button>Submit</button>
    </form>
  );
}
