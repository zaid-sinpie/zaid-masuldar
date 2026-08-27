import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      onOpenChange(false);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="overflow-hidden border-white/8 bg-[#0b0c11] p-0 text-white shadow-2xl shadow-black/50 sm:max-w-140"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-violet-600/8 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-purple-600/5 blur-[100px]" />

        <div className="relative">
          <DialogHeader className="border-b border-white/6 px-7 py-6 sm:px-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-400/6">
                    <Mail className="h-3.5 w-3.5 text-violet-400" />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-400/70">
                    Get in touch
                  </span>
                </div>

                <DialogTitle className="text-2xl font-semibold tracking-tight text-white">
                  Let's talk.
                </DialogTitle>

                <DialogDescription className="mt-2 max-w-md text-xs leading-6 text-white/35">
                  Have a project, opportunity, or just want to say hello? Send
                  me a message and I'll get back to you.
                </DialogDescription>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/2 text-white/30 transition-all hover:border-white/10 hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 px-7 py-7 sm:px-8">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/30"
              >
                <User className="h-3 w-3" />
                Name
              </label>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isSending}
                className="h-11 rounded-xl border-white/[0.07] bg-white/2.5 text-sm text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/30"
              >
                <Mail className="h-3 w-3" />
                Email
              </label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSending}
                className="h-11 rounded-xl border-white/[0.07] bg-white/2.5 text-sm text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/30"
              >
                <MessageSquare className="h-3 w-3" />
                Message
              </label>

              <Textarea
                id="message"
                name="message"
                placeholder="Tell me a little about your project..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={isSending}
                rows={6}
                className="resize-none rounded-xl border-white/[0.07] bg-white/2.5 text-sm leading-6 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10"
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-white/6 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] leading-5 text-white/20">
                I'll usually get back to you within a day or two.
              </p>

              <Button
                type="submit"
                disabled={isSending}
                className="group h-10 rounded-lg bg-violet-600 px-5 text-xs hover:bg-violet-500"
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-3.5 w-3.5" />
                    Send message
                    <ArrowUpRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
