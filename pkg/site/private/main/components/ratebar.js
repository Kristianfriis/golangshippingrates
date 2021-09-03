import store from '../store.js'
import DimensionInput from './DimensionInput.js';
import CountrySelect from './CountrySelect.js';

export default {
    template: `
    <div>
     <h3>Shipping</h3>
     <country-select class="container"></country-select>
    <br>
    <div class="container">
      <div class="container row" >
        <div class="one column">Colli</div>
        <div class="two columns">Length</div>
        <div class="two columns">Width</div>
        <div class="two columns">Height</div>
        <div class="two columns">Weight</div>
        <div class="two columns">Actions</div>
      </div>
      <dimension-input 
      v-for="(colli,index) in sharedState.numberOfCollies"
      v-bind:key="colli"
      :colli="{colli, index}"
      v-on:add-colli="addColli"
      v-on:delete-colli="deleteColli"
      class="container">
      </dimension-input>
    </div>

    <br>
    <div class="container">
      <label for="calc_btn">Calculate</label><button id="calc_btn" class="button-primary" v-on:click="getData">Get Rates</button>
    </div>
    </div>
  `,
    data() {
      return {
        sharedState: store.state
      };
    },
    components: {
      DimensionInput,
      CountrySelect
    },
    methods: {
        getData: function() {
          this.sharedState.numberOfCollies.forEach(line => {
            let master = document.getElementById('dimension'+line);
            let colli = master.childNodes;
            const id = master.getAttribute("value");
            const lengthInput = colli[2].value;
            const widthInput = colli[4].value;
            const heightInput = colli[6].value;
            const weightInput = colli[8].value;
            let details =  {colliId: id, length: lengthInput, width: widthInput, height: heightInput, weight: weightInput}

            store.setColliAction(details)
          });
         
          
          const countrySelect = document.getElementById("country_select").value;
          let req = {
            country: countrySelect, 
            collies: this.sharedState.colliStore
          }
          console.log(req)
          axios.post( store.state.baseURL+"rates/get", req)
          .then((res)=> {
            store.setRatesAction(res.data);
          })
        },

      addColli: function(){
        store.setNumberOfCollieAction();
      },
      deleteColli: function(colli){
        store.deleteNumberOfCollieAction(colli)
      }
    },
    created: function(){
        if(this.sharedState.numberOfCollies.length == 0){
          store.setNumberOfCollieAction();
        }
    }
  };
  