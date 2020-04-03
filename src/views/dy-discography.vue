<template lang="pug">
	v-container
		v-row(align="center").pa-2
			v-col(v-for="(release, index) in sortedReleases" :cols="12 / sortedReleases.length" :key="index").pa-0
				dy-discography-artwork(:selected="isSelectedRelease(index)" :release-id="release.id" @select-release="selectRelease")
			v-col(cols=12).pa-0
				dy-discography-details(:release="selectedRelease" :first-selected="firstSelected" :last-selected="lastSelected")
</template>

<script lang="ts" src="./dy-discography.ts"></script>
