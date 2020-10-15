
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 12345, make: "Ford", model: "Taurus", mileage: 70000},
        {VIN: 12565, make: "Saturn", model: "Wagon", mileage: 34000, transmission: "5G"}
      ]);
    });
};
