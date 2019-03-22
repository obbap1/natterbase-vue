<template>
  <v-app>
    <v-toolbar color="white">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="text-none">How it works</v-btn>
        <v-btn flat class="text-none">Log In</v-btn>
        <hr width="0" size="30" class="horizontal_bar">
        <v-btn flat color="green --text" class="text-none">Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-flex mt-5>
      <v-container fluid>
        <v-card flat>
          <v-layout row>
            <v-img :src="require('../assets/logo.png')" alt="logo" height="40" width="270"/>
            <div class="searchDiv">
              <v-layout row>
                <v-icon>search</v-icon>
                <h4 id="placeHolder">Search for products</h4>
                <v-flex justify-end>
                  <v-btn color="yellow ligthen-5" depressed class="white--text">SEARCH</v-btn>
                </v-flex>
              </v-layout>
            </div>
            <v-card-text>
              <v-badge color="red" center overlap>
                <template v-slot:badge>
                  <v-icon small></v-icon>
                </template>
                <v-icon medium>shopping_cart</v-icon>
              </v-badge>

              <v-badge color="red" center overlap>
                <template v-slot:badge>
                  <v-icon small></v-icon>
                </template>
                <v-icon medium>favorite</v-icon>
              </v-badge>

              <v-badge color="red" center overlap>
                <template v-slot:badge>
                  <v-icon small></v-icon>
                </template>
                <v-icon medium>notifications_none</v-icon>
              </v-badge>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-container>
    </v-flex>
    <v-flex>
      <v-container fluid>
        <v-layout row>
          <v-flex xs4 ml-3 pr-4>
            <v-card>
              <v-toolbar color="green" dark>
                <v-toolbar-title class="text-xs-center">CATEGORIES</v-toolbar-title>

                <v-spacer></v-spacer>
              </v-toolbar>

              <v-list two-line v-if="categories">
                <template v-for="(item, index) in categories">
                  <v-list-tile :key="item.id">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>chevron_right</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-divider v-if="index + 1 < categories.length" :key="index"></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex xs8 mr-5>
            <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="450"/>
            <div id="textOverlay" class="white--text">
              <h1>NEW COLLECTION</h1>
              <p>
                It is a long established fact that a reader will be distracted by the readable
                <br>content of a page when looking at its layout
              </p>
              <v-btn depressed outline="none" color="yellow">SHOP NOW</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex mt-3 xs12 ml-3 mr-5>
      <v-container fluid>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div>
                <strong>EXPLORE POPULAR CATEGORIES</strong>
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-layout row mt-5 v-if="products">
            <v-flex ml-5 v-for="(item,i) in products " :key="i">
              <product-card :product="item"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-flex>
    <v-flex mt-3 xs12 ml-3 mr-5>
      <v-container fluid>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div>
                <strong>EXPLORE NEW STUFFS</strong>
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-layout row mt-5 v-if="products">
            <v-flex ml-5 v-for="(item,i) in products " :key="i">
              <product-card :product="item"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-flex>
    <v-flex mt-5 xs12 ml-4 mr-4>
      <v-footer height="auto" color="grey darken-4" class="grey--text">
        <v-layout justify-center row wrap>
          <v-flex mt-5>
            <v-layout justify-start mt-5 ml-3>
              <h3>PAYSMOSMO</h3>
            </v-layout>
            <v-layout justify-start mt-3 mb-5 ml-3>
              <p>
                Help give out inventory loans to
                <br>cooperative members with ease.
              </p>
            </v-layout>
          </v-flex>
          <v-flex mt-5>
            <v-layout justify-start mt-5 ml-5>
              <h3>Contact</h3>
            </v-layout>
            <v-layout justify-start mt-2 ml-5>
              <p>Registration</p>
            </v-layout>
            <v-layout justify-start ml-5>
              <p>About Us</p>
            </v-layout>
            <v-layout justify-start ml-5 mb-5>
              <p>Contact Us</p>
            </v-layout>
          </v-flex>
          <v-flex mt-5>
            <v-layout justify-start mt-5 ml-5>
              <h3>Help</h3>
            </v-layout>
            <v-layout justify-start mt-2 ml-5>
              <p>Privacy Policy</p>
            </v-layout>
            <v-layout justify-start ml-5>
              <p>How it works</p>
            </v-layout>
            <v-layout justify-start ml-5>
              <p>Terms and Conditions</p>
            </v-layout>
          </v-flex>
          <v-flex mt-5 xs3>
            <v-layout mt-5>
              <h3>Stay Connected</h3>
            </v-layout>
            <v-layout row mt-2>
              <v-icon dark>book</v-icon>
              <v-icon dark>book</v-icon>
              <v-icon dark>book</v-icon>
            </v-layout>
          </v-flex>
          <v-flex mt-5>
            <v-layout mt-5 row>
              <h3>Back To Top</h3>
              <v-icon dark @click="windowScroll">expand_less</v-icon>
            </v-layout>
          </v-flex>
          <v-flex black py-3 text-xs-center white--text xs12>
            &copy;2018
            <strong>PAYSMOSMO</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-flex>
  </v-app>
