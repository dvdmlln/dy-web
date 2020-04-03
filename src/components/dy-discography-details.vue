<template lang="pug">
	v-card(
		flat
		:class="{ 'rounded-tl-0': firstSelected, 'rounded-tr-0': lastSelected }"
	).black-transparent
		v-card-title
			div.text-h5.text-sm-h3.text-md-h2.font-weight-bold.text-uppercase {{ release.name }}
		v-card-subtitle
			h4 {{ subtitle }}
		v-card-text
			v-row
				v-col(cols=12 md=6 lg=5 xl=4)
					v-row(v-if="showSpotifyPlayer")
						v-col
							iframe(:src="spotifyAlbumUrl" frameborder="0" allowtransparency="true" allow="encrypted-media").spotify-player
					v-row
						v-col
							h2 Tracklist
							template(v-for="(track, trackIndex) in release.tracklist")
								v-row(align="center")
									v-col(cols="auto").ml-2
										div.track__number {{ trackIndex + 1 }}
									v-col
										div.track__title {{ track.title }}
									v-col(cols="auto") {{ track.length | duration }}
									v-col(cols="auto")
										v-btn(text @click="toggleExpandedLyrics(trackIndex)" small) Lyrics
								v-divider(v-if="expandedLyrics.includes(trackIndex)")
								v-expand-transition
									v-row(v-if="expandedLyrics.includes(trackIndex)")
										v-col.mx-6.my-2
											div.track__lyrics {{ track.lyrics }}
								v-divider(v-if="trackIndex !== release.tracklist.length - 1")
				v-col(cols=12 md=6 lg=7 xl=8)
					v-row
						v-col
							h2 Press
							div(v-for="review in release.reviews").py-3
								span.font-italic {{ review.text }}
								span {{ review.source | source }}
					v-row
						v-col
							h2 Pressing Info
							v-row
								v-col(v-for="medium in release.media" :cols="6" :key="medium.id")
									v-img(:src="getMediumImage(medium.id)")
									div.text-center {{ medium.color }} {{ medium.type }} - {{ medium.amount }}x
</template>

<script lang="ts" src="./dy-discography-details.ts"></script>

<style lang="scss" scoped>
	.spotify-player {
		height: 80px;
		width: 100%;
	}

	.track__number {
		min-width: 2ch;
		text-align: right;
	}

	.track__title {
		word-break: break-word;
	}

	.track__lyrics {
		white-space: pre-wrap;
	}
</style>
