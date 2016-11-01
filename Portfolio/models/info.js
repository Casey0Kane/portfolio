function Info (opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
}

Info.allInfo = [];

Info.prototype.toHtml = function(scriptTemplateId) {
  var template = Handlebars.compile($(scriptTemplateId).text());
  return template(this);
};

Info.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
  })
  .forEach(function(ele) {
  });
};

Info.fetchAll = function() {
  if (localStorage.info) {
    Info.loadAll(JSON.parse(localStorage.info));
    dataset.renderIndexPage();
  }
  else {
    $.getJSON('../data/info.json',
  function(data, message, xhr) {
    var infoJSON = JSON.stringify(data);
    localStorage.setItem('infoData', (infoJSON));
    Info.loadAll(data);
    dataset.renderIndexPage();
  });
  }
};
