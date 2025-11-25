import { Box, Button, Typography, Card } from "@mui/material";
import marketingImage from '../assets/marketing-1.png';
import personalTrainerImage from '../assets/personal-trainer.png';
import studentImage from '../assets/student.png';

export default function Marketing() {
  return (
    <Box sx={{background: "linear-gradient(to bottom, #6a1b9a, #000)", color: "#fff", overflow: "hidden" }}>
      {/* HERO */}
      <Box sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, rgba(106, 27, 154, 0.95), rgba(0, 0, 0, 0.95))",
        padding: { xs: 4, md: 8}
  
      }}>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
          maxWidth: "75rem",
          width: "100%",
        }}>
          {/* Conteúdo */}
          <Box>
            <Typography variant="h2" sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(135deg, #bb86fc, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              CamMove
            </Typography>
            <Typography variant="h6" sx={{
              mb: 4,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
              opacity: 0.95,
              fontWeight: 300,
            }}>
              A plataforma que conecta personal trainers e alunos com treinos personalizados, avaliações completas e gestão inteligente do progresso.
            </Typography>
            <Button variant="contained" sx={{
              background: "linear-gradient(135deg, #bb86fc, #9c27b0)",
              color: "#fff",
              size: "large",
              borderRadius: "12px",
              padding: "14px 40px",
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 20px 40px rgba(187, 134, 252, 0.3)",
              },
            }}>
              Baixar App
            </Button>
          </Box>
     
          {/* Imagem */}
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}>
            <img src={marketingImage} alt="CamMove App" style={{
              maxWidth: "60rem",
       
            }} />
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
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(187, 134, 252, 0.3)",
                  borderColor: "rgba(187, 134, 252, 0.6)",
                  transform: "translateX(-8px)",
                },
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
        <Button variant="contained" sx={{
          background: "linear-gradient(135deg, #bb86fc, #9c27b0)",
          color: "#fff",
          borderRadius: "12px",
          padding: "16px 50px",
          fontSize: "1.1rem",
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 20px 40px rgba(187, 134, 252, 0.3)",
          },
        }}>
          Baixar CamMove
        </Button>
      </Box>
    </Box>
  );
}