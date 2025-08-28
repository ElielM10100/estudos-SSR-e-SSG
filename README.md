# estudos-SSR-e-SSG



```markdown
# 🎨 Mini Blog de Artistas

Um projeto simples criado com **Next.js**, **React** e **Tailwind CSS**, que permite explorar conceitos de rotas dinâmicas, renderização de páginas e navegação entre páginas.

---

## 🚀 Tecnologias

- **Next.js** - Framework React para SSR (Server Side Rendering) e rotas dinâmicas
- **React** - Biblioteca de UI
- **Tailwind CSS** - Framework CSS utilitário para estilos rápidos e responsivos

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
git clone https://github.com/seu-usuario/mini-blog.git
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

## 📌 Funcionalidades

* **Página Inicial:** Lista todos os artistas com botão **"Ler mais"**
* **Página de Detalhes:** Cada artista possui uma página própria com informações
* **Rotas Dinâmicas:** URL como `/posts/1`, `/posts/2`, `/posts/3`
* **Estilos Responsivos:** Layout limpo e responsivo usando Tailwind CSS
* **Navegação:** Links de retorno usando `next/link`

---

## ⚠️ Problemas comuns

### 1️⃣ Página 404 ao clicar em "Ler mais"

Se você clicar em **Ler mais** e aparecer:

```
404 - This page could not be found.
```

**Motivo:**
Isso geralmente acontece quando o Next.js ainda não reconheceu as rotas dinâmicas após mudanças no código ou cache do build. No seu caso, o código está correto, mas o Fast Refresh do Next.js pode não atualizar imediatamente.

**Soluções:**

1. Acesse diretamente a URL da página do artista:

```
http://localhost:3000/posts/1
```

2. Limpe o cache do Next.js e reinicie o servidor:

```bash
rm -rf .next   # No Linux / Mac
# No Windows PowerShell:
Remove-Item -Recurse -Force .next
npm run dev
```

3. Certifique-se de que todos os arquivos `.tsx` estão dentro da pasta `pages/posts/` corretamente:

* `index.tsx` → lista de artistas
* `[id].tsx` → página dinâmica

---

### 2️⃣ Tipos do TypeScript (ex.: erros 7053, 2352)

* Esses erros aparecem porque **o TypeScript não sabe que a chave do objeto `artists` é uma string** e você está usando o valor de `router.query.id` (que também é string) como índice.
* Solução que usamos: declarar o objeto `artists` com **chaves de string**:

```ts
const artists = {
  "1": { name: "Vincent van Gogh", bio: "..." },
  "2": { name: "Claude Monet", bio: "..." },
  "3": { name: "Leonardo da Vinci", bio: "..." },
};
```

E converter `id` do router assim:

```ts
const artistId = Array.isArray(id) ? id[0] : id;

if (!artistId || !artists[artistId]) {
  return <p>Artista não encontrado.</p>;
}

const artist = artists[artistId];
```

Isso elimina os erros de tipo e garante que a página funcione corretamente.

---

## 📝 Próximos passos / melhorias

* Integrar com uma API real de artistas
* Adicionar imagens de cada artista
* Implementar busca e filtros
* Melhorar animações e interatividade com Tailwind + Framer Motion
* Tornar o layout mais chamativo, tipo blog ou portfólio

---

## 👨‍💻 Autor

Feito por **Eliel Nicolas** como estudo de **Next.js, React e Tailwind CSS**, aplicando boas práticas de rotas, tipagem e responsividade.

---

## 🔗 Links úteis

* [Documentação Next.js](https://nextjs.org/docs)
* [Documentação React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Fast Refresh Next.js](https://nextjs.org/docs/messages/fast-refresh-reload)

```


