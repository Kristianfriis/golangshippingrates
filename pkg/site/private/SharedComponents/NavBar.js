import {GetBaseURL} from "../sharedCodes.js";

export default {
    template: `
    <nav class="navbar">
    <div class="container u-full-width">
        <ul class="navbar-list">
            <li class="navbar-item">
                <router-link to="/home" class="navbar-link">Home</router-link>
            </li>
            <li class="navbar-item">
                <router-link to="/zones" class="navbar-link">Zones</router-link>
            </li>
            <li class="navbar-item">
            <router-link to="/account" class="navbar-link">Account</router-link>
        </li>
        </ul>
        
    </div>
    </nav>
  `,
    data() {
      return {
          BaseUrl: "",
          ZoneUrl: "",
      }
    },
    created: function(){
        this.BaseUrl = GetBaseURL();
        this.ZoneUrl = GetBaseURL() + "countries/"
    }
  };
  