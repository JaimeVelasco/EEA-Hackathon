import { Meteor } from 'meteor/meteor';


Meteor.publish('SanAntonioWaterLevel', function(){
  return SanAntonioWaterLevel.find({},{sort: {pdate: -1}, limit: 1});
    // this.ready();
});

Meteor.publish('ComalWaterLevel', function(){
  return ComalWaterLevel.find({},{sort: {pdate: -1}, limit: 1});
    // this.ready();
});

Meteor.publish('HondoWaterLevel', function(){
  return HondoWaterLevel.find({},{sort: {pdate: -1}, limit: 1});
    // this.ready();
});

Meteor.publish('UvaldeWaterLevel', function(){
  return UvaldeWaterLevel.find({},{sort: {pdate: -1}, limit: 1});
    // this.ready();
});

Meteor.publish('SanMarcosWaterLevel', function(){
  return SanMarcosWaterLevel.find({},{sort: {pdate: -1}, limit: 1});
    // this.ready();
});
