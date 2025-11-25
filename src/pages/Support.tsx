
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Link } from "@mui/material";
import { Email, Instagram, WhatsApp, AccessTime } from "@mui/icons-material";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from '@emailjs/browser';
import supportImage from '../assets/support.png';


export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



    const sendEmailMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
        },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    },
    onSuccess: () => {
      alert("✅ Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      console.error("Erro:", error);
      alert("❌ Erro ao enviar. Tente novamente.");
    }
  });

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmailMutation.mutate(formData);
  };
  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(to bottom, #6a1b9a, #000)", color: "#fff", py: 8, px: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Suporte CamMove
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: "auto" }}>
          Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo.
        </Typography>
      </Box>

<Box sx={{ maxWidth: '70%', width: '100%', mx: 'auto' }}>
  {/* Formulário de Contato */} 
  
          <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3, p: 3,}}>
             <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'center', gap: 4 }}>
              <Box sx={{ display:'flex', justifyContent:'center'}}>
                <img src={supportImage}alt={'Animação suporte'}   style={{ 
    width: '100%',
    maxWidth: '30rem',
    borderRadius: '2rem',

  }}/>
              </Box>
               
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "#fff" }}>
                Envie sua Mensagem
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
         sx={{ mb: 2, input: { color: "#fff" }, label: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: { backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 2 }
                  }}
                 
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2, input: { color: "#fff" }, label: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: { backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 2 }
                  }}
                />
                <TextField
                  fullWidth
                  label="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2, input: { color: "#fff" }, label: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: { backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 2 }
                  }}
                />
                <TextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  sx={{ mb: 3, textarea: { color: "#fff" }, label: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: { backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 2 }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ borderRadius: 2, py: 1.5 }}
                  disabled={sendEmailMutation.isPending}
                  loading={sendEmailMutation.isPending}
                >
                   {sendEmailMutation.isPending ? "Enviando..." : "Enviar Mensagem"}

                </Button>
              </Box>
            </CardContent>
             </Box>
          </Card>
       
        
    
        

        {/* Informações de Contato */}
        <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mt: 4 }}>
          {/* Email de Suporte */}
          <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3, p: 3, mb: 3 , height: '100%'}}>
             
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ fontSize: 40, mr: 2, color: "#ce93d8" }} />
                <Box >
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                    Email de Suporte
                  </Typography>
                  <Link href="mailto:app.cammove@gmail.com" sx={{ color: "#ce93d8", textDecoration: "none" }}>
                    app.cammove@gmail.com

                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Tempo de Resposta */}
          <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3, p: 3, mb: 3 , height: '100%'}}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ fontSize: 40, mr: 2, color: "#ce93d8" }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
                    Tempo de Resposta
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, color: "#fff" }}>
                    Respondemos em até 24 horas úteis
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Redes Sociais */}
          <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3, p: 3, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                Redes Sociais
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link href="https://instagram.com/app.cammove" target="_blank" sx={{ color: "#ce93d8" }}>
                  <Instagram sx={{ fontSize: 40 }} />
                </Link>
               <Link href="https://instagram.com/cammove" target="_blank" sx={{ color: "#ce93d8" }}>
                      <WhatsApp sx={{ fontSize: 40 }} />
              </Link>
      
              </Box>
              <Typography variant="body2" sx={{ mt: 2, opacity: 0.8, color: "#fff" }}>
                Siga-nos para dicas, atualizações e novidades!
              </Typography>
            </CardContent>
          </Card>
        </Box>
        </Box>
    </Box>
  );
}