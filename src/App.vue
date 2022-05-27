
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="$router.push({name: 'home'})">
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({name: 'about'})">
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({name: 'news'})">
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>News</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>    
        <v-list-tile @click="$router.push({name: 'service'})">
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Service</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>              
      </v-list>
      
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <!--
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2022</span>
    </v-footer>
    -->
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],    
  }),
  props: {
    source: String
  },
  methods: {
    test() {
      alert('클릭')
    }
  },
}
</script>