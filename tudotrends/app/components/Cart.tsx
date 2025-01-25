"use client"

import { useState } from "react"
import Link from "next/link"

interface CartItem {
  id: number
  nome: string
  preco: number
  quantidade: number
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i))
      }
      return [...prevItems, { ...item, quantidade: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.nome}</h3>
                <p className="text-gray-600">
                  R$ {item.preco.toFixed(2)} x {item.quantidade}
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                Remover
              </button>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <p className="font-semibold text-xl">Total: R$ {total.toFixed(2)}</p>
          </div>
          <Link
            href="/checkout"
            className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-dark transition-colors"
          >
            Finalizar Compra
          </Link>
        </>
      )}
    </div>
  )
}

