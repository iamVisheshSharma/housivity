import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CarouselView from './CarouselView'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Normalize from '../utils/Dimension'
import { Fonts } from '../assets'

const ProductListItem = ({ images, price, priceRange, isLimelightListing, isFeaturedListing, isIconicListing, isPopularListing, isListed, companyName, companyType, address, propertyType, onPressSaved, isSaved }) => {
	
	const renderTagName = () => {
		if (isLimelightListing) return "Limelight"
		else if (isFeaturedListing) return "Featured Listing"
		else if (isIconicListing) return "Iconic Listing"
		else if (isPopularListing) return "Popular Listing"
		else if (isListed) return 'Listed'
		else return "Sample Listing"
	}

	return (
		<View style={styles.container}>
			<CarouselView images={images} />
			<View style={[styles.tagContainer]}>
				<Text style={styles.nameStyle}>
					{renderTagName()}
				</Text>
			</View>
			<View style={styles.priceRangeContainer}>
				<Text style={styles.priceRangeStyle}>₹{price}</Text>
				{isSaved ?
					<AntDesign
						name="heart"
						size={28}
						color={'#FFA500'}
						onPress={onPressSaved}
					/>
					:
					<AntDesign
						name="hearto"
						size={28}
						color={'#FFA500'}
						onPress={onPressSaved}
					/>}
			</View>
			<View style={{ borderWidth: 0, marginVertical: 8 }}>
				<Text style={styles.companyType}>
					{companyType}
				</Text>
				<Text style={styles.companyName}>by {companyName}</Text>
			</View>
			<View style={styles.locationContainer}>
				<Ionicons
					name="location-sharp"
					size={Normalize(20)}
					color={'#FFA500'}
				/>
				<Text style={styles.locationStyles}>
					{address}
				</Text>
			</View>
			<View>
				<Text style={styles.propertyTypeStyles}>
					{propertyType}
				</Text>
			</View>
		</View>
	)
}

export default React.memo(ProductListItem)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: Normalize(8),
		margin: Normalize(8),
		borderRadius: Normalize(8),
		backgroundColor: '#FFF',
		elevation: 2,
	},
	tagContainer: {
		backgroundColor: '#00A86B',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Normalize(4),
		marginVertical: Normalize(12),
		maxWidth: '36%'
	},
	nameStyle: {
		color: '#fff',
		fontSize: Normalize(10),
		fontFamily: Fonts.PoppinsMedium,
		margin: Normalize(1),
		letterSpacing: Normalize(0.12)
	},
	priceRangeContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	priceRangeStyle: {
		color: 'grey',
		fontSize: Normalize(16),
		fontFamily: Fonts.PoppinsSemiBold,
		lineHeight: 24,
		letterSpacing: 0.12
	},
	companyType: {
		color: '#000',
		fontSize: Normalize(14),
		fontFamily: Fonts.PoppinsSemiBold,
		letterSpacing: 0.12,
	},
	companyName: {
		color: 'grey',
		fontSize: Normalize(11.5),
		fontFamily: Fonts.PoppinsMedium,
		letterSpacing: 0.12,
	},
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Normalize(3),
		marginVertical: 6
	},
	locationStyles: {
		color: 'grey',
		fontSize: Normalize(13),
		letterSpacing: 0.12,
		fontFamily: Fonts.PoppinsMedium,
	},
	propertyTypeStyles: {
		color: 'grey',
		fontSize: Normalize(15),
		fontFamily: Fonts.PoppinsMedium,
	},
})