export default {
    template: `
    <div class="alertBox" v-bind:style="styles">
        <h5>{{boxData.header}}</h5>
        <p>{{boxData.message}}</p>       
    </div>
  `,
    props: ["boxData"],
    data() {
      return {
          data: this.boxData
      }
    },
    computed: {
        styles: function(){
            if(this.data.style == "success"){
                return {
                    color: "white",
                    backgroundColor: "green !important" ,
                    border: "2px solid darkgreen",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "auto",
                    maxWidth: "300px",
                    maxHeight: "200px"
                }
            }
            if(this.data.style == "failure"){
                return {
                    color: "white",
                    backgroundColor: "red !important" ,
                    border: "2px solid darkred",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "auto",
                    maxWidth: "300px",
                    maxHeight: "200px"
                }
            }
        }
    }
  };