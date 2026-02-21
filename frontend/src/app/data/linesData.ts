export interface MetroLine {
  id: string;
  name: string;
  fullName: string;
  lineNumber: string;
  color: string;
  operator: "Metrô" | "CPTM" | "ViaQuatro" | "ViaMobilidade" | "TickTrens";
  operatorLogo: string;
  status: "normal" | "atencao" | "interrompida";
  crowding: "baixa" | "media" | "alta" | "muito-alta";
  reliability: number;
  reliabilityData: number[];
  events: Array<{
    time: string;
    description: string;
  }>;
}

export const metroLines: MetroLine[] = [
  {
    id: "linha-1",
    name: "Linha 1 – Azul",
    fullName: "Linha 1 – Azul",
    lineNumber: "1",
    color: "#0455A1",
    operator: "Metrô",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Metr%C3%B4-SP_logo.svg",
    status: "normal",
    crowding: "media",
    reliability: 94,
    reliabilityData: [92, 95, 93, 96, 94, 95, 94],
    events: [
      { time: "09:15", description: "Operação normal" },
      { time: "07:45", description: "Lentidão moderada" },
    ],
  },
  {
    id: "linha-2",
    name: "Linha 2 – Verde",
    fullName: "Linha 2 – Verde",
    lineNumber: "2",
    color: "#007E5E",
    operator: "Metrô",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Metr%C3%B4-SP_logo.svg",
    status: "normal",
    crowding: "baixa",
    reliability: 96,
    reliabilityData: [94, 96, 95, 97, 96, 96, 96],
    events: [
      { time: "09:00", description: "Operação normal" },
    ],
  },
  {
    id: "linha-3",
    name: "Linha 3 – Vermelha",
    fullName: "Linha 3 – Vermelha",
    lineNumber: "3",
    color: "#EE372F",
    operator: "Metrô",    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Metr%C3%B4-SP_logo.svg",    status: "atencao",
    crowding: "muito-alta",
    reliability: 62,
    reliabilityData: [85, 78, 65, 58, 62, 64, 62],
    events: [
      { time: "08:32", description: "Lentidão entre Corinthians-Itaquera e Tatuapé" },
      { time: "07:10", description: "Operação normal" },
    ],
  },
  {
    id: "linha-4",
    name: "Linha 4 – Amarela",
    fullName: "Linha 4 – Amarela",
    lineNumber: "4",
    color: "#FDD000",
    operator: "ViaQuatro",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/ViaQuatro_SP.jpg",
    status: "normal",
    crowding: "alta",
    reliability: 91,
    reliabilityData: [88, 90, 92, 89, 91, 90, 91],
    events: [
      { time: "09:20", description: "Operação normal" },
      { time: "08:00", description: "Lentidão moderada" },
    ],
  },
  {
    id: "linha-5",
    name: "Linha 5 – Lilás",
    fullName: "Linha 5 – Lilás",
    lineNumber: "5",
    color: "#9B3894",
    operator: "ViaMobilidade",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Logo_completo_viamobilidade.svg",
    status: "normal",
    crowding: "media",
    reliability: 88,
    reliabilityData: [86, 87, 89, 88, 88, 87, 88],
    events: [
      { time: "09:05", description: "Operação normal" },
    ],
  },
  {
    id: "linha-7",
    name: "Linha 7 – Rubi",
    fullName: "Linha 7 – Rubi",
    lineNumber: "7",
    color: "#97005F",
    operator: "TickTrens",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/LogoTT.png/330px-LogoTT.png",
    status: "normal",
    crowding: "media",
    reliability: 85,
    reliabilityData: [82, 84, 86, 85, 85, 84, 85],
    events: [
      { time: "09:25", description: "Operação normal" },
    ],
  },
  {
    id: "linha-8",
    name: "Linha 8 – Diamante",
    fullName: "Linha 8 – Diamante",
    lineNumber: "8",
    color: "#97A098",
    operator: "ViaMobilidade",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Logo_completo_viamobilidade.svg",
    status: "normal",
    crowding: "baixa",
    reliability: 89,
    reliabilityData: [87, 88, 90, 89, 89, 88, 89],
    events: [
      { time: "09:15", description: "Operação normal" },
    ],
  },
  {
    id: "linha-9",
    name: "Linha 9 – Esmeralda",
    fullName: "Linha 9 – Esmeralda",
    lineNumber: "9",
    color: "#01A9A7",
    operator: "ViaMobilidade",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Logo_completo_viamobilidade.svg",
    status: "normal",
    crowding: "alta",
    reliability: 87,
    reliabilityData: [85, 86, 88, 87, 87, 86, 87],
    events: [
      { time: "09:30", description: "Operação normal" },
      { time: "08:15", description: "Lentidão moderada" },
    ],
  },
  {
    id: "linha-10",
    name: "Linha 10 – Turquesa",
    fullName: "Linha 10 – Turquesa",
    lineNumber: "10",
    color: "#00ADEF",
    operator: "CPTM",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/CPTM_%28Logo%29.svg",
    status: "normal",
    crowding: "media",
    reliability: 90,
    reliabilityData: [88, 89, 91, 90, 90, 89, 90],
    events: [
      { time: "09:20", description: "Operação normal" },
    ],
  },
  {
    id: "linha-11",
    name: "Linha 11 – Coral",
    fullName: "Linha 11 – Coral",
    lineNumber: "11",
    color: "#F68368",
    operator: "CPTM",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/CPTM_%28Logo%29.svg",
    status: "normal",
    crowding: "alta",
    reliability: 83,
    reliabilityData: [80, 82, 84, 83, 83, 82, 83],
    events: [
      { time: "09:10", description: "Operação normal" },
      { time: "07:50", description: "Lentidão" },
    ],
  },
  {
    id: "linha-12",
    name: "Linha 12 – Safira",
    fullName: "Linha 12 – Safira",
    lineNumber: "12",
    color: "#133C8D",
    operator: "CPTM",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/CPTM_%28Logo%29.svg",
    status: "normal",
    crowding: "baixa",
    reliability: 91,
    reliabilityData: [89, 90, 92, 91, 91, 90, 91],
    events: [
      { time: "09:25", description: "Operação normal" },
    ],
  },
  {
    id: "linha-13",
    name: "Linha 13 – Jade",
    fullName: "Linha 13 – Jade",
    lineNumber: "13",
    color: "#00B398",
    operator: "CPTM",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/CPTM_%28Logo%29.svg",
    status: "normal",
    crowding: "baixa",
    reliability: 93,
    reliabilityData: [91, 92, 94, 93, 93, 92, 93],
    events: [
      { time: "09:30", description: "Operação normal" },
    ],
  },
  {
    id: "linha-15",
    name: "Linha 15 – Prata",
    fullName: "Linha 15 – Prata (Monotrilho)",
    lineNumber: "15",
    color: "#A8A9AD",
    operator: "Metrô",
    operatorLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Metr%C3%B4-SP_logo.svg",
    status: "normal",
    crowding: "baixa",
    reliability: 92,
    reliabilityData: [90, 91, 93, 92, 92, 91, 92],
    events: [
      { time: "09:10", description: "Operação normal" },
    ],
  }
];
