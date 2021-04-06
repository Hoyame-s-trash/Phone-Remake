<template>
	<div>
		<button @click="action" :icon="btnIcon" :disabled="disabled" :class="btnTextColor">{{ btnTitle }} <i :class="btnIcon"></i></button>
	</div>
</template>

<script>
export default {
	name: 'ButtonComponent',
	props: {
		title: { type: String, default: "Button" },
		icon: { type: String, default: undefined },
		disabled: { type: Boolean, default: false },
		textColor: { type: String, default: "white" }
	},
	computed: {
		btnTitle: {
			get() {
				return this.title
			},
			set(title) {
				return title
			}
		},
		btnIcon: {
			get() {
				return this.icon
			},
			set(icon) {
				return icon
			}
		},
		btnDisabled: {
			get() {
				return this.disabled
			},
			set(disabled) {
				return disabled
			}
		},
		btnTextColor: {
			get() {
				return this.textColor
			},
			set(color) {
				return color
			}
		}
	},
	methods: {
        action() {
            this.$emit('components:Button:Action');
		}
	},
	mounted() {
		this.btnTitle !== undefined ? this.btnTitle = this.title : this.btnTitle = "Button";
		this.icon !== undefined ? this.btnIcon = this.icon : this.btnIcon = undefined;
		this.disabled !== undefined ? this.btnDisabled = this.disabled : this.btnDisabled = false;
		this.textColor !== undefined ? this.btnTextColor = this.textColor : this.btnTextColor = "white";
	}
}
</script>

<style scoped>
* {
    user-select: none;
}

.white {
	color: #fff;
}

.red {
	color: red;
	font-weight: bold;
}

.green {
	color: green;
}

.blue {
	color: #45c6f2;
}
</style>