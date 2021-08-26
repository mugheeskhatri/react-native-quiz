import { View , Text, TextInput, TouchableOpacity , Image, ScrollView , StyleSheet} from "react-native";
import React , {useState , useEffect , useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import { signUp } from "../../Config/action";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Camera from "./Camera";
function SignUp({navigation}){
    const [userName , setUserName] = useState('mughees')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [age , setAge] = useState('')
    const [phone , setPhone] = useState('')
    const [ imgSrc = setImgSrc ] = useState('')
    const [uri , setUri ] = useState('')
    const [ selectedValue , setSelectedValue ] = useState('')
  const ref = useRef(null)
  const camera = useRef(null)
  console.log(uri)
  console.log(ref)
    const work = ()=>{
        let data = {
            userName,email,password,phone,age,uri
        }
        console.log('done')
        signUp(data,navigation)
    }
    console.log(selectedValue) 

    const photo =  ()=>{ 
           const option={
              mediaType:'photo',
              includeBase64:true
            }
            launchCamera(option,(response)=>{
                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
                } else {
                  console.log(response.assets[0].uri)
              }})
        console.log('match')
          }


          return(<View style={{flex:1,backgroundColor:'#d4f6ff'}}>
        <View style={{flex:1 ,justifyContent:'center', backgroundColor:'#6066D0' , alignItems:'center'}}>

            <View style={{width:"85%",backgroundColor:'white',height:600}}>
        <View style={{backgroundColor:'#FCA82F',width:'40%',padding:20,alignItems:'center',justifyContent:'center',marginTop:20,borderTopEndRadius:35,borderBottomEndRadius:35}}><Text style={{fontWeight:'bold',fontSize:20}}>Sign Up</Text></View>
               <View style={{alignItems:'center'}}>
               <View style={{marginTop:20,width:"100%",alignItems:'center'}}>
                <TextInput onChangeText={(e)=> setUserName(e)} style={style.input} placeholder="Enter Name" />
<TextInput keyboardType="email-address" onChangeText={(e)=> setEmail(e)} style={style.input} placeholder="Enter username or email" />
 <TextInput secureTextEntry={true} onChangeText={(e)=> setPassword(e)} style={style.input} placeholder="Enter password" />
 <TextInput onChangeText={(e)=> setAge(e)} style={style.input} placeholder="Enter Age" />
 <TextInput onChangeText={(e)=> setPhone(e)} style={style.input} placeholder="Enter Phone" />
 <TouchableOpacity style={style.socialBtn}>
<Image style={{width: 50, height: 50}} source={require("../../assets/images/camera.png")} />
<Text style={{color:'#134c70',fontSize:13}}>Add Image</Text>
</TouchableOpacity>
<TouchableOpacity style={style.imageBtn}>
<Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Add Image" value="image" />
        <Picker.Item label="Take a photo" value="photo" />
        <Picker.Item  label="Choose from gallery" value="gallery" />
      </Picker>
</TouchableOpacity>
<TouchableOpacity onPress={()=> work()} style={style.btn}>
    <Text style={{color:'#FCA82F',fontSize:20,fontWeight:'bold'}}>Sign Up</Text>
     </TouchableOpacity>  
<View style={{width:'100%',alignItems:'center'}}>

<TouchableOpacity style={{marginTop:25}} onPress={()=> navigation.navigate('Login')}>          
  <Text style={{fontSize:16,color:'#6066D0'}}>Already have an account?</Text>
</TouchableOpacity> 
</View>

                </View>
               </View>
            </View>
            </View>
            {selectedValue === 'photo' ? photo() : null}
          </View>

)
}

export default SignUp;



const style = StyleSheet.create({
    input:{
        width:'90%',
        borderRadius:50,
        fontSize:15,
        padding:10,
        paddingLeft:25,
        borderBottomWidth:1,
        borderColor:'#c3c5c7',
        marginTop:10
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
    },
    imageBtn:{
        flexDirection:'row',
        width:'80%',
        borderRadius:20,
        fontSize:12,
        padding:10,
        marginTop:10,
        height:50,
        borderWidth:1,
        borderColor:'#6066D0',
        justifyContent:'center',
        alignItems:'center'
    }
})
{/* {camera1 ? <View style={{flex:1,marginTop:-500 }}>
<Camera camera={camera}/>
<TouchableOpacity>
<Text onPress={()=>setFlip(!flip)}>Flip Camera</Text>
</TouchableOpacity>
<TouchableOpacity onPress={takePicture}>
<Text style={{ fontSize: 14 }}> SNAP </Text>
</TouchableOpacity>
</View> : null} */}




// takePicture = async () => {
//     const options = { quality: 0.5, base64: true };
//     const data = await camera.current.takePictureAsync(options);
//     console.log("uri===>",data.uri);
//     setCamera1(false);
//     setUri(data.uri)
// };