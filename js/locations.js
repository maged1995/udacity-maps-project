var locat = function(data){
  this.id = ko.observable(data.id);
  this.marker = ko.observable(data.marker);
};

var filterer = function(){
  this.str = ko.observable("");
  this.markersList = ko.observableArray([]);
  for(var i = 0; i < markers.length; i++){
    this.markersList.push(new locat({id: i, marker: markers[i]}));
  }
  this.res = ko.observableArray(this.markersList());

  this.filter = function(){
    this.res = ko.observableArray([]);
    for(var i = 0; i < this.markersList().length; i++){
      if(this.markersList()[i].title.contain(this.str())){
        this.res.push(this.markersList()[i]);
        console.log("inn");
      }
    }
  }.bind(this);

};

ko.applyBindings(new filterer());
