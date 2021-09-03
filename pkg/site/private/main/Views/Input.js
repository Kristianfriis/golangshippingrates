import rateBar from '../components/ratebar.js';
import priceArea from '../components/priceArea.js';

export default {
    template: `
    <div class="container">
      <rate-bar></rate-bar>
      <price-area :prices="rates" class="container"></price-area>
    </div>
  `,
    data() {
      return {
          rates: []
      };
    },
    components: {
        rateBar,
        priceArea
    }
  };