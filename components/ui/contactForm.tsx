import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!token) {
      setError("Please complete the security check");
      return;
    }
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, name, subject, token }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(true);
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <p className="text-[1.2vw] text-blue-400">Thanks for reaching out!</p>
    );
  }

  const inputStyles = {
    fontSize: "1.1vw",
    padding: "1vw",
    borderRadius: "0.5vw",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    width: "40vw",
    transition: "all 0.2s ease-in-out",
  };

  const labelStyles = {
    fontSize: "1.1vw",
    marginBottom: "0.5vw",
    display: "block",
    color: "rgb(191, 219, 254)",
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2vw",
        width: "40vw",
      }}
    >
      <div>
        <label htmlFor="name" style={labelStyles}>
          Name <span className="text-red-500">*</span>
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
          Email <span className="text-red-500">*</span>
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
      </div>

      <div>
        <label htmlFor="subject" style={labelStyles}>
          Subject <span className="text-red-500">*</span>
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          style={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyles}>
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          style={{
            ...inputStyles,
            minHeight: "8vw",
            resize: "vertical",
          }}
        />
      </div>

      <div className="w-full flex justify-center">
        <Turnstile
          className="w-full"
          siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
          onSuccess={setToken}
          options={{
            theme: "dark",
          }}
        />
      </div>

      {error && <p className="text-[1vw] text-red-500">{error}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        style={{
          fontSize: "1.1vw",
          padding: "1.25vw",
          borderRadius: "0.5vw",
          width: "100%",
          minHeight: "3.5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75vw",
        }}
      >
        <Send style={{ width: "1.2vw", height: "1.2vw" }} />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
