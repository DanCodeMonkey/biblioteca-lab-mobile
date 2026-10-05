# 📱 Biblioteca Lab Mobile

Repositório de atividades práticas da disciplina **Laboratório de Desenvolvimento Mobile** — curso de Desenvolvimento de Software Multiplataforma (4DSM) — FATEC Votorantim.

---

## 🚀 Tecnologias

| Tecnologia | Versão |
|---|---|
| React Native | via Expo SDK |
| Expo | SDK mais recente |
| Expo Router | v3+ |
| TypeScript | — |

---

## 📁 Estrutura

```
biblioteca-lab-mobile/
├── src/
│   └── app/
│       ├── _layout.tsx       # Layout raiz (expo-router)
│       ├── index.tsx         # Tela inicial
│       └── (stack)/          # Grupo de rotas em pilha
│           ├── _layout.tsx
│           ├── estudos.tsx   # Cantinho de Estudos + Pomodoro
│           └── ...
├── assets/                   # Imagens e ícones
├── app.json
├── package.json
└── tsconfig.json
```

---

## ⚙️ Como rodar

**Pré-requisitos:** Node.js e Expo CLI instalados.

```bash
# Instalar dependências
npm install

# Instalar dependências de suporte web
npx expo install react-native-web react-dom @expo/metro-runtime

# Iniciar o projeto
npx expo start
```

Após iniciar, use:
- `a` — abrir no emulador Android
- `i` — abrir no simulador iOS
- `w` — abrir no navegador

---

## 📋 Atividades

| Tela | Descrição |
|---|---|
| `index.tsx` | Página inicial |
| `estudos.tsx` | Cantinho de estudos com timer Pomodoro |
| `desenvolvedor.tsx` | Sobre o desenvolvedor |

---

## 👨‍💻 Desenvolvedor

**Daniel Fernando**  
Estudante de Desenvolvimento de Software Multiplataforma — FATEC Votorantim  

[![GitHub](https://img.shields.io/badge/GitHub-DanCodeMonkey-181717?logo=github)](https://github.com/DanCodeMonkey)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-daniel--fernando-0A66C2?logo=linkedin)](https://www.linkedin.com/in/daniel-fernando-2a6ab213a/)

---

## 📄 Licença

MIT
