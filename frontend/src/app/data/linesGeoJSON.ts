import { FeatureCollection, Feature, LineString } from 'geojson';

// GeoJSON das linhas do metrô e trens metropolitanos de São Paulo
// NOTA: Estas são coordenadas aproximadas de EXEMPLO
// Para obter coordenadas exatas, consulte o Portal GeoSampa ou OSM.

export interface LineProperties {
  lineNumber: string;
  name: string;
  color: string;
  operator: string;
}

export const metroLinesGeoJSON: FeatureCollection<LineString, LineProperties> = {
  type: "FeatureCollection",
  features: [
    // Linha 1 - Azul (Jabaquara - Tucuruvi)
    {
      type: "Feature",
      properties: {
        lineNumber: "1",
        name: "Linha 1 - Azul",
        color: "#0455A1",
        operator: "Metrô"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6425, -23.6472], // Jabaquara
          [-46.6394, -23.6284], // Conceição
          [-46.6389, -23.6253], // São Judas
          [-46.6367, -23.6078], // Saúde
          [-46.6333, -23.5975], // Praça da Árvore
          [-46.6294, -23.5836], // Santa Cruz
          [-46.6256, -23.5750], // Vila Mariana
          [-46.6333, -23.5689], // Ana Rosa
          [-46.6406, -23.5611], // Paraíso
          [-46.6450, -23.5547], // Vergueiro
          [-46.6514, -23.5506], // São Joaquim
          [-46.6556, -23.5458], // Liberdade
          [-46.6428, -23.5431], // Sé
          [-46.6364, -23.5406], // São Bento
          [-46.6328, -23.5367], // Luz
          [-46.6292, -23.5264], // Tiradentes
          [-46.6250, -23.5206], // Armênia
          [-46.6236, -23.5150], // Portuguesa-Tietê
          [-46.6197, -23.5100], // Carandiru
          [-46.6139, -23.5039], // Santana
          [-46.6081, -23.4992], // Jardim São Paulo-Ayrton Senna
          [-46.6036, -23.4806]  // Tucuruvi
        ]
      }
    },
    // Linha 2 - Verde (Vila Madalena - Vila Prudente)
    {
      type: "Feature",
      properties: {
        lineNumber: "2",
        name: "Linha 2 - Verde",
        color: "#007E5E",
        operator: "Metrô"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6897, -23.5456], // Vila Madalena
          [-46.6844, -23.5517], // Sumaré
          [-46.6792, -23.5572], // Clínicas
          [-46.6725, -23.5561], // Consolação
          [-46.6611, -23.5528], // Trianon-MASP
          [-46.6519, -23.5517], // Brigadeiro
          [-46.6406, -23.5611], // Paraíso
          [-46.6333, -23.5689], // Ana Rosa
          [-46.6242, -23.5667], // Chácara Klabin
          [-46.6181, -23.5686], // Santos-Imigrantes
          [-46.6100, -23.5706], // Alto do Ipiranga
          [-46.6008, -23.5761], // Sacomã
          [-46.5947, -23.5803], // Tamanduateí
          [-46.5928, -23.5875]  // Vila Prudente
        ]
      }
    },
    // Linha 3 - Vermelha (Palmeiras-Barra Funda - Corinthians-Itaquera)
    {
      type: "Feature",
      properties: {
        lineNumber: "3",
        name: "Linha 3 - Vermelha",
        color: "#EE372F",
        operator: "Metrô"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6656, -23.5264], // Palmeiras-Barra Funda
          [-46.6597, -23.5300], // Marechal Deodoro
          [-46.6514, -23.5344], // Santa Cecília
          [-46.6444, -23.5378], // República
          [-46.6428, -23.5431], // Sé
          [-46.6364, -23.5503], // Pedro II
          [-46.6272, -23.5542], // Brás
          [-46.6181, -23.5589], // Bresser-Mooca
          [-46.6092, -23.5625], // Belém
          [-46.5950, -23.5686], // Tatuapé
          [-46.5808, -23.5742], // Carrão
          [-46.5728, -23.5769], // Penha
          [-46.5664, -23.5825], // Vila Matilde
          [-46.5564, -23.5881], // Guilhermina-Esperança
          [-46.5467, -23.5931], // Patriarca
          [-46.5256, -23.5978], // Artur Alvim
          [-46.5014, -23.5933]  // Corinthians-Itaquera
        ]
      }
    },
    // Linha 4 - Amarela (Luz - Vila Sônia)
    {
      type: "Feature",
      properties: {
        lineNumber: "4",
        name: "Linha 4 - Amarela",
        color: "#FDD000",
        operator: "ViaQuatro"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6328, -23.5367], // Luz
          [-46.6444, -23.5378], // República
          [-46.6519, -23.5542], // Higienópolis-Mackenzie
          [-46.6589, -23.5583], // Paulista
          [-46.6669, -23.5603], // Oscar Freire (Adicionada)
          [-46.6841, -23.5661], // Fradique Coutinho (Adicionada)
          [-46.6919, -23.5672], // Faria Lima
          [-46.7020, -23.5660], // Pinheiros
          [-46.7075, -23.5706], // Butantã
          [-46.7258, -23.5800], // São Paulo-Morumbi
          [-46.7308, -23.5989]  // Vila Sônia
        ]
      }
    },
    // Linha 5 - Lilás (Capão Redondo - Chácara Klabin)
    {
      type: "Feature",
      properties: {
        lineNumber: "5",
        name: "Linha 5 - Lilás",
        color: "#9B3894",
        operator: "ViaMobilidade"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.7792, -23.6689], // Capão Redondo
          [-46.7681, -23.6597], // Campo Limpo
          [-46.7567, -23.6519], // Vila das Belezas
          [-46.7439, -23.6439], // Giovanni Gronchi
          [-46.7303, -23.6336], // Santo Amaro
          [-46.7178, -23.6242], // Largo Treze
          [-46.7050, -23.6128], // Adolfo Pinheiro
          [-46.6981, -23.6022], // Alto da Boa Vista
          [-46.6892, -23.5928], // Borba Gato
          [-46.6814, -23.5850], // Brooklin
          [-46.6728, -23.5736], // Campo Belo
          [-46.6642, -23.5700], // Eucaliptos
          [-46.6539, -23.5681], // Moema
          [-46.6450, -23.5653], // AACD-Servidor
          [-46.6381, -23.5647], // Hospital São Paulo
          [-46.6333, -23.5689], // Santa Cruz
          [-46.6242, -23.5667]  // Chácara Klabin
        ]
      }
    },
    // Linha 7 - Rubi (Palmeiras-Barra Funda - Jundiaí)
    {
      type: "Feature",
      properties: {
        lineNumber: "7",
        name: "Linha 7 - Rubi",
        color: "#97005F",
        operator: "TIC Trens" // Operador corrigido
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6656, -23.5264], // Palmeiras-Barra Funda (Ajustado como terminal)
          [-46.6861, -23.5200], // Água Branca
          [-46.7039, -23.5156], // Lapa
          [-46.7222, -23.5083], // Piqueri
          [-46.7392, -23.5011], // Pirituba
          [-46.7583, -23.4925], // Vila Clarice
          [-46.8019, -23.4700], // Jaraguá
          [-46.8331, -23.4533], // Perus
          [-46.8764, -23.4317]  // Caieiras (trecho até Jundiaí omitido para brevidade)
        ]
      }
    },
    // Linha 8 - Diamante (Júlio Prestes - Amador Bueno)
    {
      type: "Feature",
      properties: {
        lineNumber: "8",
        name: "Linha 8 - Diamante",
        color: "#97A098",
        operator: "ViaMobilidade"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6336, -23.5289], // Júlio Prestes
          [-46.6656, -23.5264], // Palmeiras-Barra Funda
          [-46.6861, -23.5200], // Lapa
          [-46.7181, -23.5336], // Domingos de Moraes
          [-46.7300, -23.5397], // Imperatriz Leopoldina
          [-46.7533, -23.5569], // Presidente Altino
          [-46.7667, -23.5636], // Osasco
          [-46.7894, -23.5331], // Comandante Sampaio
          [-46.8117, -23.5294], // Quitaúna
          [-46.8339, -23.5258], // General Miguel Costa
          [-46.8697, -23.5256], // Carapicuíba
          [-46.9008, -23.5319], // Santa Terezinha
          [-46.9281, -23.5347], // Antonio João
          [-46.9481, -23.5272], // Barueri
          [-46.9764, -23.5139], // Jardim Belval
          [-46.9969, -23.5069], // Jardim Silveira
          [-47.0158, -23.4994], // Jandira
          [-47.0386, -23.4867], // Sagrado Coração
          [-47.0544, -23.4778], // Engenheiro Cardoso
          [-47.0758, -23.4642]  // Itapevi
        ]
      }
    },
    // Linha 9 - Esmeralda (Osasco - Grajaú)
    {
      type: "Feature",
      properties: {
        lineNumber: "9",
        name: "Linha 9 - Esmeralda",
        color: "#01A9A7",
        operator: "ViaMobilidade"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.7894, -23.5331], // Osasco
          [-46.7667, -23.5636], // Presidente Altino
          [-46.7533, -23.5569], // Ceasa
          [-46.7419, -23.5906], // Villa Lobos-Jaguaré
          [-46.7261, -23.5992], // Cidade Universitária
          [-46.7075, -23.6061], // Pinheiros
          [-46.6919, -23.5981], // Hebraica-Rebouças
          [-46.6772, -23.5958], // Cidade Jardim
          [-46.6672, -23.6064], // Vila Olímpia
          [-46.6658, -23.6228], // Berrini
          [-46.6883, -23.6303], // Morumbi
          [-46.6989, -23.6419], // Granja Julieta
          [-46.7058, -23.6547], // Santo Amaro
          [-46.7025, -23.6678], // Socorro
          [-46.6989, -23.6819], // Jurubatuba
          [-46.6903, -23.6925], // Autódromo
          [-46.6847, -23.7053], // Primavera-Interlagos
          [-46.6994, -23.7150], // Grajaú
          [-46.7194, -23.7464]  // Varginha (estação futura)
        ]
      }
    },
    // Linha 10 - Turquesa (Brás - Rio Grande da Serra)
    {
      type: "Feature",
      properties: {
        lineNumber: "10",
        name: "Linha 10 - Turquesa",
        color: "#00ADEF",
        operator: "CPTM"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6272, -23.5542], // Brás
          [-46.6181, -23.5589], // Mooca
          [-46.6092, -23.5625], // Ipiranga
          [-46.5950, -23.5686], // Tamanduateí
          [-46.5808, -23.5742], // São Caetano do Sul
          [-46.5664, -23.5825], // Utinga
          [-46.5520, -23.5881], // Prefeito Saladino
          [-46.5364, -23.5931], // Santo André
          [-46.5208, -23.6017], // Capuava
          [-46.5056, -23.6103], // Mauá
          [-46.4900, -23.6189], // Guapituba
          [-46.4744, -23.6275], // Ribeirão Pires
          [-46.4588, -23.6361]  // Rio Grande da Serra
        ]
      }
    },
    // Linha 11 - Coral (Luz - Estudantes)
    {
      type: "Feature",
      properties: {
        lineNumber: "11",
        name: "Linha 11 - Coral",
        color: "#F68368",
        operator: "CPTM"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6328, -23.5367], // Luz
          [-46.6197, -23.5100], // Tatuapé
          [-46.6050, -23.5397], // Corinthians-Itaquera
          [-46.5828, -23.5481], // Dom Bosco
          [-46.5606, -23.5564], // José Bonifácio
          [-46.5383, -23.5647], // Guaianases
          [-46.5161, -23.5731], // Antonio Gianetti Neto
          [-46.4939, -23.5814], // Ferraz de Vasconcelos
          [-46.4717, -23.5897], // Poá
          [-46.4494, -23.5981], // Calmon Viana
          [-46.4272, -23.6064], // Suzano
          [-46.4050, -23.6147], // Jundiapeba
          [-46.3828, -23.6231]  // Estudantes
        ]
      }
    },
    // Linha 12 - Safira (Brás - Calmon Viana)
    {
      type: "Feature",
      properties: {
        lineNumber: "12",
        name: "Linha 12 - Safira",
        color: "#133C8D",
        operator: "CPTM"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.6272, -23.5542], // Brás
          [-46.6050, -23.5397], // Tatuapé
          [-46.5678, -23.5172], // Engenheiro Goulart
          [-46.5506, -23.5069], // USP Leste
          [-46.5333, -23.4967], // Comendador Ermelino
          [-46.5161, -23.4864], // São Miguel Paulista
          [-46.4989, -23.4761], // Jardim Helena-Vila Mara
          [-46.4817, -23.4658], // Itaim Paulista
          [-46.4644, -23.4556], // Jardim Romano
          [-46.4272, -23.6064]  // Calmon Viana
        ]
      }
    },
    // Linha 13 - Jade (Engenheiro Goulart - Aeroporto de Guarulhos)
    {
      type: "Feature",
      properties: {
        lineNumber: "13",
        name: "Linha 13 - Jade",
        color: "#00B398",
        operator: "CPTM"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.5506, -23.5069], // Engenheiro Goulart
          [-46.5297, -23.4856], // Guarulhos-Cecap
          [-46.5089, -23.4642], // Aeroporto
          [-46.4881, -23.4428]  // Aeroporto-Guarulhos (Terminal)
        ]
      }
    },
    // Linha 15 - Prata (Vila Prudente - Jardim Colonial) - Monotrilho
    {
      type: "Feature",
      properties: {
        lineNumber: "15",
        name: "Linha 15 - Prata",
        color: "#A8A9AD",
        operator: "Metrô" // Corrigido de CPTM para Metrô
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-46.5928, -23.5875], // Vila Prudente
          [-46.5853, -23.5900], // Oratório
          [-46.5725, -23.5994], // São Lucas
          [-46.5636, -23.6050], // Camilo Haddad
          [-46.5542, -23.6111], // Vila Tolstói
          [-46.5439, -23.6178], // Vila União
          [-46.5314, -23.6272], // Jardim Planalto
          [-46.5150, -23.6140], // Sapopemba (Adicionada)
          [-46.5020, -23.6120], // Fazenda da Juta (Adicionada)
          [-46.4860, -23.6080], // São Mateus (Adicionada)
          [-46.4760, -23.6060]  // Jardim Colonial (Adicionada)
        ]
      }
    }
  ]
};

// Helper para obter feature de uma linha específica
export const getLineGeoJSON = (lineNumber: string): Feature<LineString, LineProperties> | undefined => {
  return metroLinesGeoJSON.features.find(
    feature => feature.properties.lineNumber === lineNumber
  );
};

// Helper para obter todas as linhas de um operador
export const getLinesByOperator = (operator: string): Feature<LineString, LineProperties>[] => {
  return metroLinesGeoJSON.features.filter(
    feature => feature.properties.operator === operator
  );
};