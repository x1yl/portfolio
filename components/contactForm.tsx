// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";
export function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit({
      email: email,
      message: message,
      name: name,
    });
  };

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
