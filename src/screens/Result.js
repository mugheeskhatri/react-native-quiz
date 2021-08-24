import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';

function Result() {
    return (
        <View style={{flex:1,backgroundColor:'#6066D0'}}>
        <TouchableOpacity style={{width:'20%',borderBottomEndRadius:20,borderTopEndRadius:20,alignItems:'center',justifyContent:'center',marginTop:10,padding:13,backgroundColor:'#FCA82F'}} onPress={()=> navigation.navigate("Profile")}><Text style={{fontSize:13}}>Profile</Text></TouchableOpacity>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:-10}}>
           <View style={{width:'80%',paddingTop:60,alignItems:'center'}}>
               <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Passed</Text>
            <Progress.Bar style={{marginTop:10}} color="#FCA82F" progress={.5} width={200} />
           </View>
        </View>
          <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
         <View style={{padding:20,width:'80%',backgroundColor:'white',height:200,borderRadius:20,alignItems:'center'}}>
    <View style={{width:"100%",paddingTop:20}}>
        <View style={{flexDirection:'row'}}>
            <View style={{width:'70%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>Total Questions</Text></View>
            <View style={{width:'30%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>10</Text></View>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <View style={{width:'70%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>Correct Answers</Text></View>
            <View style={{width:'30%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>10</Text></View>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <View style={{width:'70%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>Wrong Answers</Text></View>
            <View style={{width:'30%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>10</Text></View>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <View style={{width:'70%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>Percentage</Text></View>
            <View style={{width:'30%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>90%</Text></View>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <View style={{width:'70%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>Result</Text></View>
            <View style={{width:'30%'}}><Text style={{fontSize:18,fontWeight:"bold"}}>Passed</Text></View>
        </View>
    </View>
     <View style={{width:'100%',flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
         <TouchableOpacity style={{backgroundColor:'#FCA82F',padding:12}}><Text>Correct Answers</Text></TouchableOpacity>
     </View>
         </View>
         </View>
         </View>
    )
}

export default Result
