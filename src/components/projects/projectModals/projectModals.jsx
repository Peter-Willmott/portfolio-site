import React from "react";

import { Modal, Carousel } from "antd";

import memoryGame from "../../../img/memory_game.png";
import memoryGame1 from "../../../img/memory_game1.png";
import memoryGame2 from "../../../img/memory_game2.png";
import memoryGame3 from "../../../img/memory_game3.png";
import missingTree from "../../../img/missing_trees.png";
import missingTree1 from "../../../img/missing_trees1.png";
import missingTree2 from "../../../img/missing_trees2.png";
import missingTree3 from "../../../img/missing_trees3.png";
import cryptoSignals from "../../../img/crypto_signals.jpg";
import cryptoSignals1 from "../../../img/crypto_signals1.jpg";
import luckyGuess from "../../../img/lucky_guess.png";
import luckyGuess1 from "../../../img/lucky_guess1.png";
import luckyGuess2 from "../../../img/lucky_guess2.png";
import luckyGuess3 from "../../../img/lucky_guess3.png";
import asana from "../../../img/asana.png";
import asana1 from "../../../img/asana1.png";
import asana2 from "../../../img/asana2.png";
import dashboard from "../../../img/dashboard.png";
import dashboard1 from "../../../img/dashboard1.png";
import dashboard2 from "../../../img/dashboard2.png";
import dashboard3 from "../../../img/dashboard3.png";

import "./projectModals.scss";

