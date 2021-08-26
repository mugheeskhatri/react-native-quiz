import React , { useRef }from 'react'
import { TouchableOpacity, View , Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

function Camera({camera}) {
    // console.log(flip)
    return (
        <View>
        <RNCamera
          ref={camera}
          style={{width:'100%',height:500}}
          // type={flip ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{  flexDirection: 'row', justifyContent: 'center' }}>
         
        </View>
      </View>
    )
}

export default Camera;
