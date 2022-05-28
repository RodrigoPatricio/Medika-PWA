<template>
  <div class="container">
    <img class="logo" alt="Medika logo" src="../assets/logo.png" />
    <form action="post" @submit="getData">
      <div class="email">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
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
          name="password"
          id="password"
          placeholder="Digite sua senha..."
          required
          v-model="password"
        />
      </div>
      <div class="text">
        <p>
          Esqueceu sua senha? <router-link to="/login">Clique aqui.</router-link>
        </p>
      </div>
      <div class="submit">
        <input type="submit" value="Entrar"/>
      </div>
      <div class="text">
        <p>
          Não tem uma conta?
          <router-link to="/signup">Cadastre-se.</router-link>
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
  name: "LoginForm",
  data() {
    return {
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
/* Center the form on the screen */
.container {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 100%;
  height: auto;
  padding: 50px 0 50px 0;
}
form {
  margin: 50px 0 75px 0;
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
  margin: 0 auto 0px auto;
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
  margin: 30px 0 0 0;
}
::placeholder {
  font-family: "Montserrat", sans-serif;
  color: #7f7f7f;
  font-weight: 500;
  font-size: 14px;
}
.logo {
  width: 330px;
  height: auto;
}
.powered {
  width: 200px;
  height: auto;
}
</style>
