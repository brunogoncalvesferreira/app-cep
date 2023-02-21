import { MapPin } from "phosphor-react"

export function Header() {
  return (
    <header
      className={
        "flex items-center justify-center gap-2 bg-gray-900 p-20 max-sm:flex-col"
      }
    >
      <MapPin size={24} color="#fff" />
      <h1 className={"text-2xl font-medium text-gray-100"}>Find and Address</h1>
    </header>
  )
}
