import Image from "next/image"
import Link from "next/link"

// Simular dados de produtos (substitua por dados reais de uma API ou banco de dados)
const produtos = [
  {
    id: 1,
    nome: "Smartwatch XYZ",
    preco: 299.99,
    imagem: "/produto1.jpg",
    descricao:
      "O melhor companheiro para seu dia a dia. Este smartwatch oferece monitoramento de atividades, notificações e muito mais.",
  },
  {
    id: 2,
    nome: "Fone de Ouvido ABC",
    preco: 199.99,
    imagem: "/produto2.jpg",
    descricao:
      "Som imersivo e conforto excepcional. Estes fones de ouvido oferecem cancelamento de ruído e qualidade de áudio premium.",
  },
  {
    id: 3,
    nome: "Mochila Inteligente",
    preco: 249.99,
    imagem: "/produto3.jpg",
    descricao:
      "Praticidade e estilo para seu dia a dia. Esta mochila inteligente possui compartimentos organizados e porta USB integrada.",
  },
]

export default function ProdutoPage({ params }: { params: { id: string } }) {
  const produto = produtos.find((p) => p.id === Number.parseInt(params.id))

  if (!produto) {
    return <div>Produto não encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={produto.imagem || "/placeholder.svg"}
            alt={produto.nome}
            width={600}
            height={400}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>
          <p className="text-xl font-semibold mb-4">R$ {produto.preco.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{produto.descricao}</p>
          <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

