const className = "text-animate__letter";
const classNameActive = "text-animate__letter--active";

const createNode = (tagName, selector, content) => {
  const node = document.createElement(tagName);
  if (selector) node.classList.add(selector);
  if (content) node.textContent = content;
  return node;
};

const createNodeList = (arr) => {
  return arr.map((el, idx) => {
    if (el === " " && arr[idx + 1] === " ") {
      return createNode("br");
    }
    if (el === " " && arr[idx + 1] !== " " && arr[idx - 1] !== " ") {
      return createNode("pre", className, el);
    }
    return createNode("span", className, el);
  });
};
const addListener = (el) => {
  el.addEventListener("mouseover", function () {
    this.classList.add(classNameActive);
    setTimeout(() => {
      this.classList.remove(classNameActive);
    }, 1000);
  });
};

export default (selector) => {
  const elements = [...document.querySelectorAll(selector)];
  elements.forEach((el) => {
    const collection = createNodeList(el.ariaLabel.split(""));
    collection.forEach((node) => {
      addListener(node);
      el.appendChild(node);
    });
  });
};
