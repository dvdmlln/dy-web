<template lang="pug">
	v-footer(light).py-0
		v-row(align="center" justify="center")
			v-col(cols="auto").pa-0
				v-btn(text @click="showImprint = true").text-capitalize Imprint
				dy-imprint-dialog(v-model="showImprint")
			v-col(cols="auto").pa-0
				v-btn(text :to="{ name: privacyRoute }").text-capitalize Privacy Policy
</template>

<script lang="ts" src="./dy-footer.ts"></script>
