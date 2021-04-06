<template>
	<div>
		<div class="slidecontainer">
			<input :value="textInput" @input="handleInput" type="text" :disabled="disabled">
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputTextComponent',
	props: {
        text: { type: String, default: null },
        disabled: { type: Boolean, default: false }
	},
	data() {
		return {
			textInput: '',
		}
    },
    methods:{
        handleInput(e){
            this.textInput = e.target.value
            this.$emit('input', e.target.value)
        }
    },
	computed: {
		textI: {
            get() {
                return this.$data.text
            },
            set(text) {
                return text
            }
        },
        textIDisabled: {
            get() {
                return this.disabled
            },
            set(disabled) {
                return disabled
            }
        }
    },
    watch: {
        textInput(value) {
            this.$emit('components:InputText:TextChange', value);
        }
    },
	mounted() {
        this.$data.textInput = this.text
	}
}
</script>

<style scoped>
* {
    user-select: none;
}

body html {
    width: 100%;
}

input[type=text] {
    border: 1px solid white;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    width: 100%;
}
</style>