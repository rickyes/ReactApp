/**
 * Created by zhoumq on 17/7/1.
 */
import React,{ PureComponent } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    InteractionManager
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import OneMusicCell from './OneMusicCell'

export default class HomeScreen extends PureComponent{

    constructor(props){
        super(props);
        var musicDataSource = new ViewPager.DataSource({
            pageHasChanged:(p1,p2)=>p1!==p2
        });
        this.state = {
            musicList:musicDataSource.cloneWithPages([]),
            visiblePageIndex:0
        }
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.fetchMusicList();
        });
    }

    fetchMusicList(){
        fetch("http://v3.wufazhuce.com:8000/api/music/idlist/0")
            .then((response)=>response.json())
            .then((jsonResponse)=>{
                var musics = jsonResponse['data'];
                this.setState({
                    musicList:this.state.musicList.cloneWithPages(musics)
                });
            }).catch((error)=>{
                if(error instanceof SyntaxError){
                    console.log(error);
                }
        });
    }

    render(){
        return (
            <View style={{flex:1,flexDirection:'column',overflow:'hidden'}}>
                <ViewPager
                    style={styles.row}
                    dataSource={this.state.musicList}
                    renderPage={(data,pageId)=>
                        <View style={{flex:1}}>
                            <OneMusicCell id={data} index={pageId}
                                          visiblePageIndex={this.state.visiblePageIndex}/>
                        </View>
                    }
                    onChangePage={(pageNumber)=>{
                        this.setState({
                            visiblePageIndex:pageNumber
                        });
                    }}
                    renderPageIndicator={()=>(<View style={{width:0,height:0}}></View>)}
                    isLoop={false}
                    autoPlay={false}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:'row'
    }
});