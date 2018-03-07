var FloatLayer = function(element) {
  this.ele = element;
  this.visible = false;
  this.maskEle = null;
  this.animateTime = 600;
  this.init();
};

FloatLayer.prototype = {
  show: function() {
    this.visible = true;
    this.ele.style.transform = "translate(-50%, -50%) scale(1, 1)";
    this.maskEle.style.visibility = "visible"; // 遮罩层
    this.ele.style.left = "50%";
    this.ele.style.top = "50%";
  },

  hide: function() {
    this.visible = false;
    this.ele.style.transform = "translate(-50%, -50%) scale(0, 0)";
    var self = this;
    setTimeout(function() {
      sele.maskEle.style.visibility = "hidden";
    }, this.animateTime - 10);
  },

  init: function() {
    // 定位遮罩层
    this.maskEle = document.createElement("div");
    this.maskEle.style.width = window.screen.width + "px";
    this.maskEle.style.height = window.screen.height + "px";
    this.maskEle.style.backgroundColor = "rgba(108, 108, 108, 0.7)";
    this.maskEle.style.position = "fixed";
    this.maskEle.style.left = "50%";
    this.maskEle.style.top = "50%";
    this.maskEle.style.transform = "translate(-50%, -50%)";
    this.maskEle.style.visibility = this.visible ? "visible" : "hidden";

    // 定位对话框
    this.ele.style.position = "absolute   ";
    this.ele.style.left = "50%";
    this.ele.style.top = "50%";
    this.ele.style.width = this.ele.clientWidth + "px";
    this.ele.style.transform = "translate(-50%, -50%) scale(0, 0)";
    this.ele.style.transition = this.animateTime + "ms transform";

    this.ele.parentNode.removeChild(this.ele);
    this.maskEle.appendChild(this.ele);
    document.body.appendChild(this.maskEle);

    var self = this;
    page.addEvent(this.maskEle, "click", function(e) {
      if (self.maskEle === this) {
        self.hide();
      }
    });

    page.addEvent(this.ele, "click", function(e) {
      e.stopPropagation();
    });

    // 拖拉
    this.setDragNode(this.ele.children[0]);
  },

  setDragNode: function(node) {
    var preX, preY;
    var self = this;
    node.style.cursor = "move";

    page.addEvent(node, "mousedown", function(event) {
      var disX = event.clientX - self.ele.offsetLeft,
        disY = event.clientY - self.ele.offsetTop;

      var move = function(event) {
        self.ele.style.left = event.clientX - disX + "px";
        self.ele.style.top = event.clientY - disY + "px";
      };

      page.addEvent(document, "mousemove", move);
      page.addEvent(document, "mouseup", function() {
        page.removeEvent(document, "mousemove", move);
      });
    });
  }
};

function createFloatLayer(ele) {
  return new FloatLayer(ele);
}
