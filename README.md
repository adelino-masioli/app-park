# 🚗 Estaciona JS – Your Car Park Locator

Estaciona JS (adaptado para Cordova como **Park JS**) é um aplicativo móvel simples, criado com Apache Cordova, projetado para ajudar você a lembrar onde estacionou seu carro! 🅿️

Seja em um estacionamento lotado ou em um edifício garagem, você pode salvar detalhes importantes como cor, setor e número da vaga. Todos os dados são armazenados localmente no seu dispositivo via LocalStorage, garantindo acesso rápido e offline.

Este projeto demonstra na prática como construir aplicativos híbridos utilizando tecnologias web.

---

## 👤 Autor

**Adelino Masioli**  
*Software Engineer*  
✉️ adelinomasioli@gmail.com  
🌐 [adelinomasioli.com](https://adelinomasioli.com)  
📱 +351 932 992 170  

---

## 🎓 Orientador Acadêmico

**José Joaquim Moreira**  
*Coordenador do Projeto*  
✉️ jose.moreira@islagaia.pt  

---

## 🏫 Contexto Acadêmico

Este projeto foi desenvolvido na unidade curricular de **Desenvolvimento de Aplicações Móveis**, no âmbito do:

- **Mestrado em Engenharia de Tecnologias e Sistemas Web (METSW)**  
- **Instituição:** ISLA Gaia – Instituto Politécnico de Gestão e Tecnologia 🇵🇹  
- **Aluno:** Adelino Masioli

---

## ✨ Funcionalidades

- 📝 **Formulário de Registro:** Cadastre facilmente os detalhes da vaga (cor, setor e número).  
- 💾 **Armazenamento Persistente:** Dados salvos diretamente no LocalStorage do dispositivo.  
- 👀 **Visualização da Vaga:** Exibe os dados da última vaga salva.  
- 🎨 **Estilo Dinâmico:** A cor de fundo da seção de visualização reflete a cor salva da vaga.  
- 📱 **Design Mobile First:** Interface responsiva com Bootstrap 5.  
- 🧩 **Componentes Reutilizáveis:** Inclusão de cabeçalhos e rodapés via jQuery `.load()`.  
- 🔔 **Alertas Nativos:** Diálogos com `cordova-plugin-dialogs`.  
- 📁 **Estrutura Organizada:** Separação clara entre os ativos web (`www`) e o código nativo Cordova.

---

## 🛠️ Stack Tecnológica

- **Apache Cordova:** Framework para apps móveis híbridos.  
- **HTML5, CSS3, JavaScript (ES6+):** Estrutura, estilo e lógica.  
- **Bootstrap 5:** Estilo moderno e responsivo.  
- **jQuery:** Manipulação do DOM e AJAX para includes.  
- **Font Awesome:** Ícones.  
- **LocalStorage API:** Armazenamento no cliente.  
- **Plugins Cordova:**
  - `cordova-plugin-dialogs`: Diálogos nativos.

---

## 📂 Estrutura do Projeto (Principais Diretórios)


```
AppPark/ (ou EstacionaJS/)
├── config.xml              # Configurações Cordova (ID, plugins, ícones)
├── hooks/                  # Scripts de build do Cordova
├── platforms/              # Códigos nativos (android/, ios/)
├── plugins/                # Plugins instalados
├── www/                    # Ativos web (core do app)
│   ├── css/
│   │   └── index.css
│   ├── img/
│   │   ├── logo.png
│   │   └── park.png
│   ├── includes/
│   │   ├── footer.html
│   │   └── header.html
│   ├── js/
│   │   └── index.js
│   ├── index.html          # Página inicial (Registrar vaga)
│   ├── place/
│   │   └── index.html      # Página de visualização da vaga
│   └── about/
│       └── index.html      # Página sobre o app
└── res/                    # Recursos como ícones e splash
    └── icon/
        └── android/
```


---

## 🚀 Primeiros Passos

### ✅ Pré-requisitos

- Node.js e npm  
- Cordova CLI (`npm install -g cordova`)  
- Android SDK + Java JDK  
- (Opcional) Emulador Android ou dispositivo físico

### ⚙️ Instalação e Execução

1. **Clone o repositório:**
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd AppPark
    ```

2. **Adicione as plataformas:**
    ```bash
    cordova platform add android
    cordova platform add browser
    ```

3. **Instale o plugin de diálogos (se necessário):**
    ```bash
    cordova plugin add cordova-plugin-dialogs
    ```

4. **Prepare o projeto:**
    ```bash
    cordova prepare
    ```

5. **Execute no navegador:**
    ```bash
    cordova run browser
    ```

6. **Build para Android:**
    ```bash
    cordova build android
    ```

7. **Executar em dispositivo ou emulador:**
    - **Emulador:**
      ```bash
      cordova emulate android
      ```
    - **Dispositivo:**
      ```bash
      cordova run android
      ```

---

## 📲 Como Usar

1. Abra o app no navegador ou dispositivo.
2. Use o menu superior ou o rodapé para navegar.
3. Na página "Home", preencha os dados da vaga.
4. Clique em "Salvar Vaga" e confirme no diálogo.
5. Vá até "Mostrar Vaga" para visualizar os dados salvos.
6. Acesse "Sobre" para mais informações.

---

## 🙏 Agradecimentos

Este projeto foi desenvolvido com base na especificação de exercício fornecida pelo METSW (2024–2025), como parte da formação acadêmica no ISLA Gaia.

