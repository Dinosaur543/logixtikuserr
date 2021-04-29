import React, { useState } from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

import { useRoute, useNavigation } from '@react-navigation/native';


const SearchResults = (props) => {
  //const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();


  const {originPlace, destinationPlace} = route.params
  console.log(route.params)

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace}/>
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
