import { Card, CardContent } from "./ui/card"

export const Footer = () => (
  <footer>
    <Card className="rounded-none">
      <CardContent className="px-5 py-6">
        <p className="text-xs leading-3 text-gray-500">
          &copy; 2024 Copyright <span className="font-semibold">FSW Barber</span>
        </p>
      </CardContent>
    </Card>
  </footer>
)
