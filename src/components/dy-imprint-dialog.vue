<template lang="pug">
	v-dialog(v-model="showDialog" width="400px")
		v-card(light)
			v-card-title
				h1 Impressum
				v-spacer
				v-btn(icon @click="showDialog = false")
					v-icon fa-times
			v-card-text
				h2 Angaben gem&auml;&szlig; &sect; 5 TMG
				p
					| David Mellen
					br
					| Krawehlstra&szlig;e 44
					br
					| 45130 Essen
				h2 Kontakt
				p
					| Telefon: +491632729193
					br
					| E-Mail: info@decemberyouth.de
</template>

<script lang="ts" src="./dy-imprint-dialog.ts"></script>
