import { useTranslation } from "react-i18next";
import "../i18n/i18n";

export default function QuestionBoard(props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="grid lg:grid-rows-4 lg:grid-flow-col gap-3 flex-grow"
      >
        {props.round.answers.map((x, index) => (
          <div className=" uppercase items-center text-center font-extrabold">
            {x.trig ? (
              // answered question
              <div className="h-full">
                <div className="flex h-full items-center justify-center">
                  <div className="h-full text-center items-center justify-center p-5 flex w-16">
                    <p className="text-5xl text-family-text">
                      {t("number", { count: index + 1}) + "."}
                    </p>
                  </div>
                  <div className="flex h-full items-center justify-start px-5 flex-grow">
                    <p
                      className="text-5xl text-family-text"
                    >
                      {x.ans + '_'.repeat(28 - x.ans.length)}
                    </p>
                  </div>
                  <div className="h-full text-center items-center justify-center p-5 flex w-30">
                    <p
                      className="text-5xl text-family-text"
                    >
                      {t("number", { count: x.pnt })}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // unanswered question
              <div className="h-full">
                <div className="flex h-full items-center justify-center">
                  <div className="h-full text-center items-center justify-center p-5 flex w-16">
                    <p className="text-5xl text-family-text">
                      {t("number", { count: index + 1}) + "."}
                    </p>
                  </div>
                  <div className="flex h-full items-center justify-start px-5 flex-grow">
                    <p
                      className="text-5xl text-family-text"
                    >
                      {'_'.repeat(28)}
                    </p>
                  </div>
                  <div className="h-full text-center items-center justify-center p-5 flex w-30">
                    <p
                      className="text-5xl text-family-text"
                    >
                      {'--'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
