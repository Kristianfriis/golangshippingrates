export default {
    template: `
    <div :id="country.id" draggable @dragstart="startDrag($event, country)">
        {{country.Name}}
    </div>
  `,
  props: ['country'],
    data() {
      return {
      }
    },
    methods: {
      startDrag(evt, item){
        evt.dataTransfer.dropEffect = 'move'
        evt.dataTransfer.effectAllowed = 'move'
        evt.dataTransfer.setData('itemID', item.Code)
      }
    }
  };
  