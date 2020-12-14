<template>
  <div class="input" ref="input">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-search"
      width="56"
      height="56"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="10" cy="10" r="7" />
      <line x1="21" y1="21" x2="15" y2="15" />
    </svg>
    <form action @submit.prevent="search">
      <input type="text" placeholder="Search.." v-model="value" />
    </form>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="close"
      width="56"
      height="56"
      @click="removeString"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  watch: {
    value(val) {
      if (val != "") {
        this.$refs["input"].classList.add("typing");
      } else {
        this.$refs["input"].classList.remove("typing");
        this.removeString();
      }
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.value);
    },
    removeString() {
      this.$emit("reset");
      this.value = "";
    },
  },
};
</script>