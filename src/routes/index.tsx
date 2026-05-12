import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check,
  ShieldCheck,
  Sparkles,
  Sun,
  Moon,
  Leaf,
  Droplet,
  FlaskConical,
  Star,
  ChevronDown,
  ShoppingCart,
  Clock,
  Lock,
  Truck,
  Award,
  Shield,
} from "lucide-react";
import frasco from "@/assets/frasco.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- helpers ---------- */

function Countdown() {
  const [t, setT] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const i = setInterval(() => {
      setT((p) => {
        let { h, m, s } = p;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="inline-flex items-center gap-2 font-mono text-2xl md:text-3xl font-semibold text-primary">
      <span className="bg-primary text-primary-foreground rounded-md px-3 py-2">{pad(t.h)}</span>:
      <span className="bg-primary text-primary-foreground rounded-md px-3 py-2">{pad(t.m)}</span>:
      <span className="bg-primary text-primary-foreground rounded-md px-3 py-2">{pad(t.s)}</span>
    </div>
  );
}

function CTAButton({ children, size = "lg" }: { children: React.ReactNode; size?: "lg" | "xl" }) {
  return (
    <button
      onClick={() => document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" })}
      className={`shine-btn whitespace-nowrap inline-flex items-center justify-center rounded-full bg-cta text-cta-foreground font-semibold shadow-cta hover:brightness-110 hover:scale-[1.02] active:scale-[0.99] transition-all uppercase tracking-wide ${
        size === "xl" ? "px-8 py-5 text-sm md:text-base lg:text-lg" : "px-7 py-4 text-xs md:text-sm"
      }`}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="shine relative inline-flex items-center px-3.5 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.24em] text-primary bg-gradient-to-r from-accent/40 via-background to-accent/40 shadow-[0_1px_0_oklch(1_0_0/0.6)_inset,0_8px_24px_-12px_oklch(0.30_0.045_165/0.35)] ring-1 ring-primary/10 backdrop-blur">
      <span className="bg-gradient-to-r from-primary via-[var(--gold)] to-primary bg-clip-text text-transparent">{children}</span>
    </div>
  );
}

/* ---------- sections ---------- */

function Nav() {
  const benefits = [
    "100% Natural",
    "Aprovado por dermatologistas",
    "Resultados em 14 dias",
    "Frete grátis para todo Brasil",
    "Garantia de 90 dias",
    "+12.000 mulheres transformadas",
    "Sem parabenos ou sulfatos",
    "Pagamento seguro",
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center md:justify-between">
        <img src={logo} alt="Flor do Oriente" className="h-16 md:h-20 w-auto" />
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-cta" />
          Garantia blindada de 90 dias
        </div>
      </div>
      <div className="bg-gradient-to-r from-deep via-[oklch(0.35_0.05_165)] to-deep text-primary-foreground overflow-hidden border-y border-primary/20">
        <div className="flex whitespace-nowrap animate-marquee py-2">
          {[...benefits, ...benefits, ...benefits].map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 px-6 text-[11px] md:text-xs font-medium tracking-wide shrink-0">
              <Check className="w-4 h-4 text-primary-foreground shrink-0" strokeWidth={3} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 seigaiha opacity-40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionLabel>Fórmula Inovadora · Hanakōrei 24h</SectionLabel>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.15] text-balance">
            Se você já tentou colágeno e <em className="not-italic marker font-semibold">não viu resultado</em>, o problema não era o colágeno.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Era que sua pele ficou <strong className="text-primary">14 horas por dia sem nenhum suporte</strong>. Isso muda agora.
          </p>
          <p className="mt-4 text-base text-foreground/80 leading-relaxed">
            A molécula que religa o ciclo de regeneração que o seu corpo desacelerou depois dos 40. Protocolo de dose dupla: uma cápsula pela manhã, uma à noite. <strong>24 horas de ação contínua</strong>, em casa, sem agulha.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <CTAButton size="xl">Quero iniciar meu protocolo</CTAButton>
          </div>
          <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cta" />
            Garantia de 90 dias. Você testa. Se não gostar, devolvemos cada centavo.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary/70" /> Compra segura</div>
            <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-primary/70" /> Selo ANVISA</div>
            <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-primary/70" /> Frete grátis</div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-10 bg-mint-grad opacity-30 blur-3xl rounded-full" />
          <img
            src={frasco}
            alt="Frasco Flor do Oriente — Complexo Hanakōrei 24h"
            className="relative w-full mx-auto drop-shadow-[0_30px_50px_oklch(0.30_0.045_165/0.35)]"
          />

          {/* Top-left */}
          <div className="absolute top-2 left-0 md:-left-6 bg-card shadow-card rounded-2xl px-3.5 py-2.5 text-xs font-medium rotate-[-5deg] ring-1 ring-border/50">
            <div className="text-primary font-semibold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-gold" /> 7 ativos</div>
            <div className="text-muted-foreground text-[11px]">em 1 cápsula</div>
          </div>

          {/* Top-right */}
          <div className="absolute top-2 right-0 md:-right-6 bg-card shadow-card rounded-2xl px-3.5 py-2.5 text-xs font-medium rotate-[5deg] ring-1 ring-border/50">
            <div className="text-primary font-semibold flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-gold" /> Selo ANVISA</div>
            <div className="text-muted-foreground text-[11px]">Fórmula registrada</div>
          </div>

          {/* Bottom-left */}
          <div className="absolute bottom-6 left-0 md:-left-6 bg-card shadow-card rounded-2xl px-3.5 py-2.5 text-xs font-medium rotate-[-4deg] ring-1 ring-border/50">
            <div className="text-primary font-semibold flex items-center gap-1.5"><Star className="w-3 h-3 fill-gold text-gold" /> +12.000</div>
            <div className="text-muted-foreground text-[11px]">mulheres</div>
          </div>

          {/* Bottom-right */}
          <div className="absolute bottom-6 right-0 md:-right-6 bg-card shadow-card rounded-2xl px-3.5 py-2.5 text-xs font-medium rotate-[4deg] ring-1 ring-border/50">
            <div className="text-primary font-semibold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-cta" /> Garantia</div>
            <div className="text-muted-foreground text-[11px]">90 dias</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Opening() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4">
        <SectionLabel>Por que nada funcionou até agora</SectionLabel>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
          Existe um motivo pelo qual nenhum creme, sérum ou suplemento entregou o resultado prometido.
        </h2>
        <p className="mt-6 text-xl text-accent-foreground italic font-display">
          Eles trabalham meio período.
        </p>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Uma cápsula por dia cobre de 8 a 10 horas de ação metabólica. Nas outras 14 horas, os radicais livres seguem destruindo, o colágeno segue se degradando e a desidratação profunda segue avançando sem nenhuma resistência.
          </p>
          <p>
            É como tentar encher um <strong className="text-primary">balde furado</strong>: o que entra pela manhã escapa pela tarde. Você acaba achando que colágeno não funciona, quando na verdade o que não funcionou foi o protocolo.
          </p>
          <p>
            O <strong className="text-primary">Complexo Hanakōrei 24h</strong> é a primeira fórmula que tampa o balde antes de tentar enchê-lo. São 4 ativos científicos, incluindo o <strong>Trans-Resveratrol</strong> — a molécula que David Sinclair, geneticista de Harvard, estudou por mais de duas décadas como um dos compostos mais relevantes já mapeados para o envelhecimento humano.
          </p>
          <p>
            O resultado é uma pele que volta a se comportar como se comportava antes dos 40. Não de um dia para o outro. Em <strong>ondas progressivas</strong> que se acumulam ao longo de 7 meses.
          </p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4">
        <SectionLabel>Uma história real</SectionLabel>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
          Dona Marlene, 68 anos, escreveu para a gente assim:
        </h2>
        <blockquote className="mt-8 relative bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border/60">
          <div className="absolute -top-4 left-8 text-6xl font-display text-accent leading-none">"</div>
          <p className="text-lg italic text-foreground/85 leading-relaxed">
            Minha neta me indicou. Eu disse pra ela que não ia funcionar, porque eu já tinha tentado de tudo. Colágeno em pó, cremes de R$200, até umas vitaminas que uma amiga trouxe dos Estados Unidos. Nada mudou nada.
          </p>
        </blockquote>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>Ela começou o protocolo de 12 meses por insistência da neta. No primeiro mês, achou que não estava funcionando. No terceiro, percebeu que a pele tinha parado de ressecar. No quinto, uma vizinha que ela não via há dois meses perguntou se ela tinha feito algum procedimento.</p>
          <p>Aos 12 meses, Dona Marlene mandou para a gente uma foto de antes e depois. A diferença era tão visível que o próprio médico dela perguntou o que ela estava usando.</p>
          <p className="text-primary font-semibold">
            O que mudou para a Dona Marlene não foi sorte. Foi protocolo correto, pelo tempo correto.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    { t: "Rugas que não somem mais", d: "Linhas que antes desapareciam ao acordar agora ficaram marcadas. A maquiagem disfarça por algumas horas. O espelho de manhã não mente." },
    { t: "Firmeza que foi embora", d: "O contorno do rosto que era definido parece ter descido. A maçã do rosto, o maxilar, o pescoço. Tudo perdeu o tônus que você tinha há cinco anos." },
    { t: "Pele seca que não responde a nada", d: "Você usa mais hidratante do que nunca e a sensação de pele de papelão ao acordar continua igual. O problema está muito mais fundo do que qualquer creme alcança." },
    { t: "Promessas vazias", d: "Cremes, séruns, suplementos. A prateleira do banheiro está cheia e o espelho continua decepcionando." },
    { t: "Não se reconhecer", d: "Você se olha no espelho e não encontra a mulher que se sente por dentro. Essa distância precisa mudar. E pode mudar." },
  ];
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <SectionLabel>Você se identifica?</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
            Sua pele envelheceu de uma vez só?
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.t} className="p-6 rounded-2xl border border-border/60 bg-background hover:shadow-soft transition">
              <h3 className="text-xl font-semibold text-primary">{it.t}</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed text-sm">{it.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-deep text-primary-foreground p-8 md:p-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Isso tem um nome</p>
          <h3 className="mt-3 text-3xl md:text-4xl font-semibold">Colapso Regenerativo Silencioso</h3>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed">
            Aos 50 anos, sua pele pode estar se regenerando apenas <strong className="text-accent">6 a 8 horas por dia</strong>. Nas outras 16 horas, o envelhecimento avança sem resistência.
          </p>
          <p className="mt-4 text-accent font-semibold">A boa notícia? Esse ciclo pode ser religado.</p>
        </div>
      </div>
    </section>
  );
}

function Mechanism() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4">
        <SectionLabel>A ciência por trás do resultado</SectionLabel>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
          Por que tudo que você já tentou não funcionou
        </h2>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>Cremes agem na superfície. O problema está nas camadas mais profundas. Suplementos comuns vêm com 30 cápsulas por frasco e dose única noturna, o que cobre de 8 a 10 horas de ação metabólica. Nas outras 14 horas, o Colapso Regenerativo segue avançando sem nenhuma barreira.</p>
          <p>Lembra do balde furado? Cada cápsula que você toma tenta encher o balde. Mas os radicais livres da manhã destroem o que o suplemento tentou reconstruir à noite. O saldo final é quase zero.</p>
          <p className="text-primary font-semibold">Por isso existe o Complexo Hanakōrei 24h: para tampar os furos antes de encher o balde.</p>
        </div>
        <div className="mt-10 text-center">
          <CTAButton>Quero conhecer o protocolo completo</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Actives() {
  const list = [
    {
      icon: FlaskConical,
      name: "Trans-Resveratrol",
      tag: "A molécula de Sinclair",
      d: "David Sinclair, geneticista de Harvard, passou décadas estudando por que algumas pessoas envelhecem mais devagar. A resposta foram as sirtuínas, proteínas que funcionam como o interruptor mestre do envelhecimento celular. O Trans-Resveratrol é o composto que religa essas proteínas quando elas adormecem.",
    },
    {
      icon: Leaf,
      name: "Colágeno Hidrolisado",
      tag: "Com peptídeos de sinalização",
      d: "Suplementos comuns só entregam colágeno. O Hanakōrei 24h ensina o seu corpo a produzir o dele de novo, como fazia aos 25 anos. Os peptídeos ordenam às células que retomem a fabricação por conta própria.",
    },
    {
      icon: Droplet,
      name: "Ácido Hialurônico",
      tag: "Preenchedor por dentro",
      d: "O preenchedor natural que age onde nenhuma agulha chega. Absorvido pela via oral, atinge a derme profunda e retém até 1.000 vezes seu peso em água. Elimina a sensação de pele de papelão.",
    },
    {
      icon: Sparkles,
      name: "Vitaminas C + E",
      tag: "A chave da linha de montagem",
      d: "Sem esses cofatores, todo o colágeno ingerido é desperdiçado. As vitaminas C e E são a chave que liga a linha de montagem da sua pele. Sem elas, é como ter tijolo sem cimento.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Complexo Hanakōrei 24h</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-primary text-balance">
            Hana <span className="text-accent">·</span> Kōrei
          </h2>
          <p className="mt-3 text-muted-foreground italic">flor · envelhecimento gracioso</p>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Protocolo de ação dupla. A única fórmula que combina os 4 ativos necessários para reverter o Colapso Regenerativo Silencioso.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {list.map((a) => (
            <div key={a.name} className="p-7 rounded-3xl border border-border/60 bg-background hover:shadow-card transition group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-mint-grad flex items-center justify-center shrink-0 text-primary group-hover:scale-105 transition">
                  <a.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-foreground/70">{a.tag}</p>
                  <h3 className="text-2xl font-semibold text-primary mt-1">{a.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed text-sm">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Protocol() {
  return (
    <section className="py-16 md:py-24 bg-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 seigaiha opacity-[0.08]" />
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">O Protocolo Duplo</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-balance">
            Manhã e noite. Sem interrupção.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/75 leading-relaxed">
            Enquanto outros suplementos trabalham meio período, o Hanakōrei 24h trabalha em tempo integral. 60 cápsulas por frasco. Sem janela aberta para o envelhecimento avançar.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 backdrop-blur">
            <Sun className="w-10 h-10 text-gold" />
            <h3 className="mt-4 text-2xl font-semibold">Dose da manhã</h3>
            <p className="text-accent font-medium text-sm mt-1">Proteção e ativação</p>
            <ul className="mt-5 space-y-2 text-primary-foreground/85 text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Trans-Resveratrol ativa as sirtuínas</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Colágeno em circulação no período de maior exposição</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Antioxidantes contra radicais livres, sol e poluição</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 backdrop-blur">
            <Moon className="w-10 h-10 text-accent" />
            <h3 className="mt-4 text-2xl font-semibold">Dose da noite</h3>
            <p className="text-accent font-medium text-sm mt-1">Reconstrução e regeneração</p>
            <ul className="mt-5 space-y-2 text-primary-foreground/85 text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Ácido Hialurônico restaura hidratação profunda</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Vitaminas ativam a síntese noturna de colágeno</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Aproveita a janela natural de regeneração do sono</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-accent text-sm">1 cápsula pela manhã · 1 cápsula à noite · 24h de ação contínua</p>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["Trans-Resveratrol", "Sim", "Não", "Não", "Não"],
    ["Ação 24h contínua", "Sim", "Não", "Não", "Parcial"],
    ["Age nas camadas profundas", "Sim", "Parcial", "Não", "Sim"],
    ["Sem agulhas, sem anestesia", "Sim", "Sim", "Sim", "Não"],
    ["Resultado duradouro", "Sim", "Parcial", "Não", "Temporário"],
    ["Custo por dia", "R$2,60", "R$1,30–5", "R$2,60–13", "R$16–100"],
  ];
  const cell = (v: string, hi = false) => {
    const isYes = v === "Sim";
    return (
      <td className={`py-3 px-3 md:px-5 text-center text-sm ${hi ? "bg-accent/15 font-semibold text-primary" : "text-foreground/75"}`}>
        {isYes ? <Check className="inline w-5 h-5 text-cta" /> : v}
      </td>
    );
  };
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <SectionLabel>Comparativo</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
            Flor do Oriente vs. tudo que você já tentou
          </h2>
        </div>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-border/60 bg-card shadow-soft">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-deep text-primary-foreground">
                <th className="text-left py-4 px-5 font-medium"></th>
                <th className="py-4 px-3 font-semibold text-accent">Flor do Oriente</th>
                <th className="py-4 px-3 font-medium">Suplementos comuns</th>
                <th className="py-4 px-3 font-medium">Cremes tópicos</th>
                <th className="py-4 px-3 font-medium">Procedimentos</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border/50">
                  <td className="py-3 px-5 font-medium text-primary">{r[0]}</td>
                  {cell(r[1], true)}
                  {cell(r[2])}
                  {cell(r[3])}
                  {cell(r[4])}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-muted-foreground text-sm max-w-2xl mx-auto">
          A única fórmula com Trans-Resveratrol e protocolo de 24h contínuo, por menos do que a mensalidade de uma academia de bairro.
        </p>
      </div>
    </section>
  );
}

function Waves() {
  const waves = [
    { n: "01", title: "Hidratação e viço", when: "Semanas 1 a 4", d: "O Ácido Hialurônico atinge as camadas profundas e começa a reter água onde antes havia vazio. A sensação de pele de papelão ao acordar desaparece. Sua pele acorda com você, não contra você." },
    { n: "02", title: "Firmeza progressiva", when: "Meses 2 a 3", d: "Os peptídeos ativam os fibroblastos. O contorno do rosto começa a se redefinir. As linhas finas suavizam. É quando alguém próximo pergunta: você fez alguma coisa diferente?" },
    { n: "03", title: "Remodelação profunda", when: "Meses 5 a 7", d: "O Trans-Resveratrol completa o trabalho. Rugas mais profundas cedem. A flacidez recua. É a fase em que ouvem a frase que mais esperam: parece outra pessoa." },
  ];
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <SectionLabel>O que esperar</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
            As 3 ondas de resultado
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {waves.map((w) => (
            <div key={w.n} className="relative p-7 rounded-3xl border border-border/60 bg-background hover:shadow-card transition">
              <div className="text-6xl font-display text-accent/40 leading-none">{w.n}</div>
              <p className="mt-2 text-xs uppercase tracking-widest text-accent-foreground/70">{w.when}</p>
              <h3 className="mt-2 text-2xl font-semibold text-primary">{w.title}</h3>
              <p className="mt-3 text-foreground/75 leading-relaxed text-sm">{w.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-gold bg-gold/10 p-6 text-sm text-foreground/85 leading-relaxed">
          <strong className="text-primary">⚠️ Atenção:</strong> a maioria das mulheres que não vê resultado abandona entre a 4ª e a 6ª semana, exatamente quando a Onda 1 termina e o corpo se prepara para a Onda 2. Por isso o <strong>kit de 7 meses</strong> é o recomendado — ele cobre as 3 ondas completas.
        </div>
        <div className="mt-10 text-center">
          <CTAButton>Quero começar minha transformação</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    ["Renata S., 47 anos", "No 5º mês minha filha me perguntou se eu tinha feito algum procedimento. Não tinha feito nada diferente além do suplemento."],
    ["Dona Marlene, 68 anos", "Minha neta que me indicou. Tomei o tratamento completo de 12 meses e minha pele mudou completamente. Valeu cada dia."],
    ["Fernanda C., 39 anos", "Estava com a pele muito manchada e ressecada. Em 5 meses a diferença foi absurda. Meu marido notou antes de mim."],
    ["Sônia R., 72 anos", "Na minha idade eu não esperava esse tipo de resultado. Mas aconteceu. Estou no segundo ciclo e não pretendo parar."],
    ["Aparecida M., 63 anos", "Minha pele ficou irreconhecível, de um jeito muito bom. As manchas clarearam e a firmeza voltou."],
    ["Cláudia T., 55 anos", "Eu estava desistindo de cuidar da pele. No quarto mês percebi que estava errada. Pela primeira vez em anos me sinto bem ao me olhar no espelho."],
  ];
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <SectionLabel>Resultados reais</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
            Mulheres que não pararam na primeira onda
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(([name, quote]) => (
            <div key={name} className="p-6 rounded-3xl bg-card border border-border/60 shadow-soft">
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
              </div>
              <p className="mt-3 text-foreground/85 italic leading-relaxed text-sm">"{quote}"</p>
              <p className="mt-4 text-sm font-semibold text-primary">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objections() {
  const list = [
    {
      q: "Já tentei colágeno e não funcionou.",
      a: "Faz sentido. A maioria dos suplementos usa dose única noturna e não contém Trans-Resveratrol, então sua pele fica 14 horas por dia sem suporte. O Hanakōrei 24h é diferente porque ataca os dois problemas ao mesmo tempo: ingredientes certos no protocolo certo (manhã e noite, sem interrupção). Não é mais do mesmo. É exatamente o que faltava.",
    },
    {
      q: "R$547 é caro.",
      a: "Dividindo por 210 dias de tratamento, você paga R$2,60 por dia. Menos do que um café na padaria. E muito menos do que uma sessão de botox (R$800–2.500) ou preenchimento (R$1.500–4.000), que precisam ser refeitos a cada 6 meses. O Hanakōrei trabalha de dentro para fora — o resultado se acumula em vez de desaparecer.",
    },
    {
      q: "E se não funcionar pra mim?",
      a: "Você tem 90 dias de garantia. Se ao final desse período sua pele não estiver mais hidratada, firme e visivelmente mais jovem, basta enviar um e-mail para contato@flordooriente.com.br. Devolvemos 100% do valor em até 7 dias úteis, sem perguntas, sem formulário. O risco é todo nosso.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center">
          <SectionLabel>Antes de decidir</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
            As 3 dúvidas mais comuns
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {list.map((o, i) => (
            <details key={i} className="group rounded-2xl border border-border/60 bg-background open:shadow-soft transition">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6">
                <span className="font-semibold text-primary text-lg">{o.q}</span>
                <ChevronDown className="w-5 h-5 text-primary transition group-open:rotate-180 shrink-0" />
              </summary>
              <p className="px-6 pb-6 text-foreground/80 leading-relaxed text-sm">{o.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kits() {
  const kits = [
    {
      id: "test", name: "Kit Teste", months: "3 meses", desc: "Apenas a Onda 1",
      from: "447", price: "297", installments: "12x de R$30,72", units: "3 frascos",
      cta: "COMPRAR AGORA",
    },
    {
      id: "inter", name: "Kit Intermediário", months: "5 meses", desc: "Ondas 1 e 2",
      from: "680", price: "397", installments: "12x de R$41,06", units: "5 frascos",
      cta: "COMPRAR AGORA",
    },
    {
      id: "complete", name: "Kit Completo", months: "7 meses", desc: "Todas as 3 ondas",
      from: "760", price: "547", installments: "12x de R$56,57 sem juros", units: "7 frascos",
      cta: "GARANTIR MEU KIT",
      featured: true,
    },
    {
      id: "annual", name: "Kit Anual", months: "12 meses", desc: "Menor custo por mês (R$66/mês)",
      from: "1.150", price: "797", installments: "12x de R$82,43", units: "12 frascos",
      cta: "COMPRAR AGORA",
    },
  ];
  return (
    <section id="ofertas" className="py-16 md:py-24 bg-hero relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 seigaiha opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Escolha seu kit</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-primary text-balance">
            Inicie seu protocolo completo
          </h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            Para resultado real e duradouro nas rugas e flacidez, o mínimo recomendado é o <strong>kit de 7 meses</strong>, que cobre as 3 ondas completas.
          </p>
          <div className="mt-8 inline-flex flex-col items-center gap-3 bg-card rounded-2xl px-6 py-5 shadow-soft border border-border/60">
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <Clock className="w-4 h-4" /> Oferta com desconto encerra em
            </div>
            <Countdown />
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-card border border-border/60 p-6 md:p-8 shadow-soft max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Você recebe ao iniciar o protocolo:</p>
          <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-foreground/85">
            <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> Frascos do Complexo Hanakōrei 24h</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> BÔNUS Guia "Protocolo 24h" (R$97)</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> BÔNUS Grupo VIP WhatsApp (R$197)</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> BÔNUS E-book "7 hábitos" (R$47)</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> Entrega rastreada para todo o Brasil</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> Garantia blindada de 90 dias</li>
          </ul>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((k) => (
            <div
              key={k.id}
              className={`relative rounded-3xl overflow-hidden border bg-card flex flex-col ${
                k.featured
                  ? "border-cta shadow-card md:-translate-y-3 ring-2 ring-cta/20"
                  : "border-border/60 shadow-soft"
              }`}
            >
              {k.featured && (
                <div className="absolute top-0 left-0 right-0 bg-cta text-cta-foreground text-center text-xs font-bold uppercase tracking-widest py-2">
                  ⭐ Mais escolhido
                </div>
              )}
              <div className={`p-6 ${k.featured ? "pt-12" : ""} ${k.featured ? "bg-deep text-primary-foreground" : "bg-mint-grad text-primary"}`}>
                <p className="text-xs uppercase tracking-widest opacity-80">{k.name}</p>
                <h3 className="text-3xl font-semibold mt-1">{k.months}</h3>
                <p className={`text-sm mt-1 ${k.featured ? "text-accent" : "text-primary/70"}`}>{k.desc}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <img src={frasco} alt="" className="h-32 object-contain" />
                </div>
                <p className="text-xs text-muted-foreground line-through text-center">De R${k.from},00 por</p>
                <p className="text-center mt-1">
                  <span className="text-4xl font-bold text-primary">R${k.price}</span>
                </p>
                <p className="text-center text-sm text-muted-foreground mt-1">{k.installments}</p>

                <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> {k.units} · 60 caps cada</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> Todos os bônus</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> Frete grátis</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-cta shrink-0 mt-0.5" /> Garantia de 90 dias</li>
                </ul>

                <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-cta text-cta-foreground font-semibold py-4 text-sm shadow-cta hover:brightness-110 transition uppercase tracking-wide">
                  <ShoppingCart className="w-4 h-4" /> {k.cta}
                </button>
                <div className="mt-4 flex justify-around text-[10px] text-muted-foreground uppercase tracking-wider">
                  <span className="flex flex-col items-center gap-1"><Lock className="w-3.5 h-3.5" /> Seguro</span>
                  <span className="flex flex-col items-center gap-1"><Award className="w-3.5 h-3.5" /> Garantia</span>
                  <span className="flex flex-col items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Privado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          Pagamento 100% seguro · Entrega em até 7 dias úteis · Parcelamento sem juros · Dados protegidos por criptografia SSL
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Visa · Mastercard · Elo · Pix · Boleto · Selo ANVISA · SSL
        </p>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionLabel>Risco zero</SectionLabel>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
          Você não perde nada ao tentar
        </h2>
        <div className="mt-10 relative rounded-3xl bg-deep text-primary-foreground p-10 md:p-14">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-card">
            <ShieldCheck className="w-10 h-10 text-deep" />
          </div>
          <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-accent">90 dias · Satisfação blindada</h3>
          <p className="mt-5 text-primary-foreground/85 leading-relaxed">
            Use o Complexo Hanakōrei 24h por 90 dias seguindo o protocolo: uma cápsula pela manhã, uma à noite. Se ao final desses 90 dias você não notar a sua pele mais hidratada, mais firme e visivelmente mais jovem, basta enviar um e-mail para <strong className="text-accent">contato@flordooriente.com.br</strong>.
          </p>
          <p className="mt-4 text-primary-foreground/85 leading-relaxed">
            Devolvemos cada centavo em até 7 dias úteis. Sem perguntas, sem formulário, sem burocracia.
          </p>
          <p className="mt-6 text-accent font-semibold text-lg">O risco é todo nosso. O resultado é todo seu.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ["Em quanto tempo vou ver resultado?", "O protocolo age em 3 ondas. Hidratação e viço nas primeiras 2 a 4 semanas. Firmeza progressiva entre o 2º e o 3º mês. Remodelação profunda entre o 5º e o 7º mês. O kit de 7 meses cobre as 3 fases completas."],
    ["Por que tomar duas cápsulas ao dia e não uma?", "Porque o envelhecimento não para. Uma dose única cobre de 8 a 10 horas. O protocolo duplo garante que nenhuma hora do dia fique sem suporte, principalmente durante o sono, quando a regeneração celular se intensifica."],
    ["É seguro? Tem algum efeito colateral?", "O Flor do Oriente é 100% natural, fabricado em laboratório certificado pela ANVISA, com boas práticas de fabricação (GMP). Não contém glúten, lactose, corantes artificiais ou estimulantes. Não há efeitos colaterais conhecidos. Se você usa medicamentos controlados, consulte seu médico por precaução."],
    ["Quanto tempo demora a entrega? O que aparece na fatura?", "Envio em até 24h após confirmação do pagamento. Prazo de 5 a 7 dias úteis para capitais e até 12 dias para o interior. Código de rastreamento por e-mail e WhatsApp. Na fatura do cartão aparece de forma discreta."],
    ["E se eu não gostar? Perco meu dinheiro?", "Não. Você tem 90 dias de garantia blindada. Se não ficar satisfeita, devolvemos 100% do valor em até 7 dias úteis, sem perguntas e sem burocracia."],
    ["Qual kit devo escolher?", "O de 7 meses é o recomendado, porque cobre as 3 ondas de resultado. O de 5 meses cobre as duas primeiras. O de 3 meses é para quem quer testar. O de 12 meses tem o menor custo por mês."],
    ["Posso tomar junto com outros suplementos ou medicamentos?", "O Flor do Oriente é um suplemento alimentar natural sem interações conhecidas com outros suplementos. Para medicamentos controlados, consulte seu médico. Grávidas e lactantes devem consultar o médico."],
  ];
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-primary text-balance">
            Suas perguntas, respondidas
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-border/60 bg-card open:shadow-soft transition">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5">
                <span className="font-medium text-primary">{q}</span>
                <ChevronDown className="w-5 h-5 text-primary transition group-open:rotate-180 shrink-0" />
              </summary>
              <p className="px-5 pb-5 text-foreground/80 leading-relaxed text-sm">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 seigaiha opacity-[0.08]" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-balance">
          Sua pele envelhece agora. O tratamento começa quando você decidir.
        </h2>
        <p className="mt-6 text-primary-foreground/80 leading-relaxed">
          Cada dia sem o protocolo correto é mais um dia de Colapso Regenerativo. A sua pele de 5 anos atrás não volta sozinha. Mas com os ativos certos, na dose certa, pelo tempo certo, ela pode voltar.
        </p>
        <p className="mt-4 text-accent">
          Você tem 90 dias para testar sem risco. Se não funcionar, devolvemos seu dinheiro.
        </p>
        <div className="mt-10">
          <CTAButton size="xl">Escolher meu kit agora</CTAButton>
        </div>
        <p className="mt-6 text-xs text-primary-foreground/60">
          Garantia blindada de 90 dias · Pagamento 100% seguro · Entrega rastreada para todo o Brasil
        </p>

        <div className="mt-16 text-left bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl p-8 backdrop-blur">
          <p className="text-accent text-sm uppercase tracking-widest font-semibold">P.S.</p>
          <p className="mt-3 text-primary-foreground/85 leading-relaxed text-sm">
            Se você leu até aqui, já entendeu o que diferencia o Complexo Hanakōrei 24h. Não é o colágeno em si. É a combinação dos 4 ativos, o protocolo de 24 horas e o Trans-Resveratrol que nenhum outro produto no Brasil oferece junto.
          </p>
          <p className="mt-3 text-primary-foreground/85 leading-relaxed text-sm">
            O kit recomendado é o de 7 meses: <strong className="text-accent">R$547 à vista</strong>, ou 12x de R$56,57 sem juros.
          </p>
        </div>
      </div>
    </section>
  );
}

function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-deep text-primary-foreground border-t border-primary-foreground/10 shadow-card">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="text-xs md:text-sm">
          <p className="font-semibold">Kit 7 Meses · Hanakōrei 24h</p>
          <p className="text-primary-foreground/70 text-[11px] md:text-xs">R$547 · Garantia 90 dias</p>
        </div>
        <button
          onClick={() => document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full bg-cta text-cta-foreground font-semibold px-5 py-3 text-xs md:text-sm shadow-cta hover:brightness-110 transition uppercase tracking-wide"
        >
          Garantir Agora →
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border/60 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img src={logo} alt="Flor do Oriente" className="h-16 mx-auto" />
        <p className="mt-3 text-sm text-muted-foreground">Complexo Hanakōrei 24h</p>
        <p className="mt-8 text-xs text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Este produto não é um medicamento e não se destina a diagnosticar, tratar, curar ou prevenir doenças. Resultados podem variar conforme histórico de saúde, estilo de vida e consistência de uso. O produto não substitui acompanhamento médico. Grávidas e lactantes devem consultar o médico antes de usar. As afirmações sobre pesquisas científicas referem-se a estudos disponíveis na literatura médica. Garantia de 90 dias a partir da data de recebimento.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Flor do Oriente · contato@flordooriente.com.br
        </p>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Opening />
      <Story />
      <Pain />
      <Mechanism />
      <Actives />
      <Protocol />
      <Comparison />
      <Waves />
      <Testimonials />
      <Objections />
      <Kits />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBar />
    </main>
  );
}
