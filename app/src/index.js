import StartPage from "./pages/StartPage.js"
import Practise from "./pages/Practise.js"
import PractiseCategory from "./pages/PractiseCategory.js"
import NewPlayer from "./pages/NewPlayer.js"
import HowToPlay from "./pages/HowToPlay.js"
import Highscores from "./pages/Highscores.js"
import Game from "./pages/Game.js"
import GameDifficulty from "./pages/GameDifficulty.js"
import Learn from "./pages/Learn.js"
import ErrorPage from "./pages/ErrorPage.js"
import HeaderNav from "./components/HeaderNav.js"
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"

// Список компонент
const components = {
  headerNav: HeaderNav,
  content: Content,
  footer: Footer,
}

// Список поддердживаемых роутов
const routes = {
  startPage: StartPage,
  highscores: Highscores,
  newplayer: NewPlayer,
  howtoplay: HowToPlay,
  learn: Learn,
  practisecategory: PractiseCategory,
  practise: Practise,
  gamedifficulty: GameDifficulty,
  game: Game,
  error: ErrorPage,
}

/* ----- spa init module --- */
const mySPA = (function () {
  /* ------- begin view -------- */
  function ModuleView() {
    let myModuleContainer = null
    let contentContainer = null
    let routesObj = null
    let header = null
    let footer = null

    this.init = function (container, routes) {
      myModuleContainer = container
      routesObj = routes
      header = myModuleContainer.querySelector("#header")
      contentContainer = myModuleContainer.querySelector("#content")
      footer = myModuleContainer.querySelector("#footer")
    }

    this.renderContent = function (hashPageName) {
      let routeName = "startPage"

      if (hashPageName.length > 0) {
        routeName = hashPageName in routes ? hashPageName : "error"
      }

      window.document.title = routesObj[routeName].title
      header.innerHTML = routesObj[routeName].renderHeader(
        `${routeName}-header`
      )
      contentContainer.innerHTML = routesObj[routeName].renderContent(
        `${routeName}-content`
      )
      footer.innerHTML = routesObj[routeName].renderFooter(
        `${routeName}-footer`
      )

      if (routeName === "startPage") {
        this.showEarth()
        this.showButtonsStartPage()
      }
      if (routeName === "learn") {
        this.showButtonsLearn()
      }
      if (routeName === "practisecategory") this.showButtonsPractiseCategory()
      if (routeName === "newplayer") this.showLoginForm()
      if (routeName === "practise") {
        this.drawBackgroundCards()
        this.addFlippedCard()
        this.addModalBack()
      }
      if (routeName === "gamedifficulty") this.showButtonsGameDifficulty()
      if (routeName === "game") {
        this.showGameAttributes()
        this.addModalBack()
      }

      if (
        routeName === "startPage" ||
        "learn" ||
        "practisecategory" ||
        "practise" ||
        "gamedifficulty" ||
        "game" ||
        "newplayer" ||
        "howtoplay" ||
        "error" ||
        "highscores"
      )
        this.addModalExit()

      if (routeName === "learn" || "practise") this.addLoader()

      if (routeName === "howtoplay") {
        this.howToPlayText()
        this.showSvgAnimatedPath()
      }
    }
    // Контент на странице How To Play Text
    this.howToPlayText = function () {
      const textContainer = document.createElement("div")
      textContainer.classList.add("how-to-play__text")
      contentContainer.firstElementChild.append(textContainer)

      textContainer.innerHTML = `
        <h1>How To Play</h1>
        <p>This web application is aimed at learning and checking your knowledge of countries and its flags.</p> 
        <p>It consists of three sections: Learning, Practising and Playing the game.</p> 
        <p>Learning part is devoted to investigating of flags and its country/capital with an option to filter them by region.</p>
        <p>In Practising part you will also have a possibility to select any region or the whole world and then you will try guessing the flag and its country/capital by flipping the cards.</p>
        <p>Game part contains a quiz with different difficulty levels where you should choose the correct answer from 4 possible. At the same time for the correct answer you will receive one point.</p>
        `
    }
    // Loader для показа загрузки данных по API
    this.addLoader = function () {
      const loaderContainer = document.createElement("div")
      loaderContainer.classList.add("loading")
      contentContainer.firstElementChild.append(loaderContainer)
    }

    //При нажатии на стрелку назад появляется модальное окно на страницах practise и gamedifficulty
    this.addModalBack = function () {
      const modalBack = document.createElement("div")
      modalBack.classList.add("modal-back", "modal_closed")
      contentContainer.firstElementChild.append(modalBack)

      const modalClose = document.createElement("div")
      modalClose.classList.add("modal__close")
      modalClose.id = "modalBackClose"
      modalClose.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
      modalBack.append(modalClose)

      const modalQuestion = document.createElement("h2")
      modalQuestion.textContent =
        "Do you really want to go back and lose your progress?"
      modalBack.append(modalQuestion)

      const modalBtns = document.createElement("div")
      modalBtns.classList.add("modal-back-btns")
      modalBack.append(modalBtns)

      const modalBtnYes = document.createElement("button")
      modalBtnYes.classList.add("modal-back-btn__yes")
      modalBtnYes.id = "modalBackBtnYes"
      modalBtnYes.textContent = "Yes"
      modalBtns.append(modalBtnYes)

      const modalBtnNo = document.createElement("button")
      modalBtnNo.classList.add("modal-back-btn__no")
      modalBtnNo.id = "modalBackBtnNo"
      modalBtnNo.textContent = "No"
      modalBtns.append(modalBtnNo)
    }

    // При нажатии на exit появляется модалка (действительно ли хочет покинуть игру)
    this.addModalExit = function () {
      const modalOverlay = document.createElement("div")
      modalOverlay.classList.add("modal-overlay", "modal_closed")
      contentContainer.firstElementChild.append(modalOverlay)

      const modalExit = document.createElement("div")
      modalExit.classList.add("modal", "modal_closed")
      contentContainer.firstElementChild.append(modalExit)

      const modalClose = document.createElement("div")
      modalClose.classList.add("modal__close")
      modalClose.id = "modalClose"
      modalClose.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
      modalExit.append(modalClose)

      const modalQuestion = document.createElement("h2")
      modalQuestion.textContent = "Do you really want to exit?"
      modalExit.append(modalQuestion)

      const modalBtns = document.createElement("div")
      modalBtns.classList.add("modal-btns")
      modalExit.append(modalBtns)

      const modalBtnYes = document.createElement("button")
      modalBtnYes.classList.add("modal-btn__yes")
      modalBtnYes.id = "modalBtnYes"
      modalBtnYes.textContent = "Yes"
      modalBtns.append(modalBtnYes)

      const modalBtnNo = document.createElement("button")
      modalBtnNo.classList.add("modal-btn__no")
      modalBtnNo.id = "modalBtnNo"
      modalBtnNo.textContent = "No"
      modalBtns.append(modalBtnNo)
    }
    // svg анимация приближающейся на hover земли (стартовая страница)
    this.showEarth = function () {
      const svgContaner = document.createElement("div")
      svgContaner.classList.add("svg-startpageEarth")
      contentContainer.firstElementChild.append(svgContaner)

      const svgNS = "http://www.w3.org/2000/svg"
      const svg = document.createElementNS(svgNS, "svg")
      svg.setAttributeNS(null, "width", 200)
      svg.setAttributeNS(null, "viewBox", "0 0 512 512")
      svg.setAttributeNS(null, "id", "svgEarth")
      svg.innerHTML = `
        <path style="fill:#36C8EB;" d="M411.62,201.146l-31.689,29.048c-1.678,1.538-2.92,3.491-3.601,5.663l-14.867,47.39
	c-0.273,0.871-0.454,1.77-0.539,2.679l-4.694,50.696c-0.184,1.981-0.821,3.892-1.863,5.586l-22.893,37.203l-26.739,42.266
	c-2.925,4.623-8.443,6.906-13.779,5.701l-14.829-3.348c-4.826-1.089-8.608-4.837-9.741-9.654l-14.235-60.5
	c-0.154-0.654-0.359-1.295-0.612-1.917l-22.057-54.141l-21.052-48.802c-0.908-2.105-1.24-4.413-0.963-6.689l3.193-26.189
	c0.831-6.817,6.847-11.796,13.7-11.339l63.857,4.257c0.279,0.018,0.559,0.046,0.837,0.084l62.134,8.224
	c4.255,0.563,8.512-1.021,11.364-4.23l3.533-3.975c6.928-7.794,2.256-20.163-8.095-21.431l-15.485-1.896
	c-5.885-0.721-10.527-5.351-11.262-11.233l-1.819-14.549c-0.617-4.938,1.653-9.792,5.84-12.484l2.283-1.468
	c8.502-5.466,7.731-18.133-1.371-22.527l-1.81-0.874c-4.292-2.072-9.376-1.616-13.23,1.187l-14.559,10.589
	c-1.073,0.78-2.259,1.39-3.517,1.81l-43.847,14.615c-2.104,0.702-4.354,0.85-6.533,0.431l-43.957-8.453
	c-3.658-0.704-7.442,0.205-10.383,2.492l-6.777,5.271c-4.196,3.264-9.962,3.628-14.534,0.918l-8.225-4.874
	c-6.377-3.779-8.28-12.134-4.167-18.301l9.647-14.472c2.029-3.042,5.25-5.084,8.866-5.62l13.9-2.059
	c4.872-0.722,8.911-4.148,10.418-8.837l4.201-13.07c1.536-4.778,5.697-8.236,10.676-8.872l37.274-4.758
	c1.653-0.211,3.25-0.739,4.703-1.556l1.712-0.963c10.248-5.765,8.11-21.105-3.323-23.85l0,0
	c-8.997-2.159-12.883-12.791-7.398-20.242l10.072-13.687c-3.118-0.117-6.242-0.196-9.385-0.196
	c-129.968,0-236.362,100.876-245.193,228.602c8.822,4.266,18.527,8.859,19.791,9.04c1.637,0.234,21.785,0.146,34.195,0.068
	c5.734-0.036,10.8,3.708,12.456,9.199l15.135,50.182c0.932,3.091,0.674,6.42-0.723,9.331l-21.01,43.773
	c-0.853,1.777-1.288,3.721-1.274,5.691c0.075,9.924,0.351,41.617,0.824,50.844c45.069,51.988,111.595,84.872,185.8,84.872
	c135.752,0,245.801-110.048,245.801-245.801c0-26.283-4.142-51.596-11.78-75.339l-72.68,17.443
	C415.208,198.615,413.238,199.663,411.62,201.146z"/>
<g>
	<path style="fill:#FFD500;" d="M265.381,10.395L255.31,24.082c-5.483,7.452-1.597,18.083,7.398,20.242l0,0
		c11.433,2.744,13.57,18.085,3.323,23.85l-1.712,0.963c-1.452,0.817-3.05,1.346-4.703,1.556l-37.274,4.758
		c-4.978,0.635-9.14,4.094-10.676,8.872l-4.201,13.07c-1.507,4.689-5.546,8.114-10.418,8.837l-13.9,2.059
		c-3.617,0.535-6.839,2.577-8.866,5.62l-9.647,14.472c-4.111,6.167-2.209,14.523,4.167,18.301l8.225,4.874
		c4.573,2.71,10.338,2.346,14.534-0.918l6.777-5.271c2.94-2.288,6.725-3.195,10.383-2.492l43.957,8.453
		c2.179,0.419,4.428,0.27,6.533-0.431l43.847-14.615c1.259-0.419,2.445-1.03,3.517-1.81l14.559-10.589
		c3.854-2.804,8.939-3.26,13.23-1.187l1.81,0.874c9.102,4.394,9.873,17.062,1.371,22.527l-2.283,1.468
		c-4.186,2.692-6.457,7.545-5.84,12.484l1.819,14.549c0.735,5.883,5.377,10.513,11.262,11.233l15.485,1.896
		c10.351,1.268,15.023,13.636,8.095,21.431l-3.533,3.975c-2.852,3.208-7.109,4.793-11.364,4.23l-62.134-8.224
		c-0.278-0.037-0.557-0.064-0.837-0.084l-63.857-4.257c-6.853-0.457-12.867,4.522-13.7,11.339l-3.193,26.189
		c-0.277,2.275,0.055,4.584,0.963,6.689l21.056,48.802l22.058,54.14c0.254,0.622,0.458,1.264,0.612,1.917l14.235,60.5
		c1.133,4.816,4.915,8.564,9.741,9.654l14.829,3.348c5.336,1.206,10.854-1.078,13.779-5.701l26.738-42.264l22.893-37.202
		c1.042-1.694,1.68-3.605,1.863-5.586l4.694-50.696c0.085-0.91,0.265-1.807,0.539-2.679l14.867-47.39
		c0.681-2.171,1.924-4.125,3.601-5.663l31.689-29.048c1.618-1.483,3.587-2.53,5.722-3.042l72.68-17.443
		C459.121,84.606,370.74,14.35,265.381,10.395z"/>
	<path style="fill:#FFD500;" d="M70.65,360.394l21.01-43.773c1.397-2.911,1.655-6.24,0.723-9.331l-15.135-50.182
		c-1.655-5.49-6.721-9.235-12.456-9.199c-12.409,0.078-32.558,0.165-34.195-0.068c-1.264-0.181-10.968-4.773-19.791-9.04
		c-0.393,5.683-0.608,11.416-0.608,17.199c0,61.546,22.621,117.809,60.002,160.929c-0.473-9.226-0.749-40.92-0.824-50.844
		C69.362,364.114,69.796,362.171,70.65,360.394z"/>
</g>
<g>
	<path style="fill:#3D3D3D;" d="M499.73,177.537c-15.962-49.618-46.354-92.716-87.893-124.633
		c-42.266-32.476-92.777-50.7-146.074-52.701h-0.001l0,0C262.073,0.064,258.971,0,256,0C190.743,0,128.594,24.562,81.002,69.162
		C33.639,113.546,5.097,173.54,0.632,238.094c0,0.001,0,0.001,0,0.001C0.213,244.164,0,250.187,0,256
		c0,61.597,22.194,121.122,62.495,167.61c0.003,0.004,0.007,0.007,0.011,0.011C111.202,479.788,181.726,512,256,512
		c68.381,0,132.667-26.628,181.019-74.981C485.372,388.667,512,324.381,512,256C512,229.244,507.871,202.846,499.73,177.537z
		 M476.689,173.371l-61.727,14.813c-3.806,0.914-7.345,2.795-10.234,5.442l-31.69,29.048c-2.997,2.747-5.223,6.249-6.439,10.128
		l-14.866,47.385c-0.489,1.551-0.812,3.165-0.963,4.797l-4.695,50.697c-0.039,0.416-0.175,0.824-0.395,1.18l-22.861,37.149
		l-26.705,42.21c-0.617,0.976-1.79,1.458-2.913,1.207l-14.83-3.349c-1.013-0.228-1.821-1.029-2.059-2.04l-14.233-60.491
		c-0.273-1.163-0.641-2.316-1.096-3.439l-22.058-54.14c-0.025-0.064-0.053-0.128-0.081-0.192l-21.052-48.804
		c-0.192-0.443-0.261-0.93-0.202-1.413l3.193-26.187c0.168-1.38,1.34-2.404,2.712-2.404c0.061,0,0.122,0.002,0.185,0.006
		l63.85,4.257c0.061,0.004,0.121,0.009,0.185,0.017l62.135,8.225c7.62,1.005,15.216-1.821,20.324-7.564l3.535-3.976
		c5.732-6.449,7.4-15.47,4.35-23.543c-3.049-8.073-10.263-13.739-18.83-14.788l-15.484-1.895c-1.246-0.152-2.227-1.129-2.382-2.375
		l-1.819-14.55c-0.13-1.037,0.355-2.074,1.233-2.639l2.285-1.468c7.14-4.591,11.097-12.39,10.581-20.865
		c-0.516-8.473-5.388-15.736-13.033-19.426l-1.812-0.875c-7.689-3.713-16.757-2.899-23.662,2.124l-14.558,10.589
		c-0.227,0.165-0.478,0.294-0.744,0.383l-43.846,14.615c-0.443,0.148-0.921,0.181-1.382,0.091l-43.959-8.453
		c-6.537-1.256-13.309,0.366-18.571,4.457l-6.778,5.272c-0.893,0.694-2.1,0.77-3.072,0.192l-8.224-4.872
		c-0.835-0.495-1.154-1.222-1.272-1.745c-0.119-0.523-0.149-1.317,0.391-2.126l9.647-14.471c0.428-0.642,1.112-1.075,1.876-1.188
		l13.898-2.059c8.778-1.299,15.918-7.356,18.635-15.804l4.201-13.07c0.322-1.006,1.21-1.742,2.257-1.876l37.274-4.758
		c2.971-0.379,5.801-1.317,8.409-2.783l1.717-0.964c8.351-4.698,12.892-13.865,11.57-23.354
		c-1.322-9.489-8.196-17.065-17.513-19.302c-1.179-0.283-1.701-1.092-1.931-1.722c-0.23-0.628-0.354-1.584,0.365-2.56l6.826-9.278
		C363.025,26.454,444.235,86.722,476.689,173.371z M20.411,254.646c6.489,2.967,7.477,3.111,8.744,3.291
		c1.109,0.158,2.631,0.374,35.704,0.171c0.006,0,0.012,0,0.018,0c1.211,0,2.256,0.779,2.608,1.944l15.135,50.181
		c0.197,0.656,0.144,1.356-0.153,1.975l-21.011,43.773c-1.516,3.16-2.303,6.679-2.276,10.181c0.036,4.712,0.098,11.954,0.187,19.62
		C34.08,347.483,20.398,302.383,20.398,256C20.398,255.552,20.408,255.096,20.411,254.646z M256,491.602
		c-67.179,0-131.029-28.636-175.752-78.694c-0.381-11.912-0.608-38.354-0.672-46.9c-0.003-0.417,0.088-0.822,0.269-1.2
		l21.011-43.772c2.505-5.219,2.964-11.147,1.293-16.69l-15.135-50.181c-2.926-9.707-12.017-16.453-22.137-16.453
		c-0.049,0-0.099,0-0.147,0c-22.442,0.14-29.766,0.073-32.15,0.017c-1.259-0.526-4.229-1.839-11.023-5.077
		C32.995,116.579,129.142,25.85,245.438,20.642c-3.185,5.807-3.749,12.725-1.438,19.047c2.668,7.299,8.772,12.739,16.329,14.553
		c1.499,0.36,1.953,1.439,2.07,2.282c0.117,0.842-0.024,2.006-1.366,2.76l-1.716,0.964c-0.309,0.173-0.644,0.284-0.995,0.328
		l-37.274,4.758c-8.864,1.132-16.359,7.361-19.094,15.869l-4.201,13.069c-0.32,0.998-1.165,1.714-2.202,1.868L181.652,98.2
		c-6.458,0.957-12.238,4.62-15.859,10.051l-9.648,14.471c-3.505,5.259-4.71,11.809-3.307,17.97
		c1.403,6.161,5.326,11.541,10.762,14.764l8.224,4.872c8.237,4.881,18.44,4.236,25.996-1.64l6.775-5.27
		c0.622-0.485,1.424-0.675,2.197-0.528l40.694,7.825l3.749,14.246c1.206,4.577,5.335,7.607,9.857,7.607
		c0.86,0,1.733-0.109,2.603-0.339c5.447-1.433,8.701-7.012,7.268-12.459l-2.913-11.069l38.233-12.744
		c2.252-0.751,4.368-1.84,6.291-3.237l14.56-10.59c0.816-0.593,1.888-0.69,2.795-0.252l1.811,0.875
		c1.193,0.575,1.497,1.567,1.542,2.297c0.044,0.729-0.138,1.75-1.25,2.466l-2.284,1.467c-7.443,4.784-11.542,13.55-10.445,22.329
		l1.819,14.549c1.317,10.538,9.599,18.801,20.143,20.092l15.484,1.895c1.357,0.166,1.96,1.042,2.227,1.749
		c0.266,0.705,0.394,1.761-0.514,2.782l-3.534,3.975c-0.604,0.679-1.509,1.005-2.402,0.895l-62.132-8.224
		c-0.495-0.065-0.992-0.114-1.5-0.149l-63.855-4.257c-12.266-0.814-23.016,8.09-24.503,20.282l-3.192,26.185
		c-0.497,4.067,0.099,8.206,1.722,11.965l21.011,48.708l22.014,54.034c0.056,0.136,0.1,0.272,0.133,0.414l14.235,60.5
		c2.013,8.553,8.852,15.329,17.422,17.265l14.829,3.348c1.689,0.381,3.389,0.567,5.074,0.567c7.814,0,15.277-3.977,19.571-10.763
		l26.739-42.264c0.021-0.036,0.045-0.071,0.066-0.107l22.892-37.201c1.855-3.014,3.008-6.469,3.334-9.993l4.695-50.692
		c0.018-0.196,0.056-0.387,0.113-0.571l14.867-47.39c0.145-0.459,0.407-0.873,0.761-1.198l31.688-29.046
		c0.342-0.314,0.76-0.535,1.212-0.645l63.297-15.192c5.695,20.508,8.582,41.713,8.582,63.173
		C491.602,385.911,385.911,491.602,256,491.602z"/>
	<path style="fill:#3D3D3D;" d="M378.806,372.871c-4.739-3.046-11.049-1.675-14.094,3.065l-18.359,28.558
		c-3.045,4.739-1.675,11.048,3.065,14.094c1.706,1.096,3.617,1.621,5.504,1.621c3.355,0,6.641-1.653,8.59-4.686l18.359-28.558
		C384.916,382.227,383.545,375.917,378.806,372.871z"/>
	<path style="fill:#3D3D3D;" d="M264.412,280.677c-2.145-5.209-8.103-7.692-13.315-5.547c-5.208,2.146-7.692,8.105-5.547,13.315
		l21.417,52.013c1.622,3.938,5.425,6.318,9.435,6.318c1.294,0,2.609-0.248,3.88-0.771c5.208-2.146,7.692-8.105,5.547-13.315
		L264.412,280.677z"/>
	<path style="fill:#3D3D3D;" d="M251.812,250.075l-1.68-4.08c-2.145-5.207-8.103-7.693-13.315-5.546
		c-5.208,2.145-7.691,8.105-5.546,13.315l1.68,4.08c1.622,3.937,5.424,6.317,9.434,6.317c1.294,0,2.61-0.248,3.881-0.772
		C251.475,261.246,253.957,255.285,251.812,250.075z"/>
</g>`
      svgContaner.append(svg)
    }
    // Отображение кнопок на стартовой странице
    this.showButtonsStartPage = function () {
      const btnContaner = document.createElement("div")
      btnContaner.classList.add("buttons-startpage")
      contentContainer.firstElementChild.append(btnContaner)

      let buttonStartPage1 = document.createElement("a")
      buttonStartPage1.classList.add("button-startpage")
      buttonStartPage1.setAttribute("href", "#learn")
      buttonStartPage1.textContent = "Learn"
      buttonStartPage1.id = "btnLearn"
      btnContaner.append(buttonStartPage1)

      let buttonStartPage2 = document.createElement("a")
      buttonStartPage2.classList.add("button-startpage")
      buttonStartPage2.setAttribute("href", "#practisecategory")
      buttonStartPage2.textContent = "Practise"
      buttonStartPage2.id = "btnPractise"
      btnContaner.append(buttonStartPage2)

      let buttonStartPage3 = document.createElement("a")
      buttonStartPage3.classList.add("button-startpage")
      buttonStartPage3.setAttribute("href", "#gamedifficulty")
      buttonStartPage3.textContent = "Play"
      buttonStartPage3.id = "btnPlay"
      btnContaner.append(buttonStartPage3)
    }
    // Отображение кнопок на странице Learn
    this.showButtonsLearn = function () {
      const btnContaner = document.createElement("div")
      btnContaner.classList.add("buttons-learnpage")
      contentContainer.firstElementChild.append(btnContaner)

      let buttonLearnAll = document.createElement("button")
      buttonLearnAll.classList.add("button-learnpage", "active-btn")
      buttonLearnAll.textContent = "All Regions"
      buttonLearnAll.id = "btnLearnAll"
      btnContaner.append(buttonLearnAll)

      let buttonLearnAfrica = document.createElement("button")
      buttonLearnAfrica.classList.add("button-learnpage")
      buttonLearnAfrica.textContent = "Africa"
      buttonLearnAfrica.id = "btnLearnAfrica"
      btnContaner.append(buttonLearnAfrica)

      let buttonLearnAmericas = document.createElement("button")
      buttonLearnAmericas.classList.add("button-learnpage")
      buttonLearnAmericas.textContent = "Americas"
      buttonLearnAmericas.id = "btnLearnAmericas"
      btnContaner.append(buttonLearnAmericas)

      let buttonLearnAsia = document.createElement("button")
      buttonLearnAsia.classList.add("button-learnpage")
      buttonLearnAsia.textContent = "Asia"
      buttonLearnAsia.id = "btnLearnAsia"
      btnContaner.append(buttonLearnAsia)

      let buttonLearnEurope = document.createElement("button")
      buttonLearnEurope.classList.add("button-learnpage")
      buttonLearnEurope.textContent = "Europe"
      buttonLearnEurope.id = "btnLearnEurope"
      btnContaner.append(buttonLearnEurope)

      let buttonLearnOceania = document.createElement("button")
      buttonLearnOceania.classList.add("button-learnpage")
      buttonLearnOceania.textContent = "Oceania"
      buttonLearnOceania.id = "btnLearnOceania"
      btnContaner.append(buttonLearnOceania)
    }

    // Отображение кнопок на странице PractiseCategory
    this.showButtonsPractiseCategory = function () {
      const btnContaner = document.createElement("div")
      btnContaner.classList.add("buttons-practisecategory")
      contentContainer.firstElementChild.append(btnContaner)

      let buttonPractiseCategoryAll = document.createElement("a")
      buttonPractiseCategoryAll.classList.add("button-practisecategory")
      buttonPractiseCategoryAll.setAttribute("href", "#practise")
      buttonPractiseCategoryAll.textContent = "All Regions"
      buttonPractiseCategoryAll.id = "btnPractiseCategoryAll"
      btnContaner.append(buttonPractiseCategoryAll)

      let buttonPractiseAfrica = document.createElement("a")
      buttonPractiseAfrica.classList.add("button-practisecategory")
      buttonPractiseAfrica.setAttribute("href", "#practise")
      buttonPractiseAfrica.textContent = "Africa"
      buttonPractiseAfrica.id = "btnPractiseAfrica"
      btnContaner.append(buttonPractiseAfrica)

      let buttonPractiseAmericas = document.createElement("a")
      buttonPractiseAmericas.classList.add("button-practisecategory")
      buttonPractiseAmericas.setAttribute("href", "#practise")
      buttonPractiseAmericas.textContent = "Americas"
      buttonPractiseAmericas.id = "btnPractiseAmericas"
      btnContaner.append(buttonPractiseAmericas)

      let buttonPractiseAsia = document.createElement("a")
      buttonPractiseAsia.classList.add("button-practisecategory")
      buttonPractiseAsia.setAttribute("href", "#practise")
      buttonPractiseAsia.textContent = "Asia"
      buttonPractiseAsia.id = "btnPractiseAsia"
      btnContaner.append(buttonPractiseAsia)

      let buttonPractiseEurope = document.createElement("a")
      buttonPractiseEurope.classList.add("button-practisecategory")
      buttonPractiseEurope.setAttribute("href", "#practise")
      buttonPractiseEurope.textContent = "Europe"
      buttonPractiseEurope.id = "btnPractiseEurope"
      btnContaner.append(buttonPractiseEurope)

      let buttonPractiseOceania = document.createElement("a")
      buttonPractiseOceania.classList.add("button-practisecategory")
      buttonPractiseOceania.setAttribute("href", "#practise")
      buttonPractiseOceania.textContent = "Oceania"
      buttonPractiseOceania.id = "btnPractiseOceania"
      btnContaner.append(buttonPractiseOceania)
    }
    // svg анимация разъезжающейся колоды карточек на заднем фоне
    this.drawBackgroundCards = function () {
      const svgContaner = document.createElement("div")
      svgContaner.classList.add("svg-practise-container")
      contentContainer.firstElementChild.append(svgContaner)

      let cardWidth = "250"
      let cardHeight = "350"

      const svgNS = "http://www.w3.org/2000/svg"

      const svg1 = document.createElementNS(svgNS, "svg")
      svg1.setAttributeNS(null, "width", cardWidth)
      svg1.setAttributeNS(null, "height", cardHeight)
      svg1.setAttributeNS(null, "id", "svgCard1")
      svg1.setAttributeNS(null, "style", "position:absolute")

      const rect1 = document.createElementNS(svgNS, "rect")
      rect1.setAttributeNS(null, "width", cardWidth)
      rect1.setAttributeNS(null, "height", cardHeight)
      rect1.setAttributeNS(null, "style", "fill:#ffb703")

      const svgAnimationCardTranslate1 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardTranslate1.setAttributeNS(
        null,
        "attributeName",
        "transform"
      )
      svgAnimationCardTranslate1.setAttributeNS(null, "type", "translate")
      svgAnimationCardTranslate1.setAttributeNS(
        null,
        "from",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate1.setAttributeNS(
        null,
        "to",
        -cardWidth / 2 + " " + "50"
      )
      svgAnimationCardTranslate1.setAttributeNS(null, "begin", "0s")
      svgAnimationCardTranslate1.setAttributeNS(null, "dur", "2s")
      svgAnimationCardTranslate1.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardTranslate1.setAttributeNS(null, "additive", "sum")

      const svgAnimationCardRotate1 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardRotate1.setAttributeNS(null, "attributeName", "transform")
      svgAnimationCardRotate1.setAttributeNS(null, "type", "rotate")
      svgAnimationCardRotate1.setAttributeNS(null, "from", 0)
      svgAnimationCardRotate1.setAttributeNS(null, "to", -15)
      svgAnimationCardRotate1.setAttributeNS(null, "begin", "0s")
      svgAnimationCardRotate1.setAttributeNS(null, "dur", "2s")
      svgAnimationCardRotate1.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardRotate1.setAttributeNS(null, "additive", "sum")

      svgContaner.append(svg1)
      svg1.append(rect1)
      svg1.append(svgAnimationCardTranslate1)
      svg1.append(svgAnimationCardRotate1)

      const svg2 = document.createElementNS(svgNS, "svg")
      svg2.setAttributeNS(null, "width", cardWidth)
      svg2.setAttributeNS(null, "height", cardHeight)
      svg2.setAttributeNS(null, "id", "svgCard2")
      svg2.setAttributeNS(null, "style", "position:absolute")

      const rect2 = document.createElementNS(svgNS, "rect")
      rect2.setAttributeNS(null, "width", cardWidth)
      rect2.setAttributeNS(null, "height", cardHeight)
      rect2.setAttributeNS(null, "style", "fill:#a895fc")

      const svgAnimationCardTranslate2 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardTranslate2.setAttributeNS(
        null,
        "attributeName",
        "transform"
      )
      svgAnimationCardTranslate2.setAttributeNS(null, "type", "translate")
      svgAnimationCardTranslate2.setAttributeNS(
        null,
        "from",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate2.setAttributeNS(
        null,
        "to",
        -cardWidth / 2 - 20 + " " + "-70"
      )
      svgAnimationCardTranslate2.setAttributeNS(null, "begin", "0s")
      svgAnimationCardTranslate2.setAttributeNS(null, "dur", "2s")
      svgAnimationCardTranslate2.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardTranslate2.setAttributeNS(null, "additive", "sum")

      const svgAnimationCardRotate2 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardRotate2.setAttributeNS(null, "attributeName", "transform")
      svgAnimationCardRotate2.setAttributeNS(null, "type", "rotate")
      svgAnimationCardRotate2.setAttributeNS(null, "from", 0)
      svgAnimationCardRotate2.setAttributeNS(null, "to", -25)
      svgAnimationCardRotate2.setAttributeNS(null, "begin", "0s")
      svgAnimationCardRotate2.setAttributeNS(null, "dur", "2s")
      svgAnimationCardRotate2.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardRotate2.setAttributeNS(null, "additive", "sum")

      svgContaner.append(svg2)
      svg2.append(rect2)
      svg2.append(svgAnimationCardTranslate2)
      svg2.append(svgAnimationCardRotate2)

      const svg3 = document.createElementNS(svgNS, "svg")
      svg3.setAttributeNS(null, "width", cardWidth)
      svg3.setAttributeNS(null, "height", cardHeight)
      svg3.setAttributeNS(null, "id", "svgCard3")
      svg3.setAttributeNS(null, "style", "position:absolute")

      const rect3 = document.createElementNS(svgNS, "rect")
      rect3.setAttributeNS(null, "width", cardWidth)
      rect3.setAttributeNS(null, "height", cardHeight)
      rect3.setAttributeNS(null, "style", "fill:#7659f7")

      const svgAnimationCardTranslate3 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardTranslate3.setAttributeNS(
        null,
        "attributeName",
        "transform"
      )
      svgAnimationCardTranslate3.setAttributeNS(null, "type", "translate")
      svgAnimationCardTranslate3.setAttributeNS(
        null,
        "from",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate3.setAttributeNS(
        null,
        "to",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate3.setAttributeNS(null, "begin", "0s")
      svgAnimationCardTranslate3.setAttributeNS(null, "dur", "2s")
      svgAnimationCardTranslate3.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardTranslate3.setAttributeNS(null, "additive", "sum")

      const svgAnimationCardRotate3 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardRotate3.setAttributeNS(null, "attributeName", "transform")
      svgAnimationCardRotate3.setAttributeNS(null, "type", "rotate")
      svgAnimationCardRotate3.setAttributeNS(null, "from", 0)
      svgAnimationCardRotate3.setAttributeNS(null, "to", 25)
      svgAnimationCardRotate3.setAttributeNS(null, "begin", "0s")
      svgAnimationCardRotate3.setAttributeNS(null, "dur", "2s")
      svgAnimationCardRotate3.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardRotate3.setAttributeNS(null, "additive", "sum")

      svgContaner.append(svg3)
      svg3.append(rect3)
      svg3.append(svgAnimationCardTranslate3)
      svg3.append(svgAnimationCardRotate3)

      const svg4 = document.createElementNS(svgNS, "svg")
      svg4.setAttributeNS(null, "width", cardWidth)
      svg4.setAttributeNS(null, "height", cardHeight)
      svg4.setAttributeNS(null, "id", "svgCard4")
      svg4.setAttributeNS(null, "style", "position:absolute")

      const rect4 = document.createElementNS(svgNS, "rect")
      rect4.setAttributeNS(null, "width", cardWidth)
      rect4.setAttributeNS(null, "height", cardHeight)
      rect4.setAttributeNS(null, "style", "fill:#f7d059")

      const svgAnimationCardTranslate4 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardTranslate4.setAttributeNS(
        null,
        "attributeName",
        "transform"
      )
      svgAnimationCardTranslate4.setAttributeNS(null, "type", "translate")
      svgAnimationCardTranslate4.setAttributeNS(
        null,
        "from",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate4.setAttributeNS(
        null,
        "to",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate4.setAttributeNS(null, "begin", "0s")
      svgAnimationCardTranslate4.setAttributeNS(null, "dur", "2s")
      svgAnimationCardTranslate4.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardTranslate4.setAttributeNS(null, "additive", "sum")

      const svgAnimationCardRotate4 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardRotate4.setAttributeNS(null, "attributeName", "transform")
      svgAnimationCardRotate4.setAttributeNS(null, "type", "rotate")
      svgAnimationCardRotate4.setAttributeNS(null, "from", 0)
      svgAnimationCardRotate4.setAttributeNS(null, "to", 25)
      svgAnimationCardRotate4.setAttributeNS(null, "begin", "0s")
      svgAnimationCardRotate4.setAttributeNS(null, "dur", "2s")
      svgAnimationCardRotate4.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardRotate4.setAttributeNS(null, "additive", "sum")

      svgContaner.append(svg4)
      svg4.append(rect4)
      svg4.append(svgAnimationCardTranslate4)
      svg4.append(svgAnimationCardRotate4)

      const svg5 = document.createElementNS(svgNS, "svg")
      svg5.setAttributeNS(null, "width", cardWidth)
      svg5.setAttributeNS(null, "height", cardHeight)
      svg5.setAttributeNS(null, "id", "svgCard5")
      svg5.setAttributeNS(null, "style", "position:absolute")

      const rect5 = document.createElementNS(svgNS, "rect")
      rect5.setAttributeNS(null, "width", cardWidth)
      rect5.setAttributeNS(null, "height", cardHeight)
      rect5.setAttributeNS(null, "style", "fill:#58e0be")

      const svgAnimationCardTranslate5 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardTranslate5.setAttributeNS(
        null,
        "attributeName",
        "transform"
      )
      svgAnimationCardTranslate5.setAttributeNS(null, "type", "translate")
      svgAnimationCardTranslate5.setAttributeNS(
        null,
        "from",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate5.setAttributeNS(
        null,
        "to",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate5.setAttributeNS(null, "begin", "0s")
      svgAnimationCardTranslate5.setAttributeNS(null, "dur", "2s")
      svgAnimationCardTranslate5.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardTranslate5.setAttributeNS(null, "additive", "sum")

      const svgAnimationCardRotate5 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardRotate5.setAttributeNS(null, "attributeName", "transform")
      svgAnimationCardRotate5.setAttributeNS(null, "type", "rotate")
      svgAnimationCardRotate5.setAttributeNS(null, "from", 0)
      svgAnimationCardRotate5.setAttributeNS(null, "to", -35)
      svgAnimationCardRotate5.setAttributeNS(null, "begin", "0s")
      svgAnimationCardRotate5.setAttributeNS(null, "dur", "2s")
      svgAnimationCardRotate5.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardRotate5.setAttributeNS(null, "additive", "sum")

      svgContaner.append(svg5)
      svg5.append(rect5)
      svg5.append(svgAnimationCardTranslate5)
      svg5.append(svgAnimationCardRotate5)

      const svg6 = document.createElementNS(svgNS, "svg")
      svg6.setAttributeNS(null, "width", cardWidth)
      svg6.setAttributeNS(null, "height", cardHeight)
      svg6.setAttributeNS(null, "id", "svgCard6")
      svg6.setAttributeNS(null, "style", "position:absolute")

      const rect6 = document.createElementNS(svgNS, "rect")
      rect6.setAttributeNS(null, "width", cardWidth)
      rect6.setAttributeNS(null, "height", cardHeight)
      rect6.setAttributeNS(null, "style", "fill:#ffe187")

      const svgAnimationCardTranslate6 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardTranslate6.setAttributeNS(
        null,
        "attributeName",
        "transform"
      )
      svgAnimationCardTranslate6.setAttributeNS(null, "type", "translate")
      svgAnimationCardTranslate6.setAttributeNS(
        null,
        "from",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate6.setAttributeNS(
        null,
        "to",
        -cardWidth / 2 + " " + "0"
      )
      svgAnimationCardTranslate6.setAttributeNS(null, "begin", "0s")
      svgAnimationCardTranslate6.setAttributeNS(null, "dur", "2s")
      svgAnimationCardTranslate6.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardTranslate6.setAttributeNS(null, "additive", "sum")

      const svgAnimationCardRotate6 = document.createElementNS(
        svgNS,
        "animateTransform"
      )
      svgAnimationCardRotate6.setAttributeNS(null, "attributeName", "transform")
      svgAnimationCardRotate6.setAttributeNS(null, "type", "rotate")
      svgAnimationCardRotate6.setAttributeNS(null, "from", 0)
      svgAnimationCardRotate6.setAttributeNS(null, "to", 10)
      svgAnimationCardRotate6.setAttributeNS(null, "begin", "0s")
      svgAnimationCardRotate6.setAttributeNS(null, "dur", "2s")
      svgAnimationCardRotate6.setAttributeNS(null, "fill", "freeze")
      svgAnimationCardRotate6.setAttributeNS(null, "additive", "sum")

      svgContaner.append(svg6)
      svg6.append(rect6)
      svg6.append(svgAnimationCardTranslate6)
      svg6.append(svgAnimationCardRotate6)
    }
    // Отображение кнопок на странице GameDifficulty
    this.showButtonsGameDifficulty = function () {
      const btnContaner = document.createElement("div")
      btnContaner.classList.add("buttons-gameDifficulty")
      contentContainer.firstElementChild.append(btnContaner)

      let buttonGameDifficultyEasy = document.createElement("a")
      buttonGameDifficultyEasy.classList.add("button-gameDifficulty")
      buttonGameDifficultyEasy.setAttribute("href", "#game")
      buttonGameDifficultyEasy.textContent = "Easy"
      buttonGameDifficultyEasy.id = "btnGameDifficultyEasy"
      btnContaner.append(buttonGameDifficultyEasy)

      let buttonGameDifficultyMedium = document.createElement("a")
      buttonGameDifficultyMedium.classList.add("button-gameDifficulty")
      buttonGameDifficultyMedium.setAttribute("href", "#game")
      buttonGameDifficultyMedium.textContent = "Medium"
      buttonGameDifficultyMedium.id = "btnGameDifficultyMedium"
      btnContaner.append(buttonGameDifficultyMedium)

      let buttonGameDifficultyHard = document.createElement("a")
      buttonGameDifficultyHard.classList.add("button-gameDifficulty")
      buttonGameDifficultyHard.setAttribute("href", "#game")
      buttonGameDifficultyHard.textContent = "Hard"
      buttonGameDifficultyHard.id = "btnGameDifficultyHard"
      btnContaner.append(buttonGameDifficultyHard)
    }
    //Отображение основных характеристик (жизни, счет, текущий и общеее количество вопросов)на странице игры
    this.showGameAttributes = function () {
      let gameContainer = document.createElement("div")
      gameContainer.classList.add("game-container")
      contentContainer.firstElementChild.append(gameContainer)

      let attributesContainer = document.createElement("div")
      attributesContainer.classList.add("attributes-container")
      gameContainer.append(attributesContainer)

      let gameQuestionNumbers = document.createElement("div")
      gameQuestionNumbers.classList.add("game-question-numbers")
      attributesContainer.append(gameQuestionNumbers)
      gameQuestionNumbers.innerHTML = `
        <span id="gameQuestionNumberCurrent"></span>
        <span>/</span>
        <span id="gameQuestionNumberTotal"></span>`

      let gameScore = document.createElement("div")
      gameScore.classList.add("game-score")
      attributesContainer.append(gameScore)
      gameScore.innerHTML = `
        <span>Score:</span>
        <span id="gameScoreNumber"></span>`

      let gameTime = document.createElement("div")
      gameTime.classList.add("game-time")
      attributesContainer.append(gameTime)
      gameTime.innerHTML = `
        <span id="gameTimeNumbers"></span>`

      let gameLife = document.createElement("div")
      gameLife.classList.add("game-life")
      attributesContainer.append(gameLife)
      gameLife.innerHTML = `
        <span id="gameLifeNumber"></span>
        <span>x</span>`

      let gameLifeSvgContainer = document.createElement("div")
      gameLifeSvgContainer.classList.add("game-life-svg")
      gameLife.append(gameLifeSvgContainer)
      gameLifeSvgContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"viewBox="0 0 13.066 13.066" class="svg-heart" id="svg-heart">
            <path style="fill:#f55b5b;" d="M6.555,12.558c-0.098,0-0.195-0.034-0.273-0.103c-0.233-0.2-5.718-4.954-6.199-7.885
                       C-0.133,3.243,0.071,2.201,0.69,1.474C1.22,0.85,2.034,0.507,2.982,0.507c0.082,0,0.165,0.002,0.247,0.008
                       c0.058-0.003,0.115-0.004,0.172-0.004c1.048,0,2.343,0.461,3.109,2.421c0.43-1.196,1.311-2.417,3.328-2.417
                       c1.135,0,2.023,0.342,2.571,0.987c0.597,0.701,0.787,1.733,0.569,3.068c-0.479,2.929-5.918,7.684-6.149,7.884
                       C6.751,12.524,6.653,12.558,6.555,12.558z"/>
        </svg>`

      let question = document.createElement("h1")
      question.textContent = "Which country has this flag?"
      gameContainer.append(question)

      let divLoader = document.createElement("div")
      divLoader.classList.add("loading")
      gameContainer.append(divLoader)

      let questionContainer = document.createElement("div")
      questionContainer.classList.add("game-question")
      gameContainer.append(questionContainer)

      let flagContainer = document.createElement("div")
      flagContainer.classList.add("game-question__flag")
      questionContainer.append(flagContainer)

      let questionAnswersContainer = document.createElement("div")
      questionAnswersContainer.classList.add("game-answers")
      gameContainer.append(questionAnswersContainer)

      let buttonsGameContainer = document.createElement("div")
      buttonsGameContainer.classList.add("buttons-game-container")
      gameContainer.append(buttonsGameContainer)

      let buttonGameNext = document.createElement("button")
      buttonGameNext.classList.add("button-game__next", "disabled")
      buttonGameNext.id = "buttonGameNext"
      buttonGameNext.disabled = "true"
      buttonGameNext.textContent = "Next flag"
      buttonsGameContainer.append(buttonGameNext)
    }
    // Открытие модального окна exit
    this.showModal = function () {
      let modal = myModuleContainer.querySelector(".modal")
      let modalOverlay = myModuleContainer.querySelector(".modal-overlay")
      modal.classList.remove("modal_closed")
      modalOverlay.classList.remove("modal_closed")
    }
    //Закрытие модального окна exit
    this.closeModal = function () {
      let modal = myModuleContainer.querySelector(".modal")
      let modalOverlay = myModuleContainer.querySelector(".modal-overlay")
      modal.classList.add("modal_closed")
      modalOverlay.classList.add("modal_closed")
    }
    // Закрытие приложения при нажатии Да на вопрос: Вы действительно хотите покинуть игру?
    this.closeApp = function () {
      document.getElementsByTagName("html")[0].remove()
    }
    // Открытие модального окна  кнопка назад
    this.showModalBack = function () {
      let modal = myModuleContainer.querySelector(".modal-back")
      let modalOverlay = myModuleContainer.querySelector(".modal-overlay")
      modal.classList.remove("modal_closed")
      modalOverlay.classList.remove("modal_closed")
    }
    //Закрытие модального окна кнопка назад
    this.closeModalBack = function () {
      let modal = myModuleContainer.querySelector(".modal-back")
      let modalOverlay = myModuleContainer.querySelector(".modal-overlay")
      modal.classList.add("modal_closed")
      modalOverlay.classList.add("modal_closed")
    }
    // При нажатии на кнопку назад переход на предыдущую страницу без модального окна(кроме страниц Practise и  игры)
    this.modalGoBack = function () {
      window.history.back()
    }

    // Вывод полученных данных (флаг, страна, столица) по API в разделе Learn
    this.showDataLearn = function (dataSort) {
      if (
        contentContainer.getElementsByClassName("learn-data-container").length
      ) {
        contentContainer
          .querySelector(".learn-content")
          .removeChild(contentContainer.querySelector(".learn-data-container"))
      }

      let divContaner = document.createElement("div")
      divContaner.classList.add("learn-data-container")
      contentContainer.firstElementChild.append(divContaner)

      for (let i = 0; i < dataSort.length; i++) {
        let dataWrapper = document.createElement("div")
        dataWrapper.classList.add("learn-data")
        divContaner.append(dataWrapper)

        let imgFlag = document.createElement("div")
        imgFlag.classList.add("learn-data__flag")
        dataWrapper.append(imgFlag)
        imgFlag.innerHTML = `<img src=${dataSort[i].flags.svg}>`

        let countryCapitalWrapper = document.createElement("div")
        countryCapitalWrapper.classList.add("learn-data__wrapper-inner")
        dataWrapper.append(countryCapitalWrapper)

        let flagCountry = document.createElement("div")
        flagCountry.classList.add("learn-data__country")
        countryCapitalWrapper.append(flagCountry)
        flagCountry.textContent = `${dataSort[i].name.common}`

        let flagCapital = document.createElement("div")
        flagCapital.classList.add("learn-data__capital")
        countryCapitalWrapper.append(flagCapital)

        if (typeof dataSort[i].capital !== "undefined") {
          flagCapital.textContent = `${dataSort[i].capital}`
        }
      }
    }
    //Отображать активной кнопку выбранной категории на странице Learn
    this.showActiveBtn = function (valueId) {
      let activeBtnPrevious = contentContainer.querySelector(".active-btn")
      activeBtnPrevious.classList.remove("active-btn")

      let activeBtnCurrent = contentContainer.querySelector("#" + valueId)
      activeBtnCurrent.classList.add("active-btn")
    }
    // Добавление переворачивающейся карточки в разделе Practise
    this.addFlippedCard = function () {
      let divContaner = document.createElement("div")
      divContaner.classList.add("card-container")
      contentContainer.firstElementChild.append(divContaner)

      let card = document.createElement("div")
      card.classList.add("card")
      divContaner.append(card)

      let cardFront = document.createElement("div")
      cardFront.classList.add("card__front")
      card.append(cardFront)

      let cardFrontFlagWrapper = document.createElement("div")
      cardFrontFlagWrapper.classList.add("card__front-flag-wrapper")
      cardFront.append(cardFrontFlagWrapper)

      let cardBack = document.createElement("div")
      cardBack.classList.add("card__back")
      card.append(cardBack)

      let cardBackCountry = document.createElement("p")
      cardBackCountry.classList.add("card__back-country")
      cardBack.append(cardBackCountry)

      let cardBackCapital = document.createElement("p")
      cardBackCapital.classList.add("card__back-capital")
      cardBack.append(cardBackCapital)

      let btnContaner = document.createElement("div")
      btnContaner.classList.add("button-container-practise")
      divContaner.append(btnContaner)
      btnContaner.innerHTML = `<i class="fa-solid fa-circle-right" id="buttonNextPractise"></i>`

      let numbersContainerFront = document.createElement("div")
      numbersContainerFront.classList.add("numbers-container-practise")
      cardFront.append(numbersContainerFront)

      numbersContainerFront.innerHTML = `<span id="numberCurrentPractiseFront"></span><span>/</span>
          <span id="numberTotalPractiseFront"></span>`

      let numbersContainerBack = document.createElement("div")
      numbersContainerBack.classList.add("numbers-container-practise")
      cardBack.append(numbersContainerBack)

      numbersContainerBack.innerHTML = `<span id="numberCurrentPractiseBack"></span><span>/</span>
          <span id="numberTotalPractiseBack"></span>`
    }

    // Добавление информации на обе стороны переворачивающейся карточки в разделе Practise
    this.showDataCardPractise = function (item) {
      let cardFront = contentContainer.querySelector(
        ".card__front-flag-wrapper"
      )
      cardFront.innerHTML = `<img src=${item.flags.svg}>`

      let cardBackCountry = contentContainer.querySelector(
        ".card__back-country"
      )
      cardBackCountry.textContent = `${item.name.common}`

      let cardBackCapital = contentContainer.querySelector(
        ".card__back-capital"
      )

      if (typeof item.capital !== "undefined") {
        cardBackCapital.textContent = `${item.capital}`
      }
    }
    // При нажатии на кнопку назад переход на предыдущую страницу, если в модальном окне подтвердили, что хотят вернуться назад
    this.showPageBack = function () {
      window.history.back()
    }

    // Переворачивание карточки в разделе Practise
    this.flipCard = function () {
      let cardFront = contentContainer.querySelector(".card__front")
      cardFront.classList.toggle("flip-front")
      let cardBack = contentContainer.querySelector(".card__back")
      cardBack.classList.toggle("flip-back")
    }

    // Когда карточки в категории заканчиваются, отобращается на одной стороне текст, на другой svg (страница Practise)
    this.showPractiseEnd = function () {
      let cardFront = contentContainer.querySelector(
        ".card__front-flag-wrapper"
      )
      cardFront.innerHTML =
        "Congratulations!</br>You have learned all the cards in the chosen category!"

      let cardBackCountry = contentContainer.querySelector(
        ".card__back-country"
      )
      cardBackCountry.innerHTML = `<svg id="cardCongrats" class="card-congrats" width="80px" height="80px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path fill="#f7b600" d="M2 61l8.6-3l-6.5-3z"></path>
          <path fill="#ffdd7d" d="M26.9 36.4L14.8 24.2l-2 5.6z"></path>
          <path fill="#f7b600" d="M12.8 29.8l-2.2 6.3l26.8 12.5l1.3-.4l-11.8-11.8z"></path>
          <path fill="#ffdd7d" d="M8.5 42.4l20 9.3l8.9-3.1l-26.8-12.5z"></path>
          <path fill="#f7b600" d="M6.3 48.7l13.2 6.2l9-3.2l-20-9.3z"></path>
          <path fill="#ffdd7d" d="M6.3 48.7L4.1 55l6.5 3l8.9-3.1z"></path>
          <path d="M31.9 31.2c6.7 6.6 10.2 14 7.8 16.4c-2.5 2.4-9.9-1-16.7-7.7c-6.7-6.6-10.2-14-7.8-16.4c2.5-2.4 9.9 1.1 16.7 7.7" fill="#493816"></path>
          <path d="M23.5 14.5c-1.6-2.3.1-3.3 2.3-2.9c-2.1-2.5-.8-4.3 2.5-3.6c1 .2-.4 1.9-1.3 1.9c2.7 2 1.2 4.2-1.7 3.7c2.6 3.5-1.8 2.6-3.8 2.8C21 19 24 22 23 22c-2.2 0-5.8-8.3.5-7.5" fill="#42ade2"></path>
          <path d="M44.5 19.3c-1.5.7-5.7-5.9-.5-6c-3-2.7-2.6-4 1.4-4.1c-4.6-4.6 2.7-6.2 3.4-3.8c.2.7-2.2-.6-3 .7c-.9 1.5 5.6 5.4-1.1 5.1c2.5 2.5 2.6 3.7-1.3 4.1c.5.8 2.1 3.6 1.1 4" fill="#ff8736"></path>
          <path d="M46.2 34.9l1.5-1.3s1.4 2.1 2.4 2.9c.8-3.6.6-5.7 4.7-3.3c-2.3-6.2 1.5-3.9 5.2-2.2c-.2-1.6 0-1.4 1.6-1.9c1.4 5.3-2.4 3.7-5.4 2c1.8 4.8-.1 4.5-3.9 2.9c-.1 2-.7 4.3-1.9 4.5c-1.4.4-4.2-3.6-4.2-3.6" fill="#ed4c5c"></path>
          <path d="M35 20.1c-1.8 2.4-4.7 3.7-6.8 5.8c-2.2 2.2-3.5 8.2-3.5 8.2s.8-6.3 2.9-8.7c1.9-2.2 4.7-3.8 6.2-6.3c2.6-4.6.2-10.6-3.2-14.1c.7-.6 1.7-1.4 2.2-2c3.3 4.1 6.1 12 2.2 17.1" fill="#c28fef"></path>
          <path d="M38.1 25.2c-2.6 1.9-4.5 4.7-6.3 7.3c-1.6 2.3-6.7 5.2-6.7 5.2s4.8-3.3 6.3-5.7c1.8-3 3.6-6.1 6.4-8.3c5.6-4.3 13.7-3.9 20-1.6c-.4.9-1.1 2.8-1.1 2.8s-13.3-3.6-18.6.3" fill="#ff8736"></path>
          <g fill="#42ade2">
            <path d="M49.2 24.7c-1.7 2.2-2.5 4.9-3.8 7.4c-1.2 2.3-2.8 4.5-5.1 5.7c-2.6 1.3-8.3.9-8.3.9s5.7-.1 8.1-1.7c2.4-1.6 3.7-4.4 4.6-7c1.8-5 4-10.4 9.2-12.6c.3.9 1 2.8 1 2.8s-2.9.8-5.7 4.5"></path>
            <path d="M3.21 14.325l2.828-2.829l2.829 2.828l-2.828 2.83z"></path>
          </g>
          <path fill="#ff8736" d="M7.173 23.197L10 20.369l2.828 2.828L10 26.025z"></path>
          <path fill="#ed4c5c" d="M14.358 9.822l2.828-2.828l2.828 2.828l-2.828 2.828z"></path>
          <path fill="#c28fef" d="M45.205 43.696l2.828-2.829l2.828 2.829l-2.828 2.828z"></path>
          <path fill="#ed4c5c" d="M38.903 53.39l2.828-2.828l2.829 2.829l-2.829 2.828z"></path>
          <path fill="#ff8736" d="M51.279 55.607l2.828-2.829l2.828 2.829l-2.828 2.828z"></path>
          <g fill="#42ade2">
            <path d="M54.078 42.731l2.828-2.828l2.828 2.828l-2.828 2.829z"></path>
            <path d="M49.356 12.823l2.828-2.829l2.829 2.829l-2.828 2.828z"></path>
          </g>
          <path fill="#ed4c5c" d="M19.044 29.792l2.829-2.828l2.828 2.828l-2.828 2.829z"></path>
          </svg>`

      let cardBackCapital = contentContainer.querySelector(
        ".card__back-capital"
      )
      cardBackCapital.textContent = ""
    }
    // Отображение общего количества карточек
    this.showNumberPractiseAll = function (numberAll) {
      let numberPractiseFrontAll = contentContainer.querySelector(
        "#numberTotalPractiseFront"
      )
      numberPractiseFrontAll.textContent = numberAll

      let numberPractiseBackAll = contentContainer.querySelector(
        "#numberTotalPractiseBack"
      )
      numberPractiseBackAll.textContent = numberAll
    }
    // Отображение текущего номера карточки
    this.showNumberPractiseCurrent = function (numberCurrent) {
      let numberPractiseFrontCurrent = contentContainer.querySelector(
        "#numberCurrentPractiseFront"
      )
      numberPractiseFrontCurrent.textContent = numberCurrent

      let numberPractiseBackCurrent = contentContainer.querySelector(
        "#numberCurrentPractiseBack"
      )
      numberPractiseBackCurrent.textContent = numberCurrent
    }
    //Раздел игры: отображение основных характеристик
    this.showGameStart = function (
      gameLifes,
      gameQuestionCurrent,
      gameQuestionsTotal,
      gameScore
    ) {
      let gameLifesContainer = contentContainer.querySelector("#gameLifeNumber")
      gameLifesContainer.textContent = gameLifes

      let gameQuestionCurrentContainer = contentContainer.querySelector(
        "#gameQuestionNumberCurrent"
      )
      gameQuestionCurrentContainer.textContent = gameQuestionCurrent

      let gameQuestionsTotalContainer = contentContainer.querySelector(
        "#gameQuestionNumberTotal"
      )
      gameQuestionsTotalContainer.textContent = gameQuestionsTotal

      let gameScoreContainer =
        contentContainer.querySelector("#gameScoreNumber")
      gameScoreContainer.textContent = gameScore
    }
    // Раздел игры: отображение рандомного флага с вариантами ответов
    this.showRandomQuestionWithAnswers = function (
      randomArrayElement,
      answers
    ) {
      let disabledButton = contentContainer.querySelector("#buttonGameNext")
      disabledButton.disabled = true
      disabledButton.classList.add("disabled")

      let questionAnswersContainer =
        contentContainer.querySelector(".game-answers")

      while (questionAnswersContainer.firstChild) {
        questionAnswersContainer.firstChild.remove()
      }

      let questionAnswer1 = document.createElement("button")
      questionAnswer1.classList.add("game-answer")
      questionAnswer1.id = "gameAnswer1"
      questionAnswersContainer.append(questionAnswer1)

      let questionAnswer2 = document.createElement("button")
      questionAnswer2.classList.add("game-answer")
      questionAnswer2.id = "gameAnswer2"
      questionAnswersContainer.append(questionAnswer2)

      let questionAnswer3 = document.createElement("button")
      questionAnswer3.classList.add("game-answer")
      questionAnswer3.id = "gameAnswer3"
      questionAnswersContainer.append(questionAnswer3)

      let questionAnswer4 = document.createElement("button")
      questionAnswer4.classList.add("game-answer")
      questionAnswer4.id = "gameAnswer4"
      questionAnswersContainer.append(questionAnswer4)

      let allAnswers = contentContainer.querySelectorAll(".game-answer")
      for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].removeAttribute("disabled")
      }

      let gameQuestionFlag = contentContainer.querySelector(
        ".game-question__flag"
      )
      gameQuestionFlag.innerHTML = `<img src=${randomArrayElement.flags.svg}>`

      for (let i = 1; i < 5; i++) {
        let answerId = "#gameAnswer" + i
        let gameAnswer = contentContainer.querySelector(answerId)
        gameAnswer.textContent = `${answers[i - 1]}`
      }
    }
    //Раздел игры: проверка правильного ответа (появляется boxShadow красный или зеленый)
    this.checkSelectedAnswer = function (correctAnswer, targetId) {
      let allAnswers = contentContainer.querySelectorAll(".game-answer")

      for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].setAttribute("disabled", "true")
      }
      let targetElement = contentContainer.querySelector("#" + targetId)
      let gameScore = contentContainer.querySelector("#gameScoreNumber")
      let gameLifes = contentContainer.querySelector("#gameLifeNumber")

      if (correctAnswer == targetElement.textContent) {
        this.playAudioCorrectAnswer()
        targetElement.style.boxShadow = "inset 0 0 0 3px #2d955b"
        if (gameScore.textContent == 0) {
          gameScore.textContent = 1
        } else {
          gameScore.textContent = parseInt(gameScore.textContent) + 1
        }
      } else {
        this.playAudioWrongAnswer()
        targetElement.style.boxShadow = "inset 0 0 0 3px #d95233"
        this.gameShowCorrectAnswer(correctAnswer)
        gameLifes.textContent -= 1
        if (gameLifes.textContent == 0) {
          this.showGameEndNoLifes()
        }
      }
    }
    //Раздел игры: если был выбран неверный ответ, то показывается верный (появляется boxShadow зеленый)
    this.gameShowCorrectAnswer = function (correctAnswer) {
      setTimeout(showCorrectAnswer, 100)
      function showCorrectAnswer() {
        for (let i = 1; i < 5; i++) {
          if (
            contentContainer.querySelector("#gameAnswer" + i).textContent ==
            correctAnswer
          ) {
            contentContainer.querySelector("#gameAnswer" + i).style.boxShadow =
              "inset 0 0 0 3px #2d955b"
          }
        }
      }
    }
    // Раздел игры: если закончились жизни, то появлется следующее сообщение
    this.showGameEndNoLifes = function () {
      let gameContentContainer = contentContainer.querySelector(".game-content")
      contentContainer.querySelector(".game-container").style.display = "none"

      let gameEndLifesButton = document.createElement("div")
      gameEndLifesButton.classList.add("game-end-lifes__button")
      gameContentContainer.prepend(gameEndLifesButton)

      let gameEndLifesText = document.createElement("div")
      gameEndLifesText.classList.add("game-end-lifes__text")
      gameContentContainer.prepend(gameEndLifesText)
      gameEndLifesText.textContent =
        "You have lost all your lifes... Game over!"

      let gameEndLifesButtonNewGame = document.createElement("a")
      gameEndLifesButtonNewGame.id = "gameEndLifesButtonMenu"
      gameEndLifesButtonNewGame.classList.add("game-end-lifes__button-menu")
      gameEndLifesButtonNewGame.setAttribute("href", "#")
      gameEndLifesButtonNewGame.textContent = "Go to the main menu"
      gameEndLifesButton.append(gameEndLifesButtonNewGame)
    }
    // Раздел игры: звуковой сигнал, если ответ верный
    this.playAudioCorrectAnswer = function () {
      let audioCorrectSound = document.createElement("AUDIO")
      audioCorrectSound.innerHTML = `<source src="../assets/correct-answer.mp3" type="audio/mp3">`
      audioCorrectSound.play()
    }
    // Раздел игры: звуковой сигнал, если ответ неверный
    this.playAudioWrongAnswer = function () {
      let audioWrongSound = document.createElement("AUDIO")
      audioWrongSound.innerHTML = `<source src="../assets/wrong-answer.mp3" type="audio/mp3">`
      audioWrongSound.play()
    }
    // Раздел игры: изменение номера текушего вопроса
    this.changeQuestionCurrentNumber = function (gameQuestionCurrent) {
      let questionCurrent = contentContainer.querySelector(
        "#gameQuestionNumberCurrent"
      )
      questionCurrent.textContent = gameQuestionCurrent
    }
    // Раздел игры: если вопросы закончились раньше, чем жизни, появляется следующее сообщение
    this.showEndGameAllQuestions = function () {
      let gameContentContainer = contentContainer.querySelector(".game-content")
      contentContainer.querySelector(".game-container").style.display = "none"

      let gameScoreTotal = contentContainer.querySelector("#gameScoreNumber")

      let gameEndQuestions = document.createElement("div")
      gameEndQuestions.classList.add("game-end-questions__button")
      gameContentContainer.prepend(gameEndQuestions)

      let gameEndQuestionsText = document.createElement("div")
      gameEndQuestionsText.classList.add("game-end-questions__text")
      gameContentContainer.prepend(gameEndQuestionsText)
      gameEndQuestionsText.textContent =
        "Congratulations! You have passed all the questions. Your score is  " +
        gameScoreTotal.textContent +
        "!"

      let gameEndQuestionsButtonNewGame = document.createElement("a")
      gameEndQuestionsButtonNewGame.id = "gameEndQuestionsButtonMenu"
      gameEndQuestionsButtonNewGame.classList.add(
        "game-end-questions__button-menu"
      )
      gameEndQuestionsButtonNewGame.setAttribute("href", "#")
      gameEndQuestionsButtonNewGame.textContent = "Go to the main menu"
      gameEndQuestions.append(gameEndQuestionsButtonNewGame)
    }
    //Раздел игры: при переходе к новому вопросу делать кнопку disabled
    this.activatedDisabledButton = function () {
      let disabledButton = contentContainer.querySelector("#buttonGameNext")
      disabledButton.disabled = false
      disabledButton.classList.remove("disabled")
    }
    // При загрузке данных по API: когда все загружено, скрыть Loader
    this.hideLoading = function () {
      let gameLoading = contentContainer.querySelector(".loading")
      gameLoading.classList.remove("display")
    }
    // При загрузке данных по API: когда данные не загружены, показать Loader
    this.showLoading = function () {
      let gameLoading = contentContainer.querySelector(".loading")
      gameLoading.classList.add("display")
    }
    // бесконечная svg анимация на странице How to play (маршрут)
    this.showSvgAnimatedPath = function () {
      const svgContaner = document.createElement("div")
      svgContaner.classList.add("svg-animated-path-container")
      contentContainer.firstElementChild.append(svgContaner)

      const svgNS = "http://www.w3.org/2000/svg"

      const svgAnimatedPath = document.createElementNS(svgNS, "svg")
      svgAnimatedPath.setAttributeNS(null, "width", 600)
      svgAnimatedPath.setAttributeNS(null, "height", 200)
      svgAnimatedPath.setAttributeNS(null, "id", "svgAnimatedPath")
      svgAnimatedPath.setAttributeNS(null, "viewBox", "0 0 600 200")
      svgAnimatedPath.setAttributeNS(null, "class", "svg-animated-path")

      svgAnimatedPath.innerHTML = `
          <path d="M31,102 C216,196 294,4 555,123"  stroke="black" stroke-dasharray="10 20"  fill="transparent" stroke-linecap="round" stroke-width="5">
            <animate id="animationPath" attributeName="stroke-dashoffset" from="0" to="600" dur="7s"  calcMode="linear" repeatCount="indefinite"/>
          </path>
          <circle cx="20" cy="95" r="0" fill="#FFD630" stroke="black" >
            <animate begin="animationPath.begin" attributeName="r" from="0" to="10" dur="4s" fill="freeze"></animate>
          </circle>
          <circle cx="200" cy="120" r="0" fill="#FFD630" stroke="black">
            <animate begin="animationPath.begin + 2s" attributeName="r" from="0" to="10" dur="4s" fill="freeze"></animate>
          </circle>
          <circle cx="400" cy="83" r="0" fill="#FFD630" stroke="black">
            <animate begin="animationPath.begin + 4s" attributeName="r" from="0" to="10" dur="4s" fill="freeze"></animate>
          </circle>
          <polygon points="540,140 555,100 580,130" fill="#FFD630" stroke="black" stroke-width="3">
            <animate begin="animationPath.end" ></animate>
          </polygon>`
      svgContaner.append(svgAnimatedPath)
    }
    // Раздел New Player: верстка формы регистрации и формы Log in (дефолтно отображается Log in)
    this.showLoginForm = function () {
      if (contentContainer.querySelector(".greeting-container")) {
        contentContainer.querySelector(".greeting-container").remove()
      }
      let loginFormContaner = document.createElement("div")
      loginFormContaner.classList.add("form__wrapper")
      contentContainer.firstElementChild.append(loginFormContaner)
      loginFormContaner.innerHTML = `
            <div class="form__content">
                <h2 class="form__heading login">Log into your account</h2>
                <h2 class="form__heading register" hidden>Create account</h2>
                <form class="form">
                    <fieldset class="form__fieldset">
                        <label for="formEmail">E-mail</label>
                        <input id="formEmail" type="email" name="form-email" class="form-input">
                        <label for="formPassword">Password</label>
                        <input id="formPassword" type="password" name="form-password" class="form-input">
                        <input type="submit" class="form-submit-login" value="Log In">
						<input type="submit" class="form-submit-register" value="Register" hidden>
                    </fieldset>
                </form>
				
                <p class="form__account login">
                    Don't have an account?
                    <span id="formRegister" class="form-register">Register</span>
                </p>
                <p class="form__account register" hidden>
                    Already have an account?
                    <span id="formLogIn" class="form-register">Log in</span>
                </p>
            </div>
			<div id="formError"></div>
          `
    }
    // Раздел New Player: отобразить форму регистрации
    this.showFormRegister = function () {
      contentContainer.querySelector(".form__heading.register").hidden = false
      contentContainer.querySelector(".form__heading.login").hidden = true
      contentContainer.querySelector(".form__account.register").hidden = false
      contentContainer.querySelector(".form__account.login").hidden = true
      contentContainer.querySelector(".form-submit-login").hidden = true
      contentContainer.querySelector(".form-submit-register").hidden = false
    }
    // Раздел New Player: отобразить форму Log in
    this.showFormLogIn = function () {
      contentContainer.querySelector(".form__heading.register").hidden = true
      contentContainer.querySelector(".form__heading.login").hidden = false
      contentContainer.querySelector(".form__account.register").hidden = true
      contentContainer.querySelector(".form__account.login").hidden = false
      contentContainer.querySelector(".form-submit-login").hidden = false
      contentContainer.querySelector(".form-submit-register").hidden = true
    }

    // Раздел New Player: если удалось залогиниться или создать аккаунт, то появляется приветствие
    this.hideFormAndShowGreeting = function () {
      contentContainer.querySelector(".form__wrapper").remove()

      let greetingContainer = document.createElement("div")
      greetingContainer.classList.add("greeting-container")
      contentContainer.firstElementChild.append(greetingContainer)
      greetingContainer.innerHTML = `
          <button id="logoutBtn" class="button-logout">Log out</button>
            <h1 class="title">Hello from Flaggy!</h1>
            <div id="playerAdd"></div>
            `
      this.addPlayerForm()
    }
    //Раздел New Player: отобращение полей для добавления игрока
    this.addPlayerForm = function () {
      let playerAdd = contentContainer.querySelector("#playerAdd")

      playerAdd.innerHTML = `
          <div class="player-container">
            <div class="player-fields">
              <input type="text" class="player-input" id="newPlayerName" name="playername" placeholder="Enter your Name" required>
              <input type="email" class="player-input" id="newPlayerEmail" placeholder="Enter your Email" name="playeremail" required>
              <button class="player-button" id="playerAddBtn">Add new Player</button>
          </div>
        `
    }
    //Раздел New Player: отображение списка игроков
    this.printUser = function (userListData) {
      let greetContainer = contentContainer.querySelector(".greeting-container")

      if (!contentContainer.querySelector("#userList")) {
        let userContainer = document.createElement("div")
        userContainer.classList.add("user-list")
        userContainer.id = "userList"
        greetContainer.append(userContainer)
      }

      let userList = contentContainer.querySelector("#userList")

      userList.innerHTML = `
          <h3 class="title">List of Users:</h3>
          <div id="userListContainer" class="user-list-container">
              <div class="user__headline">User</div>
              <div class="email__headline">Email</div>
              <div class="delete__headline">Delete</div>
          </div>
          `
      if (!userListData) {
        userList.remove()
      }

      for (let user in userListData) {
        let userLine = contentContainer.querySelector("#userListContainer")
        userLine.innerHTML += `
              <div>${userListData[user].username}</div>
              <div>${userListData[user].email}</div>
              <div data-id=${user} class="delete-user">
                <i class="fa-solid fa-circle-xmark"></i>
              </div>
            `
      }
    }
    this.hideForm = function () {
      this.showLoginForm()
    }
    //Раздел New Player: ошибка
    this.showNoUserFound = function () {
      let formError = contentContainer.querySelector("#formError")
      formError.innerHTML = `No user was logged in.`
    }
    //Раздел New Player: ошибка
    this.loginErrorWrong = function () {
      let formError = contentContainer.querySelector("#formError")
      formError.innerHTML = `Wrong Email or Password. Please try again.`
    }
    //Раздел New Player: ошибка
    this.loginErrorEmpty = function () {
      let formError = contentContainer.querySelector("#formError")
      formError.innerHTML = `Empty Email or Password. Please try again.`
    }
    //Раздел New Player: ошибка
    this.showUserExists = function () {
      let formError = contentContainer.querySelector("#formError")
      formError.innerHTML = `The email address is already in use by another account.`
    }
  }
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function ModuleModel() {
    let myModuleView = null

    this.init = function (view) {
      myModuleView = view
    }

    this.updateState = function (pageName) {
      myModuleView.renderContent(pageName)
    }
    this.goBack = function () {
      myModuleView.showPageBack()
    }
    this.flipCard = function () {
      myModuleView.flipCard()
    }
    this.openModal = function () {
      myModuleView.showModal()
    }
    this.closeModal = function () {
      myModuleView.closeModal()
    }
    this.closeApp = function () {
      myModuleView.closeApp()
    }
    this.addActiveBtn = function (valueId) {
      myModuleView.showActiveBtn(valueId)
    }
    this.openModalBack = function () {
      myModuleView.showModalBack()
    }
    this.closeModalBack = function () {
      myModuleView.closeModalBack()
    }
    this.modalGoBack = function () {
      myModuleView.modalGoBack()
    }

    // Раздел Learn: Получение данных по API(в зависимости от option(региона)) и сортировка их в алфавитном порядке (раздел Learn)
    this.getDataLearn = function (option) {
      myModuleView.showLoading()
      fetch("https://restcountries.com/v3.1/" + option)
        .then((response) => response.json())
        .then((data) => {
          myModuleView.hideLoading()
          let dataSort = data.sort((a, b) =>
            a.name.common > b.name.common ? 1 : -1
          )
          myModuleView.showDataLearn(dataSort)
        })
        .catch((error) =>
          console.log("Ошибка получения данных. Причина: " + error)
        )
    }

    // Раздел Practise: Получение данных по API(в зависимости от option(региона)) и замешивание их в рандомном порядке (раздел Practise)
    this.getDataPractiseCategory = function (option) {
      myModuleView.showLoading()
      fetch("https://restcountries.com/v3.1/" + option)
        .then((response) => response.json())
        .then((data) => {
          myModuleView.hideLoading()
          let inputArray = data
          let shuffle = function (arr) {
            for (let i = arr.length - 1; i > 0; i--) {
              let current = arr[i]
              let random = Math.floor(Math.random() * (i + 1))

              arr[i] = arr[random]
              arr[random] = current
            }
            return arr
          }
          let dataShuffled = shuffle(inputArray)
          this.saveDataPractise(dataShuffled)
        })
        .catch((error) =>
          console.log("Ошибка получения данных. Причина: " + error)
        )
    }

    //Раздел Practise: Сохранение данных(массив и его длина) полученных по API в БД (раздел Practise)
    this.saveDataPractise = function (dataShuffled) {
      let array = dataShuffled
      let numberAll = array.length
      myModuleView.showNumberPractiseAll(numberAll)

      //Добавление в БД
      myAppDB
        .ref("arrayAllPractise/")
        .set({
          array: `${JSON.stringify(array)}`,
        })
        .then(function () {
          console.log("Array was added to database")
        })
        .catch(function (error) {
          console.error("Error with adding array to database: ", error)
        })

      //Добавление в БД
      myAppDB
        .ref("arrayTotalNumberPractise/")
        .set({
          arrayNumber: `${JSON.stringify(array.length)}`,
        })
        .then(function () {
          console.log("Array's length was added to database")
        })
        .catch(function (error) {
          console.error("Error with adding array's length to database: ", error)
        })

      this.getDataCardPractise()
    }

    //Получение сохр массива из БД для карточки (раздел Practise)
    this.getDataCardPractise = function () {
      let arrTotal = myAppDB.ref()
      arrTotal
        .child("arrayAllPractise")
        .child("array")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            let array = JSON.parse(snapshot.val())
            this.getArrayLength(array)
          } else {
            console.log("No data available")
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
    //Получение сохр длины массива из БД для карточки (раздел Practise)
    this.getArrayLength = function (array) {
      let arrayAll = array

      let arrLength = myAppDB.ref()
      arrLength
        .child("arrayTotalNumberPractise")
        .child("arrayNumber")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            let arrayTotalLength = JSON.parse(snapshot.val())
            this.workWithDataForCards(arrayAll, arrayTotalLength)
          } else {
            console.log("No data available")
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }

    // Нахождение текущего номера карточки, отправка данных текущей карточки во View (первый элемент массива),
    // и обновление массива в БД (без первого элемента) (раздел Practise)
    this.workWithDataForCards = function (arrayAll, arrayTotalLength) {
      let numberCurrent = arrayTotalLength - arrayAll.length + 1
      if (numberCurrent > arrayTotalLength) {
        numberCurrent = arrayTotalLength
      }
      myModuleView.showNumberPractiseCurrent(numberCurrent)
      let item = arrayAll.shift()

      myAppDB
        .ref("arrayAllPractise/")
        .set({
          array: `${JSON.stringify(arrayAll)}`,
        })
        .then(function () {
          console.log("Data was updated")
        })
        .catch(function (error) {
          console.error("Update Error: ", error)
        })

      if (typeof item !== "undefined") {
        myModuleView.showDataCardPractise(item)
      } else {
        myModuleView.showPractiseEnd()
      }
    }

    //Настройка уровня игры Easy (Раздел Play)
    this.startEasyGame = function () {
      myModuleView.renderContent("game")
      let gameLifes = 5
      let gameQuestionCurrent = 1
      let gameQuestionsTotal = 5
      let gameScore = 0

      this.addToDBGameQuestionsTotalNumber(gameQuestionsTotal)
      this.addToDBGameQuestionCurrentNumber(gameQuestionCurrent)

      myModuleView.showGameStart(
        gameLifes,
        gameQuestionCurrent,
        gameQuestionsTotal,
        gameScore
      )
      this.generateGameQuestionWithAnswers()
    }
    //Настройка уровня игры Medium (Раздел Play)
    this.startMediumGame = function () {
      myModuleView.renderContent("game")
      let gameLifes = 3
      let gameQuestionCurrent = 1
      let gameQuestionsTotal = 7
      let gameScore = 0

      this.addToDBGameQuestionsTotalNumber(gameQuestionsTotal)
      this.addToDBGameQuestionCurrentNumber(gameQuestionCurrent)

      myModuleView.showGameStart(
        gameLifes,
        gameQuestionCurrent,
        gameQuestionsTotal,
        gameScore
      )
      this.generateGameQuestionWithAnswers()
    }
    //Настройка уровня игры Hard (Раздел Play)
    this.startHardGame = function () {
      myModuleView.renderContent("game")
      let gameLifes = 1
      let gameQuestionCurrent = 1
      let gameQuestionsTotal = 10
      let gameScore = 0

      this.addToDBGameQuestionsTotalNumber(gameQuestionsTotal)
      this.addToDBGameQuestionCurrentNumber(gameQuestionCurrent)

      myModuleView.showGameStart(
        gameLifes,
        gameQuestionCurrent,
        gameQuestionsTotal,
        gameScore
      )
      this.generateGameQuestionWithAnswers()
    }
    // Раздел игры
    this.addToDBGameQuestionsTotalNumber = function (gameQuestionsTotal) {
      myAppDB
        .ref("gameQuestionsTotalNumber/")
        .set({
          gameQuestionsTotal: `${JSON.stringify(gameQuestionsTotal)}`,
        })
        .then(function () {
          console.log("Data was added to database")
        })
        .catch(function (error) {
          console.error("Error: ", error)
        })
    }
    // Раздел игры
    this.addToDBGameQuestionCurrentNumber = function (gameQuestionCurrent) {
      myAppDB
        .ref("gameQuestionCurrentNumber/")
        .set({
          gameQuestionCurrent: `${JSON.stringify(gameQuestionCurrent)}`,
        })
        .then(function () {
          console.log("Data was added to database")
        })
        .catch(function (error) {
          console.error("Error: ", error)
        })
    }
    // Раздел игры: генерация рандомного флага и к нему 1 правильный и 3 неправильных ответа
    this.generateGameQuestionWithAnswers = function () {
      myModuleView.showLoading()
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          myModuleView.hideLoading()
          let arrayCountriesAll = data
          let randomFlagIndex = Math.floor(
            Math.random() * arrayCountriesAll.length
          )
          let randomArrayElement = arrayCountriesAll[randomFlagIndex]

          let answerCorrect = randomArrayElement
          console.log(answerCorrect)
          let numberOfCorrectAnswer = Math.floor(Math.random() * 4)

          let arrayWrongCountries = arrayCountriesAll.filter(
            (country) => country !== randomArrayElement
          )
          let answers = []
          console.log(answers)

          for (let i = 0; i < 4; i++) {
            if (i === numberOfCorrectAnswer) {
              answers.push(answerCorrect.name.common)
            } else {
              let randomAnswer =
                arrayWrongCountries[
                  Math.floor(Math.random() * arrayWrongCountries.length)
                ]
              arrayWrongCountries = arrayWrongCountries.filter(
                (country) => country !== randomAnswer
              )
              answers.push(randomAnswer.name.common)
            }
          }
          let answerCorrectName = answerCorrect.name.common

          //Добавление в БД верного ответа
          myAppDB
            .ref("gameCorrectAnswer/")
            .set({
              answerCorrectName: `${JSON.stringify(answerCorrectName)}`,
            })
            .then(function () {
              console.log("Data was added to database")
            })
            .catch(function (error) {
              console.error("Error: ", error)
            })
          //Добавление в БД ответов на текущий вопрос
          myAppDB
            .ref("gameAnswersAll/")
            .set({
              answers: `${JSON.stringify(answers)}`,
            })
            .then(function () {
              console.log("Data was added to database")
            })
            .catch(function (error) {
              console.error("Error: ", error)
            })

          myModuleView.showRandomQuestionWithAnswers(
            randomArrayElement,
            answers
          )
        })
        .catch((error) => console.log("Error. The reason: " + error))
    }
    // Раздел игры: проверка ответа на совпадение с правильным
    this.checkAnswers = function (targetId) {
      myModuleView.activatedDisabledButton()
      let answerCorrect = myAppDB.ref()
      answerCorrect
        .child("gameCorrectAnswer")
        .child("answerCorrectName")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            let correctAnswer = JSON.parse(snapshot.val())
            myModuleView.checkSelectedAnswer(correctAnswer, targetId)
          } else {
            console.log("No data available")
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
    //Раздел игры
    this.goToNextQuestion = function () {
      this.getQuestionsTotalNumber()
    }
    //Раздел игры
    this.getQuestionsTotalNumber = function () {
      let questionsTotalNumber = myAppDB.ref()
      questionsTotalNumber
        .child("gameQuestionsTotalNumber")
        .child("gameQuestionsTotal")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            let gameQuestionsTotal = JSON.parse(snapshot.val())
            this.getQuestionsCurrentNumber(gameQuestionsTotal)
          } else {
            console.log("No data available")
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
    //Раздел игры
    this.getQuestionsCurrentNumber = function (gameQuestionsTotal) {
      let questionsCurrentNumber = myAppDB.ref()
      questionsCurrentNumber
        .child("gameQuestionCurrentNumber")
        .child("gameQuestionCurrent")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            let gameQuestionCurrent = JSON.parse(snapshot.val())
            this.changeQuestionNumber(gameQuestionsTotal, gameQuestionCurrent)
          } else {
            console.log("No data available")
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
    //Раздел игры
    this.changeQuestionNumber = function (
      gameQuestionsTotal,
      gameQuestionCurrent
    ) {
      gameQuestionCurrent = parseInt(gameQuestionCurrent) + 1
      if (parseInt(gameQuestionCurrent) == parseInt(gameQuestionsTotal) + 1) {
        myModuleView.showEndGameAllQuestions()
      } else {
        this.generateGameQuestionWithAnswers()
        myAppDB
          .ref("gameQuestionCurrentNumber/")
          .set({
            gameQuestionCurrent: `${JSON.stringify(gameQuestionCurrent)}`,
          })
          .then(function () {
            console.log("Data was updated")
            myModuleView.changeQuestionCurrentNumber(gameQuestionCurrent)
          })
          .catch(function (error) {
            console.error("Update Error: ", error)
          })
      }
    }
    //Раздел New Player
    this.changeFormToRegister = function () {
      myModuleView.showFormRegister()
    }
    //Раздел New Player
    this.changeFormToLogIn = function () {
      myModuleView.showFormLogIn()
    }

    //Страница New Player - log in
    this.login = function (emailPlayer, passwordPlayer) {
      if (emailPlayer && passwordPlayer) {
        auth
          .signInWithEmailAndPassword(emailPlayer, passwordPlayer)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user
            if (user) {
              // User is signed in.
              myModuleView.hideFormAndShowGreeting()
              this.getUsersList()
              this.printUsersList()
            } else {
              // No user is signed in.
              myModuleView.showNoUserFound()
            }
          })
          .catch(function (error) {
            console.log("Error: " + error.message)
            myModuleView.loginErrorWrong()
          })
      } else {
        myModuleView.loginErrorEmpty()
      }
    }

    //Страница New Player - register
    this.createAccount = function (emailPlayer, passwordPlayer) {
      if (emailPlayer && passwordPlayer) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(emailPlayer, passwordPlayer)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user

            myModuleView.hideFormAndShowGreeting()
            this.getUsersList()
            this.printUsersList()
          })
          .catch((error) => {
            let errorCode = error.code
            if (errorCode === "auth/email-already-in-use") {
              myModuleView.showUserExists()
            }
            myModuleView.loginErrorWrong
          })
      } else {
        myModuleView.loginErrorEmpty()
      }
    }
    //Раздел New Player
    this.logout = function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          myModuleView.showLoginForm()
        })
    }

    this.getUsersList = function () {
      myAppDB
        .ref("users/")
        .once("value")
        .then(function (snapshot) {
          console.log(snapshot.val())
        })
        .catch(function (error) {
          console.log("Error: " + error.code)
        })
    }
    //Раздел New Player
    this.printUsersList = function () {
      myAppDB.ref("users/").on(
        "value",
        (snapshot) => myModuleView.printUser(snapshot.val()),
        (error) => console.log("Error: " + error.code)
      )
    }
    //Раздел New Player
    this.addUser = function (username, useremail) {
      myAppDB
        .ref("users/" + `user_${username.replace(/\s/g, "").toLowerCase()}`)
        .set({
          username: `${username}`,
          email: `${useremail}`,
        })
        .then(function () {
          console.log("The user havs been added.")
        })
        .catch(function (error) {
          console.error("Error with adding a user: ", error)
        })
    }
    //Раздел New Player
    this.deleteUser = function (userid) {
      myAppDB
        .ref("users/" + userid)
        .remove()
        .then(function () {
          console.info("The user havs been deleted.")
        })
        .catch(function (error) {
          console.error("Error with deleting a user: ", error)
        })
    }
  }

  /* -------- end model -------- */
  /* ----- begin controller ---- */
  function ModuleController() {
    let myModuleContainer = null
    let myModuleModel = null
    let option = null

    this.init = function (container, model) {
      myModuleContainer = container
      myModuleModel = model

      // вешаем слушателей на событие hashchange и кликам по пунктам меню
      window.addEventListener("hashchange", this.updateState)
      this.updateState() //первая отрисовка
      myModuleContainer.addEventListener("click", this.listenClicks)
    }

    this.listenClicks = function (event) {
      let valueId = event.target.id

      switch (valueId) {
        case "modalBtnYes":
          event.preventDefault()
          myModuleModel.closeApp()
          break
        case "buttonNextPractise":
          event.preventDefault()
          myModuleModel.getDataCardPractise()
          break
        case "btnGameDifficultyEasy":
          event.preventDefault()
          myModuleModel.startEasyGame()
          break
        case "btnGameDifficultyMedium":
          event.preventDefault()
          myModuleModel.startMediumGame()
          break
        case "btnGameDifficultyHard":
          event.preventDefault()
          myModuleModel.startHardGame()
          break
        case "modalBackBtnYes":
          event.preventDefault()
          myModuleModel.modalGoBack()
          break
        case "buttonGameNext":
          event.preventDefault()
          myModuleModel.goToNextQuestion()
          break
        case "formRegister":
          event.preventDefault()
          myModuleModel.changeFormToRegister()
          break
        case "formLogIn":
          event.preventDefault()
          myModuleModel.changeFormToLogIn()
          break
        case "playerAddBtn":
          event.preventDefault()
          event.stopPropagation()

          let namePlayer = myModuleContainer.querySelector("#newPlayerName")
          let emailPlayer = myModuleContainer.querySelector("#newPlayerEmail")

          myModuleModel.addUser(namePlayer.value, emailPlayer.value)
          namePlayer.value = ""
          emailPlayer.value = ""
          break
        case "logoutBtn":
          event.preventDefault()
          event.stopPropagation()
          myModuleModel.logout()
          break
      }

      switch (valueId) {
        case "btnLearnAfrica":
          option = "region/africa"
          myModuleModel.getDataLearn(option)
          myModuleModel.addActiveBtn(valueId)
          break
        case "btnLearnAmericas":
          option = "region/americas"
          myModuleModel.getDataLearn(option)
          myModuleModel.addActiveBtn(valueId)
          break
        case "btnLearnAsia":
          option = "region/asia"
          myModuleModel.getDataLearn(option)
          myModuleModel.addActiveBtn(valueId)
          break
        case "btnLearnEurope":
          option = "region/europe"
          myModuleModel.getDataLearn(option)
          myModuleModel.addActiveBtn(valueId)
          break
        case "btnLearnOceania":
          option = "region/oceania"
          myModuleModel.getDataLearn(option)
          myModuleModel.addActiveBtn(valueId)
          break
        case "btnLearnAll":
          option = "all"
          myModuleModel.getDataLearn(option)
          myModuleModel.addActiveBtn(valueId)
          break
      }

      switch (valueId) {
        case "btnPractiseAfrica":
          option = "region/africa"
          myModuleModel.getDataPractiseCategory(option)
          break
        case "btnPractiseAmericas":
          option = "region/americas"
          myModuleModel.getDataPractiseCategory(option)
          break
        case "btnPractiseAsia":
          option = "region/asia"
          myModuleModel.getDataPractiseCategory(option)
          break
        case "btnPractiseEurope":
          option = "region/europe"
          myModuleModel.getDataPractiseCategory(option)
          break
        case "btnPractiseOceania":
          option = "region/oceania"
          myModuleModel.getDataPractiseCategory(option)
          break
        case "btnPractiseCategoryAll":
          option = "all"
          myModuleModel.getDataPractiseCategory(option)
          break
      }
      if (event.target.closest(".svg-exit")) {
        myModuleModel.openModal()
      }
      if (event.target.closest("#modalClose") || valueId == "modalBtnNo") {
        event.preventDefault()
        myModuleModel.closeModal()
      }
      if (event.target.closest(".back-arrow")) {
        event.preventDefault()
        myModuleModel.goBack()
      }
      if (
        event.target.closest(".back-arrow-practise") ||
        event.target.closest(".back-arrow-game")
      ) {
        myModuleModel.openModalBack()
      }
      if (
        event.target.closest("#modalBackClose") ||
        valueId == "modalBackBtnNo"
      ) {
        event.preventDefault()
        myModuleModel.closeModalBack()
      }
      if (event.target.classList.contains("game-answer")) {
        let targetId = event.target.id
        myModuleModel.checkAnswers(targetId)
      }
      if (event.target.closest(".card")) {
        myModuleModel.flipCard()
      }
      if (event.target.classList.contains("form-submit-login")) {
        event.preventDefault()
        event.stopPropagation()
        let emailPlayer = myModuleContainer.querySelector("#formEmail")
        let passwordPlayer = myModuleContainer.querySelector("#formPassword")
        myModuleModel.login(emailPlayer.value, passwordPlayer.value)
        emailPlayer.value = ""
        passwordPlayer.value = ""
      }
      if (event.target.classList.contains("form-submit-register")) {
        event.preventDefault()
        event.stopPropagation()
        let emailPlayer = myModuleContainer.querySelector("#formEmail")
        let passwordPlayer = myModuleContainer.querySelector("#formPassword")
        myModuleModel.createAccount(emailPlayer.value, passwordPlayer.value)
        emailPlayer.value = ""
        passwordPlayer.value = ""
      }
      if (event.target.closest(".delete-user")) {
        event.preventDefault()
        event.stopPropagation()
        myModuleModel.deleteUser(
          event.target.closest(".delete-user").dataset.id
        )
      }
    }

    this.updateState = function () {
      const hashPageName = location.hash.slice(1).toLowerCase()
      myModuleModel.updateState(hashPageName)

      if (hashPageName === "learn") {
        if (
          !myModuleContainer.getElementsByClassName("learn-data-container")
            .length
        ) {
          let option = "all"
          myModuleModel.getDataLearn(option)
        }
      }
    }
  }
  /* ------ end controller ----- */

  return {
    init: function ({ container, routes, components }) {
      this.renderComponents(container, components)

      const view = new ModuleView()
      const model = new ModuleModel()
      const controller = new ModuleController()

      //связываем части модуля
      view.init(document.getElementById(container), routes)
      model.init(view)
      controller.init(document.getElementById(container), model)
    },

    renderComponents: function (container, components) {
      const root = document.getElementById(container)
      const componentsList = Object.keys(components)
      for (let item of componentsList) {
        root.innerHTML += components[item].render("component")
      }
    },
  }
})()
/* ------ end app module ----- */

/*** --- init module --- ***/

let app = document.createElement("div")
app.classList.add("app")
app.id = "app"
document.body.prepend(app)

document.addEventListener(
  "DOMContentLoaded",
  mySPA.init({
    container: "app",
    routes: routes,
    components: components,
  })
)
