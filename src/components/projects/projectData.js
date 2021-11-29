import memoryGame from "../../img/memory_game.png";
import missingTree from "../../img/missing_trees.png";
import cryptoSignals from "../../img/crypto_signals.jpg";
import luckyGuess from "../../img/lucky_guess.png";
import asana from "../../img/asana.png";
import dashboard from "../../img/dashboard.png";

export const projects = [
    {
      title: "Memory Game",
      subtitle: "React",
      description:
        "A space themed memory game for 2 players. Players take turns flipping 2 cards and trying to remember matching pairs.",
      image: memoryGame,
      link: "https://github.com/Peter-Willmott/SpecnoTechAssessment",
      modal: 1
    },
    {
      title: "Missing Trees",
      subtitle: "Django",
      description:
        "A custom endpoint that returns the latitude and longitude of all the missing tree locations found within an orchard.",
      image: missingTree,
      link: "https://github.com/Peter-Willmott/missing_trees_assignment",
      modal: 2
    },
    {
      title: "Text Prediction",
      subtitle: "R",
      description:
        "An app that suggests several words that could be used to continue the sentence and gives the probability of a correct word.",
      image: luckyGuess,
      link: "https://rpubs.com/P_Willmott/460088",
      modal: 3
    },
    {
      title: "Crypto Signals Bot",
      subtitle: "Javascript",
      description:
        "Created for Saxan Capital to quickly and visually identify promising crypto coin pairs based off popular technical indicators.",
      image: cryptoSignals,
      link: "https://www.accel.co.za/",
      modal: 4
    },
    {
      title: "Asana Lambda Update",
      subtitle: "Django + Asana + AWS",
      description:
        "A custom endpoint of unprocessed uploads that is hit every 15 minutes by a lambda, causing an update of a pre-designed Asana board.",
      image: asana,
      link: "https://github.com/Peter-Willmott/asana-updater",
      modal: 5
    },
    {
      title: "Crypto Dashboard",
      subtitle: "Python + Bootstrap",
      description:
        "Company and personal portfolio tracking dashboard for cryptocurrencies. Includes portfolio holdings, growth and latest crypto news.",
      image: dashboard,
      link: "https://github.com/Peter-Willmott/Saxan-Capital-Management",
      modal: 6
    },
  ];