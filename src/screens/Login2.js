import { View , Text, ImageBackground, TextInput, TouchableOpacity ,Image , StyleSheet } from "react-native";
import React, { useState } from 'react';
import { logIn } from "../../Config/action";
function Login2({navigation}){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const work = ()=> {
        let data = {
            email,password
        }
        logIn(data,navigation)
    }
    return(
        <View style={{flex:1,backgroundColor:'#FCA82F'}}>
            <View style={{flex:1 ,justifyContent:'center', backgroundColor:'#6066D0' , alignItems:'center'}}>
            <View style={{width:"85%",backgroundColor:'white',height:600,alignItems:'center'}}>
                <Text style={{color:'black',fontSize:36,fontWeight:'bold',marginTop:15}}>Log In</Text>
                <View style={{marginTop:20,width:"100%",alignItems:'center'}}>
                <TextInput onChangeText={(e) => setEmail(e)} keyboardType="email-address" style={style.input} placeholder="Enter username or email" />
 <TextInput onChangeText={(e) => setPassword(e)} secureTextEntry={true} style={style.input} placeholder="Enter password" />
 <TouchableOpacity onPress={()=> work()} style={style.btn}>
     <Text style={{color:'#FCA82F',fontSize:20,fontWeight:'bold'}}>Log In</Text>
     </TouchableOpacity>
<TouchableOpacity>
<Text style={{color:'#6066D0',marginTop:20}}>Forgot Password?</Text>
</TouchableOpacity>  
<Text style={{marginTop:20,fontSize:22}}>____________   Or   ____________</Text>
<View style={{marginTop:20 , width:'100%',alignItems:'center'}}>
<TouchableOpacity style={style.socialBtn}>
<Image style={{width: 20, height: 20}} source={require("../../assets/images/search.png")} />
<Text style={{color:'#451D59',fontSize:13,marginLeft:20}}>Continue with Google</Text>
</TouchableOpacity>
<TouchableOpacity style={style.socialBtn}>
<Image style={{width: 25, height: 25}} source={require("../../assets/images/facebook.png")} />
<Text style={{color:'#134c70',fontSize:13,marginLeft:14}}>Continue with Facebook</Text>
</TouchableOpacity>
</View>
<TouchableOpacity style={{marginTop:40}} onPress={()=> navigation.navigate('SignUp')}>          
  <Text style={{fontSize:16,color:'#6066D0'}}>Don't have an account?</Text>
</TouchableOpacity> 
                </View>
            </View>
            </View>
           
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        width:'90%',
        borderRadius:50,
        fontSize:15,
        padding:10,
        paddingLeft:25,
        borderBottomWidth:1,
        borderColor:'#c3c5c7',
        marginTop:15
    },
    btn:{
        width:'80%',
        borderRadius:10,
        fontSize:15,
        padding:10,
        backgroundColor:'#6066D0',
        marginTop:24,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        zIndex:2
    },
    socialBtn:{
        flexDirection:'row',
        width:'80%',
        borderRadius:20,
        fontSize:12,
        padding:10,
        marginTop:10,alignItems:'center',
        justifyContent:'center',
        height:50,
        borderWidth:1,
        borderColor:'#6066D0'
    }
})

export default Login2;