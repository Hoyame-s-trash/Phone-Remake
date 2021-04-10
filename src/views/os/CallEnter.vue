<template>
	<div>
        <div class="app-container"> 
            <div class="statusbar">
                <StatusBar />
            </div>

            <div>
                <div class="item">
                    <div class="title">Azize Labeile</div>
                    <div class="desc">Appel entrant</div>
                </div>   

                <div class="item-s">
                    <div id="call-btn" class="keypad-btn">
                        <div id="call-icon">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.382 92.48" class="injected-svg" data-src="/56b6b7a7ca3bbe3cd1566370c4f593f3.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path d="M36.621-12.842c14.4,14.453,31.934,25.586,46.24,25.586a21.312,21.312,0,0,0,16.5-7.227c2.637-2.93,4.248-6.3,4.248-9.668a8.152,8.152,0,0,0-3.515-6.885L85.107-21.68c-2.393-1.66-4.346-2.441-6.1-2.441-2.295,0-4.346,1.269-6.592,3.516L68.9-17.09a2.828,2.828,0,0,1-1.9.781,4.04,4.04,0,0,1-2-.586c-3.076-1.66-8.35-6.152-13.232-11.035S42.334-38.037,40.723-41.162a4.187,4.187,0,0,1-.537-2,2.735,2.735,0,0,1,.732-1.855l3.516-3.564c2.2-2.295,3.516-4.3,3.516-6.592,0-1.807-.781-3.76-2.441-6.1l-10.6-14.844a8.37,8.37,0,0,0-7.129-3.613,13.794,13.794,0,0,0-9.521,4.248,21.952,21.952,0,0,0-7.031,16.6C11.231-44.58,22.217-27.246,36.621-12.842Z" transform="translate(-11.231 79.736)"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div id="call-btn-r" class="keypad-btn">
                        <div id="call-icon">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.859 33.817" class="injected-svg" data-src="/8811f3ae01ffab97b7c58b69f9b1de1c.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g transform="translate(-6.854 51.611)">
                                        <path d="M52.295-51.611c-16.943,0-32.666,3.516-40.43,11.279a16.21,16.21,0,0,0-4.98,12.891,11.412,11.412,0,0,0,3.027,7.666,6.142,6.142,0,0,0,5.42,1.9L29.59-20.312a8.413,8.413,0,0,0,4.834-2c1.27-1.269,1.563-3.125,1.563-5.517v-3.809a2.143,2.143,0,0,1,.635-1.465,2.558,2.558,0,0,1,1.465-.781A75.793,75.793,0,0,1,52.295-35.01c6.152,0,11.475.439,14.209,1.123a3.054,3.054,0,0,1,1.367.781,1.949,1.949,0,0,1,.635,1.465v3.809c0,2.392.342,4.248,1.611,5.517a8.246,8.246,0,0,0,4.785,2L89.111-17.92a6.3,6.3,0,0,0,5.615-1.9,10.812,10.812,0,0,0,2.979-7.617,16.946,16.946,0,0,0-5.273-12.891C84.619-48.145,69.189-51.611,52.295-51.611Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

        </div>
	</div>
</template>

<script>
import StatusBar from '../../components/statusBar'

export default {
    name: 'CallEnter',

    components: {
        StatusBar
    },

    setup() {
        
    }
}
</script>

<style scoped>
.statusbar {
    margin: 18px 17px 0 17px;

}

.app-container {
    margin-top: 15px;
    height: 650px;
	background-image: url('https://cdn.discordapp.com/attachments/827287717724815392/827985103539142676/wwdc-2020-fond-ecran-ios-14-6.jpg');
    backdrop-filter: blur(50px);
}

.item {
    margin: 0 auto;
    border-radius: 8px;
    font-family: "SF-Pro-Text-Regular";
    text-align: center;
    margin-top: 30px;
}   

.title {
    font-size: 20px;
    color: rgb(26, 26, 26);
    margin-bottom: 5px;
}

.desc {
    font-size: 15px;
    color: rgb(59, 59, 59);
}


  #call-btn {
    background-color: #63c366;
    fill: white;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    padding: 12px;
    margin: 47.5px;
    margin-top: 420px;
  }

  #call-btn:hover {
      opacity: 60%;
      cursor: pointer;
    }

    #call-btn-r {
        background-color: #c53131;
        fill: white;
        height: 30px;
        width: 30px;
        border-radius: 30px;
        padding: 12px;
        margin: 47.5px;
        margin-top: 420px;
    }

    #call-btn-r:hover {
      opacity: 60%;
      cursor: pointer;
    }

  #call-icon {
    width: 22px;
    margin-top: 4px;
    margin-left: 4px;
  }

.item-s {
    display: flex;
    flex-direction: row;
}
</style>

