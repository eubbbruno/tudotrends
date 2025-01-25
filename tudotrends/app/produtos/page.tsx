export default function ContaPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Minha Conta</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Informações Pessoais</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="João Silva"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="joao.silva@example.com"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
              >
                Atualizar Informações
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Histórico de Pedidos</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold">Pedido #1234</h3>
                <p className="text-gray-600">Data: 01/05/2023</p>
                <p className="text-gray-600">Total: R$ 299,99</p>
                <p className="text-gray-600">Status: Entregue</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold">Pedido #1235</h3>
                <p className="text-gray-600">Data: 15/05/2023</p>
                <p className="text-gray-600">Total: R$ 199,99</p>
                <p className="text-gray-600">Status: Em trânsito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  