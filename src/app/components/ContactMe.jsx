"use client";

import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Import Axios instance
import { TextField } from "@mui/material";
import { toast } from "sonner";

export default function ContactMe(props) {
  const { darkMode } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/contact", formData); // Using axiosInstance
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Email sent successfully!");
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  return (
    <section
      id="contact"
      //   className="flex flex-col justify-center border-2 border-slate-400 w-3/4 mx-auto p-4 rounded-lg shadow-lg gap-4"
      className={`py-8 w-3/4 mx-auto rounded-md shadow-md flex flex-col justify-center items-center transition duration-300 ease-in-out ${
        darkMode
          ? "bg-gray-400 text-black"
          : "border border-slate-400 text-slate-900"
      }`}
    >
      <div className="text-center">
        <p className="text-4xl font-bold">Contact Me</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col md:px-24 gap-4"
      >
        <TextField
          type="text"
          name="name"
          label="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded"
          sx={{ color: darkMode ? "white" : "black" }}
          required
        />
        <TextField
          type="email"
          name="email"
          label="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded"
          required
        />
        <TextField
          name="message"
          label="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border rounded"
          multiline
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {status && (
          <p className="text-center text-sm text-gray-600">{status}</p>
        )}
      </form>
    </section>
  );
}
