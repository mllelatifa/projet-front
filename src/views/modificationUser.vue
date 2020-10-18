<template>
  <div class="about">
    <h1>Modification du profil</h1>
    <form>
      <label>Adresse mail: </label>
      <input
        v-model="user.email"
        id="email"
        type="email"
        class="input-text input"
        required
        placeholder="email"
      />
      <label>Numéro de Portable: </label>
      <input
        v-model="user.tel"
        id="number"
        type="text"
        class="input-text input"
        required
        placeholder="tel"
      /><label>Mot de passe: </label>
      <input
        v-model="user.motdepasse"
        id="number"
        type="password"
        class="input-text input"
      
        placeholder="num"
      />
      
       
    
      <button @click.prevent="modificationUser()" :to="'/about/' + user._id" >Confirmer</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {}
    };
  },

  created() {
    this.getCurrentUser();

  },

  methods: {

    
    async modificationUser() {
      const id_user = this.$store.getters["currentUser"].user._id;

    try {
      const userModified = await axios.patch(process.env.VUE_APP_BACKEND_URL + "/updateUser/" + id_user,
      {
        email: this.user.email,
        //onfait un nouveau objet et on lui envoyer la nouvelle valeur
        tel: this.user.tel,
        motdepasse: this.user.motdepasse === "" ? null : this.user.motdepasse,
      })

      this.$store.commit("setUser",userModified);
      
    } catch (error) {
      console.error(error)
    }

      
  },
    
    getCurrentUser() {
      this.user.motdepasse = "";
      this.user.tel = this.$store.getters["currentUser"].user.tel; //on donne le store au data
      this.user.email = this.$store.getters["currentUser"].user.email;
       
   

  
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