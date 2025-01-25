import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Banner principal */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Onde inovação encontra conveniência</h1>
          <p className="text-xl mb-8">Descubra as últimas tendências em gadgets, moda e itens para casa.</p>
          <Link
            href="/produtos"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Ver Produtos
          </Link>
        </div>
      </section>

      {/* Destaques de produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/produto1.jpg"
                alt="Produto 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Smartwatch XYZ</h3>
                <p className="text-gray-600 mb-4">O melhor companheiro para seu dia a dia.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">R$ 299,99</span>
                  <Link
                    href="/produto/1"
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
            {/* Produto 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/produto2.jpg"
                alt="Produto 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Fone de Ouvido ABC</h3>
                <p className="text-gray-600 mb-4">Som imersivo e conforto excepcional.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">R$ 199,99</span>
                  <Link
                    href="/produto/2"
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
            {/* Produto 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/produto3.jpg"
                alt="Produto 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Mochila Inteligente</h3>
                <p className="text-gray-600 mb-4">Praticidade e estilo para seu dia a dia.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">R$ 249,99</span>
                  <Link
                    href="/produto/3"
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Produtos de excelente qualidade e entrega rápida. Recomendo!"</p>
              <p className="font-semibold">- Maria S.</p>
            </div>
            {/* Depoimento 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Atendimento ao cliente excepcional. Resolveram meu problema rapidamente."
              </p>
              <p className="font-semibold">- João P.</p>
            </div>
            {/* Depoimento 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Ótima variedade de produtos. Sempre encontro o que preciso aqui."</p>
              <p className="font-semibold">- Ana R.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

