import React from 'react'

import {Content,Card,CardItem,Thumbnail,Text} from 'native-base'

import IsiAtas from './isiatas'
const data=[
    {
        name:'Your Story',
        foto:''
    },
    {
        name:'Dessy',
        foto:''
    },
    {
        name:'Bobby',
        foto:''
    },
    {
        name:'Nata',
        foto:''
    },
    {
        name:'Dzaky',
        foto:''
    },
    {
        name:'aya hacker',
        foto:''
    },
]


const Atas=()=>{
    return(
        <>
        <Content horizontal>
            {
                data.map((val,index)=>{
                    return(
                        <IsiAtas key={index} nama={val.name} foto={val.foto}/>
                    )
                })
            }
        </Content>
        </>
    )
}