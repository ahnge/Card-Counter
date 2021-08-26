const numberTag = document.querySelector(".number");
const textTag = document.querySelector(".text");
const cards = document.querySelectorAll(".card");
const restart = document.querySelector(".restart");
const container = document.querySelector(".containerr");

const historyTag = document.querySelector(".history");
let historyArr = [];

let num = 0;
const change = () => {
  numberTag.innerHTML = num;
  num < 0
    ? (textTag.innerHTML = "ထိန်းစော့ဦး")
    : (textTag.innerHTML = "များများ သုတ်");
};

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");
const jack = document.querySelector(".jack");
const queen = document.querySelector(".queen");
const king = document.querySelector(".king");

const changeBorder = (bNum) => {
  if (bNum.classList.contains("active")) {
    return;
  } else {
    bNum.classList.toggle("active");
    setTimeout(() => {
      bNum.classList.toggle("active");
    }, 300);
  }
};
const switchFun = (parem) => {
  switch (parem) {
    case "1":
      num--;
      change();
      changeBorder(one);
      break;
    case "2":
      num++;
      change();
      changeBorder(two);
      break;
    case "3":
      num++;
      change();
      changeBorder(three);
      break;
    case "4":
      num++;
      change();
      changeBorder(four);
      break;
    case "5":
      num++;
      change();
      changeBorder(five);
      break;
    case "6":
      num++;
      change();
      changeBorder(six);
      break;

    case "7":
      changeBorder(seven);
      break;
    case "8":
      changeBorder(eight);
      break;
    case "9":
      changeBorder(nine);
      break;

    case "0":
      num--;
      change();
      changeBorder(ten);
      break;
    case "j":
      num--;
      change();
      changeBorder(jack);
      break;
    case "q":
      num--;
      change();
      changeBorder(queen);
      break;
    case "k":
      num--;
      change();
      changeBorder(king);
      break;

    default:
      break;
  }
};
const changeHistory = (para) => {
  if (
    para === "1" ||
    para === "2" ||
    para === "3" ||
    para === "4" ||
    para === "5" ||
    para === "6" ||
    para === "7" ||
    para === "8" ||
    para === "9" ||
    para === "0" ||
    para === "j" ||
    para === "q" ||
    para === "k"
  ) {
    historyArr.push(para);
    historyTag.innerHTML = "";
    if (historyArr.length > 10) {
      historyArr.shift();
    }
    for (let i = 0; i < historyArr.length; i++) {
      const ele = document.createElement("span");
      ele.classList.add("history-ele");
      ele.innerText = historyArr[i];

      historyTag.append(ele);
    }
  }
};

document.addEventListener("keypress", (event) => {
  switchFun(event.key);
  changeHistory(event.key);
});

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    switchFun(event.target.dataset.key);
    changeHistory(event.target.dataset.key);
  });
});

restart.addEventListener("click", () => {
  num = 0;
  change();
  historyArr = [];
  historyTag.innerHTML = "";
});

const popup = document.querySelector(".popup");
const discription = document.querySelector(".discription");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

const popupFun = () => {
  discription.classList.toggle("show-dc");
  overlay.classList.toggle("show-dc");
  container.classList.toggle("blur");
};
popup.addEventListener("click", () => {
  popupFun();
});

closeBtn.addEventListener("click", () => {
  popupFun();
});
overlay.addEventListener("click", () => {
  popupFun();
});
