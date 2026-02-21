# Ender - Transparência sobre trilhos 🚇

<div align="center">
  <img src="./frontend/public/Logo 1.png" alt="Ender Logo" width="200"/>
  
  **Sistema de monitoramento cidadão do transporte metroferroviário de São Paulo**
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://reactjs.org/)
  [![NestJS](https://img.shields.io/badge/NestJS-Framework-e0234e?logo=nestjs)](https://nestjs.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)](https://www.typescriptlang.org/)
</div>

---

## 📌 Sobre o Projeto

**Ender** é uma plataforma de tecnologia cívica que integra dados oficiais e percepção de usuários para análise de confiabilidade e lotação do sistema metroferroviário de São Paulo em tempo real.

### 🎯 Objetivo

Fornecer transparência e informações precisas sobre o transporte metroferroviário, permitindo que cidadãos:
- Monitorem o status operacional de todas as 13 linhas (Metrô, CPTM, ViaQuatro, ViaMobilidade e TickTrens)
- Verifiquem níveis de lotação em tempo real
- Acessem índices de confiabilidade baseados em dados históricos
- Reportem problemas e contribuam com a percepção cidadã

### ✨ Funcionalidades

- **Landing Page Interativa**: Apresentação do projeto com estatísticas e informações sobre todas as linhas
- **Mapa Interativo**: Visualização geográfica das linhas de metrô e trem de São Paulo
- **Painel de Detalhes**: Informações detalhadas ao clicar em cada linha:
  - Status operacional (Normal, Atenção, Interrompida)
  - Taxa de lotação (Baixa, Média, Alta, Muito Alta)
  - Índice de confiabilidade (%)
  - Histórico de eventos
  - Gráficos de confiabilidade
- **Sistema de Relatos**: Usuários podem reportar problemas e lotação
- **Dados em Tempo Real**: Integração com fontes oficiais das operadoras

---

## 🏗️ Arquitetura

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│   Frontend      │◄────►│    Backend      │◄────►│    Database     │
│   (React)       │      │   (NestJS)      │      │    (MySQL)      │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
                               ▲
                               │
                         ┌─────┴─────┐
                         │  APIs     │
                         │ Externas  │
                         └───────────┘
```

### Stack Tecnológica

**Frontend**: React • TypeScript • Vite • Tailwind CSS

**Backend**: NestJS • MySQL • TypeScript

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind,nestjs,mysql" alt="Tech Stack" />
</div>

---

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- npm ou pnpm
- MySQL 8+ (para o backend)
- Git

### Frontend

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ender.git
cd ender/frontend

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

O frontend estará disponível em: `http://localhost:5173`

### Backend (Em desenvolvimento)

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrations
npm run migration:run

# Inicie o servidor
npm run start:dev
```

O backend estará disponível em: `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```
Ender/
├── frontend/
│   ├── public/
│   │   ├── Logo 1.png
│   │   └── Logo 2.png
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── LandingPage.tsx
│   │   │   │   ├── MapScreen.tsx
│   │   │   │   ├── LineDetailsPanel.tsx
│   │   │   │   └── ui/
│   │   │   ├── data/
│   │   │   │   └── linesData.ts
│   │   │   ├── App.tsx
│   │   │   └── routes.tsx
│   │   ├── styles/
│   │   │   ├── fonts.css
│   │   │   ├── index.css
│   │   │   └── tailwind.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── backend/ (Em desenvolvimento)
│   ├── src/
│   │   ├── modules/
│   │   │   ├── lines/
│   │   │   ├── reports/
│   │   │   └── users/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── nest-cli.json
│
└── README.md
```

---

## 🎨 Design System

### Paleta de Cores

- **Vermelho Principal**: `#D7262E` - Cor de destaque e CTAs
- **Preto**: `#111214` - Textos principais
- **Cinza Escuro**: `#2F343A` - Textos secundários
- **Cinza Médio**: `#DCDCDD` - Bordas e divisores
- **Cinza Claro**: `#C5C3C6` - Textos terciários

### Tipografia

- **Fonte**: Poppins (300, 400, 500, 600, 700, 800)

---

## 🚆 Linhas Monitoradas

| Linha | Nome | Operadora | Cor |
|-------|------|-----------|-----|
| 1 | Azul | Metrô | #0455A1 |
| 2 | Verde | Metrô | #007E5E |
| 3 | Vermelha | Metrô | #EE372F |
| 4 | Amarela | ViaQuatro | #FDD000 |
| 5 | Lilás | ViaMobilidade | #9B3894 |
| 7 | Rubi | TickTrens | #97005F |
| 8 | Diamante | ViaMobilidade | #97A098 |
| 9 | Esmeralda | ViaMobilidade | #01A9A7 |
| 10 | Turquesa | CPTM | #00ADEF |
| 11 | Coral | CPTM | #F68368 |
| 12 | Safira | CPTM | #133C8D |
| 13 | Jade | CPTM | #00B398 |
| 15 | Prata | Metrô | #A8A9AD |

---

## 🔮 Roadmap

### Fase 1 - MVP (Atual)
- [x] Landing Page
- [x] Página de Mapa com visualização das linhas
- [x] Painel de detalhes das linhas
- [x] Design system e componentes UI
- [ ] Integração com APIs das operadoras

### Fase 2 - Backend
- [ ] Setup do NestJS
- [ ] Implementação da API REST
- [ ] Integração com MySQL
- [ ] Sistema de autenticação
- [ ] Endpoints para linhas, relatos e estatísticas

### Fase 3 - Recursos Avançados
- [ ] Sistema de relatos de usuários
- [ ] Notificações push para alterações
- [ ] Histórico detalhado de operação
- [ ] Dashboard administrativo
- [ ] App mobile (React Native)

### Fase 4 - Expansão
- [ ] Previsão de lotação com ML
- [ ] Integração com outras cidades
- [ ] API pública para desenvolvedores
- [ ] Gamificação e engajamento

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **Harison** - *Desenvolvimento inicial* - [GitHub](https://github.com/seu-usuario)

---

<div align="center">
  
  **Ender - Transparência sobre trilhos**
</div>