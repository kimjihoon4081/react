// 클래스 컴포넌트 선언 방식
import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollToBottom = () => {
            
        // 비구조화 할당 문법으로 다음과 같음
        // const scrollHeight = this.box.scrollHeight;
        // const clientHeight = this.bos.clientHeight;
        // 변수와 객체 멤버 변수의 이름은 같아야 하는 듯
        const { scrollHeight, clientHeight } = this.box ;

        this.box.scrollTop = scrollHeight - clientHeight;
    }


    // 클래스 컴포넌트 렌더링 함수 render () { return ( JSX문법 );}
    render() {

        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        }

        // DOM 요소 속성 부여할 땐 대괄호 {}로 작성
        // DOM 요소에 ref 부여할 땐 콜백 함수 { (ref) => {this.명칭=ref}}
        return (
            <div
                style = {style}
                ref = { (ref) => {this.box=ref}}
            >
                <div style = {innerStyle}></div>    
            </div>
        ); 
    }

  

} 

export default ScrollBox;