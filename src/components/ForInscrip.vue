<template>
  <form >
    <p>Inscription des salariés</p>

   
    <input
      id="nom"
      type="text"
      class="input-text input"
      placeholder="nom"
      v-model="post.name"
    />
    <input
      id="prenom"
      type="text"
      class="input-text input"
      placeholder="prénom"
      v-model="post.lastename"
    />
    <input
      id="email"
      type="email"
      class="input-text input"
      placeholder="votre mail"
      required
      v-model="post.email"
    />

    <input
      id="password"
      type="password"
      class="input-text input"
      placeholder="Entre un mot de passe"
      name="password"
      required
      v-model="post.motdepasse"
    />

    <input
      type="date"
      placeholder="entrer la date de naissance "
      v-model="post.datedenaissance"
      required
    />
    <input
      type="number"
      placeholder="entrer le numéro de téléphone "
      v-model="post.tel"
      required
    />

    <button @click.prevent="register" type="submit">Valider</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        name: "",
        lastename: "",
        email: "",
        motdepasse: "",
        datedenaissance: "",
        tel: ""
      }
    };
  },

  methods: {
    register() {
      axios
        .post(process.env.VUE_APP_BACKEND_URL + "/", { ...this.post })
        // axios post a deux parametre un string et un objet le l url du back  et le deuxieme paramettre il prend l Object
        // user'
        .then(res => {
   
          alert("Votre enregistrement s'est déroulée avec succès");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          alert("Cette utilisateur existe déjà");
        });

    }
  }
};
</script>

<style scoped lang="css">
h1 {
  color: white;
}
p {
  padding: 7px 0 4px 0;
  border-bottom: 3px solid #c60232;
  font-size: 30px;
  color: #000;
}

@media screen and (min-width: 1300px) {
}

@media screen and (min-width: 1024px) {
  form {
    padding: 73px 10px 9px 74px;
    width: 50%;

    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
    margin: auto;
    position: relative;
    top: 54px;
    padding-top: 12px;
  }

  main {
    background: #c60232;
    min-height: 100vh;
  }
  button {
    width: 150px;
    height: 39px;
    border-radius: 15px;
    background: #c60232;
    color: white;
    border: 2px solid white;
    /* margin-top: 35px; */
    display: block;
    margin: auto;
    margin-top: 18px;
    margin-left: 87px;
  }
  input {
    display: block;
    border-radius: 7px;
    margin-left: 45px;
    padding-top: 12px;
    width: 250px;
    margin-top: 34px;
    padding-left: 8px;
    border: 2px solid gray;
  }
  a {
    position: relative;
    left: 270px;
  }
}

@media screen and (min-width: 680px) and (max-width: 1023px) {
  /* formulaire */
  form {
    padding: 73px 10px 9px 74px;
    width: 50%;

    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
    margin: auto;
    position: relative;
    top: 144px;
  }

  button {
    width: 150px;
    height: 39px;
    border-radius: 15px;
    background: #c60232;
    color: white;
    border: 2px solid white;
 
    margin-left: 87px;
    margin: auto;
    margin-top: 18px;
 
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
