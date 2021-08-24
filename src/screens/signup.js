import { View , Text, ImageBackground, TextInput, TouchableOpacity , Image, ScrollView } from "react-native";
import React , {useState , useEffect} from 'react';
import { signUp } from "../../Config/action";
function SignUp({navigation}){
    const [userName , setUserName] = useState('mughees')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const work = ()=>{
        let data = {
            userName,email,password
        }
        console.log('done')
        signUp(data,navigation)
    }
    console.log(userName)
    return(<View style={{flex:1,backgroundColor:'#d4f6ff'}}>
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:36,fontWeight:'bold',color:'#134c70'}}>Sign Up</Text>              
   </View> 
             <View style={{flex:2,width:'100%',alignItems:'center'}}>
             <TextInput onChangeText={(e)=> setUserName(e)} style={{width:'80%',borderRadius:15,fontSize:15,padding:10,backgroundColor:'#e0f5fa',borderWidth:1,borderColor:'#9fcad5'}} placeholder="Enter Name" />
             <TextInput keyboardType="email-address" onChangeText={(e)=> setEmail(e)} style={{width:'80%',borderRadius:15,fontSize:15,padding:10,backgroundColor:'#e0f5fa',borderWidth:1,borderColor:'#9fcad5',marginTop:12}} placeholder="Enter username or email" />
              <TextInput secureTextEntry={true} onChangeText={(e)=> setPassword(e)} style={{width:'80%',borderRadius:15,fontSize:15,padding:10,backgroundColor:'#e0f5fa',borderWidth:1,borderColor:'#9fcad5',marginTop:12}} placeholder="Enter password" />
              <TouchableOpacity style={{width:'80%',borderRadius:20,fontSize:15,padding:10,backgroundColor:'#134c70',marginTop:24,alignItems:'center',justifyContent:'center',height:50}}>
                  <Text onPress={()=> work()} style={{color:'white',fontSize:20}}>Sign Up</Text>
                  </TouchableOpacity>
          <TouchableOpacity style={{marginTop:200,}} onPress={()=>navigation.navigate("Login")}>          
               <Text style={{fontSize:16,color:'#134c70'}}>Already have an account? </Text>
          </TouchableOpacity> 
           </View>
          </View>

    )
}

export default SignUp;