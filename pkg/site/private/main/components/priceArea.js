import store from '../store.js'
import price from './price.js'

export default {
    template: `
    <div id="price_area">
        <h4>Prices:</h4>
        <price
            v-for="price in sharedState.ratesStore"
            v-bind:price="price"
            v-bind:key="price.id"
        ></price>
    </div>
  `,
    data() {
      return {
        sharedState: store.state
      };
    },
    components: {
      price
    },
    props: ["prices"]
  };
  