/**
 * Created by zhoumq on 17/7/6.
 */
import React,{PureComponent} from 'react';
import {
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import {apiURL} from './UrlCons';
import HtmlView from 'react-native-htmlview';
export default class ReadingDetail extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            title:"",
            essay:"",
            hp_makettime:""
        }
    }

    componentDidMount(){
        this.fetchDaily();
    }

    fetchDaily(){
        const { params } = this.props.navigation.state;
        var detailUrl = apiURL.baseUrl+apiURL.essay+params.id;
        fetch(detailUrl)
            .then((response)=>response.json())
            .then((jsonResponse)=>{
                if(jsonResponse['data']){
                    var essayResult = jsonResponse["data"];
                    this.setState({
                        title: essayResult.hp_title,
                        essay: essayResult.hp_content
                    });
                }
            }).catch((error) => {

            if (error instanceof SyntaxError) {
                alert("SyntaxError error");
            }
        });
    }

    render() {
        const content = this.state.essay.replace(/<br>/g," ");
        return (
            <ScrollView style={styles.container}>
                <Text style={{fontSize: 17, marginBottom: 10, alignItems: 'center'}}>{this.state.title}</Text>
                <HtmlView
                    value={content}
                    style={{fontSize: 13}}
                />
            </ScrollView>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
});