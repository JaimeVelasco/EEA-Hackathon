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


Meteor.methods({
  'sanantonio':(newdate) => {

    let saresult = SanAntonioWaterLevel.findOne({
      pdate: newdate
    });

     return saresult.MaxLevel;
  },

  'comal':(newdate) => {

    let Comalresult = ComalWaterLevel.findOne({
      pdate: newdate
    });
     return Comalresult.MaxLevel;
  },

  'hondo':(newdate) => {

    let Hondoresult = HondoWaterLevel.findOne({
      pdate: newdate
    });
     return Hondoresult.MaxLevel;
  },

  'sanMarcos':(newdate) => {

    let SanMarcosresult = SanMarcosWaterLevel.findOne({
      pdate: newdate
    });
     return SanMarcosresult.MaxLevel;
  },

  'Uvalde':(newdate) => {

    let Uvalderesult = UvaldeWaterLevel.findOne({
      pdate: newdate
    });
     return Uvalderesult.MaxLevel;
  }
});
