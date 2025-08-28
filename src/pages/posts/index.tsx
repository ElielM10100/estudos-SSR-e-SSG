import Link from "next/link";

const artists = {
  1: { name: "Vincent van Gogh" },
  2: { name: "Claude Monet" },
  3: { name: "Leonardo da Vinci" },
};

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Artistas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(artists).map(([id, artist]) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{artist.name}</h2>
            <Link
              href={`/posts/${id}`}
              className="text-purple-600 mt-4 inline-block hover:underline"
            >
              Ler mais →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
