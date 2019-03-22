<template>
  <v-card width="230px" flat>
    <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="250px"></v-img>

    <div>
      <v-layout justify-start mt-2>
        <strong>{{product.name}}</strong>
      </v-layout>
    </div>
    <div>
      <v-layout justify-start mt-1>
        <v-icon color="yellow">star</v-icon>
        <v-icon color="yellow">star</v-icon>
        <v-icon color="yellow">star</v-icon>
        <v-icon color="yellow">star</v-icon>
        <v-icon>star_border</v-icon>
      </v-layout>
    </div>
    <div>
      <v-layout justify-start mt-1>
        <span class="grey--text">{{product.amount | currency("₦", 2) | commas}}</span>
      </v-layout>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
