(function(window, undefined){
  var resultRootElementTagName = "ul";
  var resultRootElementId = "results";
  var resultRootElementClass = "testsuite";
  var resultRootElement = null;

  function assert(value, description) {
    setResultRootElement();
    var li = document.createElement("li");// TODO, the tag name should be configurable
    li.className = value ? "pass" : "fail"; // TODO, the css class name should be configurable
    li.appendChild(document.createTextNode(description));
    resultRootElement.appendChild(li);
  }
  
  function setResultRootElement() {
    if (resultRootElement) {
      return ;
    }
    resultRootElement = document.getElementById(resultRootElementId);
    if (!resultRootElement) {
      resultRootElement = addRootElement();
    }
  }

  function addRootElement(tagName) {
    if (resultRootElement) {
      return resultRootElement;
    }
    tagName = tagName || resultRootElementTagName;
    resultRootElement = document.createElement(tagName);
    resultRootElement.id = resultRootElementId;
    document.body.appendChild(resultRootElement);
    return resultRootElement;
  }
  
  function addRootElementClass() {
    if (!resultRootElement) {
      addRootElement();
    }
    resultRootElement.className += "resultRootElementClass";
  }
  
  window.assert = assert;
  
})(window, undefined);