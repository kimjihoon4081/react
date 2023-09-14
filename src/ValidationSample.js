
// 클래스형 컴포넌트로 작성할 때 다음을 선언
import React, {Component} from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    
    // state 활용법 중 state 객체를 활용하는 방법임
    state = {
        password: '',
        clicked : false,
        validated : false
    }

    // 이벤트 처리 함수 
    // 클래스 컴포넌트에서 state 값 변경할 때는 this.setState()
    // setState()는 실시간 처리
    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            clicked : true,
            //state 객체에서 password에 접근
            validated : this.state.password === '0000'
        });
        this.input.focus();
    }


    // 클래스 컴포넌트 렌더링 : render(){ return(jsx 문법) }
    // 콜백함수를 이용한 ref 설정
    render(){
        return (
            <div>
                <input
                    ref = {(ref) => {this.input = ref}}
                    type = "text"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    className = {this.state.clicked? 
                        (this.state.validated ? 'success' : 'failure') : ''} 
                />
                <button onClick={this.handleClick}> 검증하기 </button>
            </div>
        );
    }

}

export default ValidationSample;