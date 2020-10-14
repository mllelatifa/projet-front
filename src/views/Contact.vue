<template>
  <div class="about">
    <h1>Congés des Salariés</h1>
    <table class="table">
      <thead>
        <th class="date">Nom</th>
        <th class="date">Prénom</th>
        <th class="date">Date de naissance</th>
        <th class="date">Nombre de congés acquis</th>
        <th class="date">Nombre de jour</th>
        <th>Date de congés souhaitées</th>
        <th class="date">Validation des congés</th>
      </thead>
      <tbody v-if="listConger.length != 0">
        <tr v-for="(conger, i) in listConger" :key="i">
          <td data-label="Nom">{{ conger.id_user.lastename }}</td>
          <td data-label="Prénom">{{ conger.id_user.name }}</td>
          <td data-label="Date de naissance">
            {{ moment(conger.id_user.datedenaissance).format("DD/MM/YYYY") }}
          </td>
          <td data-label="Nombre de  congés acquis">
            {{ conger.id_user.restants }}
          </td>
          <td data-label="Nombre de  jour">{{ conger.jours }}</td>
          <td data-label="Date de congés souhaitées">
            {{ moment(conger.debut).format("DD/MM/YYYY") }} au
            {{ moment(conger.fin).format("DD/MM/YYYY") }}
          </td>
          <td data-label="Validation des congés">
            <!-- ici nous utilisons la fonction PatchUsers et nous donnons deux paramètres : le conger que l'on souhaite modifier et le boolean -->
            <button @click="PatchUsers(conger, true)">accepter</button>
            <!-- si ce bouton est cliqué, nous envoyons le congé ainsi que un true -->
            <button @click="PatchUsers(conger, false)">Refuser</button>
          </td>
          <!-- si ce bouton est cliqué, nous envoyons le congé ainsi que un false -->
        </tr>
      </tbody>
      <tbody v-else>
        YA RIEN DU TOUT !
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
        process.env.VUE_APP_BACKEND_URL + "/conger/conger"
      );
      console.log(listCongerr);

      this.listConger = listCongerr.data.filter(
        conger => conger.est_valider == "en cours"
      );
    },
    async PatchUsers(conger, validation) {
      var statut = "";
      if (validation === true) {
        statut = "validé";
      } else statut = "refuser";

      if (conger.jours > conger.id_user.restants && statut == "validé")
        alert("CONGER NON ACCEPTER HEHEHHEEHEHHEHE TROP DE JOURS");
      else {
        conger.est_valider = statut;

        await axios.patch(
          process.env.VUE_APP_BACKEND_URL +
            "/conger/conger/id_user/" +
            conger._id,
          conger
        );
        var restants = conger.id_user.restants - conger.jours;
        console.log(restants);

        if (statut == "validé")
          await axios.patch(
            process.env.VUE_APP_BACKEND_URL +
              "/changeRestants/" +
              conger.id_user._id,
            { restants }
          );
        this.getUsers();
      }
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

