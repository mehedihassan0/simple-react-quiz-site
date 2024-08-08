import React from "react";
import he from "he";

function Quiz({ question, name, index, handleOnClick }) {
  const decodeAndStripTags = (htmlString) => {
    // Step 1: Decode HTML entities
    const decodedString = he.decode(htmlString);

    // Step 2: Parse and extract text content
    const doc = new DOMParser().parseFromString(decodedString, "text/html");
    return doc.body.textContent || "";
  };

  const sanitizedQuestion = decodeAndStripTags(question.question);
  const options = question.options;

  const validateAns = (ans) => {
    if (ans===question.correctAnswer) {
      handleOnClick()

    }

  };

  return (
    <div>
      <div className="grid justify-center items-center gap-4 text-3xl text-wrap border-red-300 border-separate p-9">
       <div className="flex gap-2 mb-6">
          <h1>Quiz </h1>
          <strong >{index}: {sanitizedQuestion}</strong>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-5">

          <div className="flex justify-center items-center gap-2 border-red-300 border-2 p-4 text-wrap text-sm">
            <input type="radio" onClick={()=> validateAns(options[0])} />
            <p>{options[0]}</p>
          </div>{" "}


          <div className="flex justify-center items-center gap-2 border-red-300 border-2 p-4 text-wrap text-sm">
            <input type="radio" onClick={()=> validateAns(options[1])} />
            <p>{options[1]}</p>
          </div>{" "}


          <div className="flex justify-center items-center gap-2 border-red-300 border-2 p-4 text-wrap text-sm">
            <input type="radio" onClick={()=> validateAns(options[2])} />
            <p>{options[2]}</p>
          </div>{" "}


          <div className="flex justify-center items-center gap-2 border-red-300 border-2 p-4 text-wrap text-sm">
            <input type="radio" onClick={()=> validateAns(options[3])} />
            <p>{options[3]}</p>
          </div>{" "}
        </div>
        
      </div>
      <p className="shadow-lg rounded-lg bg-teal-100 ">-----------------------------------------------------------------------------------------------------------------</p>
    </div>
  );
}

export default Quiz;
