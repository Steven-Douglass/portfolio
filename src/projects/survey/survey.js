import React from "react";
import * as Survey from "survey-react";

// Built with SurveyJS
// https://surveyjs.io/

var surveyJSON = {
  title: "Thank you for visiting my portfolio!",
  description:
    "Please take a moment to fill out a portfolio satisfaction survey.",
  pages: [
    {
      name: "Rating",
      elements: [
        {
          type: "rating",
          name: "Question 1 - Rating",
          title: "How happy are you with Steven's portfolio?"
        }
      ]
    },
    {
      name: "Dropdown",
      elements: [
        {
          type: "dropdown",
          name: "Question 2 - Description",
          title:
            "Please select the statement that best describes Steven's portfolio.",
          choices: [
            {
              value: "Great",
              text: "The portfolio is great."
            },
            {
              value: "Outstanding",
              text: "The portfolio is outstanding."
            },
            {
              value: "Outstandingly Great",
              text: "The portfolio is outstandingly great."
            }
          ]
        }
      ]
    },
    {
      name: "Comment",
      elements: [
        {
          type: "comment",
          name: "Question 3 - Comment",
          title: "Please leave any comments you have for Steven."
        }
      ]
    }
  ]
};

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data));
}

export default function SurveyPage() {
  return (
    <div id="survey">
      <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />
      <link
        href="https://surveyjs.azureedge.net/1.7.20/survey.css"
        type="text/css"
        rel="stylesheet"
      />
      <script src="https://surveyjs.azureedge.net/1.7.20/survey.react.min.js" />
    </div>
  );
}
