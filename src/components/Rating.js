import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import Normalize from '../utils/Dimension'
import { Images } from '../assets'

const Rating = ({ imageUrl }) => {
	return (
		<View style={{ padding: Normalize(4), marginTop: Normalize(8), marginHorizontal: Normalize(12), backgroundColor: '#fff', elevation: 4, borderRadius: Normalize(6)}}>
			<View style={{flexDirection: 'row', gap: Normalize(12) }}>
				<FastImage source={{ uri: imageUrl }} style={{ height: Normalize(80), width: Normalize(80), borderRadius: Normalize(6) }} />
				<View>
					<Text style={{ color: '#000', fontSize: Normalize(13), fontWeight: 'medium', maxWidth: Normalize(200), lineHeight: 20 }}>
						Dress Red Color UK/India Dress Red Color UK/India Dress Red Color UK/India
					</Text>
					<View style={{ flexDirection: 'row', marginTop: Normalize(6)}}>
						{[1, 2, 3, 4, 5].map((item) => (
							<FastImage key={item} source={Images.Star} style={{ height: Normalize(24), width: Normalize(24)}} />
						))}
					</View>
				</View>
			</View>
			<Text style={{
				fontSize: Normalize(11),
				color: 'grey',
				fontWeight: '500',
				lineHeigh: Normalize(18),
				marginVertical: Normalize(4)
			}}>
				This is best product which has a cotton cloth and so much good for wear
			</Text>
		</View>
	)
}

export default Rating

const styles = StyleSheet.create({})