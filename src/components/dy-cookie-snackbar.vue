<template lang="pug">
	v-snackbar(v-model="value" timeout=-1 outlined light app)
		div This website uses cookies to ensure you get the best experience.
		div.text-center
			router-link(:to="{ name: privacyRoute }").text-center Privacy Policy
		div.d-flex.justify-center.pt-4
			v-btn(@click="acceptCookies" color="success") Accept
			span.px-4
			v-btn(@click="declineCookies" color="error") Decline
</template>

<script lang="ts" src="./dy-cookie-snackbar.ts"></script>
