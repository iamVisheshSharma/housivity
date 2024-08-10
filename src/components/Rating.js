import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Normalize from '../utils/Dimension';
import {Fonts, Images} from '../assets';

const Rating = ({imageUrl}) => {
  return (
    <View
      style={styles.container}>
      <View style={{flexDirection: 'row', gap: Normalize(12)}}>
        <FastImage
          source={{uri: imageUrl}}
          style={{
            height: Normalize(95),
            width: Normalize(80),
            borderRadius: Normalize(6),
          }}
        />
        <View style={{flex: 1, }}>
          <Text
            style={{
              color: '#000',
              fontSize: Normalize(11),
              lineHeight: 20,
							fontFamily: Fonts.PoppinsMedium,
            }}>
            Dress Red Color UK/India Dress Red Color UK/India Dress Red Color
            UK/India
          </Text>
          <View style={{flexDirection: 'row', marginTop: Normalize(6)}}>
            {[1, 2, 3, 4, 5].map(item => (
              <FastImage
                key={item}
                source={Images.Star}
                style={{height: Normalize(24), width: Normalize(24)}}
              />
            ))}
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: Normalize(11),
          color: 'grey',
					fontFamily: Fonts.PoppinsRegular,
					marginTop: Normalize(6)
        }}>
        This is best product which has a cotton cloth and so much good for wear
      </Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
	container: {
		padding: Normalize(8),
		marginVertical: Normalize(4),
		marginHorizontal: Normalize(12),
		backgroundColor: '#fff',
		borderRadius: Normalize(6),
		borderWidth: 1,
		borderColor: '#C5C6D0',
		elevation: 4,
	}
});
