"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, CircleAlert, Clock, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const COOLDOWN_MS = 3 * 60 * 1000;

const field =
  "w-full min-h-14 border border-ink bg-sheet px-4 text-base text-ink placeholder:text-ink-soft/70 transition-colors hover:bg-sheet-deep/40 focus:border-route focus:outline-none focus:ring-2 focus:ring-route/30";
const labelCls = "map-label mb-2 block text-ink";

function Notice({
  tone,
  icon: Icon,
  title,
  children,
}: {
  tone: "ok" | "warn" | "error";
  icon: typeof Check;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role={tone === "ok" ? "status" : "alert"}
      className={cn(
        "flex gap-4 border p-5",
        tone === "ok" && "border-route bg-route text-sheet",
        tone === "warn" && "border-ink bg-sheet-deep text-ink",
        tone === "error" && "border-alert bg-sheet text-alert",
      )}
    >
      <Icon aria-hidden className="mt-0.5 size-5 shrink-0" />
      <div>
        <p className="font-bold">{title}</p>
        <p className="mt-1 text-sm">{children}</p>
      </div>
    </div>
  );
}

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
      try {
        const lastSubmission = localStorage.getItem("lastFormSubmission");
        if (!lastSubmission) return;
        const timePassed = Date.now() - parseInt(lastSubmission);
        setCooldownTime(timePassed < COOLDOWN_MS ? Math.ceil((COOLDOWN_MS - timePassed) / 1000 / 60) : 0);
      } catch {
        // storage unavailable: no cooldown
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot kontrolü - bot tespit
    if (formData.honeypot) return;

    // Rate limiting kontrolü
    try {
      const lastSubmission = localStorage.getItem("lastFormSubmission");
      if (lastSubmission) {
        const timePassed = Date.now() - parseInt(lastSubmission);
        if (timePassed < COOLDOWN_MS) {
          setCooldownTime(Math.ceil((COOLDOWN_MS - timePassed) / 1000 / 60));
          setSubmitStatus("ratelimit");
          return;
        }
      }
    } catch {
      // storage unavailable: continue
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
          access_key: "462801f7-1969-4760-aeec-de32911799ab",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          instagram: formData.instagram,
          isActiveRunner: formData.isActiveRunner === "yes" ? "Evet" : "Hayır",
          subject: "Yeni Kulüp Başvurusu - Cappadocia Run Club",
          from_name: "Cappadocia Run Club Website",
          botcheck: formData.honeypot,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        try {
          localStorage.setItem("lastFormSubmission", Date.now().toString());
        } catch {
          // ignore
        }
        setCooldownTime(3);
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

  const disabled = isSubmitting || cooldownTime > 0;

  return (
    <div id="contact-form" className="scroll-mt-24 border border-ink bg-sheet p-6 sm:p-10">
      {cooldownTime > 0 && submitStatus !== "success" && submitStatus !== "ratelimit" && (
        <div className="mb-8">
          <Notice tone="warn" icon={Clock} title="Spam koruması aktif">
            {cooldownTime} dakika sonra yeni başvuru yapabilirsin.
          </Notice>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            Ad soyad
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Adın ve soyadın"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={field}
          />
        </div>

        {/* Honeypot field - Bot koruması (görünmez) */}
        <input
          type="text"
          name="botcheck"
          aria-hidden
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          className="absolute -left-[9999px] size-px"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-email" className={labelCls}>
              E-posta
            </label>
            <input
              id="cf-email"
              type="email"
              autoComplete="email"
              placeholder="ornek@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="cf-phone" className={labelCls}>
              Telefon
            </label>
            <input
              id="cf-phone"
              type="tel"
              autoComplete="tel"
              placeholder="05XX XXX XX XX"
              required
              value={formData.phone}
              onChange={(e) => {
                const input = e.target.value;
                if (/[^0-9]/.test(input)) {
                  setPhoneWarning(true);
                  setTimeout(() => setPhoneWarning(false), 2500);
                }
                const value = input.replace(/\D/g, "");
                if (value.length <= 11) setFormData({ ...formData, phone: value });
              }}
              pattern="[0-9]{10,11}"
              inputMode="numeric"
              maxLength={11}
              aria-describedby="cf-phone-hint"
              aria-invalid={phoneWarning || undefined}
              title="Lütfen sadece rakam gir (10-11 haneli telefon numarası)"
              className={cn(field, "tabular", phoneWarning && "border-alert focus:border-alert focus:ring-alert/30")}
            />
            <p id="cf-phone-hint" className={cn("mt-2 text-xs", phoneWarning ? "font-semibold text-alert" : "text-ink-soft")}>
              {phoneWarning ? "Yalnızca rakam girebilirsin; harfler silindi." : "Yalnızca rakam, örn. 05XXXXXXXXX"}
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="cf-instagram" className={labelCls}>
            Instagram kullanıcı adın
          </label>
          <input
            id="cf-instagram"
            type="text"
            placeholder="@kullaniciadi"
            required
            value={formData.instagram}
            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
            className={field}
          />
        </div>

        <fieldset>
          <legend className={labelCls}>Aktif koşucu musun?</legend>
          <div className="grid grid-cols-2 border border-ink">
            {[
              { value: "yes", label: "Evet" },
              { value: "no", label: "Hayır" },
            ].map((opt, i) => (
              <label
                key={opt.value}
                className={cn(
                  "flex min-h-14 cursor-pointer items-center justify-center gap-2 px-3 text-center text-sm font-semibold transition-colors hover:bg-sheet-deep/50",
                  "has-[:checked]:bg-ink has-[:checked]:text-sheet has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-route",
                  i === 1 && "border-l border-ink",
                )}
              >
                <input
                  type="radio"
                  name="isActiveRunner"
                  value={opt.value}
                  required={i === 0}
                  checked={formData.isActiveRunner === opt.value}
                  onChange={(e) => setFormData({ ...formData, isActiveRunner: e.target.value })}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <p className="border-y border-ink/30 py-4 text-sm leading-relaxed text-ink-soft">
          Sana sosyal medya üzerinden ulaşabilmemiz için{" "}
          <a
            href="https://www.instagram.com/cappadociarunclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-route underline"
          >
            @cappadociarunclub
          </a>{" "}
          hesabını takip etmen gerekiyor.
        </p>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--route)]"
          />
          <span>
            Kişisel verilerimin işlenmesine yönelik{" "}
            <Link href="/aydinlatma-metni" target="_blank" className="font-semibold text-route underline">
              Aydınlatma Metni
            </Link>
            &apos;ni okudum, kabul ediyorum.
          </span>
        </label>

        <button
          type="submit"
          disabled={disabled}
          className="group flex min-h-14 w-full items-center justify-between gap-4 bg-route px-6 text-sm font-bold uppercase tracking-[0.06em] text-sheet transition-colors duration-300 [font-stretch:115%] hover:bg-route-deep disabled:cursor-not-allowed disabled:bg-ink-soft"
        >
          <span>
            {isSubmitting ? "Gönderiliyor" : cooldownTime > 0 ? `${cooldownTime} dakika bekle` : "Başvurumu gönder"}
          </span>
          {isSubmitting ? (
            <Loader2 aria-hidden className="size-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
          )}
        </button>

        {submitStatus === "ratelimit" && (
          <Notice tone="warn" icon={Clock} title="Biraz bekle">
            Spam koruması nedeniyle {cooldownTime} dakika sonra tekrar deneyebilirsin. Her kullanıcı 3 dakikada bir başvuru
            yapabilir.
          </Notice>
        )}

        {submitStatus === "success" && (
          <Notice tone="ok" icon={Check} title="Başvurun bize ulaştı">
            En kısa sürede sana dönüş yapacağız. Aramıza hoş geldin!
          </Notice>
        )}

        {submitStatus === "error" && (
          <Notice tone="error" icon={CircleAlert} title="Başvuru gönderilemedi">
            Bağlantıda bir sorun oldu. Biraz sonra tekrar dene ya da Instagram&apos;dan bize yaz.
          </Notice>
        )}
      </form>
    </div>
  );
}
