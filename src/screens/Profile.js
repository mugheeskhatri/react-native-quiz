import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import database from '@react-native-firebase/database';
import auth, { firebase } from '@react-native-firebase/auth';
import { data } from 'browserslist';
function Profile() {
    const [data , setData] = useState()
    const user = auth().currentUser;
    console.log(data)
    console.log(user)
    useEffect(()=>{
        let a =[];
        database().ref('/').child('users').on('child_added' , data=>{
            var obj = data.val();
            obj.id=data.key
            a.push(obj)
            setData(a)
        })
    },[])
    let a = ['mughees','hamid']
    return (
        <View>
            {data? data.map((v,i)=>{
                console.log(v.userName)
           return( 
           <View key={i}>
               <Text>{v.email}</Text>
           </View>
            )
        }):null}
        <Text>{user.email}</Text>
        </View>

    )
}

export default Profile
