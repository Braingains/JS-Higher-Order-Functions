const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const start = this.journeys.map( (journey) => {
    return journey.startLocation;
  })
  return start;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end = this.journeys.map( (journey) => {
    return journey.endLocation;
  })
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
