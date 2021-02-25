
exports.seed = function(knex) {
      return knex('classes').insert([
        {
          name: 'Fast Fitness',
          type: 'Crossfit',
          start_time: '8:00 a.m',
          duration: '1 hour',
          intensity_level: 'Beginner',
          location: 'Park',
          registered: 15,
          max_class_size: 25
        },
        {
          name: 'Strength Combo',
          type: 'Cardio',
          start_time: '7:00 a.m',
          duration: '1 hour',
          intensity_level: 'Intermediate',
          location: 'Recreational Center',
          registered: 5,
          max_class_size: 12
        },
        {
          name: 'Aqua Fitness',
          type: 'Water Aerobics',
          start_time: '5:00 p.m',
          duration: '3 hours',
          intensity_level: 'Advanced',
          location: "Neighbor's pool",
          registered: 10,
          max_class_size: 20
        },
        {
          name: 'Jab Club',
          type: 'Boxing',
          start_time: '6:00 a.m',
          duration: '2 hours',
          intensity_level: 'Beginner',
          location: 'Basement',
          registered: 2,
          max_class_size: 7
        },
        {
          name: 'Conditioning',
          type: 'Total Body Workout',
          start_time: '12:00 p.m',
          duration: '45 minutes',
          intensity_level: 'Intermediate',
          location: 'Garage',
          registered: 16,
          max_class_size: 20
        },
        {
          name: 'Strength Kickboxing',
          type: 'Kickboxing',
          start_time: '9:00 a.m',
          duration: '1.5 hours',
          intensity_level: 'Advanced',
          location: 'Gym',
          registered: 20,
          max_class_size: 30
        },
      ]);
};
