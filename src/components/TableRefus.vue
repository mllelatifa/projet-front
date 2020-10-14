<template>
  <div class="about">
    <h1>Refuser</h1>
    <table class="table">
      <thead>
        <th class="date">Prénom</th>
        <th class="date">Nom</th>

        <th class="date">dateconger</th>
      </thead>

      <tbody>
        <tr v-for="(conger, i) in Conger" :key="i">
          <td data-label="Prénom">{{ conger.id_user.name }}</td>
          <td data-label="Nom">{{ conger.id_user.lastename }}</td>

          <td data-label="dateconger">
            du {{ moment(conger.debut).format("DD/MM/YYYY") }} au
            {{ moment(conger.fin).format("DD/MM/YYYY") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      Conger: []
    };
  },
  methods: {
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/conger/conger"
      );
      console.log(apiRes.data);

      this.Conger = apiRes.data.filter(
        conger => conger.est_valider == "refuser"
      );
    }
  },

  created() {
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
td {
  background-color: red;
  color: white;
  font-weight: bold;
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
input {
  margin-top: 74px;
}
button {
  display: block;
  margin-top: 43px;
  border-radius: 9px;
  height: 32px;
  background: #00304b;
  color: white;
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