import { MagnifyingGlass } from "phosphor-react"
import { Header } from "./components/Header"
import { CardAddress } from "./components/CardAddress"
import { Footer } from "./components/Footer"
import { useState } from "react"
import { CardInfo } from "./components/CardInfo"

export function App() {
  const [saveTypedZipCode, setSaveTypedZipCode] = useState("")
  const [receivedDataFromApiZip, setReceivedDataFromApiZip] = useState([])

  function avoidSendingTheForm(e) {
    e.preventDefault()
  }

  function handleGetDataFromApiZip() {
    if (saveTypedZipCode.length > 8 && saveTypedZipCode.length < 8) {
      alert("Cep deve conter 8 dígitos.")
      setSaveTypedZipCode("")
    } else if (saveTypedZipCode === "") {
      alert("Cep não pode ser vazio")
      setSaveTypedZipCode("")
    }

    async function fetchData() {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${saveTypedZipCode}/json/`
        )
        const data = await response.json()
        const dataZipCode = {
          cep: data.cep,
          logradouro: data.logradouro,
          localidade: data.localidade,
          bairro: data.bairro,
          uf: data.uf,
          ddd: data.ddd,
        }
        setReceivedDataFromApiZip([dataZipCode])
        setSaveTypedZipCode("")
      } catch (err) {
        alert("CEP não ENCONTRADO!")
        setSaveTypedZipCode("")
      }
    }
    fetchData()
  }

  return (
    <div className={"flex h-screen flex-col"}>
      <Header />
      <form
        onSubmit={avoidSendingTheForm}
        action=""
        className={
          "mx-auto -mt-6 flex w-90% max-w-xl  items-center justify-center"
        }
      >
        <input
          onChange={(e) => setSaveTypedZipCode(e.target.value)}
          value={saveTypedZipCode}
          type="text"
          placeholder="Digite algum Cep"
          className={
            " h-10 w-full rounded-l-lg bg-gray-600 p-4 text-gray-100 outline-none"
          }
        />
        <button
          onClick={handleGetDataFromApiZip}
          className={
            "flex h-10 w-32 items-center justify-center gap-2 rounded-r-lg bg-green-500 font-bold text-gray-100 hover:bg-green-600 "
          }
          type="submit"
        >
          <MagnifyingGlass size={20} color="#fff" /> Buscar
        </button>
      </form>

      {receivedDataFromApiZip.length === 0 && <CardInfo />}

      {receivedDataFromApiZip.map((data) => (
        <CardAddress
          cep={data.cep}
          rua={data.logradouro}
          cidade={data.localidade}
          bairro={data.bairro}
          uf={data.uf}
          ddd={data.ddd}
          key={data.cep}
        />
      ))}
      <Footer />
    </div>
  )
}
