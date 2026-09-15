import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  CheckCircle2,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import {
  FACEBOOK_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE,
  serviceKeys,
  type ServiceKey,
  useLanguage,
} from "@/lib/i18n";
import { Reveal } from "./Reveal";

type ContactProps = {
  selectedService: ServiceKey | "";
};

type Errors = Partial<Record<"name" | "phone" | "service" | "consent", string>>;

export function Contact({ selectedService }: ContactProps) {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<ServiceKey | "other" | "">(selectedService);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setSubmitted(false);
    }
  }, [selectedService]);

  const contactCards = useMemo(
    () => [
      {
        icon: Phone,
        label: t.contact.phone,
        value: PHONE,
        href: `tel:${PHONE}`,
      },
      {
        icon: Instagram,
        label: t.contact.instagram,
        value: INSTAGRAM_HANDLE,
        href: INSTAGRAM_URL,
      },
      {
        icon: Facebook,
        label: t.contact.facebook,
        value: FACEBOOK_NAME,
      },
      {
        icon: MapPin,
        label: t.contact.location,
        value: t.contact.locationValue,
      },
    ],
    [t],
  );

  const validate = () => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = t.form.errors.name;
    const cleanedPhone = phone.replace(/[^\d+]/g, "");
    if (cleanedPhone.replace(/\D/g, "").length < 7) next.phone = t.form.errors.phone;
    if (!service) next.service = t.form.errors.service;
    if (!consent) next.consent = t.form.errors.consent;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setErrors({});
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setService(selectedService || "");
    setMessage("");
    setConsent(false);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-soft/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">
              {t.contact.heading}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal className="min-w-0">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex min-w-0 items-start gap-4 rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-34px_rgba(39,50,58,0.5)]">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-soft">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-muted-foreground">{label}</span>
                      <span className="mt-1 block break-words text-sm font-bold leading-6 text-foreground">
                        {value}
                      </span>
                    </span>
                  </div>
                );

                if (!href) return <div key={label}>{content}</div>;
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block rounded-3xl"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={80} className="min-w-0">
            <div className="rounded-[2rem] border border-border bg-card p-5 sm:p-7">
              <h3 className="text-xl font-extrabold text-foreground">{t.form.heading}</h3>

              {submitted ? (
                <div
                  className="mt-7 rounded-3xl border border-primary/20 bg-soft p-6 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
                  <p className="mx-auto mt-4 max-w-md text-sm font-semibold leading-7 text-foreground sm:text-base">
                    {t.form.success}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {t.form.call}
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
                    >
                      {t.form.again}
                    </button>
                  </div>
                </div>
              ) : (
                <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.form.name} error={errors.name} htmlFor="full-name">
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70"
                      />
                    </Field>

                    <Field label={t.form.phone} error={errors.phone} htmlFor="phone-number">
                      <input
                        id="phone-number"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70"
                      />
                    </Field>
                  </div>

                  <Field label={t.form.service} error={errors.service} htmlFor="service-type">
                    <select
                      id="service-type"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value as ServiceKey | "other" | "")}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground"
                    >
                      <option value="">{t.form.servicePlaceholder}</option>
                      {serviceKeys.map((key) => (
                        <option key={key} value={key}>
                          {t.services.items[key].title}
                        </option>
                      ))}
                      <option value="other">{t.services.other}</option>
                    </select>
                  </Field>

                  <Field label={t.form.message} htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full resize-y rounded-2xl border border-input bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted-foreground/70"
                    />
                  </Field>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm leading-6 text-foreground">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "consent-error" : undefined}
                      />
                      <span>{t.form.consent}</span>
                    </label>
                    {errors.consent ? (
                      <p id="consent-error" className="mt-2 text-xs font-medium text-destructive">
                        {errors.consent}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px_rgba(201,143,150,1)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                  >
                    <Send className={`h-4 w-4 ${lang === "ar" ? "-scale-x-100" : ""}`} aria-hidden="true" />
                    {t.form.submit}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string | undefined;
  htmlFor: string;
  children: ReactNode;
}) {
  const errorId = htmlFor === "full-name" ? "name-error" : htmlFor === "phone-number" ? "phone-error" : "service-error";
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-2 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
