<template>
  <transition mode="out-in" name="fade">
    <home-component />
  </transition>
</template>

<script>
import HomeComponent from "@/views/HomeComponent";

export default {
  components: {
    "home-component": HomeComponent,
  },
  name: "App",
};
</script>