import React, {useRef} from 'react';

const Start = ({setUsername}) => {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }

    return (
        <div className={'start'}>
            <input ref={inputRef} type="text" placeholder={'Enter your name'} className={'startInput'}/>
            <button onClick={handleClick} className={'startButton'}>Start</button>
        </div>
    );
};

export default Start;