import { X, Users, AlertTriangle, MessageSquare, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { MetroLine } from "../data/linesData";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface LineDetailsPanelProps {
  line: MetroLine;
  onClose: () => void;
}

export function LineDetailsPanel({ line, onClose }: LineDetailsPanelProps) {
  const statusConfig = {
    normal: {
      label: "Operação Normal",
      color: "bg-green-500",
      badgeVariant: "default" as const,
    },
    atencao: {
      label: "Atenção",
      color: "bg-yellow-500",
      badgeVariant: "secondary" as const,
    },
    interrompida: {
      label: "Interrompida",
      color: "bg-red-500",
      badgeVariant: "destructive" as const,
    },
  };

  const crowdingConfig = {
    "baixa": { label: "Baixa", icon: "●", color: "text-green-600" },
    "media": { label: "Média", icon: "●●", color: "text-yellow-600" },
    "alta": { label: "Alta", icon: "●●●", color: "text-orange-600" },
    "muito-alta": { label: "Muito Alta", icon: "●●●●", color: "text-red-600" },
  };

  const status = statusConfig[line.status];
  const crowding = crowdingConfig[line.crowding];

  const chartData = line.reliabilityData.map((value, index) => ({
    value,
    index,
  }));

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/20 z-[3000] lg:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[3500] overflow-y-auto">
        {/* Header */}
        <div
          className="p-4 border-b sticky top-0 bg-white z-10"
          style={{
            borderLeft: `4px solid ${line.color}`,
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: line.color }}
                />
                <h2 className="font-bold text-lg">{line.name}</h2>
              </div>
              <p className="text-sm text-gray-500">{line.operator}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Status Section */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Status Atual
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${status.color}`} />
              <Badge variant={status.badgeVariant}>{status.label}</Badge>
            </div>
            {line.status === "atencao" && (
              <p className="text-sm text-gray-600">
                Operação com lentidão em alguns trechos
              </p>
            )}
          </Card>

          {/* Crowding Level */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Nível de Lotação
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-2xl font-bold ${crowding.color}`}>
                  {crowding.icon}
                </div>
                <p className="text-sm text-gray-600 mt-1">{crowding.label}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Baseado em</p>
                <p className="text-sm font-medium">247 relatos</p>
              </div>
            </div>
          </Card>

          {/* Reliability */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Confiabilidade Hoje</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold">{line.reliability}%</span>
              <span className="text-sm text-gray-500">pontualidade</span>
            </div>
            
            {/* Sparkline Chart */}
            <div className="h-16 -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={line.color}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Performance dos últimos 7 dias
            </p>
          </Card>

          {/* Citizen Reports */}
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Relato de Cidadãos
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full">
                Reportar lotação
              </Button>
              <Button variant="outline" className="w-full">
                Reportar problema
              </Button>
            </div>
          </div>

          {/* Last Events */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Últimos Eventos
            </h3>
            <div className="space-y-3">
              {line.events.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-3 pb-3 last:pb-0 border-b last:border-0"
                >
                  <div className="flex-shrink-0 w-12 text-sm font-medium text-gray-500">
                    {event.time}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Info Footer */}
          <div className="text-xs text-gray-500 text-center pt-4 border-t">
            Última atualização: agora
          </div>
        </div>
      </div>
    </>
  );
}
