"use client"
import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = async (phone: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(phone)
      } else {
        fallbackCopyTextToClipboard(phone)
      }
      toast.success("Telefone copiado com sucesso!", { duration: 2000 })
    } catch (err) {
      console.error("Erro ao copiar o número:", err)
      fallbackCopyTextToClipboard(phone)
    }
  }

  // Método de fallback caso navigator.clipboard não esteja disponível
  const fallbackCopyTextToClipboard = (phone: string) => {
    const textArea = document.createElement("textarea")
    textArea.value = phone
    textArea.style.position = "fixed" // Evitar que o textarea seja rolado
    textArea.style.opacity = "0"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      document.execCommand("copy")
    } catch (err) {
      console.error("Fallback: Erro ao copiar o número:", err)
    }

    document.body.removeChild(textArea)
  }

  return (
    <div key={phone} className="flex justify-between">
      {/* Esquerda */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* Direita */}
      <Button variant={"outline"} size={"sm"} onClick={() => handleCopyPhoneClick(phone)}>
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
