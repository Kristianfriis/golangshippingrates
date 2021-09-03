import ZoneContainer from './ZoneContainer.js';
import ZoneCard from './ZoneCard.js';
import store from '../../store.js'
import AlertBox from '../../../SharedComponents/AlertBox.js';

export default {
    template: `
    <div>
    <button :class="activeBtn" :disabled="isActive" @click="updateCountries">Update Countries</button>
    <alert-box v-if="showSuccess" :boxData="alertData"></alert-box>
    <div>
      <select v-model="selected">
        <option v-for="carrier in carriers" v-bind:value="{ id: carrier.id, text: carrier.name }">
          {{ carrier.name }}
        </option>
      </select>
      <template v-for="(n, index) in numberOfZones">
        <div v-bind:id="'zone'+index" class="two columns countryColumn u-max-full-width"
        @drop="onDrop($event, index)"        
        @dragover.prevent
        @dragenter.prevent>
          <p style="text-align: center;">Zone {{index}}</p>
          <zone-card
            class="country" v-for="country in getCountries(index)" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
          </zone-card>
        </div>
      </template>
      </div>
    </div>
  `,
  components: {
    ZoneContainer,
    ZoneCard,
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
          carrierName: this.carrier,
          selected: "",
          carriers: [{id: 123, name: "test"}]
      }
    },
    created: function() {
      //get all available carriers!
    },
    methods: {
      getCarrierData(){
        console.log(this.carrierName)
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


  