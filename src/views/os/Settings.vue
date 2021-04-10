<template>
    <div>
        <HeaderApp title="Réglages" left="" right="" />

        <div class="app-container">

            <div class="separator"></div>

            <div class="mail-box">
                <a>
                    <div>
                        <div class="settings-core">
                            <div class="item-settings" @click="enableMode">
                                <div class="settings-img-container" style="background: rgb(240, 154, 55);">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plane-departure" class="svg-inline--fa icon-svg fa-plane-departure fa-w-20 fontAwesome-icon1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z">
                                        </path>
                                    </svg>
                                </div>
                                
                                <div class="text-settings">Mode Streamer</div>
                            </div>
                        </div>
                    </div>
                </a>
                
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(52, 120, 246);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" class="svg-inline--fa icon-svg fa-wifi fa-w-20 fontAwesome-icon1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg></div><div class="text-settings">Wifi</div></div></div></div></a>
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(52, 120, 246);"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bluetooth" class="svg-inline--fa icon-svg fa-bluetooth fa-w-14 fontAwesome-icon2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M292.6 171.1L249.7 214l-.3-86 43.2 43.1m-43.2 219.8l43.1-43.1-42.9-42.9-.2 86zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4zm-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5-83.9-88.7z"></path></svg></div><div class="text-settings">Bluetooth</div></div></div></div></a>
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(101, 196, 102);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sim-card" class="svg-inline--fa icon-svg fa-sim-card fa-w-12 fontAwesome-icon4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128L256 0H64C28.7 0 0 28.7 0 64zm224 192h-64v-64h64v64zm96 0h-64v-64h32c17.7 0 32 14.3 32 32v32zm-64 128h64v32c0 17.7-14.3 32-32 32h-32v-64zm-96 0h64v64h-64v-64zm-96 0h64v64H96c-17.7 0-32-14.3-32-32v-32zm0-96h256v64H64v-64zm0-64c0-17.7 14.3-32 32-32h32v64H64v-32z"></path></svg></div><div class="text-settings">Cartes SIM</div></div></div></div></a>
                
                <div class="separator"></div>
                
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(215, 0, 21);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa icon-svg fa-bell fa-w-14 fontAwesome-icon2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg></div><div class="text-settings">Notifications</div></div></div></div></a>
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(215, 0, 21);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa icon-svg fa-volume-up fa-w-18 fontAwesome-icon3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg></div><div class="text-settings">Sons &amp; Vibrations</div></div></div></div></a>
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(112, 215, 255);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa icon-svg fa-palette fa-w-16 fontAwesome-icon3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg></div><div class="text-settings">Fond d'ecran</div></div></div></div></a>
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(87, 86, 206);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" class="svg-inline--fa icon-svg fa-moon fa-w-16 fontAwesome-icon3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg></div><div class="text-settings">Mode Nuit</div></div></div></div></a>
                <a><div><div class="settings-core"><div class="item-settings"><div class="settings-img-container" style="background: rgb(137, 68, 171);"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brush" class="svg-inline--fa icon-svg fa-brush fa-w-12 fontAwesome-icon4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="color: rgb(255, 255, 255);"><path fill="currentColor" d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"></path></svg></div><div class="text-settings">Theme</div></div></div></div></a>
            </div>
        </div>
        <div @click="goHome" class="controlbar"></div>

    </div>
</template>

<script>
import HeaderApp from '../../components/os/HeaderApp'

export default {
    name: 'Settings',
    
    components: {
        HeaderApp,
    },

    methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        },

        enableMode(b) {
            this.$store.state.os.streamer = !this.$store.state.os.streamer
        }
    },

    setup() {
        
    },
}
</script>

<style scoped>
.app-container {
    height: 580px;
}

.controlbar {
    position: relative;
    align-items: center;
    bottom: 50px;
    left: 34%;
    height: 6px;
    width: 100px;
    background-color: #000;
    border-radius: 15px;
    z-index: 4;
    transition-duration: 250ms;
}

.controlbar:hover {
    cursor: pointer;
    opacity: 50%;
}

.separator {
    width: 100%;
    height: 35px;
    background-color: #f2f2f7;
}

.icon-svg {
    height: 13px;
    width: 13px;
}

.item-settings {
    text-underline-offset: none;
    text-decoration: none;
    border-bottom: thin solid;
    border-color: rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    transition: 0.4s;
    cursor: pointer;
    height: 15px;
    padding-bottom: 7px;
    padding-top: 7px;
}

.settings-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 20%;
    padding: 3.75px;
    height: 14px;
    width: 14px;
    margin-left: 15px;
    margin-top: -1.05%;
}

.text-settings {
    font-size: 10.5px;
    font-family: 'SF-Pro-Text-Regular';
    margin-left: 4%;
    margin-top: 0.7%;
    font-weight: 490;
}

.settings-core {
    transition-duration: 250ms;
    background-color: #fff;
}

.settings-core:hover {
    background-color: rgba(19, 12, 12, 0.060);
}
</style>