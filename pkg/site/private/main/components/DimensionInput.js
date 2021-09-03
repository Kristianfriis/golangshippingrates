export default {
    template: `
      <div v-bind:id="'dimension' + colli.colli" :value="colli.colli" class="row">
        <div class="colliNumber one column u-full-width">{{ colli.index + 1 }}</div>
        <input type="text" id="length" class="two columns u-full-width">
        <input type="text" id="width" class="two columns u-full-width">
        <input type="text" id="height" class="two columns u-full-width">
        <input type="text" id="weight" class="two columns u-full-width">
        <div class="two columns u-full-width">
          <i class="fas fa-plus action_hover" v-on:click="$emit('add-colli')"></i>
          <i class="fas fa-minus actionDelete_hover" v-on:click="$emit('delete-colli', colli.colli)"></i>
        </div>
      </div>
  `,
  props: ["colli"],
    data() {
      return {
      };
    },
    methods: {
    }
  };
  