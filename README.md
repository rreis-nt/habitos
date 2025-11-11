# 🧠 RREISNT Habit Tracker

Um gerenciador de hábitos moderno e visual com design dark mode, animações suaves e persistência de dados. Construído com React + Vite para uma experiência fluida e responsiva.

## ✨ Funcionalidades

- **Adicionar Hábitos**: Crie novos hábitos com nome, categoria e frequência (diário, semanal, mensal)
- **Rastreamento Visual**: Barra de progresso animada e botão "feito hoje" para cada hábito
- **Estatísticas Gerais**: Painel com total de hábitos, concluídos hoje e gráfico circular de progresso
- **Persistência**: Todos os dados salvos no LocalStorage
- **Tema Dark/Light**: Alternância de tema com animações suaves
- **Animações**: Transições suaves com Framer Motion
- **Responsivo**: Design otimizado para desktop, tablet e mobile
- **Reset e Undo**: Funções para resetar hábitos, desfazer ações e limpar todos os dados

## 🎨 Design

- **Tema Dark**: Fundo #0f172a, cartões #1e293b, acentos em azul e verde
- **Fonte Moderna**: Inter para uma leitura perfeita
- **Efeitos Visuais**: Glass effects, glow effects, hover animations
- **Ícones**: Lucide React para consistência visual
- **Animações**: Entrada de cards, progresso, modais e interações

## 🛠️ Tecnologias

- **React 18** - Framework JavaScript
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações
- **Recharts** - Gráficos
- **Lucide React** - Ícones
- **LocalStorage API** - Persistência de dados

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rreisnt/rreisnt-habit-tracker.git
   cd rreisnt-habit-tracker
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── HabitCard.jsx      # Cartão individual de hábito
│   ├── AddHabitModal.jsx  # Modal para adicionar hábitos
│   ├── StatsPanel.jsx     # Painel de estatísticas
│   └── ThemeToggle.jsx    # Botão de alternância de tema
├── utils/
│   └── localStorage.js    # Funções de persistência
├── App.jsx                # Componente principal
├── index.css              # Estilos globais e Tailwind
└── main.jsx               # Ponto de entrada
```

## 🎯 Como Usar

1. **Adicionar Hábito**: Clique no botão "+" flutuante
2. **Marcar como Feito**: Clique no botão verde do hábito
3. **Desfazer**: Aparece após marcar como feito
4. **Excluir**: Use o ícone de lixeira no canto superior direito
5. **Alternar Tema**: Botão no canto superior direito
6. **Resetar**: Botões no header para resetar hábitos ou tudo

## 📊 Funcionalidades Técnicas

- **Progresso Automático**: Baseado na frequência selecionada
- **Validação**: Não permite marcar o mesmo hábito duas vezes no dia
- **Animações**: Todas as interações têm feedback visual
- **Responsividade**: Layout adaptável a diferentes tamanhos de tela
- **Performance**: Componentes otimizados com React hooks

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Ryan Reis (RREISNT)**
- GitHub: [@rreisnt](https://github.com/rreisnt)
- LinkedIn: [Ryan Reis](https://linkedin.com/in/ryanreis)

---

⭐ Se gostou do projeto, dê uma estrela no GitHub!
