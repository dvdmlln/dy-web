<template lang="pug">
	v-dialog(v-model="showDialog" width="400px")
		v-card
			v-card-title.pr-4
				span.pl-4 Show {{ show.date | date }}
				v-spacer
				v-btn(icon @click="showDialog = false")
					v-icon fa-times
			v-card-subtitle
				div.pl-4 {{ show.venue }} in {{ show.city }}, {{ show.country }}
			v-card-text
				div.pl-4 together with:
				v-list(subheader)
					template(v-for="(band, index) in show.bands")
						v-divider(v-if="index !== 0")
						v-list-item
							v-list-item-title {{ band }}
</template>

<script lang="ts" src="./dy-shows-item-info-dialog.ts"></script>
