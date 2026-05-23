import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  CalendarHeart,
  Leaf,
  Sparkles,
  HeartHandshake,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowUpRight,
  Star,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

import hero from "@/assets/hero.jpg";
import salon from "@/assets/salon.jpg";
import hair from "@/assets/hair.jpg";
import estetica from "@/assets/estetica.jpg";
import manicura from "@/assets/manicura.jpg";
import productos from "@/assets/productos.jpg";
import experiencia from "@/assets/experiencia.jpg";
import cta from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "910 28 66 17";
const PHONE_TEL = "+34910286617";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[color:var(--cream)]/80 backdrop-blur-xl border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight md:text-[1.7rem]">Hair</span>
          <span className="text-[color:var(--gold)] font-serif italic text-2xl md:text-[1.7rem]">&</span>
          <span className="font-serif text-2xl tracking-tight md:text-[1.7rem]">beauty</span>
        </a>
        <nav className="hidden gap-9 text-[13px] uppercase tracking-[0.18em] md:flex">
          {[
            ["Salón", "#nosotros"],
            ["Servicios", "#servicios"],
            ["Experiencia", "#experiencia"],
            ["Galería", "#galeria"],
            ["Contacto", "#contacto"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="text-foreground/70 transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="group hidden items-center gap-2 rounded-full border border-[color:var(--ink)]/15 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" /> Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={hero}
        alt="Interior elegante de Hair & Beauty, peluquería ecológica en Arganzuela, Madrid"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--ink)]/40 via-[color:var(--ink)]/15 to-[color:var(--cream)]/95" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
            <Leaf className="h-3 w-3" /> Peluquería y Estética Ecológica · Arganzuela
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="mt-7 max-w-[18ch] font-serif text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] text-white">
            Tu momento de
            <span className="block italic text-[color:var(--cream)]"> cuidado, belleza</span>
            <span className="block">y relax en Madrid.</span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Hair &amp; Beauty es tu oasis de bienestar en Arganzuela. Un espacio donde cuidamos tu
            cabello y tu piel con productos naturales, tratamientos personalizados y una experiencia
            beauty inolvidable.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--cream)] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--ink)] transition-all hover:bg-white"
            >
              <CalendarHeart className="h-4 w-4" /> Reservar cita
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/50 px-7 py-4 text-xs uppercase tracking-[0.22em] text-white transition-all hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          <span>Descubre</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Peluquería ecológica",
    "Balayage Madrid",
    "Estética facial",
    "Manicura & Pedicura",
    "Tratamientos corporales",
    "Beauty Experiences",
    "Arganzuela · Delicias",
  ];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-[color:var(--border)] bg-[color:var(--cream)] py-6 overflow-hidden">
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-serif italic text-2xl text-[color:var(--ink)]/70 md:text-3xl"
          >
            {t} <span className="ml-14 text-[color:var(--gold)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-28 md:py-40">
      <div className="float-blob absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[color:var(--sage)]/30 blur-3xl" />
      <div className="float-blob absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[color:var(--gold)]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="hover-zoom relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={salon}
              alt="Interior del salón Hair & Beauty con sillones y espejos elegantes"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ["15+", "años"],
              ["1.200+", "clientas"],
              ["5★", "Google"],
            ].map(([n, l]) => (
              <div key={l} className="border-t border-[color:var(--ink)]/15 pt-4">
                <div className="font-serif text-2xl md:text-3xl">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-10">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Quiénes somos
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              Un espacio donde cuidarte
              <span className="block italic text-[color:var(--ink)]/70"> es también una forma</span>
              <span className="block">de sentirte bien.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              En Hair &amp; Beauty creemos en la belleza natural y en el bienestar como una
              experiencia integral. Cada visita es un ritual pensado para ti: productos cuidadosos
              con tu cabello y tu piel, tratamientos personalizados y un trato cercano en pleno
              corazón de Arganzuela.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <blockquote className="mt-12 border-l border-[color:var(--gold)] pl-6">
              <p className="font-serif text-2xl italic leading-snug md:text-3xl">
                “Creemos que verte bien también es sentirte bien.”
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type Service = {
  n: string;
  title: string;
  copy: string;
  bullets: string[];
  img: string;
};

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Peluquería Ecológica",
    copy: "Cortes, color, balayage y tratamientos pensados para la salud de tu cabello, con productos de alta calidad y enfoque sostenible inspirados en marcas eco premium.",
    bullets: ["Corte & Estilo", "Coloración natural", "Balayage & mechas", "Tratamientos capilares"],
    img: hair,
  },
  {
    n: "02",
    title: "Estética y Belleza",
    copy: "Tratamientos faciales, corporales, manicura y pedicura en un entorno tranquilo, pensados para el mimo personal y la relajación más absoluta.",
    bullets: ["Tratamientos faciales", "Cuidado corporal", "Manicura", "Pedicura"],
    img: estetica,
  },
  {
    n: "03",
    title: "Experiencias a Medida",
    copy: "Rituales beauty exclusivos que combinan peluquería y estética en una sola visita: tu momento de autocuidado, diseñado a medida.",
    bullets: ["Rituales personalizados", "Bridal & eventos", "Pack peluquería + estética", "Regalo beauty"],
    img: experiencia,
  },
];

