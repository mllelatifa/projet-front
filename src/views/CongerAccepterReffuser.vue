<template>
  <div>
    <Accepter />
    <Refuser />
  </div>
</template>

<script>
import Accepter from "@/components/TableAccep";
import Refuser from "@/components/TableRefus";
export default {
  components: {
    Accepter,
    Refuser
  }
};
</script>