(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div id=\"todoapp\">\n  <header>\n    <h1>Todos</h1>\n    <input id=\"new-todo\" type=\"text\" placeholder=\"What needs to be done?\">\n  </header>\n\n  <section id=\"main\">\n    <input id=\"toggle-all\" type=\"checkbox\">\n    <label for=\"toggle-all\">Mark all as complete</label>\n    <ul id=\"todo-list\"></ul>\n  </section>\n\n  <footer>\n    <a id=\"clear-completed\">Clear completed</a>\n    <div id=\"todo-count\"></div>\n  </footer>\n\n</div>\n\n<div id=\"instructions\">\n  Double-click to edit a todo.\n</div>\n";});
templates['stats'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n  <a id=\"clear-completed\">Clear ";
  foundHelper = helpers.done;
  stack1 = foundHelper || depth0.done;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "done", { hash: {} }); }
  buffer += escapeExpression(stack1) + " completed ";
  stack1 = "item";
  foundHelper = helpers.done;
  stack2 = foundHelper || depth0.done;
  foundHelper = helpers.pluralize;
  stack3 = foundHelper || depth0.pluralize;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "pluralize", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "</a>\n";
  return buffer;}

  foundHelper = helpers.done;
  stack1 = foundHelper || depth0.done;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"todo-count\"><b>";
  foundHelper = helpers.remaining;
  stack1 = foundHelper || depth0.remaining;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "remaining", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</b> ";
  stack1 = "item";
  foundHelper = helpers.remaining;
  stack2 = foundHelper || depth0.remaining;
  foundHelper = helpers.pluralize;
  stack3 = foundHelper || depth0.pluralize;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "pluralize", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + " left</div>\n";
  return buffer;});
templates['todo'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"view\">\n  <input class=\"toggle\" type=\"checkbox\" ";
  foundHelper = helpers.done;
  stack1 = foundHelper || depth0.done;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + ">\n  <label>";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</label>\n  <a class=\"destroy\"></a>\n</div>\n<input class=\"edit\" type=\"text\" value=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n";
  return buffer;});
})();