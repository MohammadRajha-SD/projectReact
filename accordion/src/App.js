import React, { useState }  from "react";
import Q from './Q';
import Data from './Data';

function App() {
  const [questions, setQuestion] = useState(Data);
  return (
    <main className="App">
      <div className="container">
        <h2>Questions and Answers About Login..</h2>
        <section className="info">
          {questions.map((question) => {
            return <Q key={question.id} {...question}/>
          })}
        </section>
      </div>

    </main>
  );
}

export default App;