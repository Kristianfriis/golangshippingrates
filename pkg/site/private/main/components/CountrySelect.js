import store from '../store.js'

export default {
    template: `
    <div>
        <label for="country_select">Country</label>
        <select name="Country" id="country_select">
            <option 
                v-for="country in countries"
                :value="country.Zone"
            >{{country.Name}}</option>
        </select>
    </div>
  `,
    data() {
      return {
        countries: []
      };
    },
    methods: {
      checkCountriesList(){
        var localCountryList = window.localStorage.getItem('countriesList');
        if(localCountryList == null){
          return true;
        } else {
          return false;
        }
      }
    },
    created: function(){
      if(this.checkCountriesList()){
        axios.get(store.state.baseURL + "countries/getallcountries")
        .then((res)=> {
          this.countries = res.data
          window.localStorage.setItem('countriesList', JSON.stringify(res.data));
        })
      } else {
        this.countries = JSON.parse(window.localStorage.getItem('countriesList'));
        console.log(countries)
      }
    }
  };
  