import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { LineDetailsPanel } from "./LineDetailsPanel";
import { MobileReportButton } from "./MobileReportButton";
import { metroLines, MetroLine } from "../data/linesData";
import MapView from "./MapView";

export function MapScreen() {
  const [selectedLine, setSelectedLine] = useState<MetroLine | null>(null);
  
  // Handler para quando uma linha é clicada no mapa
  const handleLineClick = (lineNumber: string) => {
    const line = metroLines.find(l => l.lineNumber === lineNumber);
    if (line) {
      setSelectedLine(line);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex items-center justify-between z-[2000] relative">
        <Link to="/" className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
        </Link>
        <div className="flex items-center">
          <img src="/Logo 1.png" alt="Logo" className="h-8 sm:h-10" />
        </div>
        <div className="w-16 sm:w-24" />
      </header>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Map Container */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Report Button */}
          <MobileReportButton />

          {/* Real Map with Metro Lines */}
          <MapView 
            onLineClick={handleLineClick}
            selectedLine={selectedLine?.lineNumber}
          />
        </div>

        {/* Line Details Panel */}
        {selectedLine && (
          <LineDetailsPanel
            line={selectedLine}
            onClose={() => setSelectedLine(null)}
          />
        )}
      </div>
    </div>
  );
}