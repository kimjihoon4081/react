//import MyComponent from "./MyComponent";
//import Counter from "./Counter"
//import Say from "./Say";
//import EventPractice from "./EventPractice";

// 클래스형 컴포넌트로 작성할 때 다음을 선언
import React, {Component} from "react"; 
//import ValidationSample from "./ValidationSample";
//import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

/*
const App = () => {
  //return <MyComponent name ="test2222" faN={3}> 리액트 </MyComponent>
  //return <Counter></Counter>
  //return <Say></Say>
  //return <EventPractice></EventPractice>
}

*/

class App extends Component {

  render(){
    return (
      //<ValidationSample/>
      // 컴포넌트에 ref 설정
      // 컴포넌트가 처음 렌더링 될때 this.scrollBox는 아직 정의 되지 않았기 때문에
      // 화살표 함수로 아예 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollToBottom()를 실행
      // 버튼을 누르는 시점은 렌더링이 완료되고 this.scrollBox가 설정됨
      /*<div>
        <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
        <button onClick={()=>this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>*/
      <IterationSample/>

    );
  }

}



export default App;
