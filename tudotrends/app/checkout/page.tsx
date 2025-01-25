import Cart from "../components/Cart"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações de Envio</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input type="text" id="nome" name="nome" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input type="text" id="cidade" name="cidade" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                CEP
              </label>
              <input type="text" id="cep" name="cep" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Confirmar Pedido
            </button>
          </form>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  )
}

