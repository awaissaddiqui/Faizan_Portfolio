import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import withSectionLayout from '../hoc/withSectionLayout'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAt } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { SlGlobe } from 'react-icons/sl';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError(false);

    const serviceID = "service_9r4jnnd]"; // Replace with EmailJS Service ID
    const templateID = "template_gne4iy8"; // Replace with EmailJS Template ID
    const publicKey = "3GUBuAjKj03za432R"; // Replace with EmailJS Public Key

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setSuccess(true);
      // setFormData({ name: "", email: "", message: "" });
      console.log("form submitted successfully");
      console.log(formData);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Info Section */}
        <div className="bg-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Info:</h3>
          <div className="space-y-10 ms-2 mt-5">
            <div className="inline-flex items-center gap-3">
              <BsEnvelopeAt className="text-lg text-gray" />
              <a href="mailto:shahfaizam@gmail.com" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                faizanshah801@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-lg text-gray" />
              <span className="text-gray-400">+923315316001 </span>
            </div>
            <div className="flex items-center gap-3">
              <IoLocationOutline className="text-lg text-gray" />
              <span className="text-gray-400">Lahore, Punjab Pakistan </span>
            </div>
            <div className="flex items-center gap-3">
              <SlGlobe className="text-lg text-gray" />
              <a href="https://shahfaizan.com" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                shahfaizan.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-6 bg-black text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition"
            >
              {isSending ? "Sending..." : "Send"}
            </button>

            {success && <p className="text-green-400">Message sent successfully!</p>}
            {error && <p className="text-red-400">Failed to send message. Try again.</p>}
          </form>
        </div>

      </div>

      {/* Social Media Links */}
      <div className="flex wrap justify-center gap-10 mt-8">
        <a href="https://github.com/faizaanshah" target='_blank' className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer">
          <FaGithub className='text-2xl' /> Github
        </a>
        <a href="https://www.linkedin.com/in/faizans801/" target='_blank' className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer">
          <FaLinkedin className='text-2xl' /> Linkedin
        </a>
      </div>
    </div >
  )
}

export default withSectionLayout(ContactInfo, 5);
// todo: add emailjs service to send messages