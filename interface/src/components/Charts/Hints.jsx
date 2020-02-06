import React from "react";
import walking from "../../assets/noun_Walking_2174703.png";
import clock from "../../assets/noun_clock_3085553.png";
import apple from "../../assets/noun_Apple_69089.png";
import book from "../../assets/noun_Book_1335262.png";
import pen from "../../assets/noun_Pen_3089267.png";

function Hints() {
  const hints = [
    {
      title: "Plan Ahead",
      hint:
        "By scheduling breaks and knowing you have a break coming up, you’re more likely to stay focused and work with purpose.",
      icon: clock
    },
    {
      title: "Get Moving",
      hint:
        "Sitting is the new smoking, getting some activity at regular intervals in your day will improve your health and mental focus.",
      icon: walking
    },
    {
      title: "Read Any Good Books Lately?",
      hint:
        "Studies have shown that individuals who frequently read fiction are better able to understand other people, empathize with them and see the world from their perspective.",
      icon: book
    },
    {
      title: "Snack Time!",
      hint:
        "Adequate nutrition can raise your productivity levels by 20 percent on average.",
      icon: apple
    },
    {
      title: "Doodle Bug",
      hint:
        "Let your mind wander as you put pen to paper for some creative free time. Research shows that doodling can stimulate new ideas and help us stay focused.",
      icon: pen
    }
  ];
  const hint = hints[Math.floor(Math.random() * hints.length)];

  return (
    <div className="hintHolster rounded-lg shadow-lg">
      <p className="hintTitle">{hint.title} </p>
      <div className="flex flex-row ">
      <p className="hintFont">
        {hint.hint}
      </p>
      <img
        src={hint.icon}
        alt="icon of person walking"
        className="h-20 mt-0 hintIcon"
      />
      </div>
    </div>
  );
}

export default Hints;
