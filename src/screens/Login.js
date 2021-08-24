import { View , Text, ImageBackground, TextInput, TouchableOpacity ,Image } from "react-native";
import React, { useState } from 'react';
import { logIn } from "../../Config/action";
function Login({navigation}){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const work = ()=> {
        let data = {
            email,password
        }
        logIn(data,navigation)
    }
    return(
        <View style={{flex:1,backgroundColor:'#d4f6ff'}}>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:36,fontWeight:'bold',color:'#134c70'}}>Log in</Text>
               </View> 
           <View style={{flex:3,width:'100%',alignItems:'center'}}>
           <TextInput onChangeText={(e) => setEmail(e)} keyboardType="email-address" style={{width:'80%',borderRadius:15,fontSize:15,padding:10,backgroundColor:'#e0f5fa',borderWidth:1,borderColor:'#9fcad5'}} placeholder="Enter username or email" />
            <TextInput onChangeText={(e) => setPassword(e)} secureTextEntry={true} style={{width:'80%',borderRadius:15,fontSize:15,padding:10,backgroundColor:'#e0f5fa',marginTop:12,borderWidth:1,borderColor:'#9fcad5'}} placeholder="Enter password" />
            <TouchableOpacity onPress={()=> work()} style={{width:'80%',borderRadius:20,fontSize:15,padding:10,backgroundColor:'#134c70',marginTop:24,alignItems:'center',justifyContent:'center',height:50}}>
                <Text style={{color:'white',fontSize:20}}>Log In</Text>
                </TouchableOpacity>
<TouchableOpacity>
<Text style={{color:'#451D59',marginTop:20}}>Forgot Password?</Text>
</TouchableOpacity>  
         <Text style={{marginTop:20,fontSize:22}}>____________   Or   ____________</Text>
           <TouchableOpacity style={{flexDirection:'row',width:'80%',borderRadius:20,fontSize:12,padding:10,backgroundColor:'whitesmoke',marginTop:24,alignItems:'center',justifyContent:'center',height:50,borderWidth:1,borderColor:'#9fcad5'}}>
           <Image style={{width: 20, height: 20}} source={require("../../assets/images/search.png")} />
           <Text style={{color:'#451D59',fontSize:13,marginLeft:20}}>Continue with Google</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:'row',width:'80%',borderRadius:20,fontSize:12,padding:10,backgroundColor:'whitesmoke',marginTop:10,alignItems:'center',justifyContent:'center',height:50,borderWidth:1,borderColor:'#9fcad5'}}>
           <Image style={{width: 25, height: 25}} source={require("../../assets/images/facebook.png")} />
           <Text style={{color:'#134c70',fontSize:13,marginLeft:14}}>Continue with Facebook</Text>
           </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>          
             <Text style={{marginTop:40,fontSize:16,color:'#134c70'}}>Don't have an account?</Text>
        </TouchableOpacity> 
         </View>
        </View>
    )
}

export default Login;