<template>
  <div>
    <header>
      <nav>
        <div class="logo">
          <img src="images/logo.svg" alt />
        </div>
      </nav>
    </header>
    <section class="top_section">
      <div class="input_container">
        <search-component/>
      </div>
    </section>
    <section class="first_section">
      <div class="container">
        <div class="heading">
          <h2>Merchants</h2>
        </div>
        <div class="sub_heading">
          <a href class="active">All</a>
          <a href>Service Merchants</a>
          <a href>Product Merchants</a>
        </div>
      </div>
      <div class="container">
  <div class="filters">
    <div class="drop">
      <button @click="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-filter"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
        </svg>
        <span>Filters</span>
      </button>
      <div class="menu" ref="menu"  @click="toggle">
        <ul>
          <li class="active">
            <a href>None</a>
          </li>
          <li>
            <a href>Popularity</a>
          </li>
          <li>
            <a href>Newest Arrival</a>
          </li>
          <li>
            <a href>Price: Low to High</a>
          </li>
          <li>
            <a href>Price: High to Low</a>
          </li>
          <li>
            <a href>Rating: Low to High</a>
          </li>
          <li>
            <a href>Rating: High to Low</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
      </div>
    </section>

    <section class="second_section">
      <div class="container">
        <div class="images_container">
          <div class="inner_images">
            <div class="image" v-for="item in datas" :key="item.id">
              <img :src="'https://picsum.photos/500/500?random='+item.id" />
              <div class="text">
                <div class="name">&#8358; {{item.price | currency}} </div>
                <div class="location"> {{item.first_name}}, {{item.last_name}}</div>
              </div>
              <div class="rating">
                <span>{{item.rating}}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-star"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";
import json from '@/assets/data.json';
// Mixins
import filter from "@/mixins/filter";
export default {
  mixins: [filter],
  name: "HomeComponent",
    components: {
    "search-component": SearchComponent,
  },
  data(){
    return {
      datas: []
    }
  },
  mounted(){
    this.datas = [...json];
  }

};
</script>