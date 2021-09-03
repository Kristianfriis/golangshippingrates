import store from '../store.js';
import ZoneHandling from '../components/ZoneComponents/ZoneHandling.js'
import NavCarrier from '../components/ZoneComponents/NavCarrier.js'
export default {
    template: `
    <div>
      <h3 class="container">Zone Handling</h3>
      <zone-handling></zone-handling>
      <NavCarrier></NavCarrier>
      <router-view></router-view>
    </div>
  `,
    data() {
      return {
          rates: []
      };
    },
    components: {
      ZoneHandling,
      NavCarrier
    }
  };