</template>

<script>
import axios from 'axios';
import ProductCard from '../components/productCard.vue';

// Configure base url
axios.defaults.baseURL = 'https://demo4507124.mockable.io';

// Access token
const token = 'ki494034jkjdfsi49e8943iufkljfdkj4oi3uu498usajhasdfoi4jkjfi434';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      categories: null,
      products: null,
    };
  },
  methods: {
    // Fetch data for categories and products
    fetchData(url, store) {
      axios({
        method: 'get',
        url,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'x-access-token',
          'x-access-token': token,
        },
      })
        .then((response) => {
          console.log('categories', response.data);
          store = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    windowScroll() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    // this.fetchData('categories',this.categories);
    // this.fetchData('products',this.products);

    /* API fallback, local data */

    this.categories = [
      {
        id: '1',
        name: 'Mens',
      },
      {
        id: '2',
        name: 'WoMens',
      },
      {
        id: '3',
        name: 'ForMens',
      },
      {
        id: '4',
        name: 'XMens',
      },
      {
        id: '5',
        name: 'MEnMens',
      },
    ];

    this.products = [
      {
        name: 'Lorem Ipsum',
        amount: '15000',
        rating: '4',
      },
      {
        name: 'Lorem Ipsum',
        amount: '15000',
        rating: '4',
      },
      {
        name: 'Lorem Ipsum',
        amount: '15000',
        rating: '4',
      },
      {
        name: 'Lorem Ipsum',
        amount: '15000',
        rating: '4',
      },
    ];
  },
  mounted() {},
};
</script>

<style>
.horizontal_bar {
  background-color: black;
  margin-top: 18px;
}
.v-toolbar__items .v-btn {
  font-weight: bold;
}
.searchDiv {
  background-color: rgb(248, 247, 247);
  width: 3100px;
  height: 40px;
  margin-left: 90px;
}
#placeHolder {
  font-weight: normal;
  color: grey;
  margin: 11px 0px 0px 7px;
  width: 150px;
}
.searchDiv i {
  margin: 4px 0px 0px 4px;
}
.searchDiv button {
  margin: 0px 0px 0px 400px;
  height: 40px;
}
.v-card__text i {
  margin-left: 26px;
  color: black !important;
}
.v-card__text {
  margin-top: -9px;
}
.v-badge--overlap .v-badge__badge {
  top: 0px;
  right: 8px;
  width: 20%;
  height: 30%;
}
#textOverlay {
  position: absolute;
  text-align: left;
  margin: -260px 0px 0px 70px;
}
#textOverlay h1 {
  font-size: 50px;
  font-weight: normal;
}
#textOverlay p {
  font-size: 15px;
}
</style>
