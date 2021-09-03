import NavBar from '../SharedComponents/NavBar.js';
import store from './store.js';

export default {
    template: `
    <div class="container">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  `,
    data() {
      return {
          rates: []
      };
    },
    components: {
        NavBar
    },
    created: function(){
      store.setBaseURL();
    }
  };