
// Size Checker used for @Media Sizes
let width;
let height;

window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;

    console.log(width);
}



// vue.js for works section
//
//
const vue_app = Vue.createApp({

    // Creating my work Object and putting all the JSON stuff in this Object called object.
    created () {
          fetch('works.json').then(response => response.json()).then(json => {
                this.object = json;
          })
    },
    data() {
      return {
          // Holds Literally everything
          object: [],
          icon: "content/workICON.png"
        }
    },

    // Number Key:
    // 0: project
    // 1: html
    // 2: javascript
    // 3: java

    methods: {
              typeOfIcon(item){
                switch(item.type) {
                    case 0:
                        return 'bi bi-folder';
                    case 1:
                        return 'bi bi-filetype-html';
                    case 2:
                        return 'bi bi-filetype-js';
                    case 3:
                        return 'bi bi-filetype-java';
                    default:
                        return 'bi bi-folder';
                  }

              },
              typeOfProject(item){
                switch(item.type) {
                    case 0:
                        return 'p-project';
                    case 1:
                        return 'p-html';
                    case 2:
                        return 'p-js';
                    case 3:
                        return 'p-java';
                    default:
                        return 'p-project';
                  }

              },
              colorOfItem(x){
                switch(x){
                    case 0:
                        return '#ffc452';
                    case 1:
                        return '#FD6000';
                    case 2:
                        return '#ffde24';
                    case 3:
                        return '#1665bf';
                    default:
                        return '#bc3200';
                }
              },
              textOfColor(item){
                switch(item.type){
                    case 0:
                        return 'color: ' + this.colorOfItem(0);
                    case 1:
                        return 'color: ' + this.colorOfItem(1);
                    case 2:
                        return 'color: ' + this.colorOfItem(2);
                    case 3:
                        return 'color: ' + this.colorOfItem(3);
                    default:
                        return 'color: ' + this.colorOfItem(0);
                }
              },
              backgroundOfColor(item){
                switch(item.type){
                    case 0:
                        return 'background-color: ' + this.colorOfItem(0);
                    case 1:
                        return 'background-color: ' + this.colorOfItem(1);
                    case 2:
                        return 'background-color: ' + this.colorOfItem(2);
                    case 3:
                        return 'background-color: ' + this.colorOfItem(3);
                    default:
                        return 'background-color: ' + this.colorOfItem(0);
                }
              }
            }
})


vue_app.mount("#workSection");
