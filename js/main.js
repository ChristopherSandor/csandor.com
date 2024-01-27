
// Size Checker used for @Media Sizes
let width;
let height;

window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;

    console.log(width);
}



// ------------------------------------------------------------------------------------------------- //



// vue.js for works section (1)
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
                    case 4:
                        return 'bi-filetype-css';
                    case 5:
                        return 'bi-filetype-json';
                    case 6:
                        return 'bi-filetype-ai';
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
                        // Folder (Project)
                        return '#ffc452';
                    case 1:
                        // HTML
                        return '#FD6000';
                    case 2:
                        // JavaScript
                        return '#ffde24';
                    case 3:
                        // Java
                        return '#1665bf';
                    case 4:
                        // CSS
                        return '#28a9df';
                    case 5:
                        // JSON
                        return '#9076a6';
                    case 6:
                        // Illustrator
                        return '#ff9a00';
                    default:
                        // Folder (Project)
                        return '#bc3200';
                }
              },
              textOfColor(item){
                return 'color: ' + this.colorOfItem(item.type);
              },
              backgroundOfColor(item){
                return 'background-color: ' + this.colorOfItem(item.type);
              }
            }
})

vue_app.mount("#workSection");



// ------------------------------------------------------------------------------------------------- //



// New Vue Object (2)
// Meant for the opening section to "works"
//

const vue_app_2 = Vue.createApp({

    // Creating my work Object and putting all the JSON stuff in this Object called object.
    created () {
          fetch('qual.json').then(response => response.json()).then(json => {
                this.object_2 = json;
          })
    },
    data() {
      return {
          // Holds Literally everything
          object_2: [],
        }
    }
})

vue_app_2.mount("#works");



// ------------------------------------------------------------------------------------------------- //



// New Vue Object (3)
// Mean for the Certifications Section
//

const vue_app_3 = Vue.createApp({

    // Creating my work Object and putting all the JSON stuff in this Object called object.
    created () {
          fetch('cert.json').then(response => response.json()).then(json => {
                this.object_3 = json;
          })
    },
    data() {
      return {
          // Holds Literally everything
          object_3: [],
        }
    }
})

vue_app_3.mount("#certification");

