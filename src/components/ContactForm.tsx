"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { InstagramIcon } from "./icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    isActiveRunner: "",
    consent: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4a4f882f-a743-4393-8c7e-c514f4de79e4",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          instagram: formData.instagram,
          isActiveRunner: formData.isActiveRunner === "yes" ? "Evet" : "Hayır",
          subject: "Yeni Kulüp Başvurusu - Cappadocia Run Club",
          from_name: "Cappadocia Run Club Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Form'u sıfırla
        setFormData({
          name: "",
          email: "",
          phone: "",
          instagram: "",
          isActiveRunner: "",
          consent: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 px-8 bg-white">
      <div className="max-w-[600px] mx-auto">
        <h2 
          className="text-4xl font-bold text-black text-center mb-5"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          Başvuru Formu
        </h2>
        
        <p className="text-sm text-[rgb(81,81,81)] text-center mb-8">
          Koşu kulübümüze herkes katılabilir! Aşağıdaki formu doldurarak sizinle iletişime geçmemizi sağlayabilirsiniz.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Adınız"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 text-sm border border-[rgb(200,200,200)] rounded-[5px] bg-white text-[rgb(58,58,58)] focus:border-[rgb(81,81,81)] focus:outline-none transition-colors"
          />
          
          <input
            type="email"
            placeholder="E-posta adresiniz"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 text-sm border border-[rgb(200,200,200)] rounded-[5px] bg-white text-[rgb(58,58,58)] focus:border-[rgb(81,81,81)] focus:outline-none transition-colors"
          />
          
          <input
            type="tel"
            placeholder="Telefon Numaranız"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 text-sm border border-[rgb(200,200,200)] rounded-[5px] bg-white text-[rgb(58,58,58)] focus:border-[rgb(81,81,81)] focus:outline-none transition-colors"
          />
          
          <input
            type="text"
            placeholder="Instagram kullanıcı adı"
            required
            value={formData.instagram}
            onChange={(e) => setFormData({...formData, instagram: e.target.value})}
            className="w-full px-4 py-3 text-sm border border-[rgb(200,200,200)] rounded-[5px] bg-white text-[rgb(58,58,58)] focus:border-[rgb(81,81,81)] focus:outline-none transition-colors"
          />
          
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[rgb(81,81,81)] mb-1">
              Aktif olarak koşuyor musunuz?
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm text-[rgb(81,81,81)] cursor-pointer">
                <input
                  type="radio"
                  name="isActiveRunner"
                  value="yes"
                  required
                  onChange={(e) => setFormData({...formData, isActiveRunner: e.target.value})}
                  className="cursor-pointer"
                />
                Evet
              </label>
              <label className="flex items-center gap-2 text-sm text-[rgb(81,81,81)] cursor-pointer">
                <input
                  type="radio"
                  name="isActiveRunner"
                  value="no"
                  onChange={(e) => setFormData({...formData, isActiveRunner: e.target.value})}
                  className="cursor-pointer"
                />
                Hayır
              </label>
            </div>
          </div>
          
          <p className="text-sm text-[rgb(81,81,81)]">
            Başvurunuzda sosyal medya üzerinden size ulaşabilmemiz için{" "}
            <Link 
              href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq" 
              target="_blank"
              className="text-[rgb(229,32,52)] underline hover:opacity-80"
            >
              @cappadociarunclub
            </Link>
            {" "}hesabını takip etmeniz gerekmektedir.
          </p>
          
          <label className="flex items-start gap-2 text-sm text-[rgb(81,81,81)] cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({...formData, consent: e.target.checked})}
              className="mt-1 cursor-pointer"
            />
            <span>
              Kişisel verilerimin işlenmesine yönelik paylaşılan{" "}
              <Link 
                href="/aydinlatma-metni" 
                target="_blank"
                className="text-[rgb(0,123,255)] underline hover:opacity-80"
              >
                Aydınlatma Metni
              </Link>
              &apos;ni okudum, kabul ediyorum.
            </span>
          </label>
          
          <Link
            href="https://chat.whatsapp.com/IQtWQjP9HnG0PHgkPCiIVW?s=cl&p=i&ilr=4"
            target="_blank"
            className="text-sm text-[rgb(0,123,255)] underline hover:opacity-80 text-center"
          >
            Başvurunuz sonuçlanana kadar Whatsapp duyuru kanalından bizi takip etmek için tıklayınız.
          </Link>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-10 py-4 text-base font-black bg-[rgb(229,32,52)] text-white rounded-[10px] cursor-pointer transition-opacity duration-300 hover:opacity-80 border-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </button>
          
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-[5px] text-center">
              <p className="text-sm text-green-800 font-semibold">
                ✓ Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </p>
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-[5px] text-center">
              <p className="text-sm text-red-800 font-semibold">
                ✗ Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya Instagram üzerinden bize ulaşın.
              </p>
            </div>
          )}
        </form>
        
        <div className="mt-8 flex justify-center">
          <Link
            href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center text-black hover:scale-110 transition-transform"
            aria-label="Instagram'da takip edin"
          >
            <InstagramIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
