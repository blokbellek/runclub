"use client";

import { useState, FormEvent, useEffect } from "react";
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
    honeypot: "", // Bot koruması
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");
  const [phoneWarning, setPhoneWarning] = useState(false);
  const [cooldownTime, setCooldownTime] = useState<number>(0);

  // Rate limiting kontrolü - sayfa yüklendiğinde
  useEffect(() => {
    const checkCooldown = () => {
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      if (lastSubmission) {
        const timePassed = Date.now() - parseInt(lastSubmission);
        const cooldownDuration = 30 * 60 * 1000; // 30 dakika
        
        if (timePassed < cooldownDuration) {
          const remainingTime = Math.ceil((cooldownDuration - timePassed) / 1000 / 60);
          setCooldownTime(remainingTime);
        }
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 60000); // Her dakika kontrol et
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Honeypot kontrolü - bot tespit
    if (formData.honeypot) {
      console.log("Bot detected");
      return;
    }

    // Rate limiting kontrolü
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (lastSubmission) {
      const timePassed = Date.now() - parseInt(lastSubmission);
      const cooldownDuration = 30 * 60 * 1000; // 30 dakika
      
      if (timePassed < cooldownDuration) {
        const remainingMinutes = Math.ceil((cooldownDuration - timePassed) / 1000 / 60);
        setCooldownTime(remainingMinutes);
        setSubmitStatus("ratelimit");
        return;
      }
    }

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
          botcheck: formData.honeypot, // Web3Forms honeypot
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Başarılı gönderim zamanını kaydet
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        setCooldownTime(30);
        
        // Form'u sıfırla
        setFormData({
          name: "",
          email: "",
          phone: "",
          instagram: "",
          isActiveRunner: "",
          consent: false,
          honeypot: "",
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
    <section id="contact-form" className="scroll-mt-24">
      <div className="max-w-[700px] mx-auto bg-gradient-to-br from-white to-[rgb(252,252,252)] p-8 md:p-12 rounded-3xl shadow-xl border border-[rgb(230,230,230)]">
        {/* Güvenlik bilgilendirmesi */}
        {cooldownTime > 0 && (
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-sm text-blue-800">
              🔒 <strong>Güvenlik:</strong> Spam koruması aktif. {cooldownTime} dakika sonra yeni başvuru yapabilirsiniz.
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-bold text-[rgb(81,81,81)] mb-2 tracking-wider">AD SOYAD *</label>
            <input
              type="text"
              placeholder="Adınızı giriniz"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-5 py-4 text-base border-2 border-[rgb(230,230,230)] rounded-xl bg-white text-black focus:border-[rgb(229,32,52)] focus:outline-none transition-all shadow-sm hover:border-[rgb(200,200,200)]"
            />
          </div>

          {/* Honeypot field - Bot koruması (görünmez) */}
          <input
            type="text"
            name="botcheck"
            value={formData.honeypot}
            onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
            tabIndex={-1}
            autoComplete="off"
          />
          
          <div>
            <label className="block text-xs font-bold text-[rgb(81,81,81)] mb-2 tracking-wider">E-POSTA *</label>
            <input
              type="email"
              placeholder="ornek@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-5 py-4 text-base border-2 border-[rgb(230,230,230)] rounded-xl bg-white text-black focus:border-[rgb(229,32,52)] focus:outline-none transition-all shadow-sm hover:border-[rgb(200,200,200)]"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-[rgb(81,81,81)] mb-2 tracking-wider">TELEFON *</label>
            <input
              type="tel"
              placeholder="05XX XXX XX XX"
              required
              value={formData.phone}
              onChange={(e) => {
                const input = e.target.value;
                const hasLetters = /[^0-9]/.test(input);
                
                if (hasLetters) {
                  setPhoneWarning(true);
                  setTimeout(() => setPhoneWarning(false), 2500);
                }
                
                const value = input.replace(/\D/g, '');
                if (value.length <= 11) {
                  setFormData({...formData, phone: value});
                }
              }}
              pattern="[0-9]{10,11}"
              inputMode="numeric"
              maxLength={11}
              title="Lütfen sadece rakam giriniz (10-11 haneli telefon numarası)"
              className={`w-full px-5 py-4 text-base border-2 rounded-xl bg-white text-black focus:outline-none transition-all shadow-sm ${phoneWarning ? 'border-red-500 animate-pulse' : 'border-[rgb(230,230,230)] focus:border-[rgb(229,32,52)] hover:border-[rgb(200,200,200)]'}`}
            />
            {phoneWarning && (
              <div className="mt-2 p-3 bg-red-50 border-2 border-red-300 rounded-lg animate-fadeIn">
                <p className="text-sm text-red-700 font-semibold flex items-center gap-2">
                  ⚠️ Lütfen sadece rakam giriniz! Harfler kabul edilmez.
                </p>
              </div>
            )}
            {!phoneWarning && (
              <p className="text-xs text-[rgb(120,120,120)] mt-2">
                📱 Sadece rakam giriniz (Örn: 05XXXXXXXXX)
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-xs font-bold text-[rgb(81,81,81)] mb-2 tracking-wider">INSTAGRAM *</label>
            <input
              type="text"
              placeholder="@kullaniciadi"
              required
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
              className="w-full px-5 py-4 text-base border-2 border-[rgb(230,230,230)] rounded-xl bg-white text-black focus:border-[rgb(229,32,52)] focus:outline-none transition-all shadow-sm hover:border-[rgb(200,200,200)]"
            />
          </div>
          
          <div className="bg-[rgb(250,250,250)] p-5 rounded-xl border-2 border-[rgb(240,240,240)]">
            <p className="text-xs font-bold text-[rgb(81,81,81)] mb-3 tracking-wider">
              AKTİF KOŞUCU MUSUNUZ? *
            </p>
            <div className="flex gap-4">
              <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-base bg-white border-2 border-[rgb(230,230,230)] rounded-lg cursor-pointer hover:border-[rgb(229,32,52)] transition-all has-[:checked]:border-[rgb(229,32,52)] has-[:checked]:bg-[rgb(229,32,52)]/5">
                <input
                  type="radio"
                  name="isActiveRunner"
                  value="yes"
                  required
                  onChange={(e) => setFormData({...formData, isActiveRunner: e.target.value})}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="font-medium">Evet</span>
              </label>
              <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-base bg-white border-2 border-[rgb(230,230,230)] rounded-lg cursor-pointer hover:border-[rgb(229,32,52)] transition-all has-[:checked]:border-[rgb(229,32,52)] has-[:checked]:bg-[rgb(229,32,52)]/5">
                <input
                  type="radio"
                  name="isActiveRunner"
                  value="no"
                  onChange={(e) => setFormData({...formData, isActiveRunner: e.target.value})}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="font-medium">Hayır</span>
              </label>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
            <p className="text-sm text-blue-900 leading-relaxed">
              📸 Başvurunuzda sosyal medya üzerinden size ulaşabilmemiz için{" "}
              <Link 
                href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq" 
                target="_blank"
                className="text-[rgb(229,32,52)] font-bold underline hover:opacity-80"
              >
                @cappadociarunclub
              </Link>
              {" "}hesabını takip etmeniz gerekmektedir.
            </p>
          </div>
          
          <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-all">
            <input
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({...formData, consent: e.target.checked})}
              className="mt-1 cursor-pointer w-5 h-5"
            />
            <span className="text-sm text-[rgb(60,60,60)] leading-relaxed">
              Kişisel verilerimin işlenmesine yönelik paylaşılan{" "}
              <Link 
                href="/aydinlatma-metni" 
                target="_blank"
                className="text-[rgb(0,123,255)] font-semibold underline hover:opacity-80"
              >
                Aydınlatma Metni
              </Link>
              &apos;ni okudum, kabul ediyorum.
            </span>
          </label>
          
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200 text-center">
            <Link
              href="https://chat.whatsapp.com/IQtWQjP9HnG0PHgkPCiIVW?s=cl&p=i&ilr=4"
              target="_blank"
              className="text-sm text-green-800 font-semibold hover:text-green-900 transition-colors inline-flex items-center gap-2"
            >
              📢 Başvurunuz sonuçlanana kadar WhatsApp duyuru kanalından bizi takip edin
            </Link>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || cooldownTime > 0}
            className="w-full px-10 py-5 text-lg font-black bg-gradient-to-r from-[rgb(229,32,52)] to-[rgb(200,25,45)] text-white rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
          >
            {isSubmitting ? "📤 Gönderiliyor..." : cooldownTime > 0 ? `⏱️ ${cooldownTime} dakika bekleyin` : "🚀 Başvurumu Gönder"}
          </button>
          
          {submitStatus === "ratelimit" && (
            <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-2xl text-center shadow-lg">
              <div className="text-4xl mb-3">⏳</div>
              <p className="text-base text-orange-800 font-bold mb-1">
                Çok Fazla Başvuru!
              </p>
              <p className="text-sm text-orange-700">
                Spam koruması nedeniyle <strong>{cooldownTime} dakika</strong> sonra tekrar deneyebilirsiniz.
                <br />Her kullanıcı 30 dakikada bir başvuru yapabilir.
              </p>
            </div>
          )}
          
          {submitStatus === "success" && (
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl text-center shadow-lg">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-base text-green-800 font-bold mb-1">
                Başvurunuz Başarıyla Gönderildi!
              </p>
              <p className="text-sm text-green-700">
                En kısa sürede size dönüş yapacağız. Aramızda hoş geldin! 🎉
              </p>
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl text-center shadow-lg">
              <div className="text-4xl mb-3">⚠️</div>
              <p className="text-base text-red-800 font-bold mb-1">
                Bir Hata Oluştu
              </p>
              <p className="text-sm text-red-700">
                Lütfen daha sonra tekrar deneyin veya Instagram üzerinden bize ulaşın.
              </p>
            </div>
          )}
        </form>
        
        <div className="mt-8 flex justify-center">
          <Link
            href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq"
            target="_blank"
            className="flex items-center justify-center text-[#E4405F] hover:opacity-70 hover:scale-110 transition-all duration-300"
            aria-label="Instagram'da takip edin"
          >
            <InstagramIcon className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
