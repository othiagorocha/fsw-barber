import React from "react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany()

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

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com a FSW Barber "
            src={"/banner-01.png"}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamento */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Agendamento</h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-violet-950 text-violet-400">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5 text-sm">
              <p>Agosto</p>
              <p className="text-2xl">12</p>
              <p>20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
        {/* <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden"> */}
        <div className="flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
