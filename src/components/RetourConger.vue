<template>
  <div class="about">
    <h1>Validation</h1>
    <table class="table">
      <thead>
        <th class="date">Date</th>
        <th class="date">Validation</th>
      </thead>
      <tbody>
        <tr v-for="(conger, i) in listConger" :key="i">
          <td data-label="Date">
            du {{ moment(conger.debut).format("DD/MM/YYYY") }} au
            {{ moment(conger.fin).format("DD/MM/YYYY") }}
          </td>
          <td data-label="Validation">
            <span
              v-if="conger.est_valider == 'validé'"
              class="estValide_valide"
              >{{ conger.est_valider }}</span
            >
            <span
              v-else-if="conger.est_valider == 'refuser'"
              class="estValide_refus"
              >{{ conger.est_valider }}</span
            >
            <span v-else class="estValide_enCours">{{
              conger.est_valider
            }}</span>
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
      listConger: []
    };
  },
  methods: {
    async getUsers() {
      const listCongerr = await axios.get(
        process.env.VUE_APP_BACKEND_URL +
          "/conger/animateur/" +
          this.$store.getters["currentUser"].user._id
      );
      console.log("LISTE CONGERS !! >>>> ", listCongerr.data);
      this.listConger = listCongerr.data;
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
.estValide_valide {
  color: green;
  font-weight: bold;
  font-size: 25px;
}

.estValide_refus {
  color: red;
  font-weight: bold;
  font-size: 25px;
}

.estValide_enCours {
  color: gray;
  font-weight: bold;
  font-size: 25px;
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

.table th {
  background: #00304b;
  color: #ffffff;
}

/* ordi */

@media screen and (min-width: 1280px) {
  .table {
    width: 85%;
    border-collapse: collapse;
    margin-top: 22px;
    margin-left: 15%;
  }
  .table td,
  .table th {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 20px;
  }
  .table td::before {
    display: none;
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
  .table td,
  .table th {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 20px;
  }
  .table td::before {
    display: none;
  }
}
/* grand tablette */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 22px;
  }
  .table td,
  .table th {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 29px;
  }
  .table td::before {
    display: none;
  }
}
/* grand smarphone */

@media screen and (min-width: 481px) and (max-width: 767px) {
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
    padding-left: 45%;
    /* text-align: right; */
    /* position: relative; */
    padding-top: 25px;
    font-size: 27px;
  }
}

.table td::before {
  content: attr(data-label);
  position: absolute;
  left: 0;
  width: 50%;
  padding: left;
  font-size: 29px;
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

/*smarphone*/
@media screen and (min-width: 320px) and (max-width: 480px) {
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
    padding-left: 45%;
    /* text-align: right; */
    /* position: relative; */
    padding-top: 25px;
    font-size: 27px;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding: left;
    font-size: 29px;
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
</style>