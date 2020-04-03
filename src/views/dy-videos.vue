<template lang="pug">
	v-container
		v-row
			v-col(v-for="video in sortedVideos" cols=12 md=6 lg=4 :key="video.id").py-8
				v-lazy(min-height="280px")
					v-card(:href="video.url" target="_blank").black.video
						v-responsive(:aspect-ratio="4/3").video__preview
							v-img(:src="getPreviewImage(video.id)").align-center
								div.text-center.font-weight-bold.text-uppercase.text-h6.text-sm-h4.text-md-h5.text-xl-h4 {{ video.title }}
</template>

<script lang="ts" src="./dy-videos.ts"></script>

<style lang="scss" scoped>
	.video {
		overflow: hidden;
	}

	.video__preview {
		&:hover {
			transform: scale(1.5);
		}
		transition: transform 1s ease;
		align-items: center;
	}
</style>
