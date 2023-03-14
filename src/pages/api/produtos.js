// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 1000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: "Caneta", preco: 5.6 },
    { id: numeroAleatorio(), nome: "Caderno", preco: 15.6 },
    { id: numeroAleatorio(), nome: "Borracha", preco: 7.3 },
    { id: numeroAleatorio(), nome: "Tesoura", preco: 21.55 },
  ]);
}
