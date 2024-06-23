import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from '../redux/product/productSlice';
import ProductListItem from '../components/ProductListItem';
import { addToSaved, removeFromSaved, updateToSaved } from '../redux/saved/savedSlice';
import Normalize from '../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FilterButton from '../components/FilterButton';
import FilterOptionsScreens from '../components/FilterOptionsScreens';
import { Fonts } from '../assets';

const HomePage = () => {
	const [showFilterOptions, setFilterOptions] = useState(false)
	const dispatch = useDispatch();
	const { products, loading, page, hasMore } = useSelector(state => state.product);
	const { saved } = useSelector(state => state.saved);

	const [params, setParams] = useState({
		city: "Gandhinagar",
		projectType: ["pgHostel"],
		page: 1
	})

	useEffect(() => {
		getProducts(params);
	}, []);

	function getProducts(params) {
		dispatch(fetchProductsThunk(params));
	}

	const isSaved = useCallback((item) => {
		const findItem = saved?.find(ele => ele.id === item.id);
		return findItem !== undefined;
	}, [saved]);

	const onSaved = useCallback((item) => {
		const val = isSaved(item);
		if (!val) {
			dispatch(addToSaved(item));
		} else {
			dispatch(removeFromSaved(item));
		}
	}, [dispatch, saved]);

	const loadMoreProducts = () => {
		if (!loading && hasMore) {
			console.log('loadMore')
			setParams(prevParams => ({
				...prevParams,
				page: prevParams.page + 1
			}));
			dispatch(fetchProductsThunk({ ...params, page: page }));
		}
	};

	// if (loading) {
	// 	return (
	// 		<View style={{
	// 			flex: 1,
	// 			justifyContent: 'center',
	// 			alignItems: 'center'
	// 		}}>
	// 			<ActivityIndicator size={'large'} color={'#FFA500'} />
	// 		</View>
	// 	)
	// }

	const LoadMore = () => (
		<View style={{ alignItems: 'center' }}>
			<ActivityIndicator size={'large'} color={'#FFA500'} />
		</View>
	);

	const filter = [
		{
			name: 'Filters',
			icon: <AntDesign name='filter' size={Normalize(15)} color={'#FFA500'} />,
			number: 0,
			active: true,
		},
		{
			name: 'Types Of Property',
			icon: <Entypo name='chevron-thin-down' size={Normalize(13)} color={'grey'} />,
			active: false,
		},
		{
			name: 'BHK Type',
			icon: <Entypo name='chevron-thin-down' size={Normalize(13)} color={'grey'} />,
			active: false,
		}
	]

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<View>
				<FlatList
					data={filter}
					keyExtractor={(_, index) => index}
					horizontal
					renderItem={({ item, index }) => (
						<FilterButton item={item} setFilterOptions={setFilterOptions} showFilterOptions={showFilterOptions} />
					)}
					contentContainerStyle={{ paddingStart: Normalize(8), gap: Normalize(8), marginVertical: Normalize(6) }}
				/>
				{showFilterOptions && <FilterOptionsScreens setFilterOptions={setFilterOptions} showFilterOptions={showFilterOptions} />}
			</View>
			<Text style={styles.headerTextStyle}>
				<Text style={{ color: '#FFA500' }}>
					{products?.length} Results
				</Text> found for <Text style={{ color: '#FFA500' }}> Buy </Text> in <Text style={{ color: '#FFA500' }}> {params.city}</Text>
			</Text>
			<FlatList
				data={products}
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
				ListFooterComponent={() => (loading ? <LoadMore /> : null)}
				onEndReached={loadMoreProducts}
			/>
		</SafeAreaView>
	)
}

export default HomePage

const styles = StyleSheet.create({
	headerTextStyle: {
		color: 'grey',
		paddingHorizontal: Normalize(12),
		fontSize: Normalize(12),
		fontFamily: Fonts.PoppinsMedium,
		lineHeight: 24
	},
})