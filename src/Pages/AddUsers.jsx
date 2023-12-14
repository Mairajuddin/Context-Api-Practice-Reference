import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
// import Us

const AddUsers = () => {
  const { user, setUser } = useContext(UserContext);
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = Math.floor(Math.random() * 1000);
    // console.log("Form submitted:", formData);
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setUser([...user, formData]);
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        profession: "",
        address: "",
      });
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is Required";
      alert(errors.name);
    }
    if (!data.email.trim()) {
      errors.mail = "Email is Required";
    } else if (!isValidEmail(data.email)) {
      errors.mail = "Email is Invalid";
      alert(errors.mail);
    }
    if (!data.profession.trim()) {
      errors.profession = "Profession is Required";
      alert(errors.profession);
    }
    if (!data.address.trim()) {
      errors.address = "Address is Required";
      alert(errors.address);
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        justifyContent: "center",
        height: "500px",
        alignItems: "center",
      }}
    >
      <h2>Add Users</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            style={{ width: "300px", padding: "10px", margin: "10px" }}
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: "300px", padding: "10px", margin: "10px" }}
          />
        </label>
        <br />
        <label>
          Profession:
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            style={{ width: "300px", padding: "10px", margin: "10px" }}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            style={{ width: "300px", padding: "10px", margin: "10px" }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUsers;
