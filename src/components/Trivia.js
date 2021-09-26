import React, {useEffect, useState} from 'react';
import useSound from "use-sound";
import play from '../assets/src_sounds_play.wav'
import correct from '../assets/src_sounds_correct.mp3'
import wait from '../assets/src_sounds_wait.wav'
import wrong from '../assets/src_sounds_wrong.wav'

const Trivia = ({data, setStop, setQuestionNumber, questionNumber}) => {
        const [question, setQuestion] = useState(null)
        const [selectedAnswer, setSelectedAnswer] = useState(null)
        const [className, setClassName] = useState('answer')
        const [letsPlay] = useSound(play)
        const [correctAnswer] = useSound(correct)
        const [wrongAnswer] = useSound(wrong)

        useEffect(() => {
            // letsPlay()
        }, [letsPlay])

        useEffect(() => {
            setQuestion(data[questionNumber - 1])
        }, [data, questionNumber])

        const delay = (duration, callback) => {
            setTimeout(() => {
                callback()
            }, duration)
        }

        const handleClick = answer => {
            setSelectedAnswer(answer)
            setClassName('answer active')
            delay(3000, () => setClassName(answer.correct ? 'answer correct' : 'answer wrong'))
            delay(5000, () => {
                if (answer.correct) {
                    // correctAnswer()
                    delay(1000, () => {
                        setQuestionNumber(prev => prev + 1)
                        setSelectedAnswer(null)
                    })

                } else {
                    // wrongAnswer()
                    delay(1000, () => {
                        setStop(true)
                    })

                }
            })
        }

        return (
            <div className={'trivia'}>
                <div className={'question'}>{question?.question}</div>
                <div className={'answers'}>
                    {question?.answers.map((answer, index) => (
                        <div key={index}
                             className={selectedAnswer === answer ? className : 'answer'}
                             onClick={() => handleClick(answer)}>{answer.text}</div>))}
                </div>
            </div>
        );
    }
;

export default Trivia;