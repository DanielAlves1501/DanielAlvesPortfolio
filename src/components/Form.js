"use client";
import { useState } from "react";
import CustomBtn from "./CustomBtn";
import Loader from "./Loader";

const defaultFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await handleSubmit(formData);
      setFormData(defaultFormData);
      setErrors({});
      setSuccessMessage("Email sent!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      className="w-[100%] mx-auto flex flex-col items-center md:w-[70%]"
    >
      <div className="w-full mb-1">
        {errors.name && (
          <p className="description-text text-secondary !font-medium mb-2">
            {errors.name}
          </p>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name:"
          className="basic-input"
          onChange={handleChange}
          value={formData.name}
        />
      </div>

      <div className="w-full mb-1">
        {errors.email && (
          <p className="description-text text-secondary !font-medium mb-2">
            {errors.email}
          </p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email:"
          className="basic-input"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div className="w-full mb-1">
        {errors.subject && (
          <p className="description-text text-secondary !font-medium mb-2">
            {errors.subject}
          </p>
        )}
        <input
          type="text"
          name="subject"
          placeholder="Subject:"
          className="basic-input"
          onChange={handleChange}
          value={formData.subject}
        />
      </div>

      <div className="w-full mb-1">
        {errors.message && (
          <p className="description-text text-secondary !font-medium mb-2">
            {errors.message}
          </p>
        )}
        <textarea
          placeholder="Message:"
          name="message"
          className="basic-input min-h-[150px] max-h-[300px]"
          onChange={handleChange}
          value={formData.message}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <CustomBtn
          text="Submit"
          extraStyles={`w-[40%] md:w-[25%]`}
          successMessage={successMessage}
        />
      )}
    </form>
  );
};

export default Form;
