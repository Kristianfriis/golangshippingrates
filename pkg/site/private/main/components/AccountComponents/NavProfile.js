import {GetBaseURL} from "../../../sharedCodes.js";

export default {
    template: `
    <nav class="navbar">
    <div class="container u-full-width">
        <ul class="navbar-list">
            <li class="navbar-item">
                <router-link to="/account/profile" class="navbar-link">Account</router-link>
            </li>
            <li class="navbar-item">
                <router-link to="/account/newuser" class="navbar-link">New User</router-link>
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
  