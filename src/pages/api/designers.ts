import { NextApiRequest, NextApiResponse } from "next";

type Designer = {
  id: string;
  name: string;
  style: string;
  bio: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Designer[]>) {
  const designers: Designer[] = [
    {
      id: "1",
      name: "Vincent van Gogh",
      style: "Pós-impressionismo",
      bio: "Pintor holandês, famoso por obras como 'A Noite Estrelada' e 'Girassóis'.",
    },
    {
      id: "2",
      name: "Pablo Picasso",
      style: "Cubismo",
      bio: "Artista espanhol, um dos fundadores do cubismo, autor de 'Guernica'.",
    },
    {
      id: "3",
      name: "Claude Monet",
      style: "Impressionismo",
      bio: "Pintor francês, célebre pelas séries de 'Nenúfares'.",
    },
    {
      id: "4",
      name: "Frida Kahlo",
      style: "Surrealismo / Realismo",
      bio: "Artista mexicana conhecida por autorretratos carregados de simbolismo pessoal.",
    }
  ];

  res.status(200).json(designers);
}
