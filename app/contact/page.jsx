"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefon",
    description: "546 681 ---",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "volllkan.1@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adres",
    description: "Ankara/Turkiye",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  // Form state'lerini yönetmek için useState hook'unu kullanıyoruz.
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // Başarı/hata durumu için.

  // Form verilerini toplamak için handleChange fonksiyonu
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit edildiğinde tetiklenecek fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    // API'ye post isteği gönderiyoruz
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus('Mesajınız başarıyla gönderildi!');
      setFormData({ firstname: '', lastname: '', email: '', phone: '', subject: '', message: '' }); // Formu temizler.
    } else {
      setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Bana bir mesaj bırakın</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Adınız" value={formData.firstname} onChange={handleChange} required />
                <Input name="lastname" type="text" placeholder="Soyadınız" value={formData.lastname} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Mail Adresiniz" value={formData.email} onChange={handleChange} required />
                <Input name="phone" type="tel" placeholder="Telefon Numaranız" value={formData.phone} onChange={handleChange} required />
              </div>
              {/* Select */}
              <Select name="subject" value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Konu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Konular</SelectLabel>
                    <SelectItem value="Web Tasarım">Web Tasarım</SelectItem>
                    <SelectItem value="UI/UX Dizayn">UI/UX Dizayn</SelectItem>
                    <SelectItem value="Logo Tasarım">Logo Tasarım</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* Gönder Butonu */}
              <Button size="md" className="h-12" type="submit">
                Gönder
              </Button>
            </form>
            {/* Durum Mesajı */}
            {status && <p className="mt-4 text-white">{status}</p>}
          </div>

          {/* İletişim bilgileri */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[24px]"> {item.icon} </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60"> {item.title} </p>
                      <h3 className="text-xl"> {item.description} </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
