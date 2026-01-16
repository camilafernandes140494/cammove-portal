import { Box, Typography, Card } from "@mui/material";
import marketingImage from '../assets/marketing-1.png';
import personalTrainerImage from '../assets/personal-trainer.png';
import studentImage from '../assets/student.png';
import AppleIcon from "@mui/icons-material/Apple";
import StoreButton from "../components/StoreButton";
import AndroidIcon from "@mui/icons-material/Android";

export default function Marketing() {
  return (
    <Box sx={{background: "linear-gradient(to bottom, #6a1b9a, #000)", color: "#fff", overflow: "hidden" }}>
      {/* HERO */}
          <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, rgba(106, 27, 154, 0.95), rgba(0, 0, 0, 0.95))",
        padding: { xs: "3rem 1.5rem", sm: "4rem 2rem", md: "8rem 4rem" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 3, sm: 4, md: 6 },
          alignItems: "center",
          width: "100%",
          maxWidth: "80rem",
        }}
      >
        {/* Conteúdo */}
        <Box sx={{ order: { xs: 2, lg: 1 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(135deg, #bb86fc, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            CamMove
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.2rem" },
              lineHeight: 1.7,
              opacity: 0.95,
              fontWeight: 300,
              color: "#fff",
            }}
          >
            A plataforma que conecta personal trainers e alunos com treinos
            personalizados, avaliações completas e gestão inteligente do
            progresso.
          </Typography>
          <Box sx={{display:'flex', flexDirection:"row", gap:'1.5rem'}}>
            <StoreButton
              icon={<AppleIcon sx={{ fontSize: "32px" }} />}
              title="Baixar na"
              subtitle="App Store"
              url="https://apps.apple.com/br/app/cammove/id6753191514"
            />
            <StoreButton
              icon={<AndroidIcon sx={{ fontSize: "32px" }} />}
              title="Baixar no"
              subtitle="Google Play"
              url="https://play.google.com/store/apps/details?id=com.cammove"
            />
          </Box>
 </Box>

        {/* Imagem */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, lg: 2 },
            mb: { xs: 2, lg: 0 },
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}
        >
          <img
            src={marketingImage}
            alt="CamMove App"
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>

 {/* PRICING */}
      <Box sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, rgba(106, 27, 154, 0.1), rgba(0, 0, 0, 0.3))",
        borderTop: "1px solid rgba(187, 134, 252, 0.2)",
      }}>
        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}>
              Preços Especiais
            </Typography>
            <Typography sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              opacity: 0.8,
              color: "#e0e0e0",
            }}>
              Aproveite nossa promoção de lançamento e comece sua jornada
            </Typography>
          </Box>

          {/* Pricing Card */}
          <Box sx={{
            display: "flex",
            justifyContent: "center",
          }}>
            <Card sx={{
              background: "linear-gradient(135deg, rgba(187, 134, 252, 0.15), rgba(156, 39, 176, 0.1))",
              border: "2px solid rgba(187, 134, 252, 0.5)",
              borderRadius: "20px",
              p: { xs: 4, md: 6 },
              maxWidth: "500px",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "rgba(187, 134, 252, 0.8)",
                boxShadow: "0 20px 60px rgba(187, 134, 252, 0.2)",
              },
            }}>
              {/* Badge de Promoção */}
              <Box sx={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "linear-gradient(135deg, #ff6b6b, #ff8787)",
                color: "#fff",
                px: 3,
                py: 1,
                borderRadius: "0 20px 0 20px",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}>
                Promoção
              </Box>

              {/* Conteúdo */}
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#bb86fc",
                  fontSize: "1.5rem",
                }}>
                  CamMove Premium
                </Typography>

                {/* Tags de IA */}
                <Box sx={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  gap: 1, 
                  justifyContent: "center", 
                  mb: 3 
                }}>
                  <Box sx={{
                    background: "linear-gradient(135deg, #00D4FF, #0099CC)",
                    color: "#fff",
                    px: 2,
                    py: 0.75,
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    boxShadow: "0 4px 12px rgba(0, 212, 255, 0.3)",
                  }}>
                    🤖 Treinos com IA
                  </Box>
                  <Box sx={{
                    background: "linear-gradient(135deg, #FFD700, #FFA500)",
                    color: "#000",
                    px: 2,
                    py: 0.75,
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 12px rgba(255, 215, 0, 0.3)",
                  }}>
                    ⚡ Novo
                  </Box>
                </Box>

                {/* Preço */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 1, mb: 1 }}>
                    <Typography sx={{
                      fontSize: "0.9rem",
                      opacity: 0.7,
                      color: "#e0e0e0",
                      textDecoration: "line-through",
                    }}>
                      R$ 59,99
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.85rem",
                      background: "rgba(255, 107, 107, 0.2)",
                      color: "#ff8787",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      fontWeight: 600,
                    }}>
                      -50%
                    </Typography>
                  </Box>
                  <Typography sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 900,
                    color: "#fff",
                  }}>
                    R$ 29,99
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.9rem",
                    opacity: 0.7,
                    color: "#bb86fc",
                    mt: 1,
                  }}>
                    por mês
                  </Typography>
                </Box>

                {/* Divider */}
                <Box sx={{
                  height: "1px",
                  background: "rgba(187, 134, 252, 0.3)",
                  my: 3,
                }} />

                {/* Features */}
                <Box sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {[
                    "Acesso completo a todos os exercícios",
                    "Criação de treinos personalizados com IA 🤖",
                    "Criação de avaliações físicas personalizadas",
                    "Agendamentos e lembretes",
                    "Suporte ao cliente",
                    "Sincronização em tempo real entre dispositivos",
                  ].map((feature, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#bb86fc",
                      }} />
                      <Typography sx={{
                        fontSize: "0.95rem",
                        color: "#e0e0e0",
                      }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Aviso Promocional */}
                <Box sx={{
                  background: "rgba(187, 134, 252, 0.1)",
                  border: "1px solid rgba(187, 134, 252, 0.3)",
                  borderRadius: "12px",
                  p: 2,
                  mb: 4,
                }}>
                  <Typography sx={{
                    fontSize: "0.85rem",
                    color: "#bb86fc",
                    fontWeight: 600,
                  }}>
                    ⏰ Oferta por tempo limitado!
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.8rem",
                    color: "#e0e0e0",
                    opacity: 0.8,
                    mt: 0.5,
                  }}>
                    Aproveite o preço promocional de lançamento
                  </Typography>
                </Box>

          
                
        <Box sx={{display:'flex', flexDirection:"row", gap:'1.5rem'}}>
            <StoreButton
              icon={<AppleIcon sx={{ fontSize: "32px" }} />}
              title="Baixar na"
              subtitle="App Store"
              url="https://apps.apple.com/br/app/cammove/id6753191514"
            />
            <StoreButton
              icon={<AndroidIcon sx={{ fontSize: "32px" }} />}
              title="Baixar no"
              subtitle="Google Play"
              url="https://play.google.com/store/apps/details?id=com.cammove"
            />
          </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      {/* FEATURES */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}>
        <Typography variant="h3" sx={{
          fontWeight: 800,
          mb: 2,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.8rem" },
        }}>
          O que o CamMove oferece?
        </Typography>
        <Typography sx={{
          textAlign: "center",
          opacity: 0.7,
          mb: 10,
          maxWidth: "600px",
          mx: "auto",
        }}>
          Ferramentas completas para transformar a experiência de treinamento
        </Typography>

        {/* SEÇÃO PERSONAL */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
          mb: { xs: 12, md: 16 },
          maxWidth: "75rem",
          mx: "auto",
        }}>
          <Box sx={{
            order: { xs: 2, lg: 1 },
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}>
            <Box>
              <Typography variant="h4" sx={{
                fontWeight: 800,
                mb: 1,
                color: "#bb86fc",
              }}>
                Para o Personal Trainer
              </Typography>
              <Box sx={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, #bb86fc, transparent)",
                borderRadius: "2px",
              }} />
            </Box>

            {[
              {
                title: "Cadastro de Treinos",
                desc: "Monte treinos completos com séries, repetições, cargas e exercícios.",
                icon: "🏋️",
              },
              {
                title: "Avaliação Física",
                desc: "Registre medidas corporais e acompanhe a evolução dos alunos.",
                icon: "📏",
              },
              {
                title: "Gestão de Agendamentos",
                desc: "Organize datas, lembretes e observações para cada aluno.",
                icon: "🗓️",
              },
              {
                title: "Perfil de Alunos",
                desc: "Gerencie histórico, treinos ativos e informações completas.",
                icon: "👤",
              },
            ].map((item) => (
              <Card key={item.title} sx={{
                p: 3,
                background: "rgba(187, 134, 252, 0.2)",
                border: "1px solid rgba(187, 134, 252, 0.4)",
                borderRadius: "16px",
                display: "flex",
                gap: 2.5,
          
              }}>
                <Box sx={{
                  fontSize: "2rem",
                  minWidth: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 ,  color: "#e0e0e0",}}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.75, lineHeight: 1.5,  color: "#e0e0e0", }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          <Box sx={{
            order: { xs: 1, lg: 2 },
            display: "flex",
            justifyContent: "center",
          }}>
            <img src={personalTrainerImage} alt="Personal Trainer" style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1.5rem",
              filter: "drop-shadow(0 1.25rem 2.5rem rgba(187, 134, 252, 0.15))",
            }} />
          </Box>
        </Box>

        {/* SEÇÃO ALUNO */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
          maxWidth: "75rem",
          mx: "auto",
        }}>
     
            <img src={studentImage} alt="Aluno" style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1.5rem",
              filter: "drop-shadow(0 1.25rem 2.5rem rgba(187, 134, 252, 0.15))",
            }} />

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}>
            <Box>
              <Typography variant="h4" sx={{
                fontWeight: 800,
                mb: 1,
                color: "#bb86fc",
              }}>
                Para o Aluno
              </Typography>
              <Box sx={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, #bb86fc, transparent)",
                borderRadius: "2px",
              }} />
            </Box>

            {[
              {
                title: "Seus Treinos",
                desc: "Acesse treinos de forma clara, moderna e sempre atualizada.",
                icon: "📲",
              },
              {
                title: "Evolução Física",
                desc: "Acompanhe métricas, histórico e gráficos detalhados da sua jornada.",
                icon: "📊",
              },
              {
                title: "Agendamentos",
                desc: "Visualize datas importantes, tarefas e lembretes do personal.",
                icon: "🕒",
              },
              {
                title: "Feedback de Treinos",
                desc: "Marque exercícios como concluídos e comunique-se com seu personal.",
                icon: "⭐",
              },
            ].map((item) => (
              <Card key={item.title} sx={{
                p: 3,
                background: "rgba(187, 134, 252, 0.2)",
                border: "1px solid rgba(187, 134, 252, 0.4)",
                borderRadius: "16px",
                display: "flex",
                gap: 2.5,               
              }}>
                <Box sx={{
                  fontSize: "2rem",
                  minWidth: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5,  color: "#e0e0e0", }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.75, lineHeight: 1.5 ,  color: "#e0e0e0",}}>
                    {item.desc}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ABOUT */}
      <Box sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, rgba(187, 134, 252, 0.1), rgba(0, 0, 0, 0.5))",
        borderTop: "1px solid rgba(187, 134, 252, 0.2)",
        borderBottom: "1px solid rgba(187, 134, 252, 0.2)",
      }}>
        <Box sx={{ maxWidth: "50rem", mx: "auto" }}>
          <Typography variant="h3" sx={{
            fontWeight: 800,
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}>
            Sobre o CamMove
          </Typography>

          <Typography sx={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            opacity: 0.9,
            textAlign: "center",
            mb: 4,
            color: "#e0e0e0",
          }}>
            O CamMove é o aplicativo que conecta personal trainers e alunos em um ambiente simples e intuitivo. Nele, o personal cria treinos personalizados, realiza avaliações físicas, acompanha a evolução dos alunos e organiza sua rotina com eficiência.
          </Typography>

          <Typography sx={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            opacity: 0.9,
            textAlign: "center",
            color: "#e0e0e0",
          }}>
            Com exercícios pré-cadastrados, modo claro e escuro, e uma interface moderna pensada em cada detalhe, o CamMove é o parceiro ideal para evoluir com propósito—seja para otimizar o trabalho do personal ou acompanhar seus resultados.
          </Typography>
        </Box>
      </Box>

      {/* CTA FINAL */}
      <Box sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
      }}>
        <Typography variant="h4" sx={{
          fontWeight: 800,
          mb: 3,
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}>
          Comece sua transformação agora
        </Typography>
   
        
        <Box sx={{display:'flex', flexDirection:"row", gap:'1.5rem', width:'100%', justifyContent:'center'}}>
            <StoreButton
              icon={<AppleIcon sx={{ fontSize: "32px" }} />}
              title="Baixar na"
              subtitle="App Store"
              url="https://apps.apple.com/br/app/cammove/id6753191514"
            />
            <StoreButton
              icon={<AndroidIcon sx={{ fontSize: "32px" }} />}
              title="Baixar no"
              subtitle="Google Play"
              url="https://play.google.com/store/apps/details?id=com.cammove"
            />
          </Box>
      </Box>
    </Box>
  );
}