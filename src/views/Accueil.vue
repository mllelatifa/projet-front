<template>
  <section id="div">
    <h1>Bonjour {{ user.name }} {{ user.lastename }}</h1>
    <p>Il vous reste {{ user.restants }} jours de congés</p>

    <Date />
  </section>
</template>

<script>
import Date from "@/components/Date.vue";

export default {
  components: {
    Date
  },
  data() {
    return {
      user: this.$store.getters["currentUser"].user
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["currentUser"];
    }
  }
};
</script>

<style scoped lang="css">
@media screen and (min-width: 1300px) {
  p {
    text-align: center;

    font-size: 40px;
    font-weight: bold;
    color: black;
    position: absolute;

    top: 35%;
    left: 58%;
  }
  h1 {
    text-align: center;

    font-size: 40px;
    font-weight: bold;
    color: black;
    position: absolute;

    top: 30%;
    left: 58%;
  }
}
@media screen and (min-width: 1024px) {
  h1 {
    position: absolute;
    top: 29%;
    left: 38%;
  }
  p {
    position: absolute;
    top: 36%;
    left: 38%;
    font-size: 25px;
  }
}

@media screen and (min-width: 680px) and (max-width: 1023px) {
  /* formulaire */
  h1 {
    position: absolute;
    top: 29%;
    left: 35%;
  }
  p {
    position: absolute;
    top: 36%;
    left: 35%;
    font-size: 25px;
  }
}

@media screen and (max-width: 679px) {
  h1 {
    position: absolute;
    top: 29%;
    left: 10%;
  }
  p {
    position: absolute;
    top: 36%;
    left: 10%;
    font-size: 25px;
  }
}
</style>
