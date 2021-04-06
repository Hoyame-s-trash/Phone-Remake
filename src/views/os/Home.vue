<template>
	<div class="phone-content">
        <div class="phone-container">
            <statusBar dark="true" /> 
            <AppList />
        </div>
        <div>
            <PhoneNav /> 
        </div>
	</div>
</template>

<script>
import StatusBar from '@/components/statusBar'
import PhoneNav from '@/components/PhoneNav'
import AppList from '@/components/os/AppList'

export default {
	name: 'Home',
	components: {
		StatusBar,
        PhoneNav,
        AppList
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.phone-container {
    height: 545px;

}

</style>
