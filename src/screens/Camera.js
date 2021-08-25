import React , { useRef }from 'react'
import { TouchableOpacity, View , Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

function Camera({flip}) {
    console.log(flip)
    const ref = useRef(null)
    const camera = useRef(null)
    console.log(ref)
    takePicture = async () => {
          const options = { quality: 0.5, base64: true };
          const data = await camera.current.takePictureAsync(options);
          console.log("uri===>",data.uri);
          setCamera(false);
          setUri(data.uri)
      };
    return (
        <View>
        <RNCamera
          ref={camera}
          style={{width:'100%',height:500}}
          type={flip ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{  flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={takePicture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default Camera;
