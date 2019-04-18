import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import {
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text
} from 'native-base';
import {
    sendData
} from '../Actions';
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
export class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            date:"2018-04-18",
            image: '',
            title : '',
            Description : ''
        }
    }
    
    static navigationOptions = {
        header: null
    }
    
    componentDidMount(){
        this.loadImage();
    }

    loadImage = async() => {
        fetch('https://c34a48c6-203f-4658-aa12-dae602de5260.mock.pstmn.io/picture')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                image : responseJson.picture
            })
        })
        .catch((error) => {
        console.error(error);
        });
    }

    submitData = () => {
        if(!this.props.loading){
            this.props.sendData(this.state);
            this.props.navigation.navigate('DetailScreen');
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {this.state.image ? 
                    <Image
                        style={{
                            height: '50%',
                            width: '100%',
                        }}
                        resizeMode='cover'
                        source={{uri: this.state.image}}
                    />
                    :
                    <Text style={{alignSelf: 'center'}}>Loading Image</Text>
                }
            </View>
            <View style={styles.formContainer}>
                <Content style={{width: '100%', padding: 10}}>
                    <Form>
                    <Item fixedLabel>
                        <Label>Title</Label>
                        <Input onChangeText={(text) => this.setState({title: text})} value={this.state.title} />
                    </Item>
                    <Item fixedLabel>
                        <Label>Description</Label>
                        <Input onChangeText={(text) => this.setState({Description: text})} value={this.state.Description}  />
                    </Item>
                    <View style={{flexDirection: 'row', padding: 15}}>
                        <Label>Start Time </Label>
                        <DatePicker
                            style={{width: "78%"}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2019-04-01"
                            maxDate="2019-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                            dateInput: {
                                marginLeft: 36
                            }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    {this.props.loading ? 
                        <Text>Loading . . . </Text>
                        : 
                        <TouchableOpacity onPress={() => this.submitData()} style={{alignSelf: 'center', padding: 10,marginBottom: 10, alignItems: 'center', backgroundColor: '#dbdbdb'}}>
                            <Text style={{textAlign: 'center'}}>Submit</Text>
                        </TouchableOpacity>
                    }
                    </Form>
                </Content>
            </View>
        </View>
        )
    }
}

const styles = {
    container : {
        flex: 1
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer:{
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
}


const mapStateToProps = state => {
    return{
        loading: state.HomeReducer.loading
    };
}

const mapDispatchToProps = {
    sendData
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
