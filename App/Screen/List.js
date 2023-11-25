import { React, useState } from 'react'
import dataao from "../dataao";

function List(props) {
    //create a new array by filtering the original array
    const filteredData = dataao.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.mota.toLowerCase().includes(props.input)
        }
    })
    return (
        <view>
            {filteredData.map((item) => (
                <Text key={item.id}>{item.mota}</Text>
            ))}
        </view>
    )
}

export default List;
