exports.seed = function(knex) {
    return knex('products').del()
        .then(function() {
            return knex('products').insert([
                { name: 'Doom Eternal', description: 'Rating T, muy violento', price: 1000 },
                { name: 'Skyrim', description: 'RPG mundo abierto', price: 2000 },
                { name: 'Fall guys ', description: 'Ya hay hackers', price: 300 },
            ]);
        });
};