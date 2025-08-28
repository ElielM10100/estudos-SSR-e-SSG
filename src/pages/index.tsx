import { motion } from "framer-motion";
import Link from "next/link";

const artists = [
  {
    id: 1,
    name: "Vincent van Gogh",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_-_Google_Art_Project.jpg",
    style: "Pós-impressionismo",
    description: "Van Gogh foi um dos maiores nomes da pintura ocidental, conhecido por seu uso expressivo de cores e pinceladas intensas."
  },
  {
    id: 2,
    name: "Claude Monet",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Claude_Monet_1899_Nadar_crop.jpg",
    style: "Impressionismo",
    description: "Fundador do impressionismo, Monet revolucionou a pintura ao retratar a luz e as cores em constante mudança."
  },
  {
    id: 3,
    name: "Leonardo da Vinci",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
    style: "Renascimento",
    description: "Pintor, cientista e inventor. Um dos maiores gênios da história, autor da Mona Lisa e A Última Ceia."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
        <h1 className="text-2xl font-bold text-purple-600">🎨 Mini Blog de Arte</h1>
      </nav>

      {/* Conteúdo */}
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Artistas em Destaque</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={artist.image} alt={artist.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{artist.name}</h3>
                <p className="text-sm text-purple-600 font-medium">{artist.style}</p>
                <p className="mt-3 text-gray-600 line-clamp-3">{artist.description}</p>
                <Link href={`/artists/${artist.id}`}>
                  <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
                    Ler mais
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
