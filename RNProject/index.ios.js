/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'; // 全局进入严格模式（目前发现不用也行）
/**< 
消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫。
*/

//导入一些必要的模块
//React Native内置的组件可以直接通过import { xxx } from 'react-native' 进行导入，当然也可以自定义组件。

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


//类，这是默认的载入类，继承自Component，Component类（组件）似于Android和iOS中的View
//这里为创建一个组件
export default class RNProject extends Component {

  //构造器 ，每个组件都拥有自己的属性（props）和状态（state）
  //调用this.setState更改状态text或者isTouchDown时，组件会触发render函数进行渲染更新   
  constructor(props) {
     super(props);
     this.state = {
       text:'Welcome to React Native!',
       // text:this.props.texts,
       isTouchDown:false
      };
   }  

  //在最初的渲染之前调用一次，可在里面进行预处理操作
  //在React中，设置this.state会导致重新渲染，但是componentWillMount设置this.state并不会对导致render调用多次
  //之后会对component的生命周期进一步解释
  componentWillMount() {
    alert("componentWillMount")
  }

  render() {

    //var定义变量，根据状态值改变对应值
    var welcomeText = this.state.text;
    var bgcolor;
    if (this.state.isTouchDown) {
      bgcolor = '#c5c5ab';
    } else {
      bgcolor = '#F5FCFF';
    }
    console.log('testtststststts');

    //返回的即界面显示内容
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {welcomeText}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableOpacity onPress={this.touchDown.bind(this)}>
          <Text style={[styles.instructions, {backgroundColor: 'green'}]}>
            test touch Me
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
//  自定义函数
  touchDown() {
    //  console.log 控制台打印，可打印值，多用于调试
    console.log('>>', this.isTouchDown);

    if (!this.state.isTouchDown) {
      this.setState({
        text:'Test Touch Down Success',
        isTouchDown:true
      });
    } else {
      this.setState({
        text:'Test Touch Down Again Success',
        isTouchDown:false
      });
    }
  }

}
//定义样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNProject', () => RNProject);
