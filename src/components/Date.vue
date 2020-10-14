<template>
  <div>
    <form>
      <label for="dated"> Période du</label>
      <input v-model="conger.debut" id="dated" type="date" />
      <label for="date"> au</label>
      <input v-model="conger.fin" id="date " type="date" />
      <button @click.prevent="postConger()">Envoyer la demande</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      conger: {
        id_user: this.$store.getters["currentUser"].user._id,
        debut: "",
        fin: "",
        jours: ""
      }
    };
  },
  methods: {
    async postConger() {
      // async il va dire au js  cette fonction est unne function asyscron
      //await

      // axio permet de faire  des requetes
      //  dans ce cas precit nous fesesont une mise à jour (patch )
      //  cette demande de mise à jours (donc patch ) il attent deux parametre l'url et un objet
      //l url est celui de mon back et l objet contient les donner de l'user qui vont etre modifier
      // const apiRes = await axios.patch(process.env.VUE_APP_BACKEND_URL + "/conger/" + this.conger._id, {debut:this.debut,fin:this.fin});

      //  dans un 1 er temps  await donnera a l api res une promess (c est un objet )
      // l 'orque axio ptch aura fini sont travail (donc mettre a jour l user ) il donnera les donner a api res'

      //  console.log(apiRes.data)
      // this.debut = apiRes.data;
      //  axios retourne TJS les results sous la clé data

      // let debut = moment([this.conger.debut]);
      // let fin = moment([this.conger.fin]);

      this.conger.jours =
        moment(this.conger.fin).diff(moment(this.conger.debut), "days") + 1;

      const restantsUser = this.$store.getters["currentUser"].user.restants;
      if (
        moment().isBefore(this.conger.debut) ||
        moment().isBefore(this.conger.fin)
      ) {
        if (moment(this.conger.fin).isBefore(this.conger.debut)) {
          alert("LA DATE DE FIN NE DOIT PAS ETRE AVANT CELLE DU DEBUT");
        } else {
          if (this.conger.jours >= restantsUser)
            alert("le nombre de jour est insuffisant");
          else {
            await axios
              .post(process.env.VUE_APP_BACKEND_URL + "/conger/conger", {
                ...this.conger
              })
              .then(res => {
                alert("Vos date ont était pris en compte");
                console.log(res);
              })
              .catch(err => {
                console.log(err);
                alert("une erreur c'est produit");
              });
          }
        }
      } else {
        // si la date de debut ou de fin est avant celle d'aujourd'hui, c'est le else qui est executé (donc le resultat est false)
        //verifier la date selection et avant la date de aujourdhui
        alert("mauvais date reveil toi");
      }
    },
    //  axios retourne TJS les results sous la clé data

    // une fois que le component a etait cree, la function created  sera executer juste aprer
    created() {
      try {
        this.postConger();
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
<style scoped>
button {
  width: 150px;
  height: 39px;
  border-radius: 15px;
  background: #c60232;
  color: white;
  border: 2px solid white;
  margin-top: 35px;
}

input {
  border-radius: 7px;
  padding-top: 12px;
  width: 250px;
  margin-top: 34px;
  padding-left: 8px;
  border: 2px solid gray;
}

label {
  margin-top: 33px;
  font-size: 20px;
  font-weight: bold;
}

@media screen and (min-width: 1300px) {
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-repeat: no-repeat;
    background-color: #8dd8f8;
    align-items: center;
    background-image: url("../assets/job.png");
    min-height: 100vh;
  }
}

@media screen and (min-width: 1024px) {
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-repeat: no-repeat;
    background-color: #8dd8f8;
    align-items: center;
    min-height: 100vh;
  }
}

@media screen and (min-width: 680px) and (max-width: 1023px) {
  /* formulaire */
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #8dd8f8;
    min-height: 100vh;
    align-items: center;
  }
}

@media screen and (max-width: 679px) {
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #8dd8f8;
    min-height: 100vh;
    align-items: center;
  }
}
</style>