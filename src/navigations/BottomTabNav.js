import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import CityExpert from '../screens/CityExpert';
import SavedList from '../screens/SavedList';
import InvestorsPage from '../screens/InvestorsPage';
import ProfilePage from '../screens/ProfilePage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';
import Normalize from '../utils/Dimension';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../assets';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
	const screenOptions = {
		headerShown: false,
		tabBarShowLabel: true,
		tabBarInactiveTintColor: '#000',
		tabBarActiveTintColor: '#FFA500',
		tabBarStyle: { backgroundColor: '#fff' },
	};

	const { saved } = useSelector(state => state.saved);

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={HomePage}
				options={() => ({
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name="home"
							size={24}
							color={color}
						/>
					),
					tabBarLabel: ({ focused }) => {
						return <Text style={focused ? styles.focusedTabLable : styles.tabLabel}>Home</Text>;
					}
				})}
			/>
			<Tab.Screen
				name="CityExpert"
				component={CityExpert}
				options={() => ({
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="people-outline"
							size={24}
							color={color}
						/>
					),
					tabBarLabel: ({ focused }) => {
						return <Text style={focused ? styles.focusedTabLable : styles.tabLabel}>City Expert</Text>;
					}
				})}
			/>
			<Tab.Screen
				name="Saved"
				component={SavedList}
				options={() => ({
					tabBarIcon: ({ color, focused }) => focused ?
						(
							<>
								<AntDesign
									name="heart"
									size={28}
									color={'#FFA500'}
								/>
								{saved?.length > 0 && <View
									style={styles.dotStyle} />}
							</>
						)
						:
						(
							<>
								<AntDesign
									name="hearto"
									size={24}
									color={color}
								/>
								{saved?.length > 0 && <View
									style={styles.dotStyle} />}
							</>
						),
						tabBarLabel: ({ focused }) => {
							return <Text style={focused ? styles.focusedTabLable : styles.tabLabel}>Saved</Text>;
						}
				})}
			/>
			<Tab.Screen
				name="Investors"
				component={InvestorsPage}
				options={() => ({
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="bag-handle-outline"
							size={24}
							color={color}
						/>
					),
					tabBarLabel: ({ focused }) => {
						return <Text style={focused ? styles.focusedTabLable : styles.tabLabel}>Investors</Text>;
					}
				})}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfilePage}
				options={() => ({
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="account-circle-outline"
							size={24}
							color={color}
						/>
					),
					tabBarLabel: ({ focused }) => {
						return <Text style={focused ? styles.focusedTabLable : styles.tabLabel}>Profile</Text>;
					}
				})}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNav;


const styles = StyleSheet.create({
	dotStyle: {
		width: Normalize(10),
		height: Normalize(10),
		borderRadius: Normalize(10),
		backgroundColor: '#FFA500',
		position: 'absolute',
		top: Normalize(2),
		right: Normalize(15)
	},
	tabLabel: {
		fontSize: Normalize(10),
		color: '#000',
		fontFamily: Fonts.PoppinsRegular
	},
	focusedTabLable: {
		fontSize: Normalize(11),
		color: '#FFA500',
		fontFamily: Fonts.PoppinsMedium
	}
})