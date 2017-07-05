/**
 * Created by zhoumq on 17/7/1.
 */
import React,{PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Webview from '../widget/Webview';

class HotScreen extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
            loaded:false,
            isRefreshing: true
        }
    }

    _getData(url,suc,err){
        return fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                suc && suc(data.subjects);
            })
            .catch((e)=>{
                err && err(e);
            });
    }

    componentDidMount(){
        let context = this;
        let doubai_movie = 'https://api.douban.com/v2/movie/in_theaters';
        setTimeout(()=>{
            context.setState({
                isRefreshing:false
            });
        },7000);
        context._getData(doubai_movie,function (data) {
            context.setState({
                dataSource:context.state.dataSource.cloneWithRows(data),
                loaded:true
            });
        });
    }

    renderLoading(){
        return (
            <View style={styles.loading}>
                <Text style={styles.loadText}>加载中...</Text>
            </View>
        );
    }

    _onRefresh(){

    }

    _onPress(data){
        this.props.navigator.push({
            component:Webview,
            passProps:{
                url:data.alt
            }
        });
    }

    renderList(){
        const { navigate } = this.props.navigation;
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData)=>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>navigate('Webview',{url:rowData.alt})}
                    >
                        <View style={styles.container}>
                            <Image source={{uri:rowData.images.large}} style={styles.thumbnail}/>
                            <View style={styles.content}>
                                <Text style={styles.left}>
                                    {rowData.title}{'\n'}{'\n'}
                                    <Text style={styles.left2}>{rowData.year} 年</Text>
                                </Text>
                            </View>
                            <View style={{marginTop:2,justifyContent:'flex-end'}}>
                                <Text style={styles.right}>{rowData.rating.average}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }
            />
        );
    }

    renderLoad(){
        if(this.state.loaded){
            return this.renderList();
        }else{
            return this.renderLoading();
        }
    }

    render() {
        return (
            <View>
                <Swiper
                    height={160}
                    autoplay={true}
                    style={styles.wrapper}
                    showsButtons={false}>
                    <View style={styles.slide1}>
                        <Image source={require('../../../img/swiper/1.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../../../img/swiper/2.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../../../img/swiper/3.jpg')}/>
                    </View>
                </Swiper>
                {this.renderLoad()}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    right:{
        color:'#B90001',
        fontSize:15,
        marginRight:30
    },
    left:{
        marginLeft:5,
        marginTop:5,
        fontSize:15,
        color:'#000',
        fontWeight:'bold'
    },
    left2:{
        marginLeft:15,
        margin:5,
        fontSize:13,
        color:'#35b998'
    },
    loadText: {
        justifyContent:'center',
        alignItems:'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        marginTop:10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
        flexDirection:'row',
        marginLeft:5,
        backgroundColor: '#F5FCFF',
    },
    thumbnail:{
        width:53,
        height:81
    },
    loading:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textHome: {
        color: '#fff',
        fontSize: 20
    },
    TouchableOpacity:{
        width:220,
        height:50,
        marginTop:420,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF7E7B'
    }
})

export default HotScreen;