"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <CheckCircle className="text-primary" size={32} />
        </motion.div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8"
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              required
              className="bg-secondary/50 border-border focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-secondary/50 border-border focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
            Subject
          </label>
          <Input
            id="subject"
            placeholder="What's this about?"
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="bg-secondary/50 border-border focus:border-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </motion.form>
  )
}
