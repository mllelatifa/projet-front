<template>
  <div class="about">
    <h1>Dasboard</h1>
    <form>
      <label>Adresse Mail: </label>
      <input
        v-model="email"
        id="email"
        type="email"
        class="input-text input"
        placeholder="email"
        name="email"
      />
      <label>Numéro de téléphone: </label>
      <input
        v-model="tel"
        id="number"
        type="text"
        class="input-text input"
        placeholder="num"
        name="num"
      />

      <button @click="editUsers($route.params.id)">Confirmer</button>
      <!-- sa recuper le id du lien -->
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      email: "",
      tel: ""
    };
  },
  methods: {
    async getUser(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/" + id
      );
      // ici je recois l'user que je cherche par l'id et je luis donne a mon data user
      this.user = apiRes.data; 
      //je vais allee recuperer l user grace à son id avec le axios ensuite j 'insere cette user qui est dans le api res dans le user data

      this.email = this.user.email;
      this.tel = this.user.tel;
      //le vide tu le remplace pas le nouveau
      // axios retourne TJS les results sous la clé data
    },

    async editUsers(id) {
      console.log(id);
      await axios.patch(process.env.VUE_APP_BACKEND_URL + "/modiUsers/" + id, {
        email: this.email,
        tel: this.tel
      });
      //   je vais modifier  l user grace a son id recuperer en paramettre et je lui envoye les nouvellle donnee
    }
  },

  created() {
    // quand la page est creer la premier fois j 'appel this .getUsers
    try {
      console.log("kkk");

      this.getUser(this.$route.params.id);
      //  this.editUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style  scoped lang="css">
form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  align-content: center;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 100vh;
}
h1,
h2 {
  text-align: center;
}
h2 {
  margin-top: 50px;
}
label {
  margin-left: 10px;
  margin-top: 10px;
  font-weight: bold;
}
button {
  display: block;
}

input {
  display: block;
  text-align: center;
  margin: auto;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid red;
}
button {
  display: block;
  margin-top: 43px;
  margin: auto;
  margin-top: 20px;
  border-radius: 9px;
  height: 32px;
  background: #00304b;
  color: white;
  width: 140px;
}
</style>