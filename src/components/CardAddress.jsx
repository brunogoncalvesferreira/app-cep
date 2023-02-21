export function CardAddress({ cep, rua, cidade, bairro, uf, ddd }) {
  return (
    <div
      className={
        "mx-auto mt-6 w-90% max-w-xl flex-1 rounded-lg bg-gray-900 p-4 text-gray-100"
      }
    >
      <p className={"border-b border-gray-100 pb-4 "}>Cep: {cep}</p>
      <p className={"mt-4 border-b border-gray-100 pb-4"}>Rua: {rua}</p>
      <p className={"mt-4 border-b border-gray-100 pb-4"}>Cidade: {cidade}</p>
      <p className={"mt-4 border-b border-gray-100 pb-4"}>Bairro: {bairro}</p>
      <p className={"mt-4 border-b border-gray-100 pb-4"}>UF: {uf}</p>
      <p className={"mt-4"}>DDD: {ddd}</p>
    </div>
  )
}
