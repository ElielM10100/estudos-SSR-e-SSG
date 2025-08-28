import { useRouter } from "next/router";
import Link from "next/link";

type ArtistId = "1" | "2" | "3";

const artists: Record<ArtistId, { name: string; bio: string }> = {
  "1": {
    name: "Vincent van Gogh",
    bio: "Van Gogh nasceu em 1853 na Holanda. Produziu mais de 2.000 obras em apenas 10 anos, incluindo 'Noite Estrelada'.",
  },
  "2": {
    name: "Claude Monet",
    bio: "Monet nasceu em 1840 na França. Seu quadro 'Impressão, nascer do sol' deu origem ao termo impressionismo.",
  },
  "3": {
    name: "Leonardo da Vinci",
    bio: "Leonardo (1452-1519) foi pintor, inventor e cientista. Estudou anatomia, engenharia e astronomia além da pintura.",
  },
};

export default function ArtistPage() {
  const router = useRouter();
  const { id } = router.query;

  // Pega o primeiro valor se id for array
  const artistId = Array.isArray(id) ? id[0] : id;

  // Verifica se id é válido e existe no objeto
  if (!artistId || !(artistId in artists)) {
    return <p className="p-6">Artista não encontrado.</p>;
  }

  const artist = artists[artistId as ArtistId];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link href="/posts" className="text-purple-600 hover:underline">
        ← Voltar
      </Link>
      <h1 className="text-4xl font-bold mt-6">{artist.name}</h1>
      <p className="mt-4 text-lg text-gray-700">{artist.bio}</p>
    </div>
  );
}
