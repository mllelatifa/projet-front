<template>
  <div>
    <div v-if="user.role === 'directeur'">
      <nav id="nav-mobile" :class="isActive && 'is-active'">
        <CloseBurger />
        <router-link class="a" to="/contact">Congés des Salariés</router-link>
        <router-link class="a" to="/inscription">inscription</router-link>
        <router-link class="a" to="/dashboardAdmin"
          >Dashboard Admin</router-link
        >
        <router-link class="a" to="/TableauConger">TableauConger</router-link>

        <span @click="deconnexion()" class="a">
          Déconnexion
        </span>
      </nav>
    </div>

    <div v-if="user.role === 'animateur'">
      <nav id="nav-mobile" :class="isActive && 'is-active'">
        <CloseBurger />

        <router-link class="a" to="/accueil">Déposer vos congés</router-link>
        <router-link class="a" to="/dashboard"
          >Validation des congés</router-link
        >
        <router-link class="a" to="/about">Profil</router-link>

        <span @click="deconnexion()" class="a">
          Déconnexion
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
import CloseBurger from "@/components/CloseBurger";
export default {
  components: {
    CloseBurger
  },
  data() {
    return {
      user: this.$store.getters["currentUser"].user,

      isActive: false
    };
  },
  methods: {
    deconnexion() {
      console.log("DECONNEXION ");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("vuex");
      this.$store.dispatch("signout");

      this.$router.push("/");
    }
  },
  created() {
    // $on prend un event-custom en param 1 (string)
    // et exécute un callback (param2) quand l'event survient...
    this.$ebus.$on("toggle-nav-mobile", () => {
      console.log(
        //destion du ebut
        "hey : je suis nav mobile et je réagis à l'event custom <<toggle-nav-mobile>>"
      );
      //fonction elle fait
      this.isActive = !this.isActive;
    });
  }
};
</script>

<style lang="scss" scoped>
#nav-mobile {
  right: 0;
  top: 0;
  position: fixed;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 90px);

  transform: translateX(100%);

  z-index: 1;

  a {
    font-weight: bold;
    color: white;
    margin: 0 10px;
    margin-top: 44px;
    text-decoration: none;
  }

  a:hover {
    height: 25px;
    width: 100%;
    background-color: red;
    font-size: 20px;
  }
  span {
    color: white;
    font-weight: bold;

    margin-top: 44px;
  }
  span:hover {
    height: 25px;
    width: 100%;
    font-size: 20px;
    background-color: red;
  }
}

@media screen and (max-width: 1280px) {
  #nav-mobile.is-active {
    transform: translateX(0);
    height: 100vh;
    background: #1b1464;
  }
}
</style>
