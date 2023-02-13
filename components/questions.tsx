import { ChangeEvent, FormEvent, use, useState } from "react"

type QuestionProps = {
    quizLabel:string;
    choices:Array<string>;
    correctAns:string;
    regex:string;

};

export function MultipleChoice(props: QuestionProps){
    const { quizLabel, choices, correctAns } = props
    const [someChoice, changeChoice] = useState('');
    const [submit, setSubmit] = useState(false);
    var answerResult;
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        changeChoice(event.target.value);
        console.log(someChoice);
    }
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        setSubmit(true)
        console.log(someChoice)
    }
    if (someChoice === correctAns && submit === true){
        answerResult = <div className="p-4 mb-4 w-fit text-sm text-[white] bg-[green] rounded-lg">
        <span className="">Correct Answer!</span>
    </div>
    } else if (someChoice != correctAns && submit === true){
        answerResult = <div className="p-4 mb-4 w-fit text-sm text-[white] bg-[red] rounded-lg ">
        <span className="">Incorrect Answer!</span>
    </div>
    } else if (someChoice === '' && submit === true){
        answerResult = <div className="p-4 mb-4 w-fit text-sm text-[white] bg-blue-100 rounded-lg">Pick an Answer!</div>
        }
    return (
        <div className="flex items-center justify-center">
        <div className="rounded-lg bg-[#a07d0b] w-fit p-10">
        <div className="pb-1 flex items-center justify-center">
            {answerResult}
            </div>
            <h2 className="text-xl text-center grid pb-[10px]">{quizLabel}</h2>
            <form className="flex items-center justify-center" onSubmit={handleSubmit}>
                <ul className="w-fit h-fit">
                    {choices.map((choice, key) =>(
                        <li key={key} className="w-full rounded-lg border">
                            <div className=" rounded-lg flex items-center p-3 bg-[#8b3604]">
                                <input id={choice} onChange={handleChange} className="w-4 h-4 text-blue-600 transition duration-200  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="radio" value={choice} name="list-radio" ></input>
                                <label htmlFor={choice} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300" >{choice}</label>
                            </div>
                        </li>
                    ))}
                    <div className="flex pt-5 items-center justify-center">
                <button type="submit" className=" bg-[#fff0ad] hover:bg-[#ffbf48] p-2 transition rounded-lg inline-block" >Submit</button>
                </div>
                </ul>
            </form>                
        </div>
        </div>
    )
}

/* 
MultipleChoice quizLabel="Practice Example 1" choices={["y = -1/8 (x+2)^2 + 1", "y = -1/8 (x+2)^2 - 1", "y = - 1/8 (x-2)^2 + 1", "y = - 1/8 (x-2)^2 - 1"]} correctAns="y = - 1/8 (x-2)^2 - 1"/>                                                                              

*/

export function ShortResponse(props: QuestionProps){
    const { quizLabel, regex } = props
    const reg = new RegExp(regex)
    var answerResponse; 
    const [text, setText] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setText(event.target.value)
        console.log(text)
    }

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        setSubmit(true)
        console.log(text)
    }
    
    if (reg.test(text) === true && submit === true) {
        answerResponse = <div className="p-4 mb-4 w-fit text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">
            <span className="">Correct Answer!</span>
        </div>
        
    } else if (text === '' && submit === true){
        answerResponse = 
        <div>
            <span className="p-4 mb-4 w-fit text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">
                Type Something
            </span>
        </div>}

    if (reg.test(text) === false && submit === true) {
        answerResponse = <div className="p-4 mb-4 w-fit text-sm text-[#552a2a] bg-[#fd7b7b] rounded-lg ">
            <span className="">Incorrect Answer!</span>
        </div>
    }
    return (
        <div className="flex items-center justify-center">
        <div className="rounded-lg bg-[#f8aa00] w-fit p-10">
            <div className="pb-7 flex items-center justify-center">
            {answerResponse}
            </div>
            <div className="flex items-center justify-center">
            <h2 className="text-[white] pb-1">{quizLabel}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input type="text" onChange={handleChange} name="answer_form" className=" text-center block py-2.5 w-full bg-transparent border-b-2 border-[#000000] appearance-none transition duration-300  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                </div>
                <div className="flex pt-5 items-center justify-center">
                <button type="submit" className=" bg-[#f6ff79] hover:bg-[#f0c91c] p-2 transition duration-300 rounded-lg" >Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
