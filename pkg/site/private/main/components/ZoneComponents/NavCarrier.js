import {GetBaseURL} from "../../../sharedCodes.js";

export default {
    template: `
    <nav class="navbar">
    <div class="container u-full-width">
        <ul class="navbar-list">
            <li class="navbar-item">
                <router-link to="/carrier/zoneHandling" class="navbar-link">Zone Handling</router-link>
            </li>
            <li class="navbar-item">
                <router-link to="/carrier/settings" class="navbar-link">Carrier Settings</router-link>
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
        this.ZoneUrl = GetBaseURL() + "carrier/"
    }
  };
  