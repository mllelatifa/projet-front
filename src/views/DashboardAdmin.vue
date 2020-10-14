<template>
  <section class="about">
    <h1>Dashboard</h1>
    <table class="table">
      <!-- planning des ateliers avec un lien en redirection sur le formulaire d'inscription-->
      <thead>
        <th class="date">Nom</th>
        <th class="date">Prénom</th>
        <th class="date">Date de naissance</th>
        <th class="date">email</th>
        <th>tel</th>

        <th class="date">modification</th>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="i">
          <td data-label="Nom">{{ user.name }}</td>
          <td data-label="Prénom">{{ user.lastename }}</td>
          <td data-label="Date de naissance">
            {{ moment(user.datedenaissance).format("DD/MM/YYYY") }}
          </td>
          <td data-label="email">{{ user.email }}</td>
          <td data-label="tel">{{ user.tel }}</td>
          <td data-label="modification">
            <p @click="removeUsers(user._id)">
              <img class="edit" alt="Vue logo" src="../assets/supp.png" />
            </p>
            <router-link class="a" :to="'/Editusers/' + user._id"
              ><img class="edit" alt="Vue logo" src="../assets/edit.png"
            /></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
// import {APIHandler} from "../hand/handler"

// const api=new APIHandler("users")

import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUsers() {
      console.log("kkk");
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/");
      this.users = apiRes.data;
    },

    async removeUsers(id) {
      await axios.delete(process.env.VUE_APP_BACKEND_URL + "/" + id);
      this.getUsers();
    },
    async editUsers(id) {
      await axios.patch(process.env.VUE_APP_BACKEND_URL + "/modiUsers/" + id);
      this.getUsers();
    }
  },

  created() {
    // quand la page est creer la premier fois j 'appel this .getUsers
    try {
      console.log("kkk");

      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style  scoped lang="css">
h1,
h2 {
  text-align: center;
}
h2 {
  margin-top: 50px;
}
label {
  margin-left: 10px;
}
button {
  display: block;
}
form {
  text-align: center;
  background: white;
  width: 50%;
  margin: auto;
  height: 202px;

  margin-top: 43px;
}
p img {
  width: 50px;
}
a img {
  width: 50px;
}
input {
  margin-top: 74px;
}
button {
  display: block;
  margin-top: 43px;

  border-radius: 9px;
  height: 32px;

  width: 140px;
}

.table td,
.table th {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 16px;
}
.table th {
  background: #00304b;
  color: #ffffff;
}

@media screen and (max-width: 767px) {
  .table th {
    display: none;
  }
  .table tr {
    margin-bottom: 15px;
  }
  .table,
  .table tbody,
  .table td,
  .table tr {
    display: block;
    width: 100%;
  }
  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding: left;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
  }
  h1 {
    font-size: 25px;
    text-align: center;
    padding-top: 11px;
  }
  form {
    text-align: center;
    display: block;
  }
  input {
    display: block;
    margin: auto;
  }
  button {
    margin-top: 25px;
    border-radius: 8px;
    height: 26px;
    background: #00304b;
    color: whitesmoke;
  }
  button:hover {
    background: white;
    color: black;
    font-weight: bold;
  }
}

/* ordi */

@media screen and (min-width: 1280px) {
  .table {
    width: 85%;
    border-collapse: collapse;
    margin-top: 22px;
    margin-left: 15%;
  }
}
/*ordinateur portable*/
@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .table {
    width: 85%;
    border-collapse: collapse;
    margin-top: 22px;
    margin-left: 15%;
  }
}
/* grand tablette */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 22px;
  }
}
/* grand smarphone */

@media screen and (min-width: 481px) and (max-width: 767px) {
}
/*smarphone*/
@media screen and (min-width: 320px) and (max-width: 480px) {
}
</style>