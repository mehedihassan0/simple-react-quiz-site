import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

function QuizGroup() {
  const [anss, setAns] = useState(0);
  const data = useLoaderData();
  const questions = data.data.questions;
  const name = data.data.name;
  const total = data.data.total;

  const handleOnClick = () => {
    setAns(anss + 1);
  };
  return (
    <div className="absolute text-wrap grid grid-cols-3 justify-center items-center w-[1700px] p-9 m-9 border-3 border-separate border-blue-300">
      <div>
      </div>
      <div className="col-span-1 gap-9">
          <p className="text-center text-3xl font-mono p-9" >
          
          Total Correct {anss} / {total}
        </p>
        <h1 className="text-center text-3xl font-mono p-9">Quiz of {name}</h1>

        {questions.map((question, index) => (
          <Quiz
            key={question.id}
            index={index}
            question={question}
            name={name}
            handleOnClick={handleOnClick}
          />
        ))}
        
      </div>
      <div></div>
    </div>
  );
}

export default QuizGroup;
