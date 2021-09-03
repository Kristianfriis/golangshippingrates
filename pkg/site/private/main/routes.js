import Zones from './Views/Zones.js'
import Account from './Views/Account.js';
import UserProfile from './components/AccountComponents/UserProfile.js'
import UserNewUser from './components/AccountComponents/UserNewUser.js';
import ZoneHandling from './components/ZoneComponents/ZoneHandling.js';
import CarrierSettings from './components/ZoneComponents/CarrierSettings.js';

const zones = { path: '/zones', component: Zones, children: [
    {
      path: 'zoneHandling',
      component: ZoneHandling,
    },
    {
        path: 'settings',
        component: CarrierSettings
    }
  ]}

const account = { path: '/account', component: Account, children: [
    {
      path: 'profile',
      component: UserProfile
    },
    {
     path: 'newuser',
     component: UserNewUser
   },
 ]}

export default {
    zones,
    account
}