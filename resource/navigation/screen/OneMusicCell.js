/**
 * Created by zhoumq on 17/7/8.
 */
import React,{PureComponent} from 'react';
import {
    View,
    Image,
    Text,
    InteractionManager,
    ScrollView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import {DeviceWidth} from '../Utils/DisplayUtil';
import * as RNFS from 'react-native-fs';
import * as MusicManager from '../config/MusicManager';
let Sound = require('react-native-sound');
let jobId = -1;
let [beginLoad,loaded] = [1,2];
let playStatusIcon = [require('../../../img/music/playing.png'),require('../../../img/music/loading.gif'),require('../../../img/music/stop.png')];
let musicHandler = {};
import HtmlView from 'react-native-htmlview';
export default class OneMusicCell extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            music:{},
            loadStatus:this.props.id === MusicManager.musicId ? loaded : beginLoad,
            playStatus:this.props.id === MusicManager.musicId ? MusicManager.playState : MusicManager.start,
            loadProcess:""
        };
        if(this.props.id == MusicManager.musicId){
            musicHandler = MusicManager.musicHandler;
        }else if(this.props.index == this.props.visiblepageIndex && !isEmpty(MusicManager.musicHandler)){
            MusicManager.musicHandler.stop();
            MusicManager.musicHandler.release();
        }
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.fetchMusicDetail(this.props.id);
        });
    }

    fetchMusicDetail = (id) =>{
        fetch("http://v3.wufazhuce.com:8000/api/music/detail/" + id)
            .then((response)=>response.json())
            .then((jsonResponse)=>{
                this.setState({
                    music:jsonResponse.data
                })
            }).catch((error)=>{
            if(error instanceof SyntaxError){
                console.error(error);
            }
        });
    }

    //props改变
    componentWillReceiveProps(nextProps){
        if(parseInt(nextProps.index)!= nextProps.visiblePageIndex){
            this.setState({
                loadStatus:beginLoad,
                palyStatus:MusicManager.start,
                loadProcess:""
            });
        }
    }

    render(){
        var music = this.state.music;
        if(isEmpty(music)){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image
                        source={require('../../../img/music/ring.gif')}
                        style={{width:70,height:70}}
                    />
                </View>
            );
        }
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <Image style={{width: DeviceWidth, height: DeviceWidth / 2}} source={{uri: music.cover}}/>
                <View style={styles.music_content}>
                    <View style={styles.music_author_content}>
                        <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: music.author.web_url}}/>
                        <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
                            <Text style={{fontSize: 13, color: '#3399ff'}}>{music.author.user_name}</Text>
                            <Text style={{fontSize: 13, color: '#a0a0a0', marginTop: 5}}>{music.author.desc}</Text>
                        </View >
                        <TouchableHighlight
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginRight: 10,
                            }}
                            onPress={()=>this.operationMusic(music.music_id)}
                            underlayColor='#FFFFFF'>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={[styles.content, {
                                        fontSize: 8,
                                        marginRight: 8,
                                        color: '#a0a0a0'
                                    }]}>{this.state.loadProcess}</Text>
                                <Image style={{width: 30, height: 30}} source={playStatusIcon[this.state.playStatus]}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={ {flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={[styles.content, {fontSize: 15, flex: 1,}]}>{music.title}</Text>
                        <Text
                            style={[styles.content, {
                                fontSize: 10,
                                marginRight: 10
                            }]}>{music.maketime}</Text>
                    </View>
                </View>
                <View View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text style={styles.subtitle}>音乐故事</Text>
                    <Text style={styles.subtitle}>{'分享: ' + music.sharenum}</Text>
                    <Text style={styles.subtitle}>{'评论: ' + music.commentnum}</Text>
                </View>
                <Text style={[styles.content, {fontSize: 14, marginTop: 15}]}>{music.story_title}</Text>
                <Text style={[styles.content, {
                    fontSize: 12,
                    marginTop: 10,
                    color: '#3399ff'
                }]}>{music.story_author.user_name}</Text>
                <HtmlView
                    value={music.story.replace(/<br>/g, " ")}
                    style={[styles.content, {fontSize: 11, marginTop: 8}]}
                />
            </ScrollView>
        );
    }

    operationMusic(musicId){
        if(this.state.playStatus == MusicManager.playing){
            this.initSound();
        }else{
            if(this.state.loadStatus == loaded){
                this.playSound();
            }else{
                this.getMp3UrlAndDownloadFile(musicId);
            }
        }
    }

    getMp3UrlAndDownloadFile = (musicId) =>{
        MusicManager.playState = MusicManager.loading;
        this.setState({
            playStatus:MusicManager.playState
        });
        if(musicId.startsWith('http')){
            this.downFile(false,musicId);
        }else {
            fetch("https://api.lostg.com/music/xiami/songs/" + musicId)
                .then((response)=>response.json())
                .then((jsonResponse)=>{
                    this.downFile(false,jsonResponse.location);
                })
                .catch((error)=>{
                    if(error instanceof SyntaxError){
                        console.log(error);
                    }
                });
        }
    }

    downFile = (background,url)=>{
        if(jobId!==-1){
            console.log('A download is already in progress');
            return;
        }

        var progress = data =>{
            var percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
            var text = `Loading...${percentage}%`;
            this.setState({
                loadProcess:text
            });
            console.log(text);
        };

        var begin = ()=>{
          console.log('Download has begun');
        };

        var progressDivider = 1;

        const downloadDest = `${RNFS.DocumentDirectoryPath}/music.mp3`;

        const ret = RNFS.downloadFile({
            fromUrl: url,
            toFile: downloadDest,
            begin,
            progress,
            background,
            progressDivider
        });

        jobId = ret.jobId;

        ret.promise.then(res =>{
            this.initSound();
            this.setState({
                loadStatus:loaded,
                loadProcess:''
            });
            jobId = -1;
        }).catch((err)=>{
            jobId = -1;
        });
    }

    playSound = ()=> {
        musicHandler.play((success)=>{
            if(success){
                MusicManager.playState = MusicManager.start;
                this.setState({
                    playStatus:MusicManager.playState
                });
                console.log('successfully finished playing');
            }else{
                console.log('playback failed due to audio decoding errors');
            }
        });
        MusicManager.playState = MusicManager.playing;
        this.setState({
            playStatus:MusicManager.playState
        });
    }

    initSound = ()=> {
        musicHandler = new Sound(`${RNFS.DocumentDirectoryPath}/music.mp3`,'',(error)=>{
            if(error){
                console.log('failed to load the sound',error);
            }else{
                MusicManager.musicId = this.props.id;
                MusicManager.musicHandler = musicHandler;
                this.playSound();
            }
        });
    }

    pauseSound(){
        if(this.state.loadStatus==loaded){
            MusicManager.playState = MusicManager.start;
            this.setState({
                playStatus:MusicManager.playState
            });
            musicHandler.pause();
        }
    }

    releaseSound = () => {
        if(this.state.loadStatus==loaded){
            musicHandler.stop();
            musicHandler.release();
        }
    }

}

var isEmpty = function (obj) {
    for (var name in obj){
        return false;
    }
    return true;
}

const styles = StyleSheet.create({
    music_author_content:{
        height:60,
        flexDirection:'row',
        alignItems:'center'
    },
    music_content:{
        borderColor:'#f0f0f0',
        height:90,
        flex:1,
        borderWidth:0.2,
        borderRadius:3,
        marginRight:5,
        marginLeft:5,
        marginTop:-10,
        padding:5,
        backgroundColor:'#fff',
        flexDirection:'column',
        shadowColor:'#f0f0f0',
        shadowOpacity:0.8,
        shadowRadius:1,
        shadowOffset:{
            height:1,
            width:0
        }
    },
    content:{
        marginRight: 5,
        marginLeft: 5,
        marginTop: 3,
    },
    subtitle:{
        marginRight: 5,
        marginLeft: 5,
        fontSize: 10
    }
});