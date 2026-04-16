import { useState, useEffect, useRef } from 'react';
import './App.css';
import { WhatsAppIcon, CheckIcon, ChevronDownIcon } from './components/Icons';
import { Analytics } from "@vercel/analytics/react"


const videoAirFlow = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/AirFlow_Legendado_ndqzhs.mp4';
const videoCasaCambui = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/CasaCambui_legendado_kj2cqz.mp4';
const videoExpo = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/Expo_bordado_legendado_gnzvl6.mp4';
const videoFaq = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289410/Faq_30s_ekkxl1.mp4';
const videoAgencia = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/agencia_formato_autoral_hzrvnh.mp4';
const videoBebe = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289410/bebe_gourmet_final_zp6hj9.mp4';
const video01 = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289417/video01_uoet4m.mp4';
const video04 = 'https://res.cloudinary.com/drczznkji/video/upload/v1776289415/video04_bsa751.mp4';

import logoCasaCasual from './assets/logos/casa_casual.jpg';
import logoIgorTramontina from './assets/logos/igor_tramontina.png';
import logoJoaoDeBarro from './assets/logos/joaodebarro.webp';
import logoRaGroup from './assets/logos/ra-group.png';
import logoSoberano from './assets/logos/soberano-muaythai.png';

const WHATSAPP_NUMBER = "5516991609339";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20produ%C3%A7%C3%B5es%20de%20v%C3%ADdeo%20da%20Lavigo%20Studios.`;

const PORTFOLIO_VIDEOS = [
  { id: 1, title: 'AirFlow', category: 'Produção Institucional', src: videoAirFlow },
  { id: 2, title: 'Casa Cambuí', category: 'Tour Imobiliário', src: videoCasaCambui },
  { id: 3, title: 'Expo Bordado', category: 'Cobertura de Eventos', src: videoExpo },
  { id: 4, title: 'João de Barro', category: 'Conteúdo Dinâmico', src: videoBebe },
  { id: 5, title: 'Vila dos Sonhos', category: 'Produção de Anúncios', src: video04 },
  { id: 6, title: 'Perguntas Frequentes', category: 'Material Comercial', src: videoFaq }
];

const LazyVideo = ({ src, type = "video/mp4", ...props }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video ref={videoRef} {...props}>
      {isIntersecting && <source src={src} type={type} />}
    </video>
  );
};

function App() {
  return (
    <div className="app-container">
      <Analytics />
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background">
          <LazyVideo src={videoAgencia} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container relative z-10 hero-content">
          <h1 className="hero-title">
            Vídeos que posicionam sua empresa e fazem você <span className="text-gradient-accent">vender mais</span>
          </h1>
          <p className="hero-subtitle">
            Produções estratégicas para empresas que querem crescer, atrair clientes e cobrar mais caro
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-accent hero-cta">
            Quero atrair mais clientes
          </a>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section problem-section">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <h3>Seu conteúdo não gera resultado?</h3>
              <p>Você posta frequentemente, mas seus seguidores não se tornam clientes na mesma proporção.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💸</div>
              <h3>Investe e não vê retorno?</h3>
              <p>Anúncios que não convertem porque o material visual não prende a atenção do seu público-alvo.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📱</div>
              <h3>Parece amadora online?</h3>
              <p>Seus produtos e serviços são excelentes, mas a sua imagem na internet não reflete essa qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="section solution-section">
        <div className="container solution-grid">
          <div className="solution-content">
            <h2 className="section-title">
              A Lavigo Studios não é <br /><span className="text-gradient-primary">apenas uma produtora</span>
            </h2>
            <p className="solution-text">
              Criamos conteúdos estratégicos desenhados do absoluto zero para o seu modelo de negócio. Nosso foco não é apenas fazer vídeos bonitos, mas desenvolver ferramentas de vendas.
            </p>
            <ul className="solution-list">
              <li><CheckIcon className="icon-check" /> Posicionam sua marca como autoridade incontestável.</li>
              <li><CheckIcon className="icon-check" /> Aumentam o valor percebido do seu produto.</li>
              <li><CheckIcon className="icon-check" /> Geram desejo e aceleram suas vendas.</li>
            </ul>
          </div>
          <div className="solution-visual">
            <div className="video-card solution-video" style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
              <LazyVideo src={video01} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '16px' }} />
            </div>
            <div className="glow-effect-blue"></div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="section services-section bg-dark">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Nossas <span className="text-gradient-accent">Soluções</span></h2>
            <p>Formatos validados que trazem retorno real para o seu caixa.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎬</div>
              <h3>Vídeos Institucionais</h3>
              <p>Apresente sua empresa com uma narrativa cinematográfica que transmite máxima confiança e credibilidade.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Conteúdo Reels/TikTok</h3>
              <p>Pacotes de vídeos verticais altamente dinâmicos projetados para engajar, reter a atenção e viralizar.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Vídeos para Anúncios</h3>
              <p>Criativos focados em alta conversão. Estrutura validada para reduzir o seu custo por clique e CAC.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Cobertura de Eventos</h3>
              <p>Eternize seus eventos e lançamentos com recortes dinâmicos perfeitos para alimentar suas redes sociais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section className="section portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nosso <span className="text-gradient-primary">Portfólio</span></h2>
            <p>Resultados visíveis de alto padrão.</p>
          </div>
        </div>
        <div className="portfolio-scroll">
          {PORTFOLIO_VIDEOS.map((item) => (
            <div key={item.id} className="video-card portfolio-item" style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', flexShrink: 0 }}>
              <LazyVideo src={item.src} autoPlay loop muted playsInline style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }} />
              <div className="video-card-overlay" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 20px 20px', background: 'linear-gradient(0deg, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0) 100%)', zIndex: 10 }}>
                <h4 style={{ margin: '0 0 6px 0', color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>{item.title}</h4>
                <p className="text-sm" style={{ margin: 0, color: '#aaa' }}>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SOCIAL PROOF SECTION */}
      <section className="section social-proof bg-dark">
        <div className="container center">
          <h2 className="section-title text-gradient-accent">Aprovado por grandes marcas</h2>
          <div className="logos-grid mt-4" style={{ alignItems: 'center' }}>
            <img src={logoCasaCasual} alt="Casa Casual" style={{ maxHeight: '50px' }} loading="lazy" />
            <img src={logoIgorTramontina} alt="Igor Tramontina" style={{ maxHeight: '50px' }} loading="lazy" />
            <img src={logoJoaoDeBarro} alt="João de Barro" style={{ maxHeight: '50px' }} loading="lazy" />
            <img src={logoRaGroup} alt="RA Group" style={{ maxHeight: '50px' }} loading="lazy" />
            <img src={logoSoberano} alt="Soberano Muaythai" style={{ maxHeight: '50px' }} loading="lazy" />
          </div>

          <div className="testimonials-grid mt-5">
            <div className="testimonial-card">
              <div className="quote">"O trabalho da Lavigo elevou o nível do nosso branding. Nosso posicionamento melhorou muito com a nova qualidade dos vídeos."</div>
              <div className="author">- João Campos, João de Barro</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"Profissionalismo impecável. Não sabíamos como fazer vídeos de qualidade, mas a Lavigo nos ajudou muito."</div>
              <div className="author">- Bruno Trevisan, Soberano Muaythai</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIFFERENTIAL SECTION */}
      <section className="section diff-section">
        <div className="container">
          <h2 className="section-title center mb-5">Por que escolher a <span className="text-white">Lavigo</span>?</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <h4>🧠 Estratégia antes da execução</h4>
              <p>Não apertamos REC antes de entender profundamente o seu negócio e objetivo.</p>
            </div>
            <div className="diff-item">
              <h4>💰 Foco em vendas</h4>
              <p>Cada frame e cada roteiro são pensados com metodologias de gatilhos mentais e conversão.</p>
            </div>
            <div className="diff-item">
              <h4>💎 Altíssimo Padrão</h4>
              <p>Equipamentos de cinema e equipe altamente capacitada para o look premium que sua marca merece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESS SECTION */}
      <section className="section process-section bg-dark">
        <div className="container">
          <h2 className="section-title center mb-5">Como funciona</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Diagnóstico</h4>
              <p>Entendemos seu negócio e seus objetivos.</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Planejamento</h4>
              <p>Definimos a melhor estratégia de conteúdo.</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Produção</h4>
              <p>Captação e direção profissional.</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Entrega</h4>
              <p>Conteúdo pronto para gerar resultados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA INTERMEDIARY */}
      <section className="section cta-inter center">
        <div className="container">
          <h2 className="cta-inter-title">Se você quer crescer, precisa ser visto.</h2>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-accent mt-4">
            👉 Quero atrair mais clientes
          </a>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <FAQSection />

      {/* 11. FINAL CTA */}
      <section className="section cta-final center">
        <div className="glow-effect-copper"></div>
        <div className="container relative z-10">
          <h2>Pare de perder clientes por <span className="text-gradient-accent">falta de posicionamento.</span></h2>
          <p className="mt-3 text-lg mb-5">Eleve sua marca hoje mesmo. Agende uma consultoria gratuita.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-accent btn-large">
            👉 Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer center">
        <p>© 2026 Lavigo Studios. Todos os direitos reservados.</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Fale conosco no WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}

const FAQSection = () => {
  const faqs = [
    { q: "Quanto custa um projeto?", a: "Nossos projetos são precificados com base no diagnóstico do negócio. Projetamos pacotes personalizados para que o investimento gere retorno direto." },
    { q: "Quanto tempo leva a entrega?", a: "Depende da complexidade, mas em média, nossos pacotes para redes sociais são entregues em até 10 dias úteis após a captação." },
    { q: "Vocês atendem minha cidade?", a: "Nossa base é em Ibitinga - SP, mas temos estrutura e mobilidade para atender produções em todo o Brasil." },
    { q: "Preciso aparecer nos vídeos?", a: "Não necessariamente. Podemos usar locuções profissionais, atores ou focar apenas no produto/ambiente da sua empresa." },
  ];

  return (
    <section className="section faq-section">
      <div className="container max-w-3xl">
        <h2 className="section-title center mb-5">Dúvidas Frequentes</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <ChevronDownIcon className={`faq-icon ${open ? 'rotate' : ''}`} />
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;