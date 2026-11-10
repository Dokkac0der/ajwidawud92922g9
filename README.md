# Gemini Pro — Site de Vendas (Oferta de 18 Meses)

Landing page comercial completa, moderna, responsiva e de alta conversão, desenvolvida especificamente para a divulgação da oferta de acesso ao Gemini Pro (18 meses), com 5 TB de armazenamento no Google Drive, 1000 créditos de IA mensais, NotebookLM e Veo 3.

---

## 🚀 Como Configurar e Publicar

### 1. Central de Configuração Rápida (`script.js`)
Abra o arquivo `script.js` e personalize as variáveis no topo do arquivo:

```javascript
const CONFIG = {
  // 1. INSIRA AQUI O LINK EXATO DO SEU CHECKOUT NA CAKTO:
  CAKTO_CHECKOUT_URL: "https://cakto.com.br/checkout/seu-link-aqui",

  // 2. WHATSAPP DE SUPORTE (DDI 55 + DDD + Número):
  SUPPORT_WHATSAPP_URL: "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas...",

  // 3. E-MAIL DE SUPORTE:
  SUPPORT_EMAIL: "seu-email@dominio.com",

  // 4. NOME / IDENTIFICAÇÃO DO VENDEDOR INDEPENDENTE:
  SELLER_NAME: "Sua Empresa ou Nome Comercial"
};
```

> **Nota:** Todos os botões do site (`data-cakto-checkout`) são sincronizados automaticamente com a variável `CAKTO_CHECKOUT_URL`.

---

## 📁 Estrutura de Arquivos

```text
gemini-pro-landing-page/
├── index.html       # Estrutura semântica HTML5 com SEO e acessibilidade
├── styles.css       # Design System completo (Paleta Google, Glassmorphism, Responsividade)
├── script.js        # Lógica de checkout, FAQ accordion, modais, scroll reveal e mockup interativo
└── README.md        # Documentação e instruções de implantação
```

---

## 🎨 Identidade Visual e Características

- **Paleta de cores inspirada no ecossistema Google:**
  - Branco: `#FFFFFF`
  - Preto: `#171717`
  - Cinza Claro: `#F5F5F7`
  - Azul: `#4285F4`
  - Vermelho: `#EA4335`
  - Amarelo: `#FBBC05`
  - Verde: `#34A853`
- **Tipografia:** Plus Jakarta Sans (Google Fonts), limpa, moderna e altamente legível.
- **Destaque do Preço:** R$ 39,90 com tipografia destacada e botão CTA com sombra e efeito hover.
- **Design Responsivo:** Adaptável a smartphones, tablets, notebooks e monitores ultrawide.
- **Segurança & Transparência:**
  - Alerta enfático: *Nunca solicitamos a senha da sua conta Google*.
  - Modais integrados para Termos de Compra, Política de Privacidade e Política de Reembolso.
  - Disclaimer legal obrigatório sobre marcas registradas da Google LLC e identificação de vendedor independente.

---

## 🌐 Como Testar Localmente

1. Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
2. Para testar com um servidor local (opcional):
   - Via Python: `python -m http.server 8080`
   - Via VS Code: Extensão "Live Server"
   - Via Node.js: `npx serve .`

---

## 🔒 Boas Práticas e Compliance
- **Checkout Seguro:** Nenhum pagamento acontece dentro do código fonte — o usuário é direcionado para a página oficial da Cakto.
- **Sem Falsos Depoimentos:** A página não utiliza avaliações fakes ou números inflados, focando em segurança, transparência e clareza do serviço.
