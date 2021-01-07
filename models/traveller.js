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
  const vehicle = this.journeys.filter( (journey) => {
    return (journey.transport === transport);
  });
  return vehicle;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const minJourney = this.journeys.filter( (journey) => {
    return (journey.distance >= minDistance);
  });
  return minJourney;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function (journeys) {
  const transportType = this.journeys.map( (journey) => {
    return journey.transport;
  });

  const uniqueTransport = transportType.filter( (transport, index, self) => {
    return (self.indexOf(transport) === index);
  });
  return uniqueTransport;
};


module.exports = Traveller;
