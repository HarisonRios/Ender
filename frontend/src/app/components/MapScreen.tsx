import { useState } from "react";
import { Link } from "react-router";
import { Search, Activity, ChevronLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { LineDetailsPanel } from "./LineDetailsPanel";
import { MobileReportButton } from "./MobileReportButton";
import { metroLines, MetroLine } from "../data/linesData";

export function MapScreen() {
  const [selectedLine, setSelectedLine] = useState<MetroLine | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex items-center justify-between z-10">
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
        <div className="absolute inset-0">
          {/* Search Box - Top Left */}
          <div className="absolute top-4 left-4 z-20 w-80 max-w-[calc(100vw-2rem)]">
            <div className="bg-white rounded-lg shadow-lg p-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar linha ou estação"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          {/* Legend Card - Top Right */}
          <div className="absolute top-4 right-4 z-20 max-w-[calc(100vw-2rem)] hidden sm:block">
            <Card className="p-4 shadow-lg">
              <h3 className="font-semibold mb-3 text-sm">Legenda</h3>
              <div className="space-y-2">
                {metroLines.slice(0, 6).map((line) => (
                  <div key={line.id} className="flex items-center gap-2 text-sm">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: line.color }}
                    />
                    <span className="text-xs">{line.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Update Info - Bottom Right */}
          <div className="absolute bottom-4 right-4 z-20 hidden sm:block">
            <Card className="p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600">
                  Atualização em tempo real
                </span>
              </div>
            </Card>
          </div>

          {/* Mobile Report Button */}
          <MobileReportButton />

          {/* SVG Map */}
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full"
            style={{ background: "#f8fafc" }}
          >
            {/* Background grid pattern */}
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#grid)" />

            {/* City background shapes (simplified) */}
            <circle cx="600" cy="400" r="150" fill="#e0f2fe" opacity="0.3" />
            <circle cx="450" cy="350" r="100" fill="#dbeafe" opacity="0.3" />
            <circle cx="750" cy="450" r="120" fill="#e0e7ff" opacity="0.3" />

            {/* Metro Lines - Simplified representation */}
            
            {/* Linha 1 - Azul (Vertical) */}
            <g
              onMouseEnter={() => setHoveredLine("linha-1")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[0])}
              className="cursor-pointer"
            >
              <path
                d="M 500 200 L 500 600"
                stroke={metroLines[0].color}
                strokeWidth={hoveredLine === "linha-1" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-1" ? 1 : 0.9}
              />
              <circle cx="500" cy="250" r="6" fill="white" stroke={metroLines[0].color} strokeWidth="2" />
              <circle cx="500" cy="400" r="6" fill="white" stroke={metroLines[0].color} strokeWidth="2" />
              <circle cx="500" cy="550" r="6" fill="white" stroke={metroLines[0].color} strokeWidth="2" />
            </g>

            {/* Linha 2 - Verde (Diagonal) */}
            <g
              onMouseEnter={() => setHoveredLine("linha-2")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[1])}
              className="cursor-pointer"
            >
              <path
                d="M 300 300 L 700 500"
                stroke={metroLines[1].color}
                strokeWidth={hoveredLine === "linha-2" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-2" ? 1 : 0.9}
              />
              <circle cx="350" cy="325" r="6" fill="white" stroke={metroLines[1].color} strokeWidth="2" />
              <circle cx="500" cy="400" r="6" fill="white" stroke={metroLines[1].color} strokeWidth="2" />
              <circle cx="650" cy="475" r="6" fill="white" stroke={metroLines[1].color} strokeWidth="2" />
            </g>

            {/* Linha 3 - Vermelha (Horizontal) */}
            <g
              onMouseEnter={() => setHoveredLine("linha-3")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[2])}
              className="cursor-pointer"
            >
              <path
                d="M 200 400 L 900 400"
                stroke={metroLines[2].color}
                strokeWidth={hoveredLine === "linha-3" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-3" ? 1 : 0.9}
              />
              <circle cx="300" cy="400" r="6" fill="white" stroke={metroLines[2].color} strokeWidth="2" />
              <circle cx="500" cy="400" r="6" fill="white" stroke={metroLines[2].color} strokeWidth="2" />
              <circle cx="700" cy="400" r="6" fill="white" stroke={metroLines[2].color} strokeWidth="2" />
              <circle cx="850" cy="400" r="6" fill="white" stroke={metroLines[2].color} strokeWidth="2" />
            </g>

            {/* Linha 4 - Amarela */}
            <g
              onMouseEnter={() => setHoveredLine("linha-4")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[3])}
              className="cursor-pointer"
            >
              <path
                d="M 400 250 L 600 550"
                stroke={metroLines[3].color}
                strokeWidth={hoveredLine === "linha-4" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-4" ? 1 : 0.9}
              />
              <circle cx="450" cy="325" r="6" fill="white" stroke={metroLines[3].color} strokeWidth="2" />
              <circle cx="500" cy="400" r="6" fill="white" stroke={metroLines[3].color} strokeWidth="2" />
              <circle cx="550" cy="475" r="6" fill="white" stroke={metroLines[3].color} strokeWidth="2" />
            </g>

            {/* Linha 5 - Lilás */}
            <g
              onMouseEnter={() => setHoveredLine("linha-5")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[4])}
              className="cursor-pointer"
            >
              <path
                d="M 600 200 L 600 500"
                stroke={metroLines[4].color}
                strokeWidth={hoveredLine === "linha-5" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-5" ? 1 : 0.9}
              />
              <circle cx="600" cy="250" r="6" fill="white" stroke={metroLines[4].color} strokeWidth="2" />
              <circle cx="600" cy="350" r="6" fill="white" stroke={metroLines[4].color} strokeWidth="2" />
              <circle cx="600" cy="450" r="6" fill="white" stroke={metroLines[4].color} strokeWidth="2" />
            </g>

            {/* Linha 15 - Prata (Monotrilho) */}
            <g
              onMouseEnter={() => setHoveredLine("linha-15")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[5])}
              className="cursor-pointer"
            >
              <path
                d="M 700 350 L 950 350"
                stroke={metroLines[5].color}
                strokeWidth={hoveredLine === "linha-15" ? 10 : 8}
                strokeLinecap="round"
                strokeDasharray="8,4"
                opacity={hoveredLine === "linha-15" ? 1 : 0.9}
              />
              <circle cx="750" cy="350" r="6" fill="white" stroke={metroLines[5].color} strokeWidth="2" />
              <circle cx="850" cy="350" r="6" fill="white" stroke={metroLines[5].color} strokeWidth="2" />
            </g>

            {/* CPTM Lines (simplified) */}
            
            {/* Linha 7 - Rubi */}
            <g
              onMouseEnter={() => setHoveredLine("linha-7")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[6])}
              className="cursor-pointer"
            >
              <path
                d="M 350 150 L 500 400"
                stroke={metroLines[6].color}
                strokeWidth={hoveredLine === "linha-7" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-7" ? 1 : 0.7}
              />
            </g>

            {/* Linha 9 - Esmeralda */}
            <g
              onMouseEnter={() => setHoveredLine("linha-9")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[8])}
              className="cursor-pointer"
            >
              <path
                d="M 300 500 L 700 600"
                stroke={metroLines[8].color}
                strokeWidth={hoveredLine === "linha-9" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-9" ? 1 : 0.7}
              />
            </g>

            {/* Linha 10 - Turquesa */}
            <g
              onMouseEnter={() => setHoveredLine("linha-10")}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => setSelectedLine(metroLines[9])}
              className="cursor-pointer"
            >
              <path
                d="M 250 400 L 250 650"
                stroke={metroLines[9].color}
                strokeWidth={hoveredLine === "linha-10" ? 10 : 8}
                strokeLinecap="round"
                opacity={hoveredLine === "linha-10" ? 1 : 0.7}
              />
            </g>

            {/* Central hub indicator */}
            <circle
              cx="500"
              cy="400"
              r="15"
              fill="white"
              stroke="#1e40af"
              strokeWidth="3"
            />
            <text
              x="500"
              y="430"
              textAnchor="middle"
              className="text-xs font-semibold"
              fill="#1e40af"
            >
              Centro
            </text>
          </svg>
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