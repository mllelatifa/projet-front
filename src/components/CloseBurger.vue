<template>
  <font-awesome-icon id="times" icon="times" @click="toggleNavMobile" />
</template>

<script>
// https://github.com/FortAwesome/vue-fontawesome
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  methods: {
    toggleNavMobile() {
      //defini la fonction je la met dans le ebu toogle nav mobile

      this.$ebus.$emit("toggle-nav-mobile");

      //  ebus permet de recuperer les information du frere sans passer par le parent
      // le emi permet d envoyer a c 'est frere'
      // ebus sa relis le emit ou le on car il sont pas parent  il envoyer ebus pour l atictive la nav
    }
  }
};
</script>

<style scoped>
#times {
  color: white;
}
#times:hover {
  color: red;
  font-size: 30px;
}
</style>
