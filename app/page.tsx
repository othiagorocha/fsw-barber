import React from "react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/quick-search"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany()
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-semibold">Olá, Thiago</h2>
        <p className="text-sm">Domingo, 11 de Agosto</p>

        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        {/* Busca rápida */}
        <div className="mt-6 flex w-full gap-3 overflow-x-auto [scrollbar-width:none]">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant={"secondary"}>
              <Image src={option.imageUrl} width={16} height={16} alt={option.title} />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Imagem */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com a FSW Barber "
            src={"/banner-01.png"}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamento */}
        <BookingItem />

        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
        <div className="flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Populares */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Populares</h2>
        <div className="flex gap-4 overflow-auto">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card className="rounded-none">
          <CardContent className="px-5 py-6">
            <p className="text-xs leading-3 text-gray-500">
              &copy; 2024 Copyright <span className="font-semibold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
