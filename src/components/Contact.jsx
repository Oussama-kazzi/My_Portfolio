import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowRight } from "lucide-react";

const FONT_STACK =
  "'Inter', 'Helvetica Neue', 'Arial Black', Arial, sans-serif";

const contactLinks = [
  { label: "Email", icon: Mail, href: "mailto:oussamakazzi@example.com" },
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  {
    label: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/1234567890",
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#f7f7f7] overflow-hidden">
      {/* Grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ebebeb 1px, transparent 1px), linear-gradient(to bottom, #ebebeb 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.6,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-28 sm:py-36 md:py-44">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 mb-8"
        >
          Contact
        </motion.p>

        {/* Large headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            fontFamily: FONT_STACK,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.92,
            color: "#111111",
          }}
          className="text-[clamp(42px,8vw,110px)] mb-6"
        >
          Let's Work
          <br />
          Together
        </motion.h2>

        {/* Divider */}
        <div className="w-12 h-px bg-[#111111] mb-12" />

        {/* Contact link pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-20"
        >
          {contactLinks.map(({ label, icon: Icon, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group inline-flex items-center gap-2.5 px-6 py-3 border border-[#D9D9D9] bg-white rounded-full text-sm font-bold text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300 active:scale-95"
            >
              <Icon size={15} />
              {label}
              <ArrowRight
                size={13}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400"
        >
          © {new Date().getFullYear()} Oussama Kazzi — All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
