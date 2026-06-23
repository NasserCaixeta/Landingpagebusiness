const whatsappHref = "https://wa.me/5561999223003?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20LN%20Digital.";

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <path d="M48 22c-4-7-14-10-23-5-8 4-13 12-11 20 2 7 9 11 17 9h8c4 0 7 2 7 5 0 4-4 6-8 5-4 0-7-2-8-6" />
              <path d="M27 35c7 4 15 0 20-8l8-3" />
              <path d="M20 42c-7 5-14 0-12-7 1-5 7-7 11-4" />
              <path d="M28 46l-4 7M42 44l4 7" />
              <circle cx="45" cy="21" r="2" />
            </svg>
          </span>
          <span>LN Digital</span>
        </a>

        <nav className="nav-links" aria-label="Seções">
          <a href="#sobre">Sobre</a>
          <a href="#solucoes">Soluções</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          Começar Agora
        </a>
      </header>

      <section className="hero" id="sobre">
        <div className="hero-copy">
          <p className="eyebrow">Estratégia digital para empresas em evolução</p>
          <h1>Soluções digitais para empresas em evolução.</h1>
          <p className="hero-text">
            Desenhamos experiências, posicionamento e estruturas de conversão para negócios que querem crescer
            com mais clareza, confiança e profissionalismo.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
              Começar projeto
            </a>
            <a className="secondary-button" href="#solucoes">Ver soluções</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Planeta digital com ícones orbitando">
          <div className="orbit orbit-one">
            <span className="orbit-icon icon-1">$$</span>
            <span className="orbit-icon icon-2">CRM</span>
          </div>
          <div className="orbit orbit-two">
            <span className="orbit-icon icon-3">UX</span>
            <span className="orbit-icon icon-4">AI</span>
          </div>
          <div className="orbit orbit-three">
            <span className="orbit-icon icon-5">ADS</span>
            <span className="orbit-icon icon-6">WEB</span>
          </div>

          <div className="planet">
            <div className="planet-grid"></div>
            <div className="planet-core">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M48 22c-4-7-14-10-23-5-8 4-13 12-11 20 2 7 9 11 17 9h8c4 0 7 2 7 5 0 4-4 6-8 5-4 0-7-2-8-6" />
                <path d="M27 35c7 4 15 0 20-8l8-3" />
                <path d="M20 42c-7 5-14 0-12-7 1-5 7-7 11-4" />
                <path d="M28 46l-4 7M42 44l4 7" />
                <circle cx="45" cy="21" r="2" />
              </svg>
              <span>LN</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Indicadores">
        <p>Projetado para empresas que precisam se posicionar melhor no digital</p>
        <div className="trust-items">
          <span>Identidade</span>
          <span>Presença Online</span>
          <span>Automação</span>
          <span>Conversão</span>
        </div>
      </section>

      <section className="intro-section section-pad" id="solucoes">
        <div className="section-heading split-heading">
          <p className="eyebrow">Construído para simplificar o crescimento</p>
          <h2>Estrutura digital para o trabalho que sua empresa não deveria improvisar.</h2>
          <div>
            <p>
              A LN Digital combina estratégia, design e tecnologia para transformar ideias soltas em uma presença
              clara, confiável e pronta para gerar oportunidades.
            </p>
            <a className="text-link" href="#processo">Conhecer processo</a>
          </div>
        </div>
      </section>

      <section className="feature-section section-pad" aria-label="Solucoes">
        <div className="section-heading centered">
          <p className="eyebrow">Operação mais inteligente, sem fricção</p>
          <h2>Um ecossistema digital feito para sua empresa evoluir.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="card-icon">01</span>
            <h3>Posicionamento claro</h3>
            <p>Organizamos sua mensagem para que clientes entendam rápido o valor da sua empresa.</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Saiba mais
            </a>
          </article>
          <article className="feature-card">
            <span className="card-icon">02</span>
            <h3>Experiencia premium</h3>
            <p>Criamos interfaces modernas, responsivas e pensadas para transmitir confiança desde o primeiro clique.</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Saiba mais
            </a>
          </article>
          <article className="feature-card">
            <span className="card-icon">03</span>
            <h3>Caminho para conversão</h3>
            <p>Estruturamos chamadas, seções e fluxos para transformar atenção em conversa, lead ou venda.</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Saiba mais
            </a>
          </article>
        </div>
      </section>

      <section className="product-section section-pad" id="processo">
        <div className="product-copy">
          <p className="eyebrow">Solução completa, ponta a ponta</p>
          <h2>Uma presença digital segura para empresas que querem parecer preparadas.</h2>
          <p>
            Cada projeto nasce com diagnóstico, narrativa, visual e execução técnica conectados. Você ganha uma base
            pronta para apresentar a empresa, captar oportunidades e crescer com consistência.
          </p>
        </div>

        <div className="product-stage">
          <div className="dashboard-card">
            <div className="dash-top">
              <span>LN Digital</span>
              <strong>10x</strong>
            </div>
            <div className="dash-bars">
              <span style={{ "--w": "82%" }}></span>
              <span style={{ "--w": "64%" }}></span>
              <span style={{ "--w": "91%" }}></span>
            </div>
            <div className="dash-grid">
              <span>Leads</span>
              <span>SEO</span>
              <span>Mobile</span>
              <span>Performance</span>
            </div>
          </div>

          <div className="solution-list">
            <article>
              <span>01</span>
              <h3>Diagnóstico estratégico</h3>
              <p>Entendemos sua oferta, público e diferenciais antes de desenhar qualquer tela.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Design e narrativa</h3>
              <p>Transformamos o que sua empresa faz em uma experiência visual clara e memorável.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Publicação e evolução</h3>
              <p>Entregamos a base pronta para operar, medir, ajustar e crescer conforme a demanda.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonial-section section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">Confiança para decidir</p>
          <h2>Empresas procuram clareza. A LN Digital entrega estrutura.</h2>
        </div>

        <div className="marquee" aria-label="Depoimentos">
          <div className="marquee-track">
            <article className="quote-card">
              <p>A LN Digital transformou nossa apresentação digital em algo muito mais profissional e fácil de entender.</p>
              <strong>Marina Costa</strong>
              <span>Diretora Comercial</span>
            </article>
            <article className="quote-card">
              <p>O projeto trouxe clareza para nossa oferta e melhorou a percepção da marca nas primeiras conversas.</p>
              <strong>Rafael Lima</strong>
              <span>Founder</span>
            </article>
            <article className="quote-card">
              <p>Finalmente temos uma presença online compatível com a qualidade do serviço que entregamos.</p>
              <strong>Bianca Torres</strong>
              <span>Operacoes</span>
            </article>
            <article className="quote-card">
              <p>A LN Digital transformou nossa apresentação digital em algo muito mais profissional e fácil de entender.</p>
              <strong>Marina Costa</strong>
              <span>Diretora Comercial</span>
            </article>
            <article className="quote-card">
              <p>O projeto trouxe clareza para nossa oferta e melhorou a percepção da marca nas primeiras conversas.</p>
              <strong>Rafael Lima</strong>
              <span>Founder</span>
            </article>
          </div>
        </div>
      </section>

      <section className="results-section section-pad">
        <div className="section-heading split-heading">
          <p className="eyebrow">Resultados mensuraveis</p>
          <h2>Mais presença, mais confiança, mais oportunidades.</h2>
          <p>
            A página certa não é apenas bonita. Ela organiza percepção, reduz dúvidas e cria um caminho simples para o
            cliente chamar sua empresa.
          </p>
        </div>
        <div className="metrics-grid">
          <article><strong>3x</strong><span>Mais clareza na apresentação</span></article>
          <article><strong>24h</strong><span>Para estruturar uma proposta inicial</span></article>
          <article><strong>100%</strong><span>Responsivo para desktop e mobile</span></article>
          <article><strong>Conversão</strong><span>Base preparada para busca orgânica</span></article>
        </div>
      </section>

      <section className="pricing-section section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">Planos de entrada</p>
          <h2>Escolha o ponto de partida ideal.</h2>
          <p>Pacotes pensados para empresas que querem iniciar com qualidade e evoluir sem complicação.</p>
        </div>

        <div className="billing-toggle" aria-label="Periodo">
          <button>Projeto</button>
        </div>

        <div className="pricing-grid">
          <article className="price-card">
            <h3>Essencial</h3>
            <p>Para empresas que precisam organizar a presença digital com velocidade.</p>
            <strong>R$ 1.000</strong>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Solicitar
            </a>
            <ul>
              <li>Landing page responsiva</li>
              <li>Copy inicial e estrutura</li>
              <li>Botão WhatsApp e formulário</li>
              <li>Publicação assistida</li>
            </ul>
          </article>
          <article className="price-card featured">
            <h3>Business</h3>
            <p>Para quem quer uma presença mais completa, animada e preparada para converter.</p>
            <strong>R$ 1.500</strong>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Começar agora
            </a>
            <ul>
              <li>Landing premium animada</li>
              <li>Seções de prova e beneficios</li>
              <li>Mais integrações(Google Maps e Calendly)</li>
              <li>Suporte pos-entrega durante 1 mês</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="blog-section section-pad">
        <div className="section-heading split-heading">
          <p className="eyebrow">Insights para crescer</p>
          <h2>Ideias para empresas que querem se posicionar melhor.</h2>
          <p>Conteúdos curtos para ajudar decisões sobre presença digital, autoridade e conversão.</p>
        </div>

        <div className="blog-grid">
          <article>
            <span>Design</span>
            <h3>Como uma primeira impressão digital muda uma negociação</h3>
            <p>Entenda por que clareza visual e mensagem objetiva reduzem atrito antes da venda.</p>
          </article>
          <article>
            <span>Estratégia</span>
            <h3>O que sua empresa precisa comunicar antes do preço</h3>
            <p>Antes de falar em valor, sua presença precisa explicar confiança, especialidade e resultado.</p>
          </article>
          <article>
            <span>Crescimento</span>
            <h3>Como transformar visitas em conversas qualificadas</h3>
            <p>Pequenos ajustes de narrativa, CTA e fluxo podem melhorar a qualidade dos contatos recebidos.</p>
          </article>
        </div>
      </section>

      <section className="final-cta section-pad" id="contato">
        <div>
          <p className="eyebrow">Pronto para evoluir?</p>
          <h2>Construa uma presença digital que trabalha pela sua empresa.</h2>
          <p>Vamos estruturar uma experiência clara, moderna e confiável para sua próxima fase.</p>
        </div>
        <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
          Falar com a LN Digital
        </a>
      </section>

      <footer className="footer">
        <a className="brand" href="#">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <path d="M48 22c-4-7-14-10-23-5-8 4-13 12-11 20 2 7 9 11 17 9h8c4 0 7 2 7 5 0 4-4 6-8 5-4 0-7-2-8-6" />
              <path d="M27 35c7 4 15 0 20-8l8-3" />
              <path d="M20 42c-7 5-14 0-12-7 1-5 7-7 11-4" />
              <path d="M28 46l-4 7M42 44l4 7" />
              <circle cx="45" cy="21" r="2" />
            </svg>
          </span>
          <span>LN Digital</span>
        </a>
        <nav>
          <a href="#sobre">Home</a>
          <a href="#solucoes">Soluções</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
