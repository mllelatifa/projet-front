<template>
  <div id="container">
    <form action>
      <p>Authentification</p>

      <input
        id="email"
        type="email"
        class="input-text input"
        placeholder="Identifiant"
        v-model="user.email"
      />

      <input
        id="password"
        :type="visible"
        class="input-text input"
        placeholder="Mot de passe"
        v-model="user.motdepasse"
      />

      <a @click="afficherLeMotDePasse()" v-if="visible == 'password'"
        >afficher
      </a>
      <a @click="cacherLeMotDePasse()" v-if="visible == 'text'">cacher </a>

      <button @click.prevent="login" type="submit">Connecter</button>
      <span>
        <a href>Mot de passe oublié ?</a>
      </span>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      visible: "password",
      user: {
        email: "",
        motdepasse: "",
        
      }
    };
  },
  methods: {
    login() {
      axios
        .post(process.env.VUE_APP_BACKEND_URL + "/auth/login", { ...this.user })
        .then(res => {
          localStorage.setItem("currentUser", JSON.stringify(res.data)); // stock l'user connecté en JSON dans le localStorage

          this.$store.commit("setUser", res.data); //stoke dans le store
         
          this.$router.push({ path: "accueil" });
        })
        .catch(err => {
          console.log("err-------->", err);
          alert("Identifiant ou mot de passe incorrecte");
        });
    },
    afficherLeMotDePasse() {
      this.visible = "text";
    },
    cacherLeMotDePasse() {
      this.visible = "password";
    }
  }
};
</script>

<style scoped lang="css">
p {
  text-align: center;
  font-size: 30px;
  color: #000;
}
footer {
  min-height: 500px;
}
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  width: 150px;
  height: 39px;
  border-radius: 15px;
  background: #c60232;
  color: white;
  border: 2px solid white;
  margin-top: 35px;
  margin-left: 45px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
input {
  border-radius: 7px;
  padding-top: 12px;
  width: 250px;
  margin-top: 34px;
  padding-left: 8px;
  border: 2px solid gray;
}
a {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 9px;
}
@media screen and (max-width: 679px) {
  form {
    display: flex;

    justify-content: center;

    align-content: center;
    display: grid;
    min-height: 100vh;
  }
  button {
    width: 150px;
    height: 39px;
    border-radius: 15px;
    background: #c60232;
    color: white;
    border: 2px solid white;

    margin: auto;
    margin-top: 18px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: black;
    display: grid;
    margin-left: 59px;
    margin-top: 14px;
  }
  a:hover {
    color: blue;
  }
  button:hover {
    background-color: black;
    color: white;
    border: 2px solid #c60232;
    cursor: pointer;
  }
  main {
    background: #c60232;
  }
  input {
    border-radius: 7px;
    margin: auto;
    padding-top: 12px;
    width: 250px;
    margin-top: 34px;
    padding-left: 8px;
    border: 2px solid gray;
  }
}
</style>
