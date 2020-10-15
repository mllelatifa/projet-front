<template>
  <div>
    <h1>Profil</h1>
    <section>
      <p>Non: {{ user.name }}</p>
      <p>Prénom: {{ user.lastename }}</p>
      <p>
        Date de naissance:
        {{ moment(user.datedenaissance).format("DD/MM/YYYY") }}
      </p>
      <p>Adresse mail: {{ user.email }}</p>
      <p>Numero de télephone: {{ user.tel }}</p>
      <p>mot de passe: *****</p>
      <router-link class="a" :to="'/modificationUser/' + user._id">
        <img class="edit" alt="Vue logo" src="../assets/edit.png" />
      </router-link>

      <profil />
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "about",

  data() {
    return {
      user: this.$store.getters["currentUser"].user
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["currentUser"];
    }
  },

  methods: {


     async getUsers() {
      console.log("kkk");
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/");
      this.user = apiRes.data;
    },
    async modificationUser(id) {
      await axios.patch(process.env.VUE_APP_BACKEND_URL + "/" + id);
      this.currentUser();
      
      
      
    
    }
  }
};
</script>
<style  scoped lang="css">
p {
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 15px;
}
h1 {
  text-align: center;
  color: black;
  background-color: red;
  width: 50%;
}

h2 {
  margin-top: 50px;
}
section {
  background-color: #1b1464;
  width: 50%;
  height: 500px;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #bfe6ff;
}
.edit {
  width: 47px;
  margin-top: 65px;
  color: white;
  background: white;
  border: 2px solid red;
}

</style>