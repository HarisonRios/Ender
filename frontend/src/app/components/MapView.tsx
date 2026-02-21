import { MapContainer, TileLayer, GeoJSON, CircleMarker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { metroLinesGeoJSON, LineProperties } from '../data/linesGeoJSON';
import { Feature, LineString } from 'geojson';

interface MapViewProps {
  onLineClick?: (lineNumber: string) => void;
  selectedLine?: string | null;
}

// Centro de São Paulo
const SAO_PAULO_CENTER: LatLngExpression = [-23.5505, -46.6333];
const DEFAULT_ZOOM = 12;

// Componente para resetar a visualização quando seleção mudar
function MapController({ selectedLine }: { selectedLine?: string | null }) {
  const map = useMap();
  
  // Se uma linha for selecionada, podemos dar zoom nela no futuro
  // Por enquanto, mantém a visualização padrão
  
  return null;
}

export default function MapView({ onLineClick, selectedLine }: MapViewProps) {
  // Estilo de cada linha baseado em suas propriedades
  const getLineStyle = (feature: any): PathOptions => {
    if (!feature || !feature.properties) return {};
    
    const { color, lineNumber } = feature.properties;
    const isSelected = selectedLine === lineNumber;
    
    const style: PathOptions = {
      color: color,
      weight: isSelected ? 6 : 4,
      opacity: isSelected ? 1 : 0.8,
      lineJoin: 'round',
      lineCap: 'round'
    };
    
    return style;
  };

  // Handler de clique em uma linha
  const onEachLine = (feature: Feature<LineString, LineProperties>, layer: any) => {
    const { lineNumber, name } = feature.properties;
    
    // Popup ao clicar
    layer.bindPopup(`
      <div style="text-align: center;">
        <strong>${name}</strong><br/>
        <span style="font-size: 0.9em;">Clique para ver detalhes</span>
      </div>
    `);
    
    // Evento de clique
    layer.on({
      click: () => {
        if (onLineClick) {
          onLineClick(lineNumber);
        }
      },
      mouseover: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          weight: 6,
          opacity: 1
        });
      },
      mouseout: (e: any) => {
        const layer = e.target;
        const isSelected = selectedLine === lineNumber;
        layer.setStyle({
          weight: isSelected ? 6 : 4,
          opacity: isSelected ? 1 : 0.8
        });
      }
    });
  };

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={SAO_PAULO_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={true}
        className="w-full h-full rounded-lg shadow-lg"
        zoomControl={true}
      >
        {/* Camada do mapa base - Tema Escuro */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {/* Linhas do metrô em GeoJSON */}
        <GeoJSON
          data={metroLinesGeoJSON}
          style={getLineStyle}
          onEachFeature={onEachLine}
        />
        
        {/* Marcadores de estações */}
        {metroLinesGeoJSON.features.map((feature) => {
          const { lineNumber, name, color } = feature.properties;
          const coordinates = feature.geometry.coordinates;
          
          return coordinates.map((coord, index) => {
            const position: LatLngExpression = [coord[1], coord[0]]; // [lat, lng]
            const isSelected = selectedLine === lineNumber;
            
            return (
              <CircleMarker
                key={`${lineNumber}-station-${index}`}
                center={position}
                radius={isSelected ? 5 : 3}
                pathOptions={{
                  fillColor: 'white',
                  fillOpacity: 1,
                  color: color,
                  weight: 2,
                  opacity: isSelected ? 1 : 0.8
                }}
              >
                <Popup>
                  <div className="text-center">
                    <strong>{name}</strong><br/>
                    <span className="text-xs">Estação {index + 1}</span>
                  </div>
                </Popup>
              </CircleMarker>
            );
          });
        })}
        
        <MapController selectedLine={selectedLine} />
      </MapContainer>
      
      {/* Legenda */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg z-[2000] max-h-[50vh] overflow-y-auto">
        <h3 className="font-semibold text-sm mb-2 text-[#111214]">Linhas</h3>
        <div className="space-y-1.5">
          {metroLinesGeoJSON.features.map((feature) => {
            const { lineNumber, name, color } = feature.properties;
            const isSelected = selectedLine === lineNumber;
            
            return (
              <button
                key={lineNumber}
                onClick={() => onLineClick?.(lineNumber)}
                className={`flex items-center gap-2 w-full text-left text-xs hover:bg-gray-100 p-1.5 rounded transition-colors ${
                  isSelected ? 'bg-gray-100' : ''
                }`}
              >
                <div 
                  className="w-4 h-1 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className={`${isSelected ? 'font-semibold' : ''}`}>
                  {name}
                </span>
              </button>
            );
          })}
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
          <p className="text-[10px]">
            Clique nas linhas para ver detalhes
          </p>
        </div>
      </div>
    </div>
  );
}
