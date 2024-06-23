import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Carousel from 'pinar';
import FastImage from 'react-native-fast-image';
import Normalize from '../utils/Dimension';
const height = Dimensions.get('screen').height;
const CarouselView = ({images}) => {
	const baseUrl = 'https://logiqproperty.blr1.digitaloceanspaces.com/';
	
	return (
		<View style={styles.carouselContainer}>
			<Carousel style={styles.carousel} showsControls={false} showsDots={false}>
				{images?.map((img) => (
					<FastImage resizeMode='stretch' style={styles.image} source={{ uri: `${baseUrl}${img}` }} />
				))}
			</Carousel>
		</View>
	)
}

export default CarouselView

const styles = StyleSheet.create({
	image: {
		height: '100%',
		width: '100%',
		borderRadius: 20
	},
	carousel: {
		height: '100%',
		width: '100%',
	},
	carouselContainer: {
		height: Normalize(200)
	}
})