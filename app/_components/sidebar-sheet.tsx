import React from "react"
import { Avatar, AvatarImage } from "./ui/avatar"
import { HomeIcon, CalendarIcon, LogOutIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { quickSearchOptions } from "../_constants/quick-search"
import { Button } from "./ui/button"
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"

export const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://i.postimg.cc/nVP3QB9x/Captura-de-tela-2024-09-01-225845.png" />
        </Avatar>
        <div>
          <p className="font-bold">Felipe Rocha</p>
          <p className="text-xs">feliperocha@fullstackclub.io</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant={"ghost"} asChild>
            <Link href={"/"}>
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant={"ghost"}>
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button key={option.title} className="justify-start gap-2" variant={"ghost"}>
            <Image src={option.imageUrl} alt={option.title} width={18} height={18} />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="ру-5 flex flex-col gap-2">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}
