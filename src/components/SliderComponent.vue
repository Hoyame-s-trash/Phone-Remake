<template>
	<div>
		<div class="slidecontainer">
			<div class="col-1">
				<div class="sliderBefore" @click="sliderDecrement">-</div>
			</div>
			<div class="col-2">
				<input v-model="sliderComponent" :id="id" type="range" :min="min" :max="max" :step="step" :disabled="disabled" class="slider">
			</div>
			<div class="col-1">
				<div class="sliderAfter" @click="sliderIncrement">+</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SliderComponent',
	props: {
		slider: { type: Number, default: 0 },
		min: { type: Number, default: 0 },
		max: { type: Number, default: 1 },
		step: { type: Number, default: 1 },
		disabled: { type: Boolean, default: false },
		id: { type: String, default: undefined }
	},
	data() {
		return {
			sliderComponent: 0
		}
	},
	computed: {
		sliderC: {
			get() {
				return this.$data.sliderComponent;
			},
			set(slider) {
				this.$data.sliderComponent = slider;
			}
		},
		sliderCMin: {
			get() {
				return this.min;
			},
			set(min) {
				return min;
			}
		},
		sliderCMax: {
			get() {
				return this.max;
			},
			set(max) {
				return max;
			}
		},
		sliderCStep: {
			get() {
				return this.step;
			},
			set(step) {
				return step;
			}
		},
		sliderCDisabled: {
			get() {
				return this.disabled;
			},
			set(disabled) {
				return disabled;
			}
		},
		sliderCId: {
			get() {
				return this.id;
			},
			set(id) {
				return id;
			}
		}
	},
	watch: {
		sliderC(value) {
			this.$emit('components:Slider:UpdateValue', Number(value));
		}
	},
	methods: {
		sliderIncrement() {
			this.$data.sliderComponent = Number(this.$data.sliderComponent) + Number(this.sliderCStep);
			if(this.$data.sliderComponent >= this.sliderCMax) this.$data.sliderComponent = this.sliderCMax;
		},
		sliderDecrement() {
			this.$data.sliderComponent = Number(this.$data.sliderComponent) - Number(this.sliderCStep);
			if(this.$data.sliderComponent <= this.sliderCMin) this.$data.sliderComponent = this.sliderCMin;
		}
	},
	mounted() {
		this.sliderC = this.slider;
		this.sliderCMin = this.min;
		this.sliderCMax = this.max;
		this.sliderCStep = this.step;
		this.sliderCId = this.id;
	}
}
</script>

<style scoped>
* {
    user-select: none;
}

.slidecontainer {
    margin: 0.9vh 0 0.9vh 0;
	width: 100%;
	display: inline-flex;
	vertical-align: middle;
}

.slidecontainer .col-1 {
	width: 10%;
}

.slidecontainer .col-2 {
	width: 80%;
}

.slidecontainer p {
    margin-bottom: 0.5em;
}

.slidecontainer .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 1.1vh;
    border-radius: 0.3vw;  
    background: #fff;
    outline: none;
    position: relative;
}

.slidecontainer .slider:disabled {
	cursor: not-allowed;
}

.slidecontainer .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0.4vw;
    height: 2vh;
    border: 1px solid #45c6f2;
    background: #fff;
    cursor: pointer;
}

.slidecontainer .slider:disabled::-webkit-slider-thumb {
	cursor: not-allowed;
}

.slidecontainer .sliderBefore {
	cursor: pointer;
}

.slidecontainer .sliderBefore:disabled {
	cursor: not-allowed;
}

.slidecontainer .sliderAfter {
	cursor: pointer;
}

.slidecontainer .sliderAfter:disabled {
	cursor: not-allowed;
}
</style>