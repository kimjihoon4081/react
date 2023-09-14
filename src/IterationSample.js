//함수형 컴포넌트에서 useState를 사용하기 위한 선언
//useState 함수는 최초에 한번 사용하여 setter 함수를 생성해주는 함수
import React, {useState} from "react";

const IterationSample = () => {

    // useState로 배열을 초기값(기본값)으로 설정하며, 비구조화 할당을 이용
    const [names, setNames] = useState([
        { id : 1, text : '눈사람'},
        { id : 2, text : '얼음'},
        { id : 3, text : '눈'},
        { id : 4, text : '바람'}
    ]);

    // useState를 이용하여 초기값(기본값)을 빈값으로 설정
    const [inputText, setInputText] = useState('');

    // useSsate를 이용하여 기본값(초기값)을 5로 설정
    const [nextId, setNextId] = useState('5');

    // 비구조화 할당으로 생성된 names 배열을 내장객체 map 함수를 이용하여 반복 처리
    // index 대신 id로 key 값 설정
    // 변수는 대괄호{}로 표현
    const nameList = names.map( arr => <li key={arr.id}>{arr.text} </li>);

    // 이벤트 객체를 파라미터로 받아서 inputText 값 변경
    const onChange = e => setInputText(e.target.value);

    // 배열의 내장함수 concat : 요소 추가 함수
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });

        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    // 함수형 컴포넌트에서는 return(jsx 문법) 으로 반환
    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );

};

export default IterationSample;