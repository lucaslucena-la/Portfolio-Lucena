# Lucas de Andrade Lucena - Portfólio Pessoal

Portfólio profissional desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações suaves
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy!

### Netlify

1. Faça push do código para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Importe o repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

## 📝 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes base (shadcn/ui)
│   ├── Hero.jsx      # Seção hero
│   ├── About.jsx     # Sobre mim
│   ├── Projects.jsx  # Projetos
│   ├── Experience.jsx # Experiência
│   ├── Skills.jsx    # Habilidades
│   ├── Certifications.jsx # Certificações
│   ├── Contact.jsx   # Contato
│   └── Footer.jsx    # Rodapé
├── lib/
│   └── utils.js      # Utilitários
├── App.jsx           # Componente principal
├── main.jsx          # Entry point
└── index.css         # Estilos globais
```

## ✨ Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Animações suaves com Framer Motion
- ✅ Filtro de projetos por categoria
- ✅ Formulário de contato
- ✅ Links para redes sociais
- ✅ SEO otimizado
- ✅ Acessibilidade (WCAG)

## 🎨 Personalização

Para personalizar o conteúdo:

1. **Informações pessoais**: Edite os componentes em `src/components/`
2. **Projetos**: Atualize o array `projects` em `Projects.jsx`
3. **Habilidades**: Modifique `skillCategories` em `Skills.jsx`
4. **Cores**: Ajuste a paleta em `tailwind.config.js`

## 📧 Contato

- Email: lucaslucena.dev123@gmail.com
- GitHub: [github.com/lucaslucena](https://github.com/lucaslucena)
- LinkedIn: [linkedin.com/in/lucaslucena](https://linkedin.com/in/lucaslucena)

---

Desenvolvido com ❤️ por Lucas de Andrade Lucena