function Servicios() {
  return (
    <section id="servicios" className="relative bg-[color:var(--cream)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Servicios
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              Tres mundos beauty,
              <span className="block italic">una sola experiencia.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-md text-muted-foreground">
              Desde el cuidado de tu cabello hasta el ritual más completo de relax. Cada servicio,
              diseñado a medida.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-background ring-1 ring-[color:var(--ink)]/8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
                <div className="hover-zoom relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur">
                    {s.n}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-serif text-2xl md:text-[1.7rem]">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center justify-between border-b border-dashed border-[color:var(--ink)]/15 pb-2"
                      >
                        <span>{b}</span>
                        <span className="text-[color:var(--gold)]">+</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="mt-8 inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:gap-3"
                  >
                    Reservar <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  const items = [
    { icon: Leaf, t: "Productos naturales", d: "Marcas eco premium para cabello y piel." },
    { icon: HeartHandshake, t: "Atención personalizada", d: "Cada visita, pensada solo para ti." },
    { icon: Sparkles, t: "Experiencia relajante", d: "Un oasis de calma en pleno Madrid." },
    { icon: MapPin, t: "Confianza en Arganzuela", d: "Centro de referencia para vecinas del barrio." },
  ];
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Por qué elegirnos
          </span>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]">
            Lujo tranquilo, cuidado real, <span className="italic">resultados que se ven y se sienten.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group flex h-full flex-col gap-6 bg-background p-10 transition-colors duration-500 hover:bg-[color:var(--cream)]">
                <it.icon
                  className="h-7 w-7 stroke-[1.25] text-[color:var(--ink)] transition-transform duration-700 group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
                <h3 className="font-serif text-2xl">{it.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative min-h-[60vh]">
          <img
            src={experiencia}
            alt="Detalles de spa: toallas, vela y eucalipto"
            loading="lazy"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Resultados
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[1]">
              Cabello sano.
              <span className="block italic text-[color:var(--cream)]/80">Belleza natural.</span>
              <span className="block">Tu momento para desconectar.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[color:var(--cream)]/70">
              Reservar en Hair &amp; Beauty es regalarte una pausa. Un ritual cuidado al detalle, con
              productos respetuosos y manos expertas que entienden tu estilo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    q: "Nunca había tenido el cabello tan sano y cuidado. Salgo siempre con una sonrisa.",
    a: "Lucía M.",
    s: "Cliente desde 2021",
  },
  {
    q: "Las chicas son encantadoras y muy profesionales. El trato es excepcional.",
    a: "Marta R.",
    s: "Arganzuela",
  },
  {
    q: "Mi centro de confianza desde hace años. Un oasis dentro de Madrid.",
    a: "Patricia G.",
    s: "Delicias",
  },
  {
    q: "Las mechas quedaron preciosas y el cabello súper sano. Repetiré sin duda.",
    a: "Elena F.",
    s: "Balayage",
  },
];

