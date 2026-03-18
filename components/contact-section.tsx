"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const inquiryTypes = [
  "Full-time Role",
  "Contract / Consulting",
  "Technical Leadership",
  "Product Collaboration",
  "Startup Build",
] as const;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  inquiryType: z.enum(inquiryTypes),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: inquiryTypes[0],
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${values.name}`);
    const body = encodeURIComponent(
      `Inquiry Type: ${values.inquiryType}\n\n${values.message}\n\nFrom: ${values.email}`,
    );
    const mailtoLink = `mailto:tpaintsil@live.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // toast.success("Opening mail app...", {
    //   description: "Redirecting to calendar booking...",
    // });

    // setTimeout(() => {
    //   window.location.href = "https://calendly.com/your-username";
    // }, 1500);

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="section-py bg-bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Let's Build Something Strong
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Whether you need a senior engineer, a technical lead, or someone who
          can bridge strategy and execution, I'm open to meaningful
          opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:tpaintsil@live.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 bg-accent-bronze/20 rounded-lg flex items-center justify-center group-hover:bg-accent-bronze/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">Email</p>
                    <p className="text-foreground font-medium hover:text-accent-warm transition-colors">
                      tpaintsil@live.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+233241852603"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 bg-accent-bronze/20 rounded-lg flex items-center justify-center group-hover:bg-accent-bronze/30 transition-colors">
                    <Phone className="w-6 h-6 text-accent-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">Phone</p>
                    <p className="text-foreground font-medium hover:text-accent-warm transition-colors">
                      +233 241 852 603
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/233272676431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 bg-accent-bronze/20 rounded-lg flex items-center justify-center group-hover:bg-accent-bronze/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">WhatsApp</p>
                    <p className="text-foreground font-medium hover:text-accent-warm transition-colors">
                      +233 27 267 6431
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/theopaintsil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 bg-accent-bronze/20 rounded-lg flex items-center justify-center group-hover:bg-accent-bronze/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">LinkedIn</p>
                    <p className="text-foreground font-medium hover:text-accent-warm transition-colors">
                      linkedin.com/in/theopaintsil
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-bg-secondary/50 border border-border/30 rounded-lg p-6">
              <p className="text-sm text-text-tertiary uppercase tracking-widest font-medium mb-3">
                Response Time
              </p>
              <p className="text-foreground font-medium">
                Typically within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-bg-secondary/50 border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-text-tertiary focus:outline-none focus:border-accent-bronze/50 transition-colors"
                placeholder="Your name"
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-bg-secondary/50 border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-text-tertiary focus:outline-none focus:border-accent-bronze/50 transition-colors"
                placeholder="your@email.com"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiryType"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Type of Inquiry
              </label>
              <select
                id="inquiryType"
                className="w-full bg-bg-secondary/50 border border-border/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-bronze/50 transition-colors"
                {...form.register("inquiryType")}
              >
                {inquiryTypes.map((type) => (
                  <option key={type} value={type} className="bg-background">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-bg-secondary/50 border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-text-tertiary focus:outline-none focus:border-accent-bronze/50 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-warm text-background px-6 py-3 rounded-lg font-semibold hover:bg-accent-bronze transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
