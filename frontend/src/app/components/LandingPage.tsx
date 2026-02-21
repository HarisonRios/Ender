import { Link } from "react-router";
import { Database, Users, TrendingUp, MapPin, AlertCircle, Activity, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { metroLines } from "../data/linesData";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-[#DCDCDD] bg-white/80 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/Logo 1.png" alt="Logo" className="h-8 sm:h-10" />
            </div>
            <Link to="/mapa">
              <Button className="bg-[#D7262E] hover:bg-[#D7262E]/90 text-white" size="sm">
                Ver Mapa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 sm:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#D7262E]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#D7262E]/3 rounded-full blur-2xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-[#D7262E]/10 text-[#D7262E] border-[#D7262E]/20 backdrop-blur-sm hover:bg-[#D7262E]/15 transition-colors">
                🚇 Tecnologia Cívica
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111214] mb-6 leading-tight"
            >
              Ender -{" "}
              <span className="text-[#D7262E]">Transparência sobre trilhos</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-[#2F343A] mb-8 leading-relaxed font-medium"
            >
              Sistema de monitoramento cidadão do transporte metroferroviário de São Paulo que integra dados oficiais e percepção de usuários para análise de confiabilidade e lotação em tempo real.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/mapa">
                <Button 
                  size="lg" 
                  className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-[#D7262E] hover:bg-[#D7262E]/90 text-white shadow-2xl shadow-[#D7262E]/20 hover:shadow-[#D7262E]/40 transition-all duration-300 hover:scale-105"
                >
                  Explorar mapa
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-[#D7262E] mb-2">13</div>
                <div className="text-sm text-[#2F343A] font-medium">Linhas Monitoradas</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-[#D7262E] mb-2">4M+</div>
                <div className="text-sm text-[#2F343A] font-medium">Usuários/Dia</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-[#D7262E] mb-2">24/7</div>
                <div className="text-sm text-[#2F343A] font-medium">Tempo Real</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#111214] mb-4">Como funciona</h2>
            <p className="text-lg text-[#2F343A] max-w-2xl mx-auto">
              Três pilares fundamentais para monitoramento em tempo real
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Dados Oficiais",
                description: "Coletamos informações oficiais das operadoras Metrô e CPTM em tempo real",
                delay: 0.1,
                color: "#D7262E"
              },
              {
                icon: Users,
                title: "Relatos de Cidadãos",
                description: "Usuários reportam lotação e problemas diretamente da plataforma",
                delay: 0.2,
                color: "#2F343A"
              },
              {
                icon: TrendingUp,
                title: "Indicadores em Tempo Real",
                description: "Análise de confiabilidade, pontualidade e qualidade do serviço",
                delay: 0.3,
                color: "#D7262E"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="bg-white border border-[#DCDCDD] rounded-2xl p-8 h-full hover:shadow-2xl hover:border-[#D7262E]/30 transition-all duration-300">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}30)`
                    }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-[#111214]">{item.title}</h3>
                  <p className="text-[#2F343A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lines Monitored */}
      <section className="py-20 bg-gradient-to-b from-[#DCDCDD]/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#111214] mb-4">Linhas monitoradas</h2>
            <p className="text-lg text-[#2F343A]">
              Todas as linhas de Metrô e CPTM da Região Metropolitana de São Paulo
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {metroLines.map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-xl border border-[#DCDCDD] hover:border-[#D7262E]/30 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-lg shadow-md flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: line.color }}
                >
                  <span className="text-white font-bold text-lg">{line.lineNumber}</span>
                </motion.div>
                <div className="flex-1">
                  <div className="font-bold text-[#111214] group-hover:text-[#D7262E] transition-colors">
                    {line.name}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <img 
                      src={line.operatorLogo} 
                      alt={line.operator}
                      className="h-4 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#111214] mb-4">Por que isso importa</h2>
            <p className="text-lg text-[#2F343A] max-w-2xl mx-auto">
              Impacto real na mobilidade urbana de São Paulo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Mobilidade Urbana Inteligente",
                description: "Mais de 4 milhões de pessoas usam o transporte metroferroviário diariamente. Informações em tempo real ajudam a planejar melhor os deslocamentos.",
                delay: 0.1
              },
              {
                icon: AlertCircle,
                title: "Transparência e Fiscalização",
                description: "Dados abertos e participação cidadã contribuem para a melhoria contínua do sistema de transporte público.",
                delay: 0.2
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="flex gap-6 bg-gradient-to-br from-white to-[#DCDCDD]/20 border border-[#DCDCDD] rounded-2xl p-8 hover:shadow-xl hover:border-[#D7262E]/30 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-8 h-8 text-[#D7262E] flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-[#111214] group-hover:text-[#D7262E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#2F343A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111214] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img src="/Logo 1.png" alt="Logo" className="h-8" />
              </div>
              <p className="text-[#C5C3C6] text-sm leading-relaxed">
                Plataforma de monitoramento cidadão do transporte metroferroviário 
                de São Paulo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold mb-4 text-[#DCDCDD]">Sobre o Projeto</h4>
              <p className="text-[#C5C3C6] text-sm leading-relaxed">
                Tecnologia cívica para transparência e melhoria da mobilidade urbana 
                na Região Metropolitana de São Paulo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 text-[#DCDCDD]">Dados</h4>
              <p className="text-[#C5C3C6] text-sm leading-relaxed">
                Informações coletadas de fontes oficiais do Metrô de São Paulo e CPTM, 
                complementadas por relatos de usuários.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-[#2F343A] pt-8 text-center text-sm text-[#C5C3C6]"
          >
            © 2026 • Dados atualizados em tempo real
          </motion.div>
        </div>
      </footer>
    </div>
  );
}