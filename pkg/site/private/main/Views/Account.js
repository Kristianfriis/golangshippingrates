import NavProfile from "../components/AccountComponents/NavProfile.js";

export default {
    template: `
    <div>
        <h3 class="container">Account</h3>
        <NavProfile></NavProfile>
        <router-view></router-view>
    </div>
  `,
  components: {
    NavProfile
  },
    data() {
      return {
      }
    }
  };
  