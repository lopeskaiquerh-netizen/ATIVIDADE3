export const templates = {
  home: () => `
    <section class="section">
      <div class="hero">
        <h2>Rock Underground Brasileiro</h2>
        <p>Uma celebração da música independente, experimental e crua. Aqui exploramos bandas como <strong>Lupe de Lupe</strong> e <strong>Vitor Brauer</strong>, que desafiam a indústria e fazem arte pelo instinto.</p>
        <a href="#artistas" class="btn">Ver Artistas</a>
      </div>
    </section>
  `,

  artistas: () => `
    <section class="section">
      <h2>Artistas em Destaque</h2>
      <div class="artists-grid">
        <article class="card">
          <img src="https://i.imgur.com/ZmE6Ayb.jpeg" alt="Lupe de Lupe" />
          <div class="card-body">
            <h3>Lupe de Lupe</h3>
            <p>Banda mineira conhecida pelo som distorcido, letras intensas e energia autêntica do cenário underground.</p>
            <ul>
              <li>Gênero: Indie / Post-rock / Noise</li>
              <li>Origem: Belo Horizonte - MG</li>
              <li>Atividade: 2011 - atualmente</li>
            </ul>
          </div>
        </article>

        <article class="card">
          <img src="https://i.imgur.com/YDp5cAY.jpeg" alt="Vitor Brauer" />
          <div class="card-body">
            <h3>Vitor Brauer</h3>
            <p>Figura multifacetada da cena independente brasileira, conhecido por unir arte, performance e ironia em sua obra.</p>
            <ul>
              <li>Gênero: Rock alternativo / Experimental</li>
              <li>Projetos: Lupe de Lupe, Xóõ, Desgraça</li>
              <li>Atividade: 2010 - atualmente</li>
            </ul>
          </div>
        </article>

        <article class="card">
          <img src="https://i.imgur.com/yr1gAao.jpeg" alt="Coletivo DIY" />
          <div class="card-body">
            <h3>Coletivos DIY</h3>
            <p>Movimentos autônomos e independentes que produzem shows, zines e arte colaborativa fora das grandes mídias.</p>
            <ul>
              <li>Exemplo: Coletivo Geração Perdida de Minas Gerais</li>
              <li>Valores: Autonomia, Colaboração, Resistência</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  `,

  projetos: () => `
    <section class="section">
      <h2>Projetos Independentes</h2>
      <div class="projects-grid">
        <div class="card">
          <h3>📻 Podcast "Sob o Amplificador"</h3>
          <p>Conversas com músicos e produtores da cena alternativa, discutindo o papel da arte fora do mainstream.</p>
        </div>

        <div class="card">
          <h3>📼 Documentário "A Cidade Somos Nós"</h3>
          <p>Produção colaborativa sobre as ruas, bandas e histórias por trás da cultura underground mineira.</p>
        </div>

        <div class="card">
          <h3>📰 Fanzine Digital</h3>
          <p>Publicação independente com ensaios e entrevistas sobre contracultura, política e música experimental.</p>
        </div>
      </div>
    </section>
  `,

  contato: () => `
    <section class="section">
      <h2>Contato</h2>
      <p>Quer colaborar, enviar material ou agendar uma entrevista? Preencha o formulário abaixo.</p>
      <form id="contactForm" novalidate>
        <div class="form-row">
          <label for="name">Nome</label>
          <input id="name" required minlength="2">
          <small class="form-error"></small>
        </div>
        <div class="form-row">
          <label for="email">E-mail</label>
          <input id="email" type="email" required>
          <small class="form-error"></small>
        </div>
        <div class="form-row">
          <label for="message">Mensagem</label>
          <textarea id="message" rows="4" required></textarea>
          <small class="form-error"></small>
        </div>
        <button class="btn" type="submit">Enviar</button>
      </form>
    </section>
  `
};
