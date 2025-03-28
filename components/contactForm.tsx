// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";

export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM || "defaultFormId"; 
  const [state, handleSubmit] = useForm(formId);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit({
      email,
      message,
      name,
    });
  };

  if (state.succeeded) {
    return <p className="text-[1.2vw] text-blue-400">Thanks for reaching out!</p>;
  }

  const inputStyles = {
    fontSize: '1.1vw',
    padding: '0.75vw',
    borderRadius: '0.375vw',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    width: '35vw', 
    transition: 'all 0.2s ease-in-out',
  };

  const labelStyles = {
    fontSize: '1.1vw',
    marginBottom: '0.5vw',
    display: 'block',
    color: 'rgb(191, 219, 254)',
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5vw' }}>
      <div>
        <label htmlFor="name" style={labelStyles}>
          Name
        </label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyles}>
          Email
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyles}
        />
        <ValidationError 
          prefix="Email" 
          field="email" 
          errors={state.errors}
          style={{ fontSize: '1vw', color: 'rgb(239, 68, 68)' }}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyles}>
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            ...inputStyles,
            height: '8vw',
            resize: 'none',
          }}
        />
        <ValidationError 
          prefix="Message" 
          field="message" 
          errors={state.errors}
          style={{ fontSize: '1vw', color: 'rgb(239, 68, 68)' }}
        />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        style={{
          fontSize: '1.1vw',
          padding: '0.75vw 1.5vw',
          borderRadius: '0.375vw',
          background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5vw',
        }}
      >
        <Send style={{ width: '1.2vw', height: '1.2vw' }} />
        Send Message
      </Button>
    </form>
  );
}