function Testimonios() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Testimonios
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]">
              Lo que dicen quienes ya viven
              <span className="italic"> la experiencia Hair &amp; Beauty.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.a} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <figure className="glass relative h-full rounded-sm p-8 md:p-10">
                <div className="flex gap-1 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-xl leading-snug md:text-2xl">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--sage)]/60 font-serif text-sm">
                    {t.a.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm">{t.a}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {t.s}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const items = [
    { src: hair, alt: "Balayage rubio brillante", span: "md:row-span-2" },
    { src: salon, alt: "Interior de la peluquería" },
    { src: manicura, alt: "Manicura nude elegante" },
    { src: productos, alt: "Productos naturales beauty", span: "md:row-span-2" },
    { src: estetica, alt: "Cabina de estética y tratamientos" },
    { src: experiencia, alt: "Ambiente relax spa" },
  ];
  return (
    <section id="galeria" className="bg-[color:var(--cream)] py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Galería
          </span>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]">
            Fragmentos de un <span className="italic">salón pensado al detalle.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[18rem] grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className={`hover-zoom relative h-full overflow-hidden rounded-sm ${it.span ?? ""}`}>
                <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UbicacionHorarios() {
  return (
    <section id="contacto" className="py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Ubicación
            </span>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.02]">
              Nos encontramos en el corazón
              <span className="italic"> de Arganzuela.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-10 overflow-hidden rounded-sm border border-[color:var(--border)]">
              <iframe
                title="Mapa Hair & Beauty Madrid"
                src="https://www.google.com/maps?q=Calle%20de%20Alicante%203%2C%2028045%20Madrid&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[20%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={1}>
            <div className="rounded-sm bg-[color:var(--cream)] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 stroke-[1.5] text-[color:var(--gold)]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Dirección
                  </div>
                  <div className="mt-2 font-serif text-2xl leading-snug">
                    C. de Alicante, 3
                    <br />
                    Arganzuela, 28045 Madrid
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 stroke-[1.5] text-[color:var(--gold)]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Teléfono
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-2 block font-serif text-2xl hover:text-[color:var(--gold)]"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Calle+de+Alicante+3,+28045+Madrid"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)] px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)]"
              >
                Cómo llegar <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-6 rounded-sm border border-[color:var(--border)] p-8 md:p-10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 stroke-[1.5] text-[color:var(--gold)]" />
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Horarios
                </div>
              </div>
              <dl className="mt-6 divide-y divide-dashed divide-[color:var(--ink)]/15">
                <div className="flex items-baseline justify-between py-3">
                  <dt className="font-serif text-lg">Lunes – Viernes</dt>
                  <dd className="text-sm tracking-wide">10:00 – 19:00</dd>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <dt className="font-serif text-lg">Sábado</dt>
                  <dd className="text-sm tracking-wide text-muted-foreground">Cita previa</dd>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <dt className="font-serif text-lg">Domingo</dt>
                  <dd className="text-sm tracking-wide text-muted-foreground">Cerrado</dd>
                </div>
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Los horarios pueden variar en festivos. Recomendamos reservar cita previa.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={cta}
        alt="Detalle sereno de bienestar y belleza natural"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[color:var(--ink)]/80 via-[color:var(--ink)]/55 to-[color:var(--ink)]/20" />
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Tu cita te espera
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[1] text-[color:var(--cream)]">
            Regálate tu momento de
            <span className="block italic"> belleza y bienestar.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/80 md:text-lg">
            Descubre una experiencia beauty diseñada para cuidarte, relajarte y hacerte sentir
            increíble. En pleno Arganzuela, Madrid.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 rounded-full bg-[color:var(--cream)] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--ink)] transition-all hover:bg-white"
            >
              <CalendarHeart className="h-4 w-4" /> Reservar cita
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-4 text-xs uppercase tracking-[0.22em] text-white transition-all hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--cream)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl">Hair</span>
            <span className="font-serif italic text-3xl text-[color:var(--gold)]">&</span>
            <span className="font-serif text-3xl">beauty</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Peluquería y centro de estética ecológica en Arganzuela, Madrid. Un espacio pensado para
            cuidarte de dentro a fuera.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Visítanos</div>
          <div className="mt-4 font-serif text-lg leading-relaxed">
            C. de Alicante, 3
            <br />
            28045 Madrid
          </div>
          <a href={`tel:${PHONE_TEL}`} className="mt-3 block font-serif text-lg hover:text-[color:var(--gold)]">
            {PHONE}
          </a>
        </div>
        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Salón</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#nosotros" className="hover:text-[color:var(--gold)]">Quiénes somos</a></li>
            <li><a href="#servicios" className="hover:text-[color:var(--gold)]">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-[color:var(--gold)]">Galería</a></li>
            <li><a href="#contacto" className="hover:text-[color:var(--gold)]">Contacto</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Síguenos</div>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--ink)]/20 transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--ink)]/20 transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <div>© {new Date().getFullYear()} Hair &amp; Beauty Madrid. Todos los derechos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Aviso legal</a>
            <a href="#" className="hover:text-foreground">Privacidad</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Nosotros />
      <Servicios />
      <PorQue />
      <Experiencia />
      <Testimonios />
      <Galeria />
      <UbicacionHorarios />
      <CTAFinal />
      <Footer />
    </main>
  );
}
