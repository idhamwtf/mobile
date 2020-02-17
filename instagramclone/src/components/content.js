import React from 'react';
import {Image} from 'react-native'
import { CardItem, Left, Body, Right, Icon, Content, Card, Text, Thumbnail} from 'native-base';





class konten extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                                <Thumbnail source={{uri:'https://pngimg.com/uploads/beach/beach_PNG8.png'}} />
                                <Text>
                                    Name
                                </Text>
                                <Text>
                                    Indonesia
                                </Text>
                            <Body>
                            </Body>
                        </Left>
                        <Right>
                            <Icon name='more'/>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Image source={{uri:'https://pngimg.com/uploads/beach/beach_PNG8.png'}} style={{height:200, width:"100%"}} />
                    </CardItem>
                    <CardItem style={{marginTop:-15}}>
                        <Left>
                            <Icon name='hearto' style={{color:'pink',fontSize:20,marginRight:10}} type='AntDesign' />
                            <Icon name='comment' type='EvilIcons'/>
                        </Left>
                    </CardItem>
                    <CardItem style={{marginTop:-10}}>
                        <Left>
                            <Text style={{fontSize:12,marginLeft:-4}}>5 likes</Text>
                        </Left>
                    </CardItem>
                    <CardItem style={{marginTop:-10}}>
                        <Text style={{}}>

                        </Text>
                    </CardItem>
                </Card>
            </Content>
         );
    }
}
 
export default konten;