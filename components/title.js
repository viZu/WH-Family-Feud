import "tailwindcss/tailwind.css";
import TitleLogo from "./title-logo";
import { useState, useEffect } from "react";

export default function Title(props) {
  const [titleSize, setTitleSize] = useState("10%");

  useEffect(() => {
    if (props.game.settings.logo_url) {
      setTimeout(setTitleSize(window.innerWidth * 0.4), 2000);
    } else {
      setTimeout(setTitleSize(window.innerWidth * 0.7), 2000);
    }
  }, []);

  function returnTeamMates(team) {
    let players = [];
    console.debug(props.game);
    Object.keys(props.game.registeredPlayers).forEach((k) => {
      console.debug(k);
      if (props.game.registeredPlayers[k].team === team) {
        players.push(props.game.registeredPlayers[k].name);
      }
    });
    console.debug(players);
    return players;
  }

  return (
    <div className="bg-[url('/WH_FD_background.png')] bg-cover items-end justify-center from-primary-900 flex via-primary-200 to-primary-900 min-h-screen min-w-screen">
      <div
        style={{
          width: titleSize,
          transition: "width 2s",
        }}
        className="align-middle inline-block"
      >
        <div className="flex flex-col space-y-10">
          <div className="flex flex-row text-center m-16">
          {[0, 1].map(function(n) {
              return (
                <div className="flex-grow">
                  <p className="text-4xl flex-grow text-amber-100 font-bold">
                    {" "}
                    {props.game.teams[n].name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
