import Layout from "./components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sobre o Blog</h2>
        <p className="text-gray-700 mb-4">
          Este mini-blog é um projeto educacional para demonstrar:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Como criar API interna no Next.js</li>
          <li>SSG (getStaticProps), rotas dinâmicas (getStaticPaths)</li>
          <li>SSR (getServerSideProps) — se necessário</li>
          <li>Estilização com Tailwind CSS</li>
        </ul>
      </div>
    </Layout>
  );
}
