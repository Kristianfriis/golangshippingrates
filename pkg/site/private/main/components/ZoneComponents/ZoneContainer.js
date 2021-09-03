import ZoneCard from './ZoneCard.js';
export default {
    template: `
    <div class="row" id="zone">
        <zone-card
            class="one column"
            v-for="country in countriesForZone"
            :country="country" 
            :key="country.Code"
        ></zone-card>
    </div>
  `,
  components: {
    ZoneCard
  },
  props: ["countries, zone"],
    // data() {
    //   return {
    //       countriesForZone: [],
    //       Zone: ""
    //   }
    // }
  };
  