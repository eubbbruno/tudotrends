import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Sobre TudoTrends</h3>
            <p className="text-sm text-gray-600">
              Onde inovação encontra conveniência. Descubra as últimas tendências em gadgets, moda e itens para casa.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-sm text-gray-600 hover:text-primary">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-gray-600 hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-gray-600 hover:text-primary">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-sm text-gray-600 hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: contato@tudotrends.com</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-2">Fique por dentro das novidades e promoções!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 text-sm rounded-r-md hover:bg-primary-dark transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; 2023 TudoTrends. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

