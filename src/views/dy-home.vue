<template lang="pug">
	v-container.fill-height
		v-row(justify="center")
			v-col
				v-row
					v-col
						v-img(:src="bannerSrc")
				v-row(justify="center")
					v-col(cols="auto")
						v-btn(:href="ffmLink" target="_blank" outlined) Listen/Buy
		//- Empty row to fix alignment for first row
		v-row
</template>

<script lang="ts" src="./dy-home.ts"></script>
