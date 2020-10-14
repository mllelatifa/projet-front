<template>
  <header>
    <div v-if="user.role === 'directeur'">
      <nav id="nav-main" class="mobile">
        <ul>
          <IconBurger />

          <li>
            <router-link class="a" to="/contact"
              >Congés des Salariés</router-link
            >
          </li>
          <li>
            <router-link class="a" to="/inscription">inscription</router-link>
          </li>
          <li>
            <router-link class="a" to="/dashboardAdmin"
              >Dashboard Admin</router-link
            >
          </li>
          <li>
            <router-link class="a" to="/TableauConger"
              >TableauConger</router-link
            >
          </li>
        </ul>
        <span @click="deconnexion()" class="a">
          Déconnexion
        </span>
      </nav>
    </div>

    <div v-if="user.role === 'animateur'">
      <nav id="nnav-main" class="mobile">
        <ul>
          <IconBurger />
          <li>
            <router-link class="a" to="/accueil"
              >Déposer vos congés</router-link
            >
          </li>
          <li>
            <router-link class="a" to="/dashboard"
              >Validation des congés</router-link
            >
          </li>
          <li><router-link class="a" to="/about">Profil</router-link></li>
        </ul>

        <span @click="deconnexion()" class="a">
          Déconnexion
        </span>
      </nav>
    </div>
  </header>
</template>

<script>
import IconBurger from "@/components/IconBurger";
export default {
  data() {
    return {
      user: this.$store.getters["currentUser"].user
    };
  },
  components: {
    IconBurger
  },

  methods: {
    deconnexion() {
      console.log("DECONNEXION ");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("vuex");
      this.$store.dispatch("signout");

      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="css">
#imgnav {
  width: 100px;
  margin-left: 42px;
}

/* ordi */

@media screen and (min-width: 1280px) {
  .a {
    display: block;
    color: white;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }
  .a:hover {
    text-decoration: underline;
    background: red;
  }
  header nav {
    border: 2px solid red;
    width: 15%;

    position: fixed;
    background: #1b1464;
  }
}
/*ordinateur portable*/
@media screen and (min-width: 1024px) and (max-width: 1279px) {
  #nav-mobile {
    display: none;
  }
  .a {
    text-decoration: none;
    display: block;
    color: white;
    line-height: 50px;
    text-align: center;
  }
  .a {
    display: block;
    color: white;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }
  .a:hover {
    text-decoration: underline;
    background: red;
  }
  header nav {
    border: 2px solid red;
    width: 15%;
    /* height: 100vh; */
    position: fixed;
    background: #1b1464;
  }
}
/* grand tablette */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .a {
    display: none;
  }
}
/* grand smarphone */

@media screen and (min-width: 481px) and (max-width: 767px) {
  li,
  .a {
    display: none;
  }
}
/*smarphone*/
@media screen and (min-width: 280px) and (max-width: 480px) {
  li,
  .a {
    display: none;
  }
}
</style>
