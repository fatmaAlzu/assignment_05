import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegForm.css";

const RegForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/`~]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|io)$/;

    if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Invalid username.";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be strong.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // call backend register API here
      console.log("Registering...", formData);
      navigate("/login");
    }
  };

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      {errors.username && <p className="error">{errors.username}</p>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button type="submit" className="signup-button">Sign Up</button>
    </form>
  );
};

export default RegForm;
