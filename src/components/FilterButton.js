import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Normalize from '../utils/Dimension'
import { Fonts } from '../assets'

const FilterButton = ({ item, setFilterOptions, showFilterOptions }) => {
	return (
		<Pressable onPress={() => {
			if(item?.name == "Filters") setFilterOptions(!showFilterOptions)
		}} style={[styles.container, { borderColor: item.active ? '#FFA500' : 'grey', }]}>
			{item?.number != undefined && 
			<View style={{
				backgroundColor: item.active ? '#FFA500' : 'grey',
				height: Normalize(16),
				width: Normalize(16),
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: Normalize(16)
			}}>
				<Text style={{
					textAlign: 'center',
					color: '#fff',
					fontSize: Normalize(10),
					fontFamily: Fonts.PoppinsMedium,
				}}>
					{item?.number}
				</Text>
			</View>}
			<Text style={[styles.nameStyles, { color: item.active ? '#FFA500' : 'grey', }]}>
				{item.name}
			</Text>
			{item.icon}
		</Pressable>
	)
}

export default FilterButton

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: Normalize(28),
		borderWidth: Normalize(1),
		borderRadius: Normalize(24),
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: Normalize(16),
		marginVertical: Normalize(8),
		gap: Normalize(8)
	},
	nameStyles: {
		fontSize: Normalize(11),
		fontFamily: Fonts.PoppinsRegular,
		letterSpacing: 0.14
	}
})