(function(window, undefined){
  var resultRootElementTagName = "ul";
  var resultRootElementId = "results";
  var resultRootElementClass = "testsuite";
  var resultRootElement = null;
  
  var resultItemElementTagName = "li";

  function assert(value, description) {
    setResultRootElement();
    var item = document.createElement(resultItemElementTagName);
    item.className = value ? "pass" : "fail"; // TODO, the css class name should be configurable
    item.appendChild(document.createTextNode(description));
    resultRootElement.appendChild(item);
  }
  
  function setResultRootElement() {
    if (resultRootElement) {
      return ;
    }
    resultRootElement = document.getElementById(resultRootElementId);
    if (!resultRootElement) {
      resultRootElement = addRootElement();
    }
    addRootElementClass();
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
      setResultRootElement();
    }
    var classRegExp = new RegExp("\\b" + resultRootElementClass + "\\b");
    var originalClassName = resultRootElement.className;
    if (classRegExp.test(originalClassName)) {
      return;
    }
    var isEndofSpace = originalClassName.charAt(originalClassName.length-1) == " ";    
    resultRootElement.className += isEndofSpace ? resultRootElementClass : " " + resultRootElementClass;
  }
  
  window.assert = assert;
  
})(window, undefined);