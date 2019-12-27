
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resolutions').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolutions').insert([
        { 
            title: 'Finish App',
            description: 'finish new years resolution app so you can track those resolutions',
            goal: 'January'
        }
      ]);
    });
};
