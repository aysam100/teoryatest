import React, { useState } from "react";
import Header from "./components/Header"
import Quiz from "./components/Quiz";
import SubjectCard from "./components/SubjectCard";
import { Messages } from "./messages"

import { questionsCarFam } from "./questions/questionsCarFam.js";
import { questionsSafety } from "./questions/questionsSafety.js";
import { questionsSigns } from "./questions/questionsSigns.js";
import { questionsTrafficLaws } from "./questions/questionsTrafficLaws.js";

import signsIcon from "./images/signs.png";
import safetyIcon from "./images/safety.svg";
import carFamIcon from "./images/carFam.png";
import trafficLawsIcon from "./images/trafficLaws.png";

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    return (!selectedCategory ?
        <div>
            <Header>{Messages.pickCategory}</Header>
            <div className="category_wrapper">
                <SubjectCard
                    imgSrc={signsIcon}
                    imgAlt="An illustration of Signs"
                    subject={Messages.signs}
                    onClick={() => {setSelectedCategory('signs')
                     setSelectedQuestions(questionsSigns)}
                    }
                />
                <SubjectCard
                    imgSrc={safetyIcon}
                    imgAlt="An illustration of Safety"
                    subject={Messages.safety}
                    onClick={() => {setSelectedCategory('safety')
                     setSelectedQuestions(questionsSafety)}
                    }
                />
                <SubjectCard
                    imgSrc={carFamIcon}
                    imgAlt="An illustration of a Car"
                    subject={Messages.carFam}
                    onClick={() => {setSelectedCategory('carFam')
                     setSelectedQuestions(questionsCarFam)}
                    }
                />
                <SubjectCard
                    imgSrc={trafficLawsIcon}
                    imgAlt="An illustration of a Traffic law"
                    subject={Messages.trafficLaws}
                    onClick={() => {setSelectedCategory('trafficLaws')
                     setSelectedQuestions(questionsTrafficLaws)}
                    }
                />
            </div>
       
        </div> :
       <div>
            <Quiz selectedCategory={selectedCategory} selectedQuestions={selectedQuestions}/>
        </div>
    );
}

export default Home