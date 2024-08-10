import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, StyleSheet, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import utils from './utils';
// exp://192.168.1.6:8081
const CustomDrawerContents = (props) => {
    const {top, bottom} = useSafeAreaInsets();

    return (
        <View style={{flex: 1}}>
            <View style={{alignContent: 'center', paddingTop: 10 + top}}>
                <Image
                    source={require('../assets/images/person-avator.jpg')}
                    style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, alignSelf: 'center'}}>Welcome, {utils.shortenString('Het Patel')}</Text>
                <Text style={{fontSize: 14, color: 'grey', alignSelf:"center"}}>hetPatel@technostripe.com</Text>
                
            </View>

            <DrawerContentScrollView {...props} 
                scrollEnabled={false}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View
                style={{
                    borderTopColor: 'grey',
                    borderTopWidth: 1,
                    padding: 20,            
                    paddingBottom:20 + bottom
                }}>
                <Text style={{
                     fontSize: 14,
                     fontWeight: 'bold',
                     fontColor: 'grey'
                }}>Apex Automation Pvt Ltd</Text>
                <Text>App version: 1.0.0</Text>
            </View>
        </View>
    )
}



export default CustomDrawerContents;