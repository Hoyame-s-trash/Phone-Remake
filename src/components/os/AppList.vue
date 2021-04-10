<template>
    <div class="container">
        <AppIcon @click.native="openF('NewConv')" class="icon" title='Message' img="messages.png" />
        <AppIcon class="icon" title='Mail' img="mail.png" />
        <AppIcon @click.native="openF('CallList')" class="icon" title='Appels' img="call.png" />
        <AppIcon @click.native="openF('ContactEdit')" class="icon" title='Whatsapp' img="whatsapp.png" />
        <AppIcon @click.native="openF('Calculator')" class="icon" title='Calculette' img="calculator.png" />
        <AppIcon class="icon" title='Camera' img="camera.png" />
        <AppIcon @click.native="openF('ContactList')" class="icon" title='Contacts' img="contacts.png" />
        <AppIcon @click.native="openF('Notes')" class="icon" title='Notes' img="notes.png" />
        <AppIcon class="icon" title='Horloge' img="clock.png" />
        <AppIcon class="icon" title='Plans' img="maps.png" />
        <AppIcon @click.native="openF('Music')" class="icon" title='Musique' img="music.png" />
        <AppIcon @click.native="openF('Gallery')" class="icon" title='Galerie' img="photos.png" />
        <AppIcon @click.native="openF('Settings')" class="icon" title='Réglages' img="settings.png" />
    </div>
</template>

<script>
import AppIcon from './AppIcon'

export default {
    name: 'AppList',

    components: {
        AppIcon,
    },

    methods: {
        openF(e) {
            this.$controller.changePage("os", e, {});
        }
    },

    setup() {
        
    },
}
</script>

<style scoped>

.container {
    height: 60%;
    width: 100%;
    margin-top: 35px;
}

.icon {
    display: inline-block;
}

</style>