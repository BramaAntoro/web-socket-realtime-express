'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('majors', [{
      name: 'Perkembangan Perangkat Lunak Dan Game',
      alias: "PPLG",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Teknik Jarigan Komputer Dan Telekomunikasi',
      alias: "TJKT",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Desain Komunikasi Visual',
      alias: "DKV",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Teknik Mesin',
      alias: "TM",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Teknik Kendaran Ringan',
      alias: "TKR",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Teknik Sepeda Motor',
      alias: "TSM",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Hotel Dan Restoran',
      alias: "HR",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('majors', [{
      name: 'Manajemen Perkantoran Dan Layanan Bisnis',
      alias: "MPLB",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('majors', null, {});
  }
};
