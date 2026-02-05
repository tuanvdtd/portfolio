'use client';
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { translations, Language } from "../utils/translations";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const ref = useRef(null);
  const t = translations[language].contact;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.notImplemented);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.email,
      value: "developer@example.com",
      href: "mailto:developer@example.com",
    },
    {
      icon: Phone,
      title: t.phone,
      value: "+84 123 456 789",
      href: "tel:+84123456789",
    },
    {
      icon: MapPin,
      title: t.location,
      value: t.locationValue,
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-10 px-6 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute -left-32 top-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]) }}
        className="absolute -right-32 bottom-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            {t.title}{" "}
            <span className="text-cyan-400">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">{t.info}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-cyan-500">
                    <info.icon size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block mb-2 text-sm text-gray-400">
                {t.form.name}
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={t.form.namePlaceholder}
                className="bg-white/5 border-white/10 focus:border-cyan-500 transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block mb-2 text-sm text-gray-400">{t.form.email}</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t.form.emailPlaceholder}
                className="bg-white/5 border-white/10 focus:border-blue-500 transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block mb-2 text-sm text-gray-400">
                {t.form.message}
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={t.form.messagePlaceholder}
                rows={5}
                className="bg-white/5 border-white/10 focus:border-cyan-500 transition-colors resize-none"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black transition-all"
              >
                <Send size={18} className="mr-2" />
                {t.form.send}
              </Button>
            </motion.div>
          </motion.form>
        </div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>{t.footer}</p>
        </motion.div> */}
      </div>
    </section>
  );
}