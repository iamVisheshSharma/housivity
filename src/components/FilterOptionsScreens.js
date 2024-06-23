import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Normalize from '../utils/Dimension'
import { Fonts } from '../assets'

const FilterOptionsScreens = ({ setFilterOptions, showFilterOptions }) => {
	const values = [
		{ id: 1, name: 'Apartment' },
		{ id: 2, name: 'BungalowVilla' },
		{ id: 3, name: 'PentHouse' },
		{ id: 4, name: 'Row House' },
		{ id: 5, name: 'Farm House' },
	]
	return (
		<View style={styles.container}>
			<View style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
				{values.map((val) => (
					<Pressable style={[styles.button, { width: 'auto'}]} key={val.id}>
						<Text style={[styles.buttonText]}>
							{val.name}
						</Text>
					</Pressable>
				))}
			</View>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'flex-end',
				marginTop: Normalize(5)
			}}>
				<Pressable onPress={() => setFilterOptions(!showFilterOptions)} style={styles.button}>
					<Text style={[styles.buttonText,{ color: '#000' }]}>
						Cancel
					</Text>
				</Pressable>
				<Pressable onPress={() => setFilterOptions(!showFilterOptions)} style={[styles.button, { backgroundColor: '#FFA500', borderColor: '#FFA500'}]}>
					<Text style={[styles.buttonText,{ color: '#fff', }]}>
						Apply
					</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default FilterOptionsScreens

const styles = StyleSheet.create({
	container: {
		width: '95%',
		alignSelf: 'center',
		backgroundColor: '#fff',
		elevation: Normalize(5),
		borderRadius: Normalize(12),
		borderWidth: Normalize(1),
		borderColor: 'grey',
		position: 'absolute',
		top: Normalize(42),
		padding: Normalize(12),
		zIndex: 1000
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: Normalize(1),
		borderColor: 'grey',
		backgroundColor: '#fff',
		margin: Normalize(5),
		borderRadius: Normalize(24),
		// paddingHorizontal: Normalize(12),
		// paddingVertical: Normalize(3),
		width: Normalize(90)
	},
	buttonText: {
		color: '#595959',
		fontSize: Normalize(9.5),
		textAlign: 'center',
		paddingVertical: Normalize(4),
		paddingHorizontal: Normalize(12),
		fontFamily: Fonts.PoppinsMedium
	}
})