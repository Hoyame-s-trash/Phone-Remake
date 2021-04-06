<template>
    <div class="container">
        <statusBar :dark="dark" /> 

        <div id="header-app" class="no-border">
          <div class="header-row">
              <div class="header-left">{{left}}</div>
              <div class="header-middle">{{title}}</div>
              <div class="header-right" onClick={props.disable}>
                  {{right}}
              </div>
          </div>

      <div v-if="search" class="searchbar-container">
        <div id="searchbar-icon"><div>
                
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.973 72.656" class="svg-icon" data-src="/2e2dd0e24ce5cccad969a3e35e1f2e3a.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M37.988-13.769a28.974,28.974,0,0,0,17.236-5.713L74.023-.635A4.158,4.158,0,0,0,76.855.488a3.838,3.838,0,0,0,3.906-3.955A3.682,3.682,0,0,0,79.639-6.25l-18.7-18.8a28.785,28.785,0,0,0,6.2-17.92,29.237,29.237,0,0,0-29.15-29.2,29.279,29.279,0,0,0-29.2,29.2A29.279,29.279,0,0,0,37.988-13.769Zm0-5.615A23.736,23.736,0,0,1,14.356-42.969,23.736,23.736,0,0,1,37.988-66.553,23.694,23.694,0,0,1,61.572-42.969,23.7,23.7,0,0,1,37.988-19.385Z" transform="translate(-8.789 72.168)"></path>
        </svg>
        </div>
        </div>
        <input type="text" name="searchbar" id="searchbar" placeholder="Search"></div>
        </div>

    </div>
</template>

<script>
import statusBar from '../statusBar'
import PlusIcon from '../../assets/icons/plus.svg'

export default {
    name: "HeaderApp",
    components: {
        statusBar,
        
    },

    props: ['title', 'left', 'right', 'search', 'dark'],

    setup() {
        
    },
}
</script>

<style scoped>
.header-app {

}

.container {
  margin: 31.5px 37px 0 37px;
  border-bottom: 0.5px solid #dddddd;  
}

.searchbar-container {
    display: flex;
    align-items: center;
    background-color: #e7e7e8;
    border-radius: 5px;
    height: 25px;
    width: 96.5%;
    display: flex;
    padding-left: 8px;
}

.svg-icon {
    height: 12px;
    margin-right: 5px;
}

#searchbar {
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;

}

 .header-row {
    font-family: "SF-Pro-Text-Regular";
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0 0;
    height: 30px;
    display: flex;
    font-size: 13px;
    font-weight: 600;
    align-items: center;
    justify-content: space-between;
    }

  .header-row + div {
    margin-bottom: 10px;
  }

  .header-right {
    text-align: right;
  }
  
.icon {
    margin-left: auto;
}
  .header-left {
    text-align: left;
    display: flex;
  }

  .header-left,
  .header-right {
    flex: 1;
    color: #327bf6;
    fill: #327bf6;
    cursor: pointer;
  }

  .back-icon {
    margin: 1px 1px 0 -5px;
  }

  .header-middle {
    width: 100px;
    text-align: center;
  }

  .plus-icon {
    fill: #327bf6;
    height: 16px;
  }
  
</style>