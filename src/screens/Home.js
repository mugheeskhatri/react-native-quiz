import { View , Text, TouchableOpacity , ImageBackground , Image} from "react-native";
import React, { useEffect } from 'react';
import database from '@react-native-firebase/database';
const bgImage = {uri : 'https://www.codester.com/static/uploads/items/000/012/12653/preview/008.jpg'}
function Home({navigation}){
    return(
        <View style={{backgroundColor:'#FCA82F' ,flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{flex: 3,  justifyContent: "center"}}>

            <Image style={{marginLeft: 36,width: 200, height: 200}} source={require("../../assets/images/idea.png")} />

        <Text style={{fontSize:34,marginTop:30,fontWeight:'bold',color:'#6066D0'}}>Islamic Quiz App</Text>
            </View>
            <View style={{flex: 1 , justifyContent: "space-around" , flexDirection:'row' }}>
            <TouchableOpacity onPress={()=> navigation.navigate("Quiz")} style={{marginRight: 20,borderRadius:5,height: "30%" , width:"40%",alignItems:'center',justifyContent:'center',backgroundColor:'#6066D0'}}><Text style={{padding:10,fontSize:18,color:'white',fontWeight:'bold'}}>Start Quiz</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;