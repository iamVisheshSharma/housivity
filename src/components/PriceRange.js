import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const PriceRange = ({ minPrice, maxPrice, isSaved }) => {
	return (
		<View style={styles.container}>
				<Text style={styles.priceRangeStyle}>₹{minPrice} - ₹{maxPrice}</Text>
			<AntDesign
				name="hearto"
				size={28}
				color={'#FFA500'}
			/>
		</View>
	)
}

export default PriceRange

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	priceRangeStyle: {
		color: 'grey',
		fontSize: 18,
		fontWeight: '600',
		lineHeight: 24,
		letterSpacing: 0.12
	}
})