<template>
  <div class="container">
    <img class="logo" alt="Medika logo" src="../assets/logo.png" />
    <form action="post" @submit="getData">
      <div class="nome">
        <label for="nome">Nome</label>
        <input
          type="text"
          nome="nome"
          id="nome"
          placeholder="Digite seu nome..."
          required
          v-model="nome"
        />
      </div>
      <div class="email">
        <label for="email">E-mail</label>
        <input
          type="email"
          nome="email"
          id="email"
          placeholder="example@dominio.com"
          required
          v-model="email"
        />
      </div>
      <div class="password">
        <label for="password">Senha</label>
        <input
          type="password"
          nome="password"
          id="password"
          placeholder="Digite sua senha..."
          required
          v-model="password"
        />
        <div class="GDPR">
          <p>
            A Medica App EPP. tem o compromisso de proteger e respeitar sua
            privacidade e nós usaremos suas informações pessoais somente para
            administrar sua conta e fornecer os produtos e serviços que você nos
            solicitou.
          </p>
        </div>
      </div>
      <div class="submit">
        <input type="submit" value="Cadastrar" />
      </div>
      <div class="text">
        <p>
          Já possui cadastro? <router-link to="/login">Entrar.</router-link>
        </p>
      </div>
    </form>
    <img
      src="@/assets/powered.png"
      alt="powered by WHITEYORKIE"
      class="powered"
    />
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      nome: "",
      email: "",
      password: "",
    };
  },
  methods: {
    getData(e) {
      e.preventDefault();
      this.$emit("user-data", this.email, this.password);
    },
  },
};
</script>

<style scoped>
form {
  margin: 25px 0 50px 0;
}
label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-right: 24em;

  color: #272f30;
}
p {
  font-size: 12px;
}
a,
router-link {
  font-weight: 700;
  color: #272f30;
}
input[type="email"],
input[type="text"] {
  font-family: "Montserrat", sans-serif;
  display: block;
  margin: 0 auto 15px auto;
  width: 338px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid #78c4fb;
  border-radius: 4px;
}
input[type="password"] {
  font-family: "Montserrat", sans-serif;
  display: block;
  margin: 0 auto 10px auto;
  width: 338px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid #78c4fb;
  border-radius: 4px;
}
input[type="submit"] {
  font-family: "Montserrat", sans-serif;
  width: 358px;
  height: 50px;

  border-style: none;

  background: #78c4fb;
  border-radius: 4px;
  color: white;
  font-weight: 800;
  font-size: 14px;
  margin: 30px 0 0px 0;
}
input[type="checkbox"] {
  margin: 10px 10px 0 0;
}
::placeholder {
  font-family: "Montserrat", sans-serif;
  color: #7f7f7f;
  font-weight: 500;
  font-size: 14px;
}
/* Center the form on the screen */
.container {
  margin: 50px 0 50px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.logo {
  width: 330px;
  height: auto;
}
.powered {
  width: 200px;
  height: auto;
  margin: 0 0 50px 0;
}
.GDPR {
  text-align: justify;
  width: 358px;
  height: auto;
  margin: auto;
}
.GDPR p,
.GDPR label {
  font-size: 9px;
  font-weight: 500;
  margin: 0;
}
</style>
