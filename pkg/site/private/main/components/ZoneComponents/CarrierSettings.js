import store from '../../store.js'
import AlertBox from '../../../SharedComponents/AlertBox.js';

export default {
    template: `
    <div>
    <button :class="activeBtn" :disabled="isActive" @click="updateCountries">Update Countries</button>
    <alert-box v-if="showSuccess" :boxData="alertData"></alert-box>
    <div>
        <h5>carrierSettings</h5>
      </div>
    </div>
  `,
  components: {
    AlertBox
  },
  props: []
  ,
    data() {
      return {
          countries: [],
          isActive: true,
          showSuccess: false,
          showError: false,
          activeBtn: "button",
          alertData: {  header:"success", message: "Countries were updated succesfully!", style:"success"},
          numberOfZones: 0,
          carrierSettings: [],
          carrierName: this.carrier
      }
    },
    created: function() {
      console.log(this.carrier.carrier)
      axios.get(store.state.baseURL + "carrierSettings/get/"+this.carrier)
      .then((res) => {
        this.carrierSettings = res.data
        console.log(res.data)
      })
      .then(() => {
        axios.get(store.state.baseURL + "carrierCountries/get/"+this.carrierSettings.countryListId)
        .then((res)=> {
          store.state.countries = res.data;
  
          this.countries = res.data
        })
      })
    },
    methods: {
      getCountries(index) {
        return this.countries.filter(x => x.Zone == index)
      },
      onDrop (evt, list) {
        this.handleButtons();
        const itemID = evt.dataTransfer.getData('itemID')
        const item = this.countries.find(item => item.Code == itemID)
        item.Zone = list

      },
      handleButtons(){
        this.isActive = false,
        this.activeBtn = "button button-primary"
      },
      updateCountries(){
        let req = {
          countries: this.countries, 
          user: "test"
        }
        axios.post(store.state.baseURL + "countries/updateCountryZones", req)
        .then((res)=> {
            console.log(res.status)
            if(res.status == 200){
              this.showSuccess = true;
              this.showError = false;
            }else{
              this.showSuccess = false;
              this.showError = true;
            }
        })
      }
    }
  };


  