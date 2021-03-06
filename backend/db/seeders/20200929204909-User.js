'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1');

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Matt',
        lastName: 'Ramotar',
        email: 'matt.ramotar@jhu.edu',
        username: 'demo',
        hashedPassword: '$2a$10$KsLOLl5aPfsH9qJqByVWO.BlE.iarO/Panl5AvSdIsyb2HB7Xp2oy',
        photo:
          'https://media-exp1.licdn.com/dms/image/C5603AQF-BOZXcT8b6A/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=uCpzaZn9bClzpBW_TLBjtCxE-TJRFS8xHcGzvL5kk4I',
      },
      {
        firstName: 'Francis',
        lastName: 'Robel',
        email: 'Jerod44@yahoo.com',
        username: 'Janick2',
        hashedPassword: '$2a$10$KsLOLl5aPfsH9qJqByVWO.BlE.iarO/Panl5AvSdIsyb2HB7Xp2oy',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Ignatius',
        lastName: 'Harvey',
        email: 'Amanda48@gmail.com',
        username: 'Dorothea_Rath',
        hashedPassword: '$2a$10$hKDS.MYj2nrCYg481Hz4ceHVa10tMW2nCbRoZ/z5tyB4gH/ox5OkG',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Keyon',
        lastName: 'Cronin',
        email: 'Ian25@hotmail.com',
        username: 'Benton.Haag50',
        hashedPassword: '$2a$10$eQ3ByV7IZ0iCTj/5L1vL.OJw8WjfenuZ19f/X2j/yKbrn5N5laqoS',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Zechariah',
        lastName: 'Sporer',
        email: 'Helene.Bechtelar@gmail.com',
        username: 'Kelley8',
        hashedPassword: '$2a$10$iLYuWrudngSULNJF0o7cn.OstF6d5ZRb3VqrdWyf6A3ZD1lXuC9ra',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Marquis',
        lastName: 'Gibson',
        email: 'Sabina68@yahoo.com',
        username: 'Rasheed.Larkin',
        hashedPassword: '$2a$10$tDW4qLwN28F.DGc0x.NnqecvQwWkua.jQxLoGSVw/EXf4QQr1HFpK',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Casandra',
        lastName: 'VonRueden',
        email: 'Bradly_Jaskolski93@hotmail.com',
        username: 'Julian99',
        hashedPassword: '$2a$10$FvNo4pT3r8sfyHrpsxPzc.wWV92rVqrC8vGEmCbs6j6jPeqFRKCcO',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Otho',
        lastName: 'Schowalter',
        email: 'Jarvis94@yahoo.com',
        username: 'Avery_Baumbach',
        hashedPassword: '$2a$10$pdNOwp0mfRL02uDcPS7XKOCFMMCL/dA7tKKVBFMOyTDrbAhc357gO',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Zula',
        lastName: 'Kassulke',
        email: 'Johanna_Hilpert@yahoo.com',
        username: 'Daisha78',
        hashedPassword: '$2a$10$L5OYVDhEop96ZUlMHz0uFOlhBGgPkuWD6QnOBDhmz96NObbI8LcL.',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Jett',
        lastName: 'Senger',
        email: 'Seth.Reinger@yahoo.com',
        username: 'Eunice.Larkin23',
        hashedPassword: '$2a$10$c5EeWeNyKD0Y.nDRZVjOmuwZNvXLY.clJBTtotx4U0fFmr6AFZ5Qu',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Kamron',
        lastName: 'Nienow',
        email: 'Junior5@gmail.com',
        username: 'Seth13',
        hashedPassword: '$2a$10$1dqMJeLzt2fHg6G4y6whUu.xpdFaJdPea4lG2sgcqF.hdzTqBJQZe',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Sydnie',
        lastName: 'Kris',
        email: 'Gina_Dibbert@yahoo.com',
        username: 'Otto90',
        hashedPassword: '$2a$10$cIXBO5ShnzjiIKtC04xGZubkKNxo2LiqyunuQz.a8EPcpHcm4D7ZK',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Zechariah',
        lastName: 'Schamberger',
        email: 'Aiden70@hotmail.com',
        username: 'Summer.Luettgen79',
        hashedPassword: '$2a$10$PgjoBAdH02C3EPXg.W7GNOPbmQF7uErICk4NW6sf94wR11kCjZdBm',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Jerrold',
        lastName: 'Green',
        email: 'Myrtis.Hodkiewicz9@hotmail.com',
        username: 'Haylee25',
        hashedPassword: '$2a$10$qpUPW3ReBqYm7wOsEFHrYuXadUtw.VO7YuBoL9CXFGse9wPiay/9.',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Joana',
        lastName: 'Corkery',
        email: 'Antwan_King18@yahoo.com',
        username: 'Fay.Hyatt52',
        hashedPassword: '$2a$10$A9bE0DQKrCQTBDL4qUWSQev1HBKo0U3Vw/IAtOqT5LeY8T4Ew2aGS',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Meggie',
        lastName: 'Kovacek',
        email: 'Shyanne.Orn@hotmail.com',
        username: 'Curtis19',
        hashedPassword: '$2a$10$KNgmvHaNeCOgkSUzWsNrfe.BOkf00T4A1qL3t9AmVgyi4zNYokot2',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Chaz',
        lastName: 'Feeney',
        email: 'Mitchell4@gmail.com',
        username: 'Ona_Emmerich',
        hashedPassword: '$2a$10$JRA1Ih3aiuDUSiTpn5iYX.n3765/5v3yVaROJZL9ykGgvQmIIgUEC',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Arthur',
        lastName: 'McClure',
        email: 'Rusty96@hotmail.com',
        username: 'Lukas_Farrell',
        hashedPassword: '$2a$10$6E3F87Mhg2ua2iKRKwbo6uG4lAm5F6XNkDGJdgkmaBzs8apQIZjB.',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Casimer',
        lastName: 'Legros',
        email: 'Toni55@hotmail.com',
        username: 'Daija_Jakubowski',
        hashedPassword: '$2a$10$PND3mk0Yd/aKRbCIhU.QMuEdk8uVukZoqVNgFGlRom6ImftKju7Nq',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Alan',
        lastName: 'Ziemann',
        email: 'Timothy_Dare@gmail.com',
        username: 'Leland.Lubowitz34',
        hashedPassword: '$2a$10$KrdEdepyIiXz4Q/zneh85udA9cK.vPAoCDr8ukADalIDs5CoCYa4C',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Everette',
        lastName: 'Oberbrunner',
        email: 'Mya1@hotmail.com',
        username: 'Brandon48',
        hashedPassword: '$2a$10$DbSTwdnu/.9/wXgr2lO/WecUotTm3xZqHE.o.a0bJfi7DobQULCa2',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Liza',
        lastName: 'Leffler',
        email: 'Nayeli16@hotmail.com',
        username: 'Glennie28',
        hashedPassword: '$2a$10$HZautZarMt4MGRvq5vmvYO8/2J5TS9HAzbWrRWvoLW0c8nLGqnwRW',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Moriah',
        lastName: 'Gottlieb',
        email: 'Laila.Bergstrom@gmail.com',
        username: 'Isaiah.Abbott16',
        hashedPassword: '$2a$10$rmQ85/Lvog3eWGo3Ot08x.tzmU4hNN9vLfI9LZMzq9HMalWnZJDcK',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Reagan',
        lastName: 'Denesik',
        email: 'Rupert.Harvey@yahoo.com',
        username: 'Wilma.Barton48',
        hashedPassword: '$2a$10$Ba/3Nazkasz1ilYvMlydp.jliScwksev6NLbfs57IYNWpJIic767i',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Precious',
        lastName: 'Rau',
        email: 'Edwin_Crona@hotmail.com',
        username: 'Cortez95',
        hashedPassword: '$2a$10$HLxs6J8OXxPTjuIyfLldl.MQYAr1g16v.Ilc4JvqEgSmFkSIJSDgi',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Elisabeth',
        lastName: 'Durgan',
        email: 'Coby81@yahoo.com',
        username: 'Kasandra_Altenwerth58',
        hashedPassword: '$2a$10$QTO6X18ygvzO9CJEcCKWBuBkKiMDNovqY90n4LrupPpFBKRZhdg8G',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Christelle',
        lastName: 'Feil',
        email: 'Hanna_Heidenreich@gmail.com',
        username: 'Willis96',
        hashedPassword: '$2a$10$H9FGVxYzIh0oIK.lkVkZQ.fYq2qNE3Gq1DH0iWvPWB4FdvUmviFI6',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Cathryn',
        lastName: 'Swift',
        email: 'Ian.Dibbert@yahoo.com',
        username: 'Greyson.Wintheiser68',
        hashedPassword: '$2a$10$qNBquNE8GnVKir.wsAB.ZOb007/fGprY6AzWVFj4891zA4a6rSjn6',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Zachery',
        lastName: 'Feeney',
        email: 'Amani_Blanda@gmail.com',
        username: 'Casper14',
        hashedPassword: '$2a$10$4ofaTurrzYzGjvGul4kD9OnHNd0TK.el4nKTVyihbn1lcjkX7zw56',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Adrain',
        lastName: 'Satterfield',
        email: 'Conner_Jacobs@yahoo.com',
        username: 'Murl.Feil86',
        hashedPassword: '$2a$10$.gOxX/JvXbF9XB13nO.4juNk.1gQHma6293n9jlhFlqo1i.DjZvDC',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Grant',
        lastName: 'Stracke',
        email: 'Janiya.Bauch15@hotmail.com',
        username: 'America77',
        hashedPassword: '$2a$10$97k5c5R3Mt76.ie9Y/E7WONKr1A5.ePTWJqqOdo6NtvRWVJoSCLLi',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Valentin',
        lastName: 'Kunde',
        email: 'Zaria_Kassulke75@hotmail.com',
        username: 'Era25',
        hashedPassword: '$2a$10$c/tALvyZq553efABMBJBs.PbXoNUCT94xEn.wsbJ64efXOiOwBJpG',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Laila',
        lastName: 'Brekke',
        email: 'Riley92@yahoo.com',
        username: 'Berenice_Mayer',
        hashedPassword: '$2a$10$W.9xNP6xysu6PV0AgXfK8ukbqWhsDdDKnDvzeFiC.EEho0MH5sRJy',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Reginald',
        lastName: 'Heathcote',
        email: 'Janet_Orn15@gmail.com',
        username: 'Bo.Bogisich59',
        hashedPassword: '$2a$10$uuP/eSBP3TAwBgzp7Ml9ruMGzw8vktewvUAzPFS54aE8VC..I/g9K',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Estevan',
        lastName: 'Tillman',
        email: 'Jeremie.Williamson47@gmail.com',
        username: 'Cristobal_Pfeffer62',
        hashedPassword: '$2a$10$QfkS.yGdXFOTmtQubjnudenoG3IWC5MQGpmkZx/FfcTeqsBdueu5C',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Tremayne',
        lastName: 'Murphy',
        email: 'Armand.McKenzie27@hotmail.com',
        username: 'Favian_Champlin52',
        hashedPassword: '$2a$10$x/DItPZKxnd0gx8qIDE3POWwmKAJ2JEUf9VYkIyaWnTZzPZwomkCC',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Charlie',
        lastName: 'Lind',
        email: 'Nathanael43@yahoo.com',
        username: 'Joana87',
        hashedPassword: '$2a$10$bK4U.FUnef0I.h5agiXlmexI2aKvAkF8..24GNmvjPrZ4G1lao2Li',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Kale',
        lastName: 'Goodwin',
        email: 'Salma_Block25@gmail.com',
        username: 'Clair_Franecki81',
        hashedPassword: '$2a$10$MqNMHQOjRTWXSnz8anqooe6BGk2AmgSZwyyMrnd4I4t25yBWqIEUO',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Katrina',
        lastName: 'Collier',
        email: 'Erica.Cassin@gmail.com',
        username: 'Lambert_Wolff62',
        hashedPassword: '$2a$10$AigEfWGvHfFrgV/tFDMTtOGB6mCgyDG4FD05ZyliLj6U0.vbit2pW',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Adan',
        lastName: 'Kassulke',
        email: 'Bonnie.Hoppe49@hotmail.com',
        username: 'Angelo.Kling',
        hashedPassword: '$2a$10$.C4TUs0CY4xJbbj6ZlAQteSDzfTAV6wUiA8Nl3sPAb35Jwiumj11C',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Reba',
        lastName: "O'Keefe",
        email: 'Wilson_Stoltenberg67@yahoo.com',
        username: 'Edward.Kautzer',
        hashedPassword: '$2a$10$VH02Htmf0Up6eiCF73/S5OWwdd8j8mNlYnVP3RItTH2noYX/vPs9i',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Magdalena',
        lastName: 'Towne',
        email: 'Gilberto65@hotmail.com',
        username: 'Tiana_Brakus73',
        hashedPassword: '$2a$10$12Ai.xcq8gM2VmIhfjr4Xunx6Fq38hc00bpAQvbY9uzSDq9Le/IRm',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Kasey',
        lastName: 'Altenwerth',
        email: 'Alek43@yahoo.com',
        username: 'Graciela42',
        hashedPassword: '$2a$10$M21cMGc7SxhtOCojH6G/iON5W1Q3rlCm/wkFralvZZKJEBCG6ND4y',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Sunny',
        lastName: 'Hauck',
        email: 'Jarvis.OConner@gmail.com',
        username: 'Luis.Donnelly',
        hashedPassword: '$2a$10$QSuZAyy28FqJFs7RfVoZhuQqnDRwpjHql87wSr.Lcvq5B73Ljwm0W',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Kayli',
        lastName: 'Pfeffer',
        email: 'Micheal77@yahoo.com',
        username: 'Greta_Jerde66',
        hashedPassword: '$2a$10$5/9cV722nQ9hM2P2wSyvHuH5wyB/cHmG4Jc6aGlnxshYgiAtPEIFK',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Kory',
        lastName: 'Pouros',
        email: 'Torey83@yahoo.com',
        username: 'Omari.Franecki30',
        hashedPassword: '$2a$10$hW5FxAvhf16eh2eT/PoYrO3aooWkWPfbBNa6/BHxzYD9NPT5LuT9y',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Kendra',
        lastName: 'Langworth',
        email: 'Ashton_Friesen@yahoo.com',
        username: 'Joanie.Smitham',
        hashedPassword: '$2a$10$wyRzR.eCXt3YH9ZngOQplOFSa8OnqEqcNNooP7Osa8cn9ifHB1FcG',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Curt',
        lastName: 'Von',
        email: 'Jerod.Waters97@yahoo.com',
        username: 'Heaven_Lindgren52',
        hashedPassword: '$2a$10$eWW7WR./5lRd2IXZhY1NrOwmYXKl87m1H5b7DnMnFEApuBadg1L3S',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Mateo',
        lastName: 'Corkery',
        email: 'Nina74@gmail.com',
        username: 'Bonita7',
        hashedPassword: '$2a$10$7yofR9ypTDUiYpUnpjAR8eCjZIyf.27sJOsvRQ96ckktZ3vHL1Vau',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Alberta',
        lastName: 'Gleichner',
        email: 'Anna.Nienow93@gmail.com',
        username: 'Mariana_Altenwerth',
        hashedPassword: '$2a$10$IdNqMbXCFsGovOrsvjPUZOL6d7J66LvQ8Tk9sGYkjKQqD92XSdMsm',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Samir',
        lastName: 'Hauck',
        email: 'Ethelyn86@gmail.com',
        username: 'Kayley.Kautzer91',
        hashedPassword: '$2a$10$69T8mKTzi5aGL4WEhziPxOJ2AK4bHzf1P4LrQPgf7Xy7kDlTtybRy',
        photo: 'http://placeimg.com/640/480',
      },
      {
        firstName: 'Hermann',
        lastName: 'Crooks',
        email: 'Vaughn_Strosin26@yahoo.com',
        username: 'Alaina.Boehm84',
        hashedPassword: '$2a$10$yBxgItK8Sitwla.AN/b/f.3rIxztr7MBEfrs7vxU.3RMTWW7oGZ.S',
        photo: 'http://placeimg.com/640/480',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  },
};