const ProjectModals = ({ visible, modalVisibility, modalSelect }) => {
  const handleOk = () => {
    modalVisibility(false);
  };

  const handleCancel = () => {
    modalVisibility(false);
  };

  const footer = [
    <button
      className="text-white w-1/8 bg-green-800 border-2 border-green-800 py-2 p-8 px-6 m-1 focus:outline-none hover:bg-green-600 hover:border-green-600 rounded text-lg"
      onClick={handleCancel}
    >
      Return
    </button>,

    <button
      className="text-white w-1/8 bg-white-200 py-2  px-6 m-1 focus:outline-none hover:bg-green-600 hover:border-green-600 border-2 border-green-500 rounded text-lg"
      href="https://github.com/Peter-Willmott?tab=repositories"
      onClick={handleOk}
    >
      View Github Repo
    </button>,
  ];

  const width = "80%";

  return (
    <>
      {modalSelect === 1 && (
        <Modal
          visible={visible}
          title="Memory Game"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={footer}
          width={width}
        >
          <div className="flex sm:flex-col md:flex-row">
            <div className="md:w-1/2 md:h-1/2">
              <Carousel autoplay={true}>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={memoryGame}
                    alt="Memory Game"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={memoryGame1}
                    alt="Memory Game"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={memoryGame2}
                    alt="Memory Game"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={memoryGame3}
                    alt="Memory Game"
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pl-5">
              <strong>How it works:</strong>
              <br /> Made with React and hosted on Github Pages this 2 player
              game is a fun memory test. On loading the players can set a their
              player names or go straight into the game with the defaults. The
              players then take turns flipping 2 cards hoping for a match. The
              cards are normal playing cards and to get a match the cards have
              to be the same colour AND same value (e.g. 7 of Spades and 7 of
              Clubs). When getting a match a short gif will play and that
              players goes again. The game ends when all the cards are matched
              or the players end the game. The player are taken to the scoring
              page showing the final scores and ranking. Options to quit or play
              again are available. <br /> <br />
              <strong>Technical:</strong>
              <br /> The deck is shuffled using a Fisher-Yates shuffle. To match
              the cards I used the cards source path (e.g.
              "/SpecnoTechAssessment/static/media/2_of_diamonds.a51b192d.png").
              I split the string on '_' and used the first and last values from
              the array. Matching value is simple, a direct comparrison. For the
              suit I checked if the string included the substring "clubs" or
              "spades" and if true set the suit to "black". If there was a match
              the value of the "matched" key was set to "true". The matched
              column was is created during the shuffle, along with a random id.
            </div>
          </div>
        </Modal>
      )}
      {modalSelect === 2 && (
        <Modal
          visible={visible}
          title="Missing Trees"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={footer}
          width={width}
        >
          <div className="flex sm:flex-col md:flex-row">
            <div className="md:w-1/2 md:h-1/2">
              <Carousel autoplay={true}>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={missingTree}
                    alt="Missing Tree"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={missingTree1}
                    alt="Missing Tree"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={missingTree2}
                    alt="Missing Tree"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={missingTree3}
                    alt="Missing Tree"
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pl-5">
              <strong>How it works:</strong>
              <br /> An API (hosted on Heroku) that gets a list of gps locations
              of missing trees for a given orchard id The API uses the
              Aerobotics Developers API to get a specified orchard id and its
              corresponding tree survey data. The missing tree locations in that
              orchard are then calculated and returned.
              <br />
              <br />
              <strong>Technical:</strong>
              <br /> To calculate the position of the missing trees a pacman
              like approach is used. The orchard (perimeter) and tree (lat/long
              positions) datasets are fetched from the Aerobotics API The first
              and second points in the orchard perimeter are used to calculate
              the angle to vertical using trigonometry. This is used to find the
              orientation of the tree rows. Individual, orchard aligned, searh
              windows are created and aligned with the orchard orientation.
              These look for a single tree. The size of the window is determined
              by the average tree radius. Several conditions are checked and
              certain actions taken: A tree was found in the search window -
              Move the search window to the new found tree and reset the search
              window. A tree was found but it has already been identified before
              - Try the next search window. The search window meets the orchard
              perimeter - Try the next search window. No tree was found within
              the search window - Create a tree in the window Record its lat and
              long Move search window to the newly created tree. The search
              window is stuck with no valid moves - The window has search in all
              4 direction but there are still valid trees in the orchard Move
              search window to the nearest valid neighbour Once all trees have
              been checked the recorded missing tree locations are returned.
            </div>
          </div>
        </Modal>
      )}
      {modalSelect === 3 && (
        <Modal
          visible={visible}
          title="Text Prediction"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={footer}
          width={width}
        >
          <div className="flex sm:flex-col md:flex-row">
            <div className="md:w-1/2 md:h-1/2">
              <Carousel autoplay={true}>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={luckyGuess}
                    alt="Lucky Guess"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={luckyGuess1}
                    alt="Lucky Guess"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={luckyGuess2}
                    alt="Lucky Guess"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={luckyGuess3}
                    alt="Lucky Guess"
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pl-5">
              <strong>How it works:</strong>
              <br /> This is a prediction application run off of a shiny server.
              The application uses text entered into the app to predict what the
              next word could be.
              <br />
              <br />
              <strong>Technical:</strong>
              <br /> The sampled data had to be cleaned and tokenized before it
              could be used in a model. This involved putting the data into a
              corpus, removing profanity, numbers, symbols, white spaces and
              other unwanted characters in the data, the data also had to be
              converted to lower case for matching purposes. The cleaned data
              was then tokenized to form individual words. Modelling the data
              and preparing it for the application had several stages. Because
              the chosen method of prediciting the next word relied on a
              back-off model, in my case{" "}
              <a
                style={{ color: "blue" }}
                href="https://en.wikipedia.org/wiki/Katz%27s_back-off_model"
              >
                Katz back-off model
              </a>
              . In an effort to try make the predictions more accurate and fair
              I implemented a smoothing technique. I chose{" "}
              <a
                style={{ color: "blue" }}
                href="https://en.wikipedia.org/wiki/Good%E2%80%93Turing_frequency_estimation"
              >
                Good-Turing{" "}
              </a>{" "}
              as it is very effective yet easy to implement. . By applying the
              smoothing the resulting frequencies were better suited for the
              final prediction. The Katz back-off model tried to match the
              quadgrams (trigram + prediction) with the user input and if that
              failed tried the trigrams and so on until if no match was found
              the high probability and frequency unigrams were sugested. This
              method worked well and provided good predicitve ability.
            </div>
          </div>
        </Modal>
      )}
      {modalSelect === 4 && (
        <Modal
          visible={visible}
          title="Crypto Signals"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={footer}
          width={width}
        >
          <div className="flex sm:flex-col md:flex-row">
            <div className="md:w-1/2 md:h-1/2">
              <Carousel autoplay={true}>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={cryptoSignals}
                    alt="Crypto Signals"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={cryptoSignals1}
                    alt="Crypto Signals"
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pl-5">
              <strong>How it works:</strong>
              <br /> Provides performance metrics for 290 different crypto coin
              pairs. For each pair the current price in dollars and the value
              change in the last 24 hours are shown. A 5 minute and 1 hour time
              period are used to indicate strong coin pairs based on popular
              trading indicators in technical analysis. The idea is to
              streamline the process of identifying potential short term trading
              pairs by visually showing trends.
              <br />
              <br />
              <strong>Technical:</strong>
              <br /> Based off the{" "}
              <a
                style={{ color: "blue" }}
                href="https://github.com/Haehnchen/crypto-trading-bot "
              >
                crypto trading bot{" "}
              </a>{" "}
              by Daniel Espendiller on the request of Saxan Capital, the signals
              dashboard was used and developed on the feedback of their trading
              team. Looking for a so called 'Royal flush' where the coin pair
              had positive signals for both the 5 minute and 1 hour timelines.
              Pairs that satisfied this were then investigated further by the
              traders, the purpose of the dashboard is to reduce the time and
              effort of identifying currently upward trending coins. The signals
              dashboard was hosted through Digital Ocean. Unable to share the
              code due to a company policy.
            </div>
          </div>
        </Modal>
      )}
      {modalSelect === 5 && (
        <Modal
          visible={visible}
          title="Asana Updater"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={footer}
          width={width}
        >
          <div className="flex sm:flex-col md:flex-row">
            <div className="md:w-1/2 md:h-1/2">
              <Carousel autoplay={true}>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={asana}
                    alt="Asana"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={asana1}
                    alt="Asana"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={asana2}
                    alt="Asana"
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pl-5">
              <strong>How it works:</strong>
              <br /> An Asana board showing the progress of unprocessed uploads
              currently in the piprline. The board updates every 15 minutes,
              giving the number of blocks uploaded and the number of blocks
              processed. The board shows the due date for the uploads, the type
              of upload and if the pipeline is currently on track.
              <br />
              <br />
              <strong>Technical:</strong>
              <br /> Made for the Aerobotics Data Operations team to help them
              identify uploads that required attention. The board uses a custom
              endpoint that collects and assimilates data from different
              databases. The custom endpoint is called within a AWS Lambda that
              runs every 15 minutes, the function uses the Asana endpoint and
              the custom Asana board to update and populate the required fields.
              The lambda is controlled with Terraform.
            </div>
          </div>
        </Modal>
      )}
      {modalSelect === 6 && (
        <Modal
          visible={visible}
          title="Crypto Dashboard"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={footer}
          width={width}
        >
          <div className="flex sm:flex-col md:flex-row">
            <div className="md:w-1/2 md:h-1/2">
              <Carousel autoplay={true}>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={dashboard}
                    alt="Dashboard"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={dashboard1}
                    alt="Dashboard"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={dashboard2}
                    alt="Dashboard"
                  />
                </div>
                <div>
                  <img
                    className="object-contain h-96 w-full"
                    src={dashboard3}
                    alt="Dashboard"
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pl-5">
              <strong>How it works:</strong>
              <br /> A dashboard that is used to minitor the performance and
              current holdings of a crypto wallet. Connecting to a Binance
              wallet the dashboard shows the wallets current value and
              breakdown. Additional non-specific information like the latest
              cypto news headlines are shown on the dashboard as well. The
              performance section of the dashboard is used to monitor the daily,
              weekly and monthly performace of the traded portfolio and is
              updated once a day.
              <br />
              <br />
              <strong>Technical:</strong>
              <br /> The general design was based off{" "}
              <a
                style={{ color: "blue" }}
                href="https://www.creative-tim.com/product/black-dashboard-pro-django"
              >
                Creative Tim dashboards
              </a>{" "}
              and implemented for Saxan Capital. The project was setup with the
              down the line plan of incorporating machine learning based off the
              recorded performance of the portfolio. Current coin prices and
              historical prices were sourced through the Binance API and the
              crypto news was updated from{" "}
              <a style={{ color: "blue" }} href="https://cryptopanic.com">
                CryptoPanic
              </a>
              . Unable to share the code due to a company policy.
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectModals;
