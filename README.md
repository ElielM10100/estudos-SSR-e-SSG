
# 🎨 Mini Blog de Artistas

Um projeto simples criado com **Next.js**, **React** e **Tailwind CSS**, que permite explorar conceitos de rotas dinâmicas, renderização de páginas e navegação entre páginas.

O objetivo é praticar **SSR (Server-Side Rendering)**, **SSG (Static Site Generation)** e boas práticas de desenvolvimento front-end com Next.js e TypeScript.

---

## 🚀 Tecnologias

- **Next.js** - Framework React com suporte a SSR e SSG
- **React** - Biblioteca de UI
- **Tailwind CSS** - Framework CSS utilitário para estilos rápidos e responsivos
- **TypeScript** - Tipagem estática e segurança no desenvolvimento

---

## 📂 Estrutura do Projeto

```

mini-blog/
├── pages/
│   ├── index.tsx        # Página inicial (Home)
│   ├── posts/
│   │   ├── index.tsx    # Lista de artistas
│   │   └── \[id].tsx     # Página dinâmica de detalhes do artista
├── styles/              # Estilos globais
├── public/              # Imagens e arquivos estáticos
├── package.json
└── README.md

````

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/ElielM10100/estudos-SSR-e-SSG.git
````

2. Acesse a pasta do projeto:

```bash
cd mini-blog
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador:

```
http://localhost:3000
```

---

## 🖌️ Funcionalidades

1. **Página Inicial (Home)**

   * Lista todos os artistas cadastrados
   * Cada artista possui botão **"Ler mais"** que leva à página de detalhes

2. **Página de Detalhes do Artista**

   * URL dinâmica baseada no ID do artista (ex.: `/posts/1`)
   * Mostra nome e biografia do artista
   * Link de volta para a lista de artistas

3. **Rotas Dinâmicas**

   * Implementadas usando `[id].tsx` em `pages/posts/`
   * Permite criar uma página única para cada artista sem criar arquivos separados manualmente
   * Ideal para **SSR e SSG**, podendo ser renderizado no servidor ou gerado estaticamente

4. **Estilo Responsivo**

   * Layout limpo e responsivo com Tailwind CSS
   * Cards interativos com hover e transições suaves

---

## ⚡ Conceitos Importantes

### SSR (Server-Side Rendering)

* A página é renderizada no servidor a cada requisição
* Útil quando você precisa de dados dinâmicos ou SEO otimizado
* No Next.js, usado em `getServerSideProps`

### SSG (Static Site Generation)

* Páginas são geradas no momento do build
* Ideal para conteúdo que não muda com frequência
* No Next.js, usado em `getStaticProps` e `getStaticPaths`

### Rotas Dinâmicas

* `[id].tsx` cria páginas únicas para cada item do objeto/artista
* A URL é mapeada automaticamente para a página correta

---

## ⚠️ Problemas Comuns

### 1️⃣ Página 404 ao clicar em "Ler mais"

Se aparecer:

```
404 - This page could not be found
```

**Motivo:**
O Next.js pode não reconhecer rotas dinâmicas imediatamente devido ao **Fast Refresh ou cache de build**.

**Soluções:**

* Acesse diretamente a URL do artista:

```
http://localhost:3000/posts/1
```

* Limpe o cache do Next.js e reinicie o servidor:

```bash
# Linux / Mac
rm -rf .next

# Windows PowerShell
Remove-Item -Recurse -Force .next

npm run dev
```

* Verifique se os arquivos `.tsx` estão corretamente na pasta `pages/posts/`:

  * `index.tsx` → lista de artistas
  * `[id].tsx` → página dinâmica

---

### 2️⃣ Erros de Tipagem do TypeScript (7053, 2352)

**Motivo:**
O TypeScript não reconhece `router.query.id` como chave do objeto `artists`. Ele sempre vem como string (ou array de strings).

**Solução usada no projeto:**

```ts
const artists = {
  "1": { name: "Vincent van Gogh", bio: "..." },
  "2": { name: "Claude Monet", bio: "..." },
  "3": { name: "Leonardo da Vinci", bio: "..." },
};

const artistId = Array.isArray(id) ? id[0] : id;

if (!artistId || !artists[artistId]) {
  return <p>Artista não encontrado.</p>;
}

const artist = artists[artistId];
```

Isso garante que a página funcione corretamente sem erros de tipagem.

---

## 📝 Próximos Passos / Melhorias

* Integrar com uma API real de artistas
* Adicionar imagens de cada artista
* Implementar busca e filtros
* Melhorar animações e interatividade com Tailwind + Framer Motion
* Tornar o layout mais chamativo, tipo blog ou portfólio

---

## 👨‍💻 Autor

Feito por **Eliel Nicolas** como estudo de **Next.js, React e Tailwind CSS**, aplicando boas práticas de rotas, tipagem e responsividade.

---

## 🔗 Links Úteis

* [Documentação Next.js](https://nextjs.org/docs)
* [Documentação React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Fast Refresh Next.js](https://nextjs.org/docs/messages/fast-refresh-reload)


