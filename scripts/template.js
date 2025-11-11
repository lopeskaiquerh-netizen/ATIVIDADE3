export const templates = {
  home: () => `
    <section class="section">
      <h2>Bem-vindo à Cena Rock Underground</h2>
      <p>Explore bandas, projetos e artistas independentes do Brasil.</p>
    </section>
  `,
  artistas: () => `
    <section class="section">
      <h2>Artistas em Destaque</h2>
      <ul>
        <li>Lupe de Lupe</li>
        <li>Vitor Brauer</li>
        <li>Hierofante Púrpura</li>
      </ul>
    </section>
  `,
  projetos: () => `
    <section class="section">
      <h2>Projetos Independentes</h2>
      <p>Coletivos, zines e eventos da cena underground.</p>
    </section>
  `,
  contato: () => `
    <section class="section">
      <h2>Contato</h2>
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
