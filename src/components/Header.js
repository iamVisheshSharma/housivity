import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Normalize from '../utils/Dimension'

const Header = ({ name }) => {
	return (
		<View style={{ flexDirection: 'row', paddingStart: 12, alignItems: 'center', paddingVertical: Normalize(8), backgroundColor: '#fff'}}>
			<AntDesign name="arrowleft" size={28} color={"#000"} />
			<Text style={{ color: '#000', fontWeight: '600', fontSize: Normalize(14), marginStart: Normalize(6)}}>{name}</Text>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({})