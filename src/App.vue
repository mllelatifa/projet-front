<template>
  <div id="app">
    <header>
      <img class="om" alt="Vue logo" src="./assets/logol.png" />
  <!-- {{currentUserStore}} -->
      <div v-if="currentUser">
        <NavMain />
        <NavMobile />
      </div>
    </header>

    <main id="content-main">
      <!-- affiche la vue en fonction du link -->
      <router-view />
    </main>

    <footer>
      <img class="om" alt="Vue logo" src="./assets/logol.png" />
    </footer>
  </div>
</template>
<script>
import NavMain from "@/components/NavMain";
import NavMobile from "@/components/NavMobile";
// const storage = localStorage.getItem("currentUser");
    //const currentUser = storage ? JSON.parse(storage) : null; // convertir la string JSON en object
export default {
  components: {
    NavMain,
    NavMobile,
  },
 
 

  computed: {
    currentUser() {
      const storage = localStorage.getItem("currentUser");//recuprer le curent user dans le local storage
      const currentUser = storage ? JSON.parse(storage) : null; // convertir la string JSON en object
      this.$store.commit("setUser", currentUser); //stoke dans le store
      return currentUser;//retourne user
    },
  },
};
</script>
<style>
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  flex-direction: column;
}
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}
main{
  min-height: 100vh;
  background-color: #bfe6ff;
}
.om{
  width: 150px;
  width: 150px;
    margin-top: 11px;
    margin-left: -32px;
    margin-bottom: 9px;
}
header {
  width: 100%;
  background-color: #1b1464;
}


nav ul li {
  color: black;
}

footer {
  min-height: 10vh;
  background:  #1b1464;

}

/* ordi */

/* @media screen and (min-width: 1280px) {
  #header-main {
    
    background: #1b1464;
    width: 9%;
    height: 100vh;
    position: fixed;
  }
} */
/*ordinateur portable*/
/* @media screen and (min-width: 1024px) and (max-width: 1279px) {
  #header-main {
  
    background: #1b1464;
    width: 9%;
    height: 100vh;
    position: fixed;
  }
  footer {
    background: #00304b;

    width: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .mobile {
    background: yellow;
  }
  #header-main {

    background: #1b1464; */

/* grand smarphone */
/* }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .mobile {
    background: red;
  }
  #header-main {

    background: #1b1464;
  }
} */
/*smarphone*/
/* @media screen and (min-width: 320px) and (max-width: 480px) {
  #img {
    margin-left: 85px;
  }
  
    background: #1b1464;
  }
} */
</style>
