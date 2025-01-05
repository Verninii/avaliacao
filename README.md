# Gerenciador de tarefas

Este é um projeto full-stack contendo:

- **Frontend**: Desenvolvido com [React](https://reactjs.org/).
- **Backend**: Construído com [Node.js](https://nodejs.org/) e [MySQL](https://www.mysql.com/).

---

## **Passo a Passo para Importar o Projeto**

### **Pré-requisitos**
Antes de começar, certifique-se de ter instalado em sua máquina:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- Um gerenciador de pacotes, como `npm` ou `yarn`.

---

### **1. Clonar o Repositório**
Abra o terminal e execute o seguinte comando para clonar o projeto:
```bash
git clone https://github.com/Verninii/avaliacao.git

### **2. Acesse a pasta do projeto onde preferir deixa-lo**
cd NOME-DO-REPOSITORIO

### **3. Siga os seguintes passos para configurar o backend**
entre na pasta do backend
-cd backend
Instale as dependências do projeto:
-npm install
Configure o arquivo .env:
Crie um arquivo chamado .env na pasta backend.
Adicione a seguinte configuração:
-DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
Substitua:
usuario: lucasalexandre
senha: lucas2025
nome_do_banco: world

Execute as migrações do banco de dados para criar as tabelas:
-npm run migrate
Inicie o servidor backend:
-npm run dev

### **4. Siga os seguintes passos para configurar o frontend**
Entre na pasta do frontend:
-cd frontend
Instale as dependências do projeto:
-npm install
Inicie o servidor frontend:
-npm run dev







