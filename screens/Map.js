//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('screen');
const parkings = [
	{
		id: 1,
		title: 'Parking 1',
		price: 5,
		rating: 4.2,
		spots: 20,
		free: 10,
	},
	{
		id: 2,
		title: 'Parking 2',
		price: 7,
		rating: 3.8,
		spots: 25,
		free: 20,
	},
	{
		id: 3,
		title: 'Parking 3',
		price: 10,
		rating: 4.9,
		spots: 50,
		free: 25,
	}
];

// create a component
class MyClass extends Component {
	renderHeader() {
		return (
			<View style={styles.header}>
				<Text>Header</Text>
			</View>
		)
	}

	renderParking(item) {
		return (
			<View key={`parking-${item.id}`} style={styles.parking}>
				<Text>{item.title}</Text>
			</View>
		)
	}

	renderParkings() {
		return (
			<ScrollView
				horizontal
				pagingEnabled
				scrollEnabled
				centerContent
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				snapToAlignment="center"
				onScrollEndDrag={props => console.log('onScrollEndDrag', props)}
				style={styles.parkings
			}>
				{parkings.map(parking => this.renderParking(parking))}
			</ScrollView>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderHeader()}
				<MapView
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					style={styles.map}
				/>
				{this.renderParkings()}
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flex: 0.5,
		justifyContent: 'center',
	},
	map: {
		flex: 3,
	},
	parkings: {
		position: 'absolute',
		right: 0,
		left: 0,
		bottom: 24,
	},
	parking: {
		backgroundColor: 'white',
		borderRadius: 6,
		padding: 24,
		marginHorizontal: 24,
		width: width - (24 * 2),
	}
});

//make this component available to the app
export default MyClass;
