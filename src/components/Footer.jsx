import { Copyright } from "phosphor-react"

export function Footer() {
  return (
    <footer
      className={
        "mt-6 flex items-center justify-center gap-2 bg-gray-900 p-6 text-sm text-gray-50"
      }
    >
      <Copyright /> <p>Copyright | 2023 - Bruno Gonçalves</p>
    </footer>
  )
}
