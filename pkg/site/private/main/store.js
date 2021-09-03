import {GetBaseURL} from "../sharedCodes.js";

export default {
    debug: true,
    state: {
        ratesStore: [],
        colliStore: [],
        numberOfCollies: [],
        baseURL: "",
        countries: []
    },
    setRatesAction(newValue){
        if (this.debug) console.log('setRatesAction triggered with', newValue)
        this.state.ratesStore = newValue;
    },
    setColliAction(newValue){
        if (this.debug) console.log('setColliAction triggered with', newValue)
        let pos = this.state.colliStore.findIndex(x => x.colliId == newValue.colliId);
        if(pos != -1){
            this.state.colliStore[pos] = newValue
        } else {
            this.state.colliStore.push(newValue);
        }
    },
    setNumberOfCollieAction(){
        if (this.debug) console.log('setNumberOfCollieAction triggered with', this.state.numberOfCollies.length)
        this.state.numberOfCollies.push(IDGenerator())
    },
    deleteNumberOfCollieAction(value){
        if (this.debug) console.log('deleteNumberOfCollieAction triggered with', value)
        const index = this.state.numberOfCollies.indexOf(value);
        if(this.state.numberOfCollies.length != 1){
            if (index > -1) {
                this.state.numberOfCollies.splice(index, 1);
              }
        }
        const indexColliStore = this.state.colliStore.findIndex(x => x.colliId == value);
        if(this.state.colliStore.length != 1){
            if (indexColliStore > -1) {
                this.state.colliStore.splice(indexColliStore, 1);
              }
        }
    },
    setBaseURL(){
        this.debug == true ? this.state.baseURL = GetBaseURL() : this.state.baseURL = "http://localhost:8080/" 
    }
}

function IDGenerator() {return '_' + Math.random().toString(36).substr(2, 9);};