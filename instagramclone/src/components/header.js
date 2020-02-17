import React, { Component } from 'react';
import {Image} from 'react-native'

// import { Header } from 'react-native/Libraries/NewAppScreen';
import {Header, Text, Left, Body, Right, Icon, Title} from 'native-base'

class Header1 extends Component {
    state = {  }
    render() { 
        return ( 
            <Header style={{backgroundColor:'white'}}>
                <Left>
                    <Icon name='camera' type='Feather' />
                </Left>
                <Body>
                    <Image source={{uri:'https://banner2.cleanpng.com/20180629/bbg/kisspng-web-typography-script-typeface-font-instagram-font-5b361c678f21b2.0136136215302728715863.jpg'}} />
                </Body>
            </Header>
         );
    }
}

export default Header1;