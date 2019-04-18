import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
export class DetailScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
           data : ''
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        this.setState({
            data : this.props.data
        })
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {this.state.data.image ? 
                    <Image
                        style={{
                            height: '50%',
                            width: '100%',
                        }}
                        resizeMode='cover'
                        source={{uri: this.state.data.image}}
                    />
                    :
                    <Text style={{alignSelf: 'center'}}>Loading Image</Text>
                }
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', padding: 10}}>
                <View style={{flexDirection: 'column'}}>
                    <Text>Title</Text>
                    <Text>{this.state.data.title}</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text>Start</Text>
                    <Text>{this.state.data.date}</Text>
                </View>
            </View>
            <View style={{marginTop: 20, padding: 20}}>
                <Text>Description</Text>
                <Text style={{textAlign: 'justify'}}>{this.state.data.Description}</Text>
            </View>
            <TouchableOpacity style={{padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#dbdbdb'}} onPress={() => this.props.navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
        )
    }
}
 
const styles = {
    container : {
        flex: 1,
        padding: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
}

const mapStateToProps = (state) => ({
    data : state.HomeReducer.data,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
