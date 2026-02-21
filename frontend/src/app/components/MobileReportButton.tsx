import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function MobileReportButton() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 z-[2500] h-14 w-14 rounded-full shadow-lg"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-auto">
          <SheetHeader>
            <SheetTitle>Enviar Relato</SheetTitle>
            <SheetDescription>
              Contribua com informações sobre o sistema de transporte
            </SheetDescription>
          </SheetHeader>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <span className="text-2xl">🚇</span>
              <span className="text-sm">Reportar lotação</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <span className="text-2xl">⚠️</span>
              <span className="text-sm">Reportar problema</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
