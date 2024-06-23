
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottomTabNav from './BottomTabNav'

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<BottomTabNav />
		</NavigationContainer>
	)
}

export default AppNavigator