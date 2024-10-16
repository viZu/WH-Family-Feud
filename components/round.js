import "tailwindcss/tailwind.css";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

function RoundPointTally(props) {
  const { t } = useTranslation();
  // start at font size 72 and get smaller as point values increase
  let size = 72 - `${props.points}`.length * 8;
  return (
    <div
      style={{ borderWidth: 12 }}
      className="border-black bg-gradient-to-tr from-primary-900 to-primary-500 p-1"
    >
      {/* text within svg can resize the text based on container*/}
      <svg
        viewBox="-50 -50 100 100"
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          fontWeight={props.fontWeight}
          fontSize={size}
          pointerEvents="auto"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {t("number", { count: props.points })}
        </text>
      </svg>
    </div>
  );
}

export default function Round(props) {
  const { t } = useTranslation();
  let current_round = props.game.round;
  let round = props.game.rounds[current_round];
  return (
    <div>
      <div className="flex justify-end text-5xl text-family-text uppercase font-extrabold">
        <p className="h-full text-center items-center justify-center p-5 flex">
          {'SUMME'}
        </p>
        <div className="h-full text-center items-center justify-center p-5 flex w-30">{props.game.point_tracker[props.game.round]}</div>
      </div>
      <div
        className="h-28 font-extrabold text-background text-7xl bg-family-text flex justify-between px-10 mt-20 -mr-10 -ml-8 items-center fixed bottom-0 w-full"
        >
        <div className="flex items-center space-x-5">
            <span>{props.game.teams[0].points}</span>
            <span className="flex justify-center flex-row text-center space-x-2">
                {Array(props.game.teams[0].mistakes).fill(
                    <div className="flex-shrink">
                        <img className="h-16" src="x.png"/>
                    </div>
                )}
            </span>
        </div>
          <div className="flex items-center space-x-5">
              <span className="flex justify-center flex-row text-center space-x-2">
                  {Array(props.game.teams[1].mistakes).fill(
                      <div className="flex-shrink">
                          <img className="h-16" src="x.png"/>
                      </div>
                  )}
              </span>
              <span>{props.game.teams[1].points}</span>
          </div>
      </div>

        <div className="flex flex-row justify-center">
            {round.multiply > 1 ? (
                <div>
                    <p className="text-2xl text-start text-foreground">
                        x{t("number", {count: round.multiply})}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-row justify-center">
        {props.game.settings.hide_questions === false ? (
          <p className="text-end sm:text-1xl text-2xl text-foreground">{round.question}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
