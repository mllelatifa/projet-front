<template>
  <font-awesome-icon id="burger"  icon="bars"   @click="toggleNavMobile" />
 
</template>

<script>
// https://github.com/FortAwesome/vue-fontawesome
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faBars);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  
  methods: {
    toggleNavMobile() {
      console.log("clicked burger", this.$ebus);
      this.$ebus.$emit("toggle-nav-mobile");
    }
  
}}
</script>

<style scoped lang="css">
#burger {
  cursor: pointer;
  visibility: hidden;
}

 @media screen and (max-width: 1280px) 
{#burger{
  visibility: hidden;
}} 
/*ordinateur portable*/
@media screen and (min-width: 1024px) and (max-width: 1279px)
{#burger{
  visibility: hidden;
}} 
/* grand tablette */

@media screen and (min-width: 768px) and (max-width: 1023px)
{
  #burger{
    visibility: visible;

    position: absolute;
    right: 13px;
    /* left: 375px; */
    top: 94px;
    color: white;
  }
} 
/* grand smarphone */

 @media screen and (min-width: 481px) and (max-width: 767px){
#burger{
    visibility: visible;
    
      color: white;
    position: absolute;
    right: 13px;

    top: 74px;
  }
} 
/*smarphone*/
 @media screen and (min-width: 280px) and (max-width: 480px)
{#burger{
    visibility: visible;
   color: white;
    position: absolute;
    right: 13px;

    top: 74px;
       
  }}

</style>

