import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share } from 'react-native';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';

export default function AboutPage({navigation,route}) {

    const [tip, setTip] = useState({
        "idx":9,
        "category":"재테크",
        "title":"렌탈 서비스 금액 비교해보기",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
        "desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date":"2020.09.09"
    })
    
    useEffect(()=>{
        navigation.setOptions({
            title:'소개 페이지',
            headerStyle: {
                backgroundColor: '#303f9f',
                shadowColor: "#303f9f",
            },
            headerTintColor: "#fff",
        })
    },[])

    const link = () => {
        Linking.openURL("https://spartacodingclub.kr")
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            {/* app.js에서 일괄 적용 X, 이 페이지에서 적용해주자 */}

            <Text style={styles.title}>HELLO! 스파르타코딩 앱개발 {'\n'} 반에 오신 것을 환영합니다🎉</Text>
            {/* to add a line break use {'\n'} */}

            <View style={styles.middleArea}>
                <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/originals/58/65/39/58653934dc8e73a5817a85e38208fe4c.jpg' }} />

                <Text style={styles.text01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.text02}>꼭 완주 하셔서 꼭 여러분 것으로 만들어가시길 바랍니다</Text>

                <TouchableOpacity  onPress={()=>link()} style={styles.square}><Text style={styles.squareText}>sparta Coding Club</Text></TouchableOpacity> 

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#303f9f',
        flex:1,
        //uncertain necessity
        alignItems:'center'
      },

      title: {
        fontSize: 30,
        fontWeight: '700',
        marginTop:10,
        color: '#f5f6fb'
      },

      middleArea: {
        backgroundColor: '#f5f6fb',
        marginTop: 60,
        height:550,
        width:'90%',
        borderRadius:20,
        justifyContent:'center',
        // 안에 컨텐츠(텍스트)가 위에 올라가서 붙지 않게 컬럼(상하)의 가운데 정렬
        alignItems:'center'
        // 안에 컨텐츠가 주어진 플렉스 디렉션(컬럼)의 반대 방향(좌우)의 가운데 정렬 
      },

      image: {
        width:'80%',
        height:200,
        borderRadius:20
      },

      text01: {
          fontSize:25,
          fontWeight:'700',
          textAlign: 'center',　
          paddingLeft:22,
          paddingRight:22,
          marginTop:20
        },

      text02: {
        fontSize:20,
        fontWeight:'700',
        textAlign: 'center',
        padding:22
      },

      square: {
        padding: 15,
        backgroundColor: "#e3334d",
        borderRadius: 10
      },

      squareText: {
        fontSize:16,
        fontWeight:'700',
        textAlign: 'center',
        color:'#f5f6fb'
      },

});

