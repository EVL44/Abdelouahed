"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "phone", description: "(+212) 767 251 378" },
  { icon: <FaEnvelope />, title: "email", description: "abdelouahedidboubrik@gm" },
  { icon: <FaMapMarkedAlt />, title: "address", description: "Agadir, Morocco" },
];

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Request sent successfully!');
        setFormData({
            firstName: '', lastName: '', email: '', phoneNumber: '', service: '', message: '',
        });
      } else {
        alert('Failed to send request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: 'easeIn'}
      }}  
      className=" py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-subtle-background rounded-xl "> 
              <h3 className="text-4xl text-accent"> Let's work together.</h3>
              <p className="text-muted-foreground">If you are intressted to work with me, contact me with this form or with my email.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <Input name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <Input name="phoneNumber" type="tel" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              </div>

              <Select onValueChange={handleSelectChange} value={formData.service} required>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a Service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="IoT & Embedded Systems">IoT & Embedded Systems</SelectItem>
                    <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                    <SelectItem value="AI & ML">AI & ML</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea name="message" className="h-[200px]" placeholder="write your message here." value={formData.message} onChange={handleChange} required />
              <Button type="submit" size="md" className="max-w-40 text-accent-foreground font-bold rounded-full shadow-xl transition-all duration-500 ease-in-out border-accent
              bg-accent border-2 hover:bg-transparent hover:border-accent hover:shadow-accent/50 hover:shadow-2xl hover:text-accent
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95 py-2">
                Submit
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6"> 
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-subtle-background text-accent rounded-md flex items-center justify-center ">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground">{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;