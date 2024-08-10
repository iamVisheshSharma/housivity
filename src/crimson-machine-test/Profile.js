import {
	FlatList,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import FastImage from 'react-native-fast-image';
import { Fonts, Images } from '../assets';
import Normalize from '../utils/Dimension';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Rating from '../components/Rating';

const Profile = () => {
	const [selectedId, setSelectedId] = useState(3);
	const profileImage =
		'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const productImage =
		'https://images.unsplash.com/photo-1562704481-bb8ffe80be2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const profileItem = [
		{ id: 1, name: 'My Post' },
		{ id: 2, name: 'Reaction Videos' },
		{ id: 3, name: 'Reviews' },
		{ id: 4, name: 'Favourites' },
		{ id: 5, name: 'New  Users' },
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<Header name={'My Profile'} />
			<ScrollView>
				<View>
					<FastImage
						source={Images.BackgroungImage}
						style={{ width: '100%', height: Normalize(180) }}
					/>
					<View
						style={{
							width: '90%',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							marginHorizontal: Normalize(10),
							top: -Normalize(40),
							position: 'absolute',
							bottom: -Normalize(40),
						}}>
						<FastImage
							source={{ uri: profileImage }}
							style={{
								height: Normalize(80),
								width: Normalize(80),
								borderRadius: Normalize(40),
								borderWidth: Normalize(1),
								borderColor: '#000',
							}}
						/>
						<View
							style={{
								flexDirection: 'row',
								gap: Normalize(12),
								alignItems: 'center',
							}}>
							<Pressable
								style={styles.buttonContainer}>
								<Text
									style={styles.buttonText}>
									Become Seller
								</Text>
							</Pressable>
							<FontAwesome5 name="edit" size={Normalize(16)} color={'#000'} />
						</View>
					</View>
				</View>
				<View style={{ top: Normalize(40), marginHorizontal: Normalize(12) }}>
					<Text style={styles.name}>John Doe</Text>
					<Text
						style={styles.heading}>
						About me
					</Text>
					<Text
						style={styles.about}>
						This is about me for the test and its is fake data.This is about me
						for the test and its is fake data.
					</Text>
				</View>
				<View style={styles.connectionContainer}>
					<Text style={styles.connectionCount}>
						547 {'\t\t'}
						<Text style={styles.connectionType}>Followers</Text>
					</Text>
					<Text style={styles.connectionCount}>
						678 {'\t\t'}
						<Text style={styles.connectionType}>Following</Text>
					</Text>
				</View>
				<View>
					<FlatList
						data={profileItem}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item, index) => index}
						renderItem={({ item, index }) => (
							<Pressable
								onPress={() => setSelectedId(item.id)}
								style={[styles.tabContainer, { borderBottomWidth: selectedId == item.id ? Normalize(2) : Normalize(0), }]}>
								<Text
									style={{
										fontSize: Normalize(12.5),
										color: selectedId == item.id ? 'blue' : 'black',
										fontFamily: selectedId == item.id ? Fonts.PoppinsSemiBold : Fonts.PoppinsMedium,
									}}>
									{item.name}
								</Text>
							</Pressable>
						)}
					/>
				</View>
				{selectedId == 3 && (
					<FlatList
						data={[1, 2, 3, 4, 5]}
						keyExtractor={item => item}
						renderItem={({ item }) => (
							<Rating key={item} imageUrl={productImage} />
						)}
						style={{ marginTop: Normalize(8)}}
					/>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	connectionContainer: {
		marginHorizontal: Normalize(12),
		top: Normalize(40),
		marginVertical: Normalize(12),
		gap: Normalize(18),
		flexDirection: 'row',
		marginBottom: Normalize(45),
	},
	name: {
		fontFamily: Fonts.PoppinsSemiBold,
		color: '#000',
		fontSize: Normalize(16),
		marginTop: Normalize(8),
	},
	connectionType: {
		color: 'grey',
		fontFamily: Fonts.PoppinsMedium,
		marginStart: Normalize(12.5),
		fontSize: Normalize(12),
	},
	connectionCount: {
		color: '#000',
		fontFamily: Fonts.PoppinsSemiBold,
		fontSize: Normalize(12.5),
	},
	about: {
		fontSize: Normalize(11),
		color: 'grey',
		lineHeight: 18,
		fontFamily: Fonts.PoppinsRegular,
		letterSpacing: 0.25
	},
	heading: {
		fontSize: Normalize(12),
		color: 'grey',
		fontFamily: Fonts.PoppinsMedium,
		lineHeight: 30,
	},
	buttonContainer: {
		borderWidth: Normalize(1.5),
		borderColor: '#2832C2',
		width: Normalize(140),
		height: Normalize(32),
		borderRadius: Normalize(5),
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#2832C2',
		fontSize: Normalize(11),
		textAlign: 'center',
		fontFamily: Fonts.PoppinsSemiBold,
		maxHeight: Normalize(30)
	},
	tabContainer: {
		paddingHorizontal: Normalize(10),
		paddingVertical: Normalize(4),
		borderBottomColor: '#2832C2',
		justifyContent: 'center',
		alignItems: 'center'
	},
});
