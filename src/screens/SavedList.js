import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
import { removeFromSaved } from '../redux/saved/savedSlice';
import Normalize from '../utils/Dimension';
import { Fonts } from '../assets';

const SavedList = () => {
	const dispatch = useDispatch()
	const { saved } = useSelector(state => state.saved);

	const onSaved = useCallback((item) => {
		const val = isSaved(item);
		if (!val) {
			dispatch(addToSaved(item));
		} else {
			dispatch(removeFromSaved(item));
		}
	}, [dispatch, saved]);

	const isSaved = (item) => {
		const findItem = saved?.find(ele => ele.id == item.id)
		if (findItem !== undefined) return true
		else false;
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={{
				backgroundColor: '#fff',
				padding: Normalize(12),
				shadowColor: '#000',
				shadowOffset: { width: 1, height: 1 },
				shadowOpacity: 0.4,
				shadowRadius: 3,
				elevation: 5,
			}}>
				<Text style={{
					color: '#0d0d0d',
					fontSize: Normalize(17),
					fontFamily: Fonts.PoppinsMedium,
				}}>
					Saved Property
				</Text>
			</View>
			<Text style={{
				color: '#000',
				fontSize: Normalize(11),
				padding: Normalize(8),
				fontFamily: Fonts.PoppinsRegular
			}}>
				<Text style={{
					color: '#FFA500',
					fontStyle: 'italic',
				}}>
					Dear Sanjay Chaudhary
				</Text>
				, here is your liked properties
			</Text>
			<FlatList
				data={saved}
				keyExtractor={(_, index) => index}
				renderItem={({ item, index }) => (
					<ProductListItem
						key={index}
						images={item.images}
						price={item.displayPrice.fixedPrice}
						priceRange={item.displayPrice.priceRange}
						isLimelightListing={item.isLimelightListing}
						isFeaturedListing={item.isFeaturedListing}
						isIconicListing={item.isIconicListing}
						isPopularListing={item.isPopularListing}
						isListed={item.isListed}
						companyName={item.company.name}
						companyType={item.company.companyType.type}
						address={`${item.address.area} ${item.address.city.name}`}
						propertyType={item.propertyType.type}
						onPressSaved={() => onSaved(item)}
						isSaved={isSaved(item)}
					/>
				)}
			/>
		</SafeAreaView>
	)
}

export default SavedList