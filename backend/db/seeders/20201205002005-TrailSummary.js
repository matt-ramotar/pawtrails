'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TrailSummaries', [
      {
        trailId: 1,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🏔️":1,"🚵":1,"😫":1,"🔥":1,"🌡️":1,"🐾":1},"trailConditions":{"Closed":1,"Scramble":1,"Icy":2,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 2,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"🌼":2,"🦝":1,"🙌":2,"🥴":1,"🌞":1,"🌊":1,"🌌":1},"trailConditions":{"Flooded":2,"Icy":1,"Off trail":1,"Blowdown":1,"Bridge out":1,"Great!":1,"Muddy":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 3,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌲":1,"😫":2,"🌼":2,"🌌":1,"🌞":1,"🦝":1,"💯":1,"🐕":1,"🐻":1},"trailConditions":{"Bridge out":2,"Off trail":2,"No shade":2,"Icy":2,"Closed":1,"Bugs":1,"Private property":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 4,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🆒":1,"🐕":1,"🌌":1,"⛺":1,"🌞":1},"trailConditions":{"Over grown":1,"Bugs":2,"Private property":1,"Bridge out":2,"Great!":1,"Off trail":1,"Snow":1,"Closed":1,"Blowdown":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 5,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🗑️":1,"❤️":1,"🍺":1,"🌇":2,"🌞":1,"🔥":1,"👍":1},"trailConditions":{"Bugs":1,"Blowdown":1,"Snow":2,"Icy":1,"Rocky":1,"Muddy":1,"Over grown":2,"Great!":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 6,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"😫":1,"🎉":1,"🐕":1,"🐾":2,"🐺":1,"⛺":1,"🆒":1,"🌞":1},"trailConditions":{"Muddy":2,"Blowdown":1,"Closed":3,"Snow":3,"Icy":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 7,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":2,"🗑️":1,"🍺":1,"🌊":1,"🌄":1,"💯":1,"🌼":1,"⛺":1,"🙌":1,"🌡️":1,"👍":1,"🌋":1},"trailConditions":{"Flooded":1,"Off trail":2,"No shade":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 8,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":2,"🙌":1,"🌇":1,"🦌":1,"🐕":1,"🌊":1,"🚵":1,"💪":1,"💯":1},"trailConditions":{"Fee":3,"Private property":1,"Blowdown":1,"Muddy":1,"Bridge out":1,"Great!":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 9,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🚵":1,"🦌":1,"🐺":1,"🏔️":1},"trailConditions":{"Over grown":2,"Snow":1,"Rocky":2,"Blowdown":2,"Muddy":1,"No shade":1,"Off trail":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 10,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"👍":3,"💩":1,"🎉":1,"🌇":2,"🍺":3,"❤️":1,"🌊":1},"trailConditions":{"Icy":1,"Scramble":1,"Fee":1,"Rocky":1,"Bugs":1,"Private property":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 11,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":2,"💪":1,"🎉":1,"🙌":2,"🌌":1,"🌊":1,"🚵":1,"🌄":1},"trailConditions":{"Muddy":3,"Snow":2,"Flooded":1,"Great!":1,"Icy":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 12,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":3,"🌡️":2,"🐕":1,"😫":1,"🌊":1,"🌌":2,"🌋":1,"👍":1,"🌄":1},"trailConditions":{"Scramble":1,"Icy":1,"Snow":2,"Blowdown":1,"Flooded":1,"Fee":1,"Great!":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 13,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🦝":1,"⛺":1,"🌇":1,"🗑️":1,"🆒":1,"💪":1,"🐕":1},"trailConditions":{"Private property":2,"Closed":1,"Off trail":1,"Flooded":1,"Bugs":2,"Icy":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 14,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🌊":2,"🌄":2,"💩":1,"🗑️":1,"💯":1,"🌲":1,"🌞":1},"trailConditions":{"Flooded":1,"Scramble":2,"Bridge out":1,"Bugs":1,"Private property":1,"Closed":1,"Over grown":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 15,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🌡️":1,"🌲":2,"🦝":1,"⛺":1,"👍":1,"🐾":1,"🌼":1,"🎉":1},"trailConditions":{"Bridge out":2,"Icy":2,"Muddy":1,"Fee":1,"Scramble":2,"Rocky":1,"Closed":1,"Private property":1,"Off trail":1,"No shade":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 16,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🦝":1,"🍺":1,"🐺":1,"🏔️":1,"🔥":1,"💪":2},"trailConditions":{"Snow":1,"Icy":1,"Flooded":1,"Closed":2,"Fee":1,"Bridge out":1,"Muddy":1,"Private property":2,"Rocky":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 17,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🦌":1,"🌊":1,"🚵":1,"❤️":1,"🎉":1,"🐻":1},"trailConditions":{"Scramble":2,"Blowdown":1,"Rocky":1,"Great!":1,"Icy":1,"Off trail":1,"Flooded":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 18,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🎉":2,"🙌":1,"🌲":1,"💪":1,"⛺":1,"🆒":1},"trailConditions":{"Muddy":1,"Rocky":1,"Bugs":1,"Snow":1,"Scramble":1,"Bridge out":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 19,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":1,"🌌":1,"💩":1,"🌞":2,"🌄":2,"🙌":2,"🗑️":1,"🍺":1,"🌋":1},"trailConditions":{"Muddy":2,"Private property":2,"Off trail":1,"Bugs":2,"Scramble":2,"Blowdown":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 20,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":2,"🗑️":1,"🌲":1,"🐕":1,"💯":1,"🐾":1,"🌋":1,"🌇":1,"⛺":1},"trailConditions":{"Snow":2,"Closed":1,"Off trail":1,"Over grown":2,"Great!":2,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 21,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"💯":2,"🌼":1,"🌌":1,"🥴":3,"👍":1,"🌊":1,"🌋":1,"🌡️":1,"🆒":1,"🌲":1},"trailConditions":{"Closed":3,"Scramble":1,"Private property":2,"Snow":1,"Bugs":1,"Over grown":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 22,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🦌":1,"⛺":1,"🌞":1,"🌄":1,"💯":1,"🌋":1,"🌲":1,"🆒":1},"trailConditions":{"Flooded":2,"Snow":2,"Muddy":1,"Great!":1,"Over grown":2,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 23,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":3,"💯":1,"🏔️":1,"🐻":1,"👍":1,"🙌":1,"😫":1,"🌡️":1},"trailConditions":{"Rocky":1,"Off trail":1,"Bridge out":1,"Icy":1,"Closed":2,"Flooded":1,"Scramble":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 24,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌇":1,"🙌":1,"💪":1,"🐻":1,"🌄":1,"💩":1,"🆒":1,"🗑️":1,"🚵":1,"⛺":1},"trailConditions":{"Icy":4,"Scramble":1,"Closed":1,"Bugs":1,"Fee":2,"Private property":1,"Snow":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 25,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🌡️":1,"💩":1,"💯":1,"🐾":2,"🗑️":1,"🍺":1,"🙌":1,"😫":2,"🦌":1,"🏔️":1},"trailConditions":{"Bugs":1,"Bridge out":1,"Great!":1,"No shade":1,"Closed":1,"Snow":1,"Blowdown":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 26,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":2,"💩":2,"🐾":1,"🍺":1,"😫":2,"🐕":1,"❤️":1,"🌡️":2,"🌼":1,"🎉":1,"🙌":1},"trailConditions":{"Blowdown":1,"Off trail":1,"Scramble":3,"Private property":2,"Icy":2,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 27,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🎉":1,"🌲":1,"🏔️":2,"🌡️":1,"🗑️":1,"🌊":1,"⛺":1,"🔥":1,"🌞":1,"👍":1,"🌌":1},"trailConditions":{"Fee":1,"Over grown":1,"Blowdown":1,"Snow":3,"Private property":2,"Muddy":2,"Rocky":2,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 28,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🍺":1,"🥴":1,"💩":1,"🌡️":1,"🦌":1,"🚵":1,"💯":2,"👍":1,"❤️":1,"🔥":1},"trailConditions":{"Flooded":2,"Bridge out":1,"Over grown":1,"Rocky":1,"Scramble":1,"Icy":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 29,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🐻":1,"💩":1,"🎉":1,"🆒":1,"🥴":1,"🌊":1},"trailConditions":{"Off trail":2,"Rocky":2,"Bugs":1,"Great!":1,"No shade":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 30,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🎉":1,"🙌":2,"🐕":1,"💯":1,"🌼":1},"trailConditions":{"Over grown":2,"Great!":1,"Icy":2,"Muddy":1,"No shade":1,"Scramble":3,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 31,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🌄":2,"🐺":1,"🐕":1,"🐻":1,"💪":1,"🗑️":1,"🌋":1,"🙌":1,"🌼":1},"trailConditions":{"No shade":2,"Closed":1,"Icy":1,"Muddy":2,"Over grown":1,"Bugs":2,"Bridge out":1,"Fee":1,"Flooded":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 32,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"💩":1,"👍":1,"💪":1,"🏔️":1,"⛺":1,"🥴":1,"🌲":1,"💯":1,"🦝":1},"trailConditions":{"Over grown":1,"Flooded":2,"Off trail":1,"Closed":2,"Snow":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 33,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🐾":1,"🐻":1,"🎉":2,"💪":1,"🌊":2},"trailConditions":{"Scramble":1,"Flooded":2,"Great!":1,"Private property":1,"Closed":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 34,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🙌":1,"🌋":1,"🐻":1,"🌊":1,"🎉":1,"🌲":1,"🥴":1},"trailConditions":{"Fee":1,"No shade":1,"Snow":1,"Bugs":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 35,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🐕":1,"🆒":1,"🙌":1,"🚵":3,"🌌":1,"🐾":1},"trailConditions":{"Closed":2,"Off trail":1,"Over grown":1,"Icy":2,"Flooded":2,"Scramble":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 36,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":2,"😫":2,"🦌":2,"🔥":2,"🐕":1,"🚵":1,"🙌":1,"🐻":1},"trailConditions":{"Great!":1,"Off trail":1,"Private property":1,"Muddy":1,"Bugs":1,"Scramble":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 37,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🌇":1,"🍺":1,"🗑️":1,"❤️":1,"🥴":1,"⛺":1,"🐺":1},"trailConditions":{"Bridge out":1,"Over grown":1,"Scramble":1,"No shade":1,"Off trail":1,"Rocky":1,"Icy":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 38,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":1,"😫":2,"🦝":1},"trailConditions":{"Blowdown":2,"Great!":3,"Private property":1,"Off trail":1,"Bridge out":1,"Bugs":1,"Icy":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 39,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🐕":1,"⛺":1,"🌌":2,"🔥":1,"🗑️":1,"🌋":1,"🏔️":1,"😫":1,"🍺":1},"trailConditions":{"Icy":3,"Snow":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 40,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🏔️":2,"💪":1,"🥴":2,"🍺":1,"👍":1,"🗑️":1,"🌇":1},"trailConditions":{"Great!":1,"Blowdown":2,"Bugs":1,"Flooded":1,"Closed":2,"No shade":1,"Snow":1,"Private property":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 41,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"❤️":1,"🌄":1,"💪":1,"🐻":1,"🗑️":1,"🐾":1,"👍":1,"🌌":1},"trailConditions":{"Rocky":2,"Snow":1,"Icy":1,"Scramble":1,"No shade":1,"Flooded":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 42,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"💯":1,"🦝":1,"🐺":1,"❤️":1,"🌼":1,"👍":1},"trailConditions":{"Closed":1,"Bugs":3,"Fee":2,"Snow":1,"Scramble":2,"Blowdown":3,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 43,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"❤️":1,"🎉":1,"🔥":1,"🐕":1,"🍺":1,"🌡️":1,"🥴":1,"🌊":1,"🌄":1},"trailConditions":{"Over grown":2,"Snow":1,"Private property":2,"Muddy":1,"Bugs":1,"Closed":1,"Blowdown":1,"Great!":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 44,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌼":1,"🌄":1,"🌡️":1,"🔥":1,"🦌":1,"🗑️":1,"🌊":1,"💯":1,"💩":1},"trailConditions":{"Fee":2,"Blowdown":1,"Bridge out":1,"Bugs":1,"Rocky":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 45,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"🐕":1,"😫":2,"🍺":1,"🌄":1},"trailConditions":{"Snow":2,"Icy":1,"Fee":1,"Off trail":1,"Great!":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 46,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":2,"🎉":1,"🌲":1,"🗑️":1,"🍺":1},"trailConditions":{"Over grown":1,"Great!":3,"Snow":1,"Scramble":1,"Fee":1,"No shade":1,"Muddy":1,"Private property":1,"Closed":1,"Flooded":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 47,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💯":2,"🌇":1,"🐻":1,"🗑️":1,"🌼":1},"trailConditions":{"Flooded":1,"Closed":2,"Icy":4,"Bridge out":1,"Fee":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 48,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🦌":1,"🌌":1,"🔥":1,"🌄":1,"😫":1,"🐾":1},"trailConditions":{"Bugs":2,"Blowdown":1,"Scramble":1,"Private property":3,"Muddy":1,"Icy":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 49,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"🌋":2,"🌼":1,"🌲":1,"🆒":1,"🔥":3,"🌌":1,"🐻":1,"🦝":1,"🐕":1,"🚵":1},"trailConditions":{"Closed":1,"Scramble":1,"Private property":1,"Off trail":1,"Snow":1,"Bugs":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 50,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":2,"🌋":1,"👍":1},"trailConditions":{"Off trail":1,"Scramble":1,"Great!":1,"Icy":1,"Private property":1,"Blowdown":1,"Closed":1,"Bugs":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 51,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🦝":1,"🌼":1,"🐺":1,"💪":1,"💯":1,"🌞":1},"trailConditions":{"Great!":1,"Blowdown":1,"No shade":1,"Icy":1,"Muddy":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 52,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🏔️":1,"🍺":1,"🌊":1,"😫":1},"trailConditions":{"Flooded":1,"Off trail":1,"Blowdown":2,"Rocky":2,"No shade":1,"Closed":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 53,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"❤️":1,"🌞":1,"🦌":1,"🦝":1,"🌋":1,"🌲":1,"🌼":1},"trailConditions":{"Icy":1,"Off trail":1,"Bridge out":1,"Bugs":1,"Great!":2,"Blowdown":2,"Over grown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 54,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"🐻":1,"🙌":1,"🔥":1},"trailConditions":{"Private property":2,"Rocky":2,"No shade":2,"Closed":3,"Snow":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 55,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"👍":1,"🐾":1,"🗑️":1,"🌄":1,"💪":1,"🍺":1},"trailConditions":{"Muddy":1,"Bugs":1,"Scramble":1,"Icy":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 56,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":1,"⛺":1,"🌲":1,"🆒":1,"🦌":2,"🙌":1,"🎉":1,"🔥":1,"😫":1,"💯":1,"👍":1,"🌞":1},"trailConditions":{"Blowdown":1,"Flooded":1,"Scramble":1,"No shade":2,"Closed":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 57,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🌲":1,"🍺":1,"👍":1,"🌊":1,"🎉":1,"🦌":2},"trailConditions":{"Off trail":1,"Bugs":1,"Rocky":1,"Muddy":1,"Closed":2,"Bridge out":1,"Great!":1,"Blowdown":1,"Private property":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 58,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🌌":1,"💪":2,"💩":1,"🌲":1,"🙌":1,"🍺":1,"👍":1,"🐾":1},"trailConditions":{"Private property":1,"Bridge out":1,"Scramble":2,"Great!":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 59,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🏔️":1,"❤️":1,"🐾":1,"🌄":1,"🐕":1,"🌋":1,"🌼":1},"trailConditions":{"Bridge out":2,"Blowdown":1,"Flooded":1,"Fee":1,"Icy":1,"Rocky":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 60,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🙌":1,"🔥":1,"😫":1,"💯":1,"🦝":1,"👍":1,"🌋":1,"🆒":1,"🍺":1},"trailConditions":{"Muddy":1,"Icy":1,"Rocky":1,"Fee":1,"Snow":1,"Scramble":3,"Blowdown":2,"Closed":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 61,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🥴":1,"🗑️":2,"🐾":1,"🌇":2,"🌞":1,"🌌":1,"🌲":1},"trailConditions":{"Rocky":2,"Over grown":1,"Great!":1,"Flooded":2,"Off trail":2,"No shade":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 62,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌌":1,"❤️":1,"🦌":1,"🆒":1,"🍺":1,"🙌":1,"💩":1,"🚵":1,"🥴":1,"🌇":1},"trailConditions":{"Flooded":1,"No shade":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 63,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"😫":2,"💯":2,"🚵":1,"🌞":1,"🐾":1,"🌊":1},"trailConditions":{"Blowdown":1,"Over grown":1,"Rocky":1,"Off trail":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 64,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":1,"🌡️":1,"🌇":1,"🐻":1,"🌞":2,"🍺":1,"🐕":1,"🗑️":1,"🌊":1,"🥴":1},"trailConditions":{"Snow":1,"Off trail":1,"Private property":1,"Closed":2,"Flooded":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 65,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":2,"🌌":1,"💩":1,"🐕":1,"❤️":1,"🐺":1,"🌞":1},"trailConditions":{"Muddy":1,"Off trail":2,"Blowdown":1,"Bridge out":1,"Scramble":1,"Bugs":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 66,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":2,"🌇":1,"🍺":1,"🐻":1,"🐺":2,"🥴":1,"🗑️":1,"🦌":1,"🆒":1,"🌲":1},"trailConditions":{"Great!":1,"Snow":1,"Bugs":1,"Fee":1,"Closed":1,"Muddy":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 67,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"👍":1,"🌲":1,"🌋":1,"💪":1,"🌊":1,"🌼":1},"trailConditions":{"Scramble":1,"Blowdown":1,"Fee":1,"Over grown":1,"Off trail":1,"Flooded":1,"Rocky":1,"No shade":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 68,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🥴":1,"🍺":1,"🆒":1,"💩":1},"trailConditions":{"Muddy":1,"Scramble":1,"Off trail":3,"Bugs":1,"Snow":1,"Icy":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 69,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"🔥":1,"🐻":1,"🆒":1,"🥴":1,"💯":1,"🚵":1,"🗑️":1,"😫":1,"🌼":1},"trailConditions":{"Blowdown":1,"Rocky":1,"Flooded":1,"No shade":1,"Private property":1,"Bridge out":2,"Great!":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 70,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":2,"🦝":2,"🎉":1,"🚵":1,"🌄":1,"🐕":1,"🌞":1,"🐻":1},"trailConditions":{"Off trail":1,"Snow":2,"Closed":1,"No shade":2,"Blowdown":1,"Flooded":1,"Bridge out":3,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 71,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🐺":1,"🌲":1,"🐻":3,"🌞":1,"🏔️":1,"❤️":1,"🆒":1,"🚵":1,"🥴":1,"🦌":1,"💯":1},"trailConditions":{"Great!":2,"Fee":1,"Private property":1,"Off trail":1,"Closed":2,"Snow":1,"Rocky":1,"Blowdown":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 72,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"😫":1,"🏔️":1,"🦝":1},"trailConditions":{"Closed":1,"Over grown":1,"Scramble":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 73,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":2,"🔥":1,"🦝":1,"🐻":1,"🎉":1,"🌲":1},"trailConditions":{"Muddy":2,"Bridge out":1,"Blowdown":2,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 74,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":1,"🌡️":1,"💪":1,"🦝":1,"🔥":1,"🦌":1,"🗑️":1},"trailConditions":{"Scramble":1,"Off trail":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 75,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🐾":1,"🌌":1,"💯":1,"🌇":1,"🐕":1,"🆒":2,"🌡️":1,"🦌":1},"trailConditions":{"Bridge out":2,"Off trail":2,"Over grown":2,"Private property":1,"Scramble":1,"Muddy":1,"Great!":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 76,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🌋":1,"🗑️":1,"🌇":1},"trailConditions":{"Bridge out":2,"Rocky":2,"Bugs":1,"Muddy":1,"Blowdown":2,"Closed":1,"Snow":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 77,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🎉":2,"🍺":1,"🌲":1,"🆒":1,"🐕":1,"🥴":3,"🦌":1,"🐺":1,"🔥":1},"trailConditions":{"Icy":3,"Fee":2,"Snow":1,"Flooded":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 78,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":2,"🌋":2,"🌊":1,"🐾":1,"🌞":1,"🆒":1,"🐺":1},"trailConditions":{"Bridge out":1,"Icy":3,"Scramble":1,"Over grown":2,"Snow":1,"Great!":1,"Muddy":2,"Bugs":1,"Closed":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 79,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":3,"🆒":1,"🌲":1,"💯":1},"trailConditions":{"Rocky":1,"Over grown":1,"Scramble":1,"Great!":2,"Icy":1,"Bugs":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 80,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":2,"🆒":1,"🥴":1,"🦌":1,"🌌":1,"🌄":1},"trailConditions":{"Over grown":2,"No shade":1,"Off trail":3,"Blowdown":1,"Fee":2,"Muddy":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 81,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🐺":1,"🌡️":1,"🍺":2,"💪":1,"💩":1,"🔥":1,"🙌":1,"❤️":2},"trailConditions":{"Scramble":1,"Fee":1,"Flooded":2,"Muddy":1,"Bugs":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 82,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🆒":1,"💯":1,"🌄":1,"🦝":1,"🌇":1,"🐕":1,"🦌":1,"🐺":1,"🗑️":1,"🐾":1},"trailConditions":{"Bugs":2,"Private property":1,"No shade":2,"Great!":1,"Fee":2,"Blowdown":1,"Snow":2,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 83,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"❤️":1,"🌋":1,"💩":1,"👍":1,"🐺":1,"⛺":1,"🔥":1,"🌲":2,"🦝":1},"trailConditions":{"Bridge out":2,"Icy":1,"Blowdown":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 84,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🌄":1,"💩":1,"👍":1,"❤️":2,"💯":1,"🥴":1,"🔥":1,"🐺":1,"😫":1},"trailConditions":{"Icy":2,"Over grown":2,"Closed":1,"Blowdown":1,"Bugs":1,"Off trail":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 85,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💯":1,"🗑️":1,"🐕":1,"🎉":1,"🌼":1,"🆒":1,"🍺":1,"🙌":1,"🥴":1,"🌊":1,"🌞":1},"trailConditions":{"Icy":1,"Closed":3,"Private property":1,"Great!":1,"Flooded":1,"Snow":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 86,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🏔️":2,"💪":1,"🎉":1,"👍":1,"🌄":1,"🌊":1,"🌡️":2,"🔥":1,"🌌":1},"trailConditions":{"Snow":2,"Blowdown":2,"Flooded":1,"Closed":1,"Rocky":1,"No shade":1,"Private property":2,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 87,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":3,"👍":1,"🌋":1,"🌡️":2,"🚵":1,"🐾":1,"🦌":1,"🌇":1,"🔥":1,"😫":1},"trailConditions":{"Flooded":2,"Private property":1,"Snow":2,"Closed":2,"Great!":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 88,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🌼":1,"🌄":1,"🌋":1,"🆒":1},"trailConditions":{"Snow":1,"Closed":1,"Muddy":2,"Blowdown":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 89,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💯":2,"🔥":1,"💪":1,"⛺":1,"🌌":1,"🏔️":1,"🐾":1,"🌼":1,"🌞":1,"👍":1},"trailConditions":{"Off trail":1,"Flooded":2,"No shade":2,"Closed":1,"Private property":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 90,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"❤️":2,"🌞":1,"🚵":1,"💩":1,"🏔️":1,"🌄":1,"🌡️":1,"💪":1,"🎉":1},"trailConditions":{"Great!":2,"Over grown":1,"Muddy":1,"Blowdown":1,"Icy":1,"Off trail":1,"Bugs":1,"Fee":1,"Bridge out":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 91,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"💩":1,"🌇":2,"🌄":1,"💪":1,"🆒":1,"🐾":1,"🌼":1},"trailConditions":{"Muddy":1,"Blowdown":1,"Icy":1,"Bridge out":1,"Snow":1,"Flooded":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 92,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":2,"🎉":1,"💯":1,"🦌":1,"🌊":1,"🌇":1,"💪":1,"🌲":1,"💩":1,"⛺":1},"trailConditions":{"Flooded":1,"No shade":1,"Private property":1,"Great!":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 93,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🌄":1,"🌊":1,"🍺":1,"🌞":1},"trailConditions":{"Blowdown":1,"Scramble":1,"Snow":1,"Rocky":1,"Flooded":1,"Bridge out":1,"Over grown":1,"Private property":1,"Muddy":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 94,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"💯":2,"🐺":1,"🌲":1,"🥴":3,"❤️":1,"💩":1,"⛺":2,"🦌":1,"🙌":1},"trailConditions":{"Snow":1,"Private property":1,"Blowdown":1,"Muddy":2,"Flooded":2,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 95,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🐻":1,"🚵":2,"💩":1,"🦝":1,"🐺":1,"🗑️":1,"⛺":1},"trailConditions":{"Great!":1,"Scramble":1,"Icy":1,"Closed":2,"Blowdown":1,"Bugs":1,"Bridge out":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 96,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":2,"🙌":2,"🐻":1,"🐺":1,"🚵":2,"💪":1,"🌌":1},"trailConditions":{"Bugs":2,"Flooded":2,"Bridge out":1,"Great!":1,"Scramble":1,"Blowdown":1,"Fee":1,"Snow":1,"Private property":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 97,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":3,"🌄":1,"🏔️":2,"⛺":1,"🌡️":1,"🦝":1,"🌼":1,"🎉":1,"😫":1,"🥴":1},"trailConditions":{"Flooded":1,"Scramble":1,"Blowdown":1,"Muddy":1,"Icy":2,"Fee":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 98,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":1,"🌌":1,"💩":2,"🎉":1,"💯":1,"🦌":1,"🥴":1},"trailConditions":{"Bugs":1,"Rocky":1,"Scramble":2,"Bridge out":1,"Muddy":2,"Blowdown":1,"Off trail":1,"No shade":1,"Great!":1,"Over grown":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 99,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":2,"🥴":1,"🍺":1,"💯":2,"🦌":1,"🐾":1,"🌲":1,"🌇":2,"🗑️":1},"trailConditions":{"Muddy":1,"Blowdown":1,"Off trail":1,"Closed":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 100,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":2,"🏔️":1,"💪":1,"🌄":1,"💩":1},"trailConditions":{"Off trail":1,"Bridge out":1,"Over grown":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 101,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"🗑️":1,"🌼":1,"🆒":1,"🐺":1,"🌊":1,"👍":1,"🌡️":1,"🦌":1},"trailConditions":{"Off trail":2,"Bugs":1,"No shade":1,"Rocky":3,"Private property":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 102,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💯":1,"😫":1,"🗑️":1,"🌌":1,"❤️":2},"trailConditions":{"Fee":2,"Off trail":2,"Private property":1,"Muddy":1,"Blowdown":2,"Bugs":1,"Closed":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 103,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"😫":3,"🙌":1,"🏔️":1,"🌲":1,"🆒":1},"trailConditions":{"Bridge out":1,"Closed":2,"No shade":2,"Over grown":2,"Rocky":1,"Flooded":2,"Muddy":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 104,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🚵":2,"🐻":1,"🍺":1,"🌌":1},"trailConditions":{"Muddy":2,"Flooded":1,"Blowdown":2,"Bridge out":1,"Over grown":1,"Closed":1,"Icy":2,"Bugs":2,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 105,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🏔️":1,"🌞":2,"👍":1,"🐻":2,"🥴":2,"🎉":1},"trailConditions":{"Fee":1,"Rocky":1,"Scramble":2,"Icy":1,"Bugs":1,"Private property":1,"Over grown":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 106,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🌄":1,"👍":1,"🌌":1},"trailConditions":{"Over grown":1,"Blowdown":1,"Scramble":1,"Fee":1,"Icy":2,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 107,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌊":1,"🌄":1,"🥴":2,"🐕":1,"🙌":1,"🍺":1},"trailConditions":{"Off trail":1,"Scramble":2,"Private property":1,"Over grown":1,"Snow":2,"Bugs":1,"No shade":1,"Muddy":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 108,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🌞":1,"🥴":1,"🏔️":1,"🐾":1,"🐺":1,"🆒":2,"🌡️":1},"trailConditions":{"Muddy":2,"Bugs":2,"Rocky":1,"Blowdown":2,"Icy":1,"Over grown":1,"Private property":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 109,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌌":1,"❤️":1,"🙌":1,"🚵":1},"trailConditions":{"No shade":1,"Scramble":2,"Great!":1,"Bridge out":1,"Over grown":1,"Off trail":1,"Snow":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 110,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🌡️":2,"🏔️":1,"🌄":1,"🐺":1,"🐾":1,"😫":1,"🦝":1},"trailConditions":{"Muddy":2,"Bridge out":2,"Scramble":1,"Closed":1,"Icy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 111,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🌞":1,"🐺":1,"💩":2,"👍":1,"🦝":1},"trailConditions":{"Private property":2,"Rocky":1,"Fee":1,"Snow":1,"Scramble":1,"No shade":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 112,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌌":2,"🍺":1,"⛺":1,"👍":2,"🌡️":1,"❤️":1},"trailConditions":{"Bridge out":1,"Muddy":3,"Fee":1,"Snow":2,"Over grown":1,"Off trail":1,"No shade":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 113,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":1,"🌞":1,"🌇":1,"🐕":1,"🐺":2,"🙌":1,"💪":1},"trailConditions":{"Fee":2,"Closed":1,"Bridge out":2,"Icy":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 114,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🦝":1,"💪":1,"🐻":1,"💩":1,"👍":1,"😫":1,"🔥":1,"🌡️":1},"trailConditions":{"Private property":1,"Muddy":1,"Scramble":1,"No shade":2,"Rocky":1,"Flooded":1,"Great!":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 115,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🌼":1,"🙌":1,"⛺":1,"🐾":1,"🐺":1},"trailConditions":{"Bridge out":3,"Scramble":1,"Rocky":1,"Closed":1,"Fee":1,"Great!":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 116,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌌":1,"😫":1,"🌋":1,"🌄":1,"🏔️":1,"🌞":1},"trailConditions":{"Private property":2,"Snow":2,"Closed":2,"Fee":1,"Over grown":1,"Rocky":1,"Bugs":1,"Off trail":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 117,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":3,"🐾":1,"🚵":1,"🌡️":1,"🦌":1,"🔥":1,"🏔️":1},"trailConditions":{"Icy":1,"Off trail":1,"No shade":1,"Great!":2,"Snow":1,"Muddy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 118,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🌇":1,"🎉":1,"😫":1,"🐻":1,"🌞":1,"❤️":1,"💩":2,"👍":1,"🐕":1,"🌲":1},"trailConditions":{"Blowdown":1,"Bugs":1,"Private property":2,"Closed":1,"Bridge out":1,"No shade":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 119,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":2,"💯":1,"👍":1,"🎉":2,"🐺":1,"🍺":1,"🐻":1,"🐕":1},"trailConditions":{"Flooded":1,"Snow":2,"Over grown":2,"Icy":1,"Muddy":1,"Bugs":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 120,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":2,"🌌":1,"🌄":1,"🙌":1,"🐺":1,"🌼":2,"😫":1,"🌇":1},"trailConditions":{"Snow":2,"Icy":1,"Rocky":2,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 121,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🌼":1,"🥴":1,"🌊":1,"🙌":2,"🦝":1,"🦌":1},"trailConditions":{"Over grown":1,"Rocky":1,"Off trail":1,"Closed":1,"Bugs":1,"Great!":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 122,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"💪":1,"🌞":1,"🐕":2,"🥴":1,"🍺":1,"🌋":1,"🌡️":1,"🦌":1,"🔥":1},"trailConditions":{"Icy":1,"Over grown":2,"Scramble":1,"Off trail":1,"Muddy":2,"Private property":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 123,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🌋":1,"🐻":1,"❤️":1,"🌇":2,"🌊":1,"🎉":1,"🐾":1},"trailConditions":{"Bugs":1,"Closed":2,"Icy":1,"Muddy":2,"Scramble":1,"Flooded":1,"Great!":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 124,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🎉":1,"🐻":1,"🌊":1,"🌇":1,"🗑️":1,"❤️":2,"🌄":1,"🌲":1,"🐾":1},"trailConditions":{"Closed":1,"Private property":1,"Flooded":3,"Scramble":2,"Icy":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 125,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🌇":1,"🥴":2,"🌊":2,"💪":2,"❤️":1,"🆒":2,"🌄":1,"🌞":1},"trailConditions":{"Bridge out":1,"Blowdown":1,"No shade":2,"Off trail":1,"Flooded":1,"Great!":1,"Bugs":3}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 126,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🐻":1,"🌞":1,"❤️":1,"🦝":1,"🦌":1,"🌲":1,"🥴":1,"🌋":2,"🏔️":1,"💩":1},"trailConditions":{"Private property":2,"Scramble":1,"Blowdown":1,"No shade":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 127,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🚵":1,"🦝":2,"🌲":2,"🏔️":1,"🌌":1,"😫":1,"❤️":1,"🆒":1},"trailConditions":{"Muddy":1,"Over grown":1,"Closed":1,"Rocky":1,"Bugs":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 128,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"👍":1,"❤️":1,"🐺":1,"🆒":2,"🐻":1,"🌞":2,"😫":1,"💯":1},"trailConditions":{"Fee":2,"Snow":1,"Off trail":1,"Closed":3,"Private property":1,"Rocky":1,"Icy":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 129,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":2,"🙌":1,"🌞":1,"🌇":1,"🌊":1,"💯":1},"trailConditions":{"Snow":2,"Rocky":1,"Private property":1,"No shade":1,"Great!":1,"Over grown":1,"Closed":1,"Blowdown":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 130,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🐕":1,"🎉":1,"🆒":1,"😫":1},"trailConditions":{"Flooded":1,"Icy":2,"Scramble":1,"Over grown":1,"Snow":1,"Bugs":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 131,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":2,"🌡️":1,"🐺":1,"🔥":2,"🌲":1,"🐕":1,"🌋":1,"🗑️":1,"🥴":1},"trailConditions":{"Muddy":3,"Over grown":1,"Private property":1,"Rocky":2,"Closed":2,"Great!":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 132,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🌊":1,"🐻":2,"🌡️":1,"🌲":2,"🐕":1,"🎉":1},"trailConditions":{"Icy":1,"Rocky":2,"Muddy":1,"Great!":2,"Fee":2,"Over grown":1,"Private property":1,"Snow":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 133,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🦝":1,"😫":1,"🐾":2,"⛺":1,"🌄":1,"💯":1,"👍":1,"🦌":1},"trailConditions":{"Closed":2,"Fee":3,"Off trail":1,"Blowdown":1,"Rocky":1,"Icy":1,"Muddy":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 134,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🌡️":1,"🌼":1,"🐕":2,"🌞":1,"😫":1,"🌇":1,"❤️":1,"🆒":1,"🐻":1},"trailConditions":{"Bugs":2,"Great!":1,"No shade":1,"Closed":1,"Icy":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 135,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🌌":1,"🏔️":2,"🎉":1,"🌇":2,"🔥":2,"💯":1,"🆒":1},"trailConditions":{"Snow":1,"Blowdown":4,"Over grown":2,"Bugs":2,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 136,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":2,"😫":1,"💯":1,"🦌":2,"🚵":1,"🐾":1,"🎉":1,"❤️":1,"🌋":1},"trailConditions":{"Fee":1,"Muddy":2,"Flooded":3,"Icy":1,"Great!":2,"No shade":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 137,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🐺":1,"🌲":1,"🦝":1,"⛺":1,"🌋":1,"🌞":1},"trailConditions":{"Closed":2,"Great!":1,"Off trail":1,"Fee":2,"Flooded":1,"Muddy":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 138,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"😫":2,"🔥":1,"🌄":1,"🌇":1,"🦝":1,"🚵":1,"🌼":1,"🦌":1},"trailConditions":{"Bugs":2,"Snow":1,"Off trail":2,"Muddy":1,"Flooded":1,"Closed":1,"Great!":1,"Over grown":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 139,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"💪":1,"🦌":1,"🌇":2,"🌞":1,"🦝":1,"🌼":1},"trailConditions":{"Closed":2,"Flooded":2,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 140,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌼":1,"⛺":1,"🌲":2,"🐺":1,"🆒":1,"🗑️":1,"🌇":1,"💩":1},"trailConditions":{"Flooded":2,"Private property":1,"Great!":1,"No shade":1,"Scramble":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 141,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"💪":1,"😫":1,"🌞":1,"🌡️":1,"🐻":1,"💩":1,"🦌":1},"trailConditions":{"Blowdown":1,"Over grown":1,"Off trail":1,"Rocky":1,"Fee":1,"No shade":1,"Snow":1,"Scramble":1,"Closed":2,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 142,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🔥":2,"🌞":1,"🌄":1,"🌌":1,"💪":1,"🏔️":1,"❤️":1,"🐾":1,"🐺":1,"🦝":1,"🐻":1},"trailConditions":{"Bridge out":3,"Icy":2,"Great!":1,"Rocky":1,"Off trail":1,"Snow":3,"Muddy":1,"Over grown":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 143,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"👍":2,"🗑️":1,"🥴":1,"🐾":1,"🌲":1,"🌌":1,"🙌":1,"😫":1,"🐺":1},"trailConditions":{"Fee":1,"Great!":2,"Icy":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 144,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🌼":1,"🌋":1,"🚵":1,"🌌":1},"trailConditions":{"Muddy":1,"Private property":1,"Fee":1,"Bugs":1,"No shade":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 145,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🌋":1,"🥴":1,"🌡️":1,"🌊":1,"🍺":1},"trailConditions":{"Fee":1,"Rocky":1,"Snow":1,"Private property":1,"Closed":2,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 146,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🌲":1,"🦌":1,"🐻":2,"🐺":1,"🎉":1,"🆒":1,"❤️":1},"trailConditions":{"Scramble":1,"Closed":1,"Snow":1,"Over grown":1,"Rocky":2,"Great!":1,"Muddy":1,"Bugs":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 147,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🍺":1,"🦌":1,"🌲":1,"🌇":1,"🦝":1,"😫":1,"🥴":1,"💯":1,"🎉":2,"⛺":1},"trailConditions":{"Icy":1,"Scramble":1,"Great!":1,"Muddy":1,"Over grown":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 148,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":2,"💯":1,"🗑️":1,"🆒":1},"trailConditions":{"Icy":1,"Flooded":2,"Snow":1,"Blowdown":1,"Fee":1,"Over grown":1,"Bridge out":1,"Off trail":1,"Muddy":1,"Rocky":1,"Scramble":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 149,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"💪":2,"🏔️":1,"⛺":1,"🌄":1,"💯":1,"🗑️":1,"💩":1,"🦝":1,"🌇":1},"trailConditions":{"Blowdown":2,"Muddy":1,"Off trail":1,"No shade":1,"Scramble":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 150,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🌊":1,"🌋":1,"🌄":2,"🏔️":1,"🌌":2,"🌡️":1,"🌇":1,"⛺":1},"trailConditions":{"Flooded":1,"Muddy":2,"Great!":1,"Off trail":2,"Snow":1,"Icy":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 151,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"👍":1,"🔥":1,"🌄":2,"🌋":1,"🚵":1,"🌡️":1,"🙌":1},"trailConditions":{"Flooded":4,"Off trail":3,"Icy":1,"Snow":2,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 152,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌲":2,"🌇":2,"🍺":1,"💯":1,"🔥":1,"🗑️":1,"🌼":1,"🌡️":1},"trailConditions":{"Closed":2,"Bugs":2,"Flooded":1,"Private property":2,"Blowdown":1,"Icy":1,"Bridge out":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 153,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🌞":1,"🦌":1,"🌋":1,"👍":1,"🌌":1,"🏔️":1,"🍺":1},"trailConditions":{"Bridge out":1,"Private property":1,"Bugs":1,"Blowdown":2,"Great!":2,"Off trail":1,"Scramble":2,"Closed":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 154,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":3,"🌇":1,"🥴":1,"🚵":1,"🐕":1,"💪":1},"trailConditions":{"Closed":1,"Blowdown":1,"Bugs":1,"Rocky":1,"Great!":3,"Muddy":1,"Private property":1,"Flooded":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 155,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌞":1,"🥴":1,"🙌":1,"🐻":2,"⛺":1,"🐕":1,"🌄":1,"🌼":1},"trailConditions":{"Over grown":1,"Great!":2,"Blowdown":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 156,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🔥":1,"🦝":1,"🦌":1,"🌡️":1},"trailConditions":{"Over grown":4,"Fee":1,"Icy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 157,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🥴":2,"🌼":1,"👍":1,"🦝":1,"🐺":1,"🐕":1},"trailConditions":{"Rocky":1,"Bugs":1,"Private property":1,"Closed":1,"Muddy":1,"Off trail":1,"Fee":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 158,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"🎉":1,"🔥":1,"👍":1,"🐕":1},"trailConditions":{"Fee":2,"Flooded":1,"Blowdown":1,"Private property":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 159,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"💯":1,"💪":1,"🌄":1,"⛺":1,"🗑️":1,"🌊":1},"trailConditions":{"Snow":1,"Bridge out":1,"Flooded":1,"Rocky":1,"Private property":2,"Over grown":1,"Closed":1,"Muddy":1,"Icy":1,"Blowdown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 160,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌌":1,"🌇":1,"🏔️":1,"🎉":1,"🌋":1,"🦌":1,"❤️":1},"trailConditions":{"Great!":1,"Private property":1,"Bridge out":2,"Over grown":2,"Snow":1,"Icy":1,"Closed":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 161,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🦌":1,"😫":2,"⛺":1,"🌞":1,"🙌":1,"🚵":1,"🗑️":1,"🍺":1,"🐻":1,"💩":1,"🐺":1},"trailConditions":{"Blowdown":1,"Over grown":1,"Icy":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 162,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🌞":1,"🚵":1,"💯":1,"🎉":1,"🥴":2,"🦌":1,"🌌":1,"🗑️":1},"trailConditions":{"Over grown":2,"Fee":2,"Muddy":1,"Private property":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 163,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🙌":1,"🌞":2,"🔥":1,"🌇":1,"🌌":1,"🌊":1,"⛺":2,"🌼":1},"trailConditions":{"Flooded":1,"No shade":1,"Closed":1,"Fee":1,"Bugs":1,"Bridge out":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 164,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🌄":2,"❤️":2,"🎉":1,"🔥":1,"💯":1,"🦝":2,"🙌":1,"🦌":1,"🐻":1,"🚵":1,"🥴":1},"trailConditions":{"Scramble":1,"Private property":2,"Bugs":2,"Off trail":1,"Rocky":2,"Icy":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 165,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🌼":1,"🐾":1},"trailConditions":{"Great!":1,"Bridge out":1,"Snow":1,"Muddy":1,"Private property":1,"Scramble":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 166,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"💪":2,"🌌":1,"🙌":1,"🐻":1,"🌊":1,"🌇":1,"🏔️":1,"🐺":1,"🐕":1},"trailConditions":{"Fee":2,"No shade":1,"Bugs":1,"Muddy":2,"Private property":1,"Flooded":1,"Icy":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 167,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💪":2,"⛺":1,"💯":1,"❤️":1,"🌲":1,"🆒":1,"🐾":1,"👍":1,"🌊":1},"trailConditions":{"Blowdown":2,"Snow":1,"Closed":1,"No shade":2,"Flooded":1,"Bridge out":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 168,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌊":1,"🌄":1,"💩":1,"🐾":1,"❤️":1},"trailConditions":{"Rocky":4,"Bugs":1,"Fee":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 169,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":2,"🚵":1,"😫":1,"🐕":1,"💯":2,"🌞":1,"🐻":1,"⛺":1},"trailConditions":{"Rocky":1,"Private property":1,"Snow":2,"Great!":2,"Bugs":1,"Icy":1,"Muddy":2,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 170,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":3,"🐻":1,"🔥":1,"⛺":1},"trailConditions":{"Fee":1,"Bridge out":1,"Bugs":1,"Flooded":1,"Scramble":1,"Great!":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 171,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"❤️":1,"🌇":1},"trailConditions":{"Flooded":1,"Blowdown":2,"Closed":2,"Snow":1,"No shade":1,"Icy":1,"Scramble":1,"Over grown":1,"Bridge out":1,"Fee":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 172,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🌋":1,"🍺":1,"🌊":1,"💪":1,"🙌":1,"🆒":2,"🌌":1,"🌡️":1},"trailConditions":{"Private property":1,"Great!":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 173,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🏔️":1,"⛺":1,"😫":1,"🌊":2,"💩":1,"🐕":1,"🌼":1},"trailConditions":{"Muddy":1,"Private property":1,"Great!":1,"Over grown":1,"Bridge out":1,"Icy":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 174,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"🍺":1,"🐕":1,"🦌":2,"🚵":1},"trailConditions":{"Muddy":1,"Blowdown":1,"Great!":2,"Closed":1,"Private property":1,"Flooded":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 175,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🍺":1,"💩":1,"❤️":2,"🐻":1,"💪":1},"trailConditions":{"Muddy":1,"Great!":2,"Blowdown":1,"No shade":2,"Fee":2,"Over grown":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 176,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🦝":1,"🔥":3,"🌲":2,"🚵":1,"💪":2,"🌊":1},"trailConditions":{"Flooded":1,"Great!":1,"Bugs":1,"Icy":1,"Closed":2,"Fee":2,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 177,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"😫":2,"🍺":1,"🦝":1,"🌇":1,"🗑️":1,"🎉":1,"⛺":1,"❤️":1},"trailConditions":{"Flooded":2,"Great!":2,"Blowdown":2,"Fee":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 178,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌌":1,"🌋":1,"🌡️":1,"🆒":1,"🌊":1,"💪":1,"🎉":1},"trailConditions":{"Private property":3,"No shade":2,"Closed":1,"Blowdown":1,"Over grown":1,"Fee":1,"Scramble":1,"Icy":1,"Off trail":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 179,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":2,"🐾":2,"🍺":2,"🐻":1,"💩":2,"😫":1,"🌼":1,"🌄":1,"🚵":1,"🌊":1},"trailConditions":{"No shade":1,"Scramble":2,"Great!":1,"Snow":1,"Private property":1,"Muddy":1,"Off trail":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 180,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":2,"💪":1,"🏔️":2,"🌋":1,"👍":1},"trailConditions":{"Over grown":5,"Flooded":2,"Off trail":1,"Scramble":2,"Fee":1,"Great!":1,"Blowdown":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 181,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"💯":1,"🌼":1,"❤️":2,"👍":1,"🚵":1,"💪":2,"🌡️":2,"🏔️":1,"🙌":1},"trailConditions":{"Private property":2,"Muddy":1,"Scramble":2,"Closed":2,"Icy":1,"Rocky":1,"Bridge out":1,"No shade":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 182,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🌄":1,"🦝":1,"🐺":1,"🌌":1,"❤️":1,"🌞":1,"🗑️":1,"🆒":1,"🍺":1,"💯":1,"🐻":1},"trailConditions":{"Private property":1,"Fee":2,"Bugs":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 183,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":2,"🌼":2,"💩":2,"🌌":1,"🌇":1,"🆒":1,"🦝":1,"🐾":1,"😫":1,"🚵":1},"trailConditions":{"Fee":1,"Flooded":1,"Blowdown":1,"Private property":1,"Rocky":2,"Icy":1,"No shade":1,"Muddy":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 184,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🗑️":2,"🌇":1,"🙌":1,"🎉":2,"🌞":1},"trailConditions":{"Flooded":1,"Closed":1,"Off trail":3,"No shade":1,"Icy":1,"Bridge out":2,"Scramble":1,"Blowdown":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 185,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🌡️":1,"🏔️":1,"👍":1,"💯":1,"🙌":2,"🌇":1,"🐺":1,"🆒":1,"💪":1,"🦝":1,"🌞":1,"🐕":1},"trailConditions":{"Private property":2,"Icy":1,"Bridge out":1,"Over grown":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 186,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🚵":1,"🦌":1,"❤️":1,"🐺":1,"🌇":1,"🌋":2,"🍺":1,"🌞":1},"trailConditions":{"Fee":3,"Rocky":1,"Icy":1,"Scramble":1,"Off trail":1,"Great!":1,"Bugs":1,"Over grown":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 187,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🐻":1,"🌇":1,"🐕":1,"🆒":1,"🌊":1,"🌲":1},"trailConditions":{"Bridge out":1,"Off trail":2,"Closed":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 188,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🍺":1,"🆒":1,"👍":1,"🌄":1,"🌌":1,"🌇":1},"trailConditions":{"Bridge out":3,"Great!":1,"Blowdown":2,"Over grown":1,"Fee":1,"Rocky":1,"Off trail":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 189,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🙌":1,"🦝":1,"💩":2,"🌲":2,"🌡️":1,"🌼":1},"trailConditions":{"Snow":3,"Muddy":2,"No shade":2,"Blowdown":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 190,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🐻":1,"🌊":2,"🏔️":1,"❤️":1,"🌌":1,"🎉":1,"🌄":1,"🐺":1,"🦝":1},"trailConditions":{"Snow":1,"Rocky":1,"Great!":1,"No shade":2,"Scramble":1,"Flooded":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 191,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"🎉":1,"🐻":1,"⛺":1,"🌞":1,"💯":1,"🐾":1},"trailConditions":{"Bridge out":1,"Closed":1,"Snow":2,"Fee":1,"Icy":1,"Over grown":1,"Muddy":1,"Great!":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 192,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🌡️":1,"👍":1,"🆒":1,"💪":1,"🦌":1},"trailConditions":{"Rocky":1,"Bugs":2,"Private property":1,"Closed":2,"Muddy":1,"Scramble":2,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 193,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🌼":1,"🌌":2,"🌄":1,"🐕":1,"👍":1},"trailConditions":{"Blowdown":2,"No shade":1,"Over grown":1,"Closed":1,"Muddy":1,"Rocky":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 194,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🔥":1,"💪":1,"🐾":1,"🌞":1,"🌲":1},"trailConditions":{"Flooded":1,"Bugs":1,"Bridge out":1,"Muddy":1,"Fee":2,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 195,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":2,"🐾":1,"🆒":1,"🌼":1,"🎉":1,"💯":1,"🌄":1},"trailConditions":{"Rocky":2,"Blowdown":2,"Muddy":1,"Icy":2,"Bridge out":1,"Fee":2,"Snow":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 196,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"💯":1,"🐺":1,"🌊":2,"😫":1,"🐾":1,"🌡️":1,"🔥":1,"🌌":2},"trailConditions":{"Bridge out":1,"Great!":1,"Flooded":3,"Muddy":1,"Rocky":1,"Over grown":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 197,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":2,"💩":1,"😫":1,"🎉":1,"🌌":2,"🐺":1,"🐕":1,"💪":1,"❤️":1},"trailConditions":{"Scramble":1,"Bridge out":2,"Off trail":2,"Blowdown":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 198,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🦌":1,"🌇":1,"🌄":2,"🌋":1,"🆒":1,"🚵":1,"🗑️":1},"trailConditions":{"Rocky":1,"Scramble":2,"Off trail":2,"Great!":1,"Snow":1,"Fee":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 199,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🐻":1,"🍺":1,"🌇":1,"🌞":1,"🥴":1},"trailConditions":{"Off trail":1,"Great!":1,"No shade":1,"Muddy":1,"Scramble":2,"Flooded":1,"Bridge out":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 200,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🌇":1,"💯":1,"💪":1,"🚵":1,"👍":1,"🌲":1,"🆒":1,"🗑️":1,"🌡️":2,"🌞":1,"🔥":1},"trailConditions":{"Great!":1,"Icy":2,"Flooded":1,"Bridge out":3,"No shade":2,"Fee":2,"Bugs":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 201,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"😫":1,"🎉":1,"🦌":1,"🐻":1,"💩":1,"⛺":1},"trailConditions":{"Closed":1,"Snow":1,"Flooded":2,"Rocky":2,"Over grown":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 202,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"👍":1,"🔥":1,"💪":1,"🌌":1,"❤️":1,"🌇":2,"🌄":1,"🗑️":1},"trailConditions":{"Rocky":3,"Flooded":1,"No shade":1,"Over grown":1,"Blowdown":3,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 203,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🦝":2,"🦌":1,"🌇":1,"😫":1,"🍺":1,"💩":1},"trailConditions":{"Icy":1,"Closed":2,"Bridge out":1,"Fee":1,"Bugs":2,"Muddy":2,"Rocky":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 204,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🔥":1,"💪":1,"🦌":1},"trailConditions":{"Blowdown":1,"Off trail":1,"Flooded":1,"Muddy":2,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 205,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌌":1,"🆒":1,"😫":1,"🚵":1,"🐾":1},"trailConditions":{"No shade":2,"Great!":1,"Off trail":1,"Icy":1,"Over grown":2,"Scramble":1,"Bugs":1,"Blowdown":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 206,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🎉":1,"🌡️":1,"🌊":1,"🌄":1,"🚵":1,"🦝":1},"trailConditions":{"Closed":1,"No shade":1,"Rocky":3}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 207,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"💪":1,"🌞":1,"🦌":1,"🥴":1,"🌇":1,"🗑️":1,"🏔️":1},"trailConditions":{"Off trail":1,"Flooded":2,"No shade":1,"Great!":2,"Blowdown":1,"Scramble":1,"Closed":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 208,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🚵":1,"🌡️":1,"🌌":1,"🙌":1,"🐾":1,"🦝":1,"🌋":1,"🗑️":1},"trailConditions":{"No shade":2,"Icy":3,"Great!":2,"Muddy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 209,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":2,"🌌":1,"🙌":2,"🥴":1,"🌲":2,"🦝":1},"trailConditions":{"Scramble":1,"Great!":1,"Flooded":1,"Blowdown":2,"Muddy":1,"Bugs":1,"Closed":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 210,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🦝":1,"🆒":1,"🌋":2,"🐻":1,"🎉":1,"🌊":1,"❤️":1,"🏔️":1,"💩":1},"trailConditions":{"Bridge out":2,"Scramble":2,"Off trail":1,"Over grown":3,"Private property":1,"Closed":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 211,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🌡️":1,"🌇":2,"❤️":1,"🆒":1,"💯":2,"🌌":1,"👍":1},"trailConditions":{"Rocky":2,"Bridge out":1,"Flooded":1,"Scramble":1,"Off trail":1,"Blowdown":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 212,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"💯":1,"🆒":2,"🎉":1,"🌋":1,"⛺":1},"trailConditions":{"Icy":2,"Rocky":1,"Bugs":1,"Muddy":1,"Flooded":1,"Closed":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 213,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🐻":2,"🌞":1,"💯":1,"🌇":1,"🌡️":1,"🔥":1,"🌲":1,"🐺":1,"🌼":1,"🗑️":1,"🌌":1},"trailConditions":{"Scramble":1,"Off trail":1,"Bridge out":1,"Private property":2,"Blowdown":2,"Closed":2,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 214,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"💯":1,"🌋":2,"🐺":1,"🆒":1,"🌲":1,"🌼":1,"👍":1,"🌡️":1,"🐻":1,"🌇":1,"🦌":1},"trailConditions":{"Muddy":1,"No shade":2,"Scramble":1,"Fee":1,"Rocky":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 215,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"😫":2,"🐕":1,"💪":1,"🐾":1,"🔥":1,"🥴":1,"🍺":1},"trailConditions":{"Over grown":2,"Icy":1,"Great!":2,"Private property":3,"Scramble":1,"Blowdown":1,"Closed":1,"Rocky":2,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 216,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"⛺":1,"🌋":1,"🥴":1,"🌲":1,"🐻":1},"trailConditions":{"Closed":1,"Great!":2,"Scramble":2,"Bridge out":1,"Fee":1,"Rocky":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 217,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🐕":2,"😫":1,"💩":1,"👍":1,"🦝":1,"🌲":1,"🍺":1},"trailConditions":{"Blowdown":2,"Scramble":1,"Closed":1,"Snow":1,"Icy":1,"Bugs":2,"Muddy":2,"No shade":1,"Private property":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 218,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":3,"🦌":1,"🙌":1,"💩":2,"💯":2,"⛺":1,"🌄":1,"🥴":1},"trailConditions":{"Flooded":1,"Bridge out":1,"Private property":1,"Over grown":1,"No shade":1,"Closed":3,"Icy":1,"Snow":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 219,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🙌":1,"🦝":1,"🌄":2,"💩":2,"🚵":1,"🐻":1},"trailConditions":{"Bridge out":2,"Off trail":1,"Bugs":2,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 220,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🗑️":1,"💪":1,"🌊":1,"🍺":1,"🆒":1,"🌲":1},"trailConditions":{"Flooded":2,"Closed":2,"No shade":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 221,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌡️":2,"🌄":1,"🐕":1,"🥴":1,"🚵":2,"🗑️":1},"trailConditions":{"Flooded":3,"Muddy":3,"Snow":1,"Closed":2,"Fee":2,"Over grown":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 222,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"😫":1,"🌼":1,"🦌":1,"🌊":1,"🔥":1,"🆒":1,"💯":1,"🌞":1},"trailConditions":{"Icy":2,"Bridge out":1,"Fee":1,"Bugs":2,"Rocky":1,"Private property":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 223,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🌌":1,"🌲":1,"👍":1,"🥴":1,"🌇":1},"trailConditions":{"Bridge out":2,"Scramble":1,"Icy":1,"Flooded":1,"Bugs":1,"Private property":1,"Great!":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 224,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"💪":1,"🌌":2,"🌼":1,"🌞":1,"💯":1,"🌋":1,"🦌":1,"🍺":1,"👍":1,"🎉":2},"trailConditions":{"Off trail":1,"Private property":1,"Blowdown":1,"Muddy":1,"Bridge out":1,"Bugs":1,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 225,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":2,"🌼":1,"🐻":1,"🌇":1,"🏔️":1,"🌡️":1,"🦝":1,"🌋":1,"❤️":1},"trailConditions":{"Over grown":1,"Private property":1,"Blowdown":2,"Bugs":1,"Scramble":1,"Closed":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 226,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌲":1,"🐾":1,"🙌":1,"👍":1},"trailConditions":{"Fee":4,"Over grown":1,"Off trail":1,"Private property":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 227,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":2,"🐺":1,"⛺":1,"🐾":1,"💯":1,"🌌":1,"🌼":1},"trailConditions":{"No shade":1,"Fee":2,"Rocky":1,"Snow":1,"Bugs":1,"Private property":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 228,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🌲":2,"🌋":2,"🚵":1,"🙌":1,"💪":2,"❤️":1,"🐾":1,"🏔️":1,"🐻":1,"🌞":1,"🌡️":1},"trailConditions":{"Bugs":3,"Great!":1,"Blowdown":1,"Over grown":1,"Private property":1,"No shade":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 229,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🥴":2,"💩":1,"❤️":1,"💯":2,"🌄":2},"trailConditions":{"Great!":1,"Blowdown":1,"Off trail":1,"Over grown":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 230,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":2,"🎉":1,"🔥":1,"🦝":1,"🏔️":1,"💯":1,"🌊":1,"🥴":1},"trailConditions":{"Off trail":2,"Great!":1,"Bugs":1,"Scramble":2,"Rocky":2,"Flooded":2,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 231,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🌄":1,"🐾":1,"🚵":1,"🍺":1,"💪":1,"🌲":1,"🥴":1,"⛺":1,"🌇":1},"trailConditions":{"Snow":2,"Rocky":1,"Fee":1,"Bugs":2,"No shade":1,"Blowdown":2,"Flooded":2,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 232,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🐻":1,"🌇":1,"🌞":1,"💯":1,"🌌":1,"🆒":2,"💪":1},"trailConditions":{"Snow":1,"Off trail":1,"No shade":1,"Muddy":1,"Blowdown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 233,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🦌":1,"😫":1,"🐕":2,"🍺":1,"🌡️":1},"trailConditions":{"Snow":2,"Flooded":2,"Blowdown":1,"Private property":1,"Fee":1,"Over grown":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 234,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🙌":1,"🔥":2,"❤️":1,"🦝":1,"🌌":1,"🗑️":1,"🚵":1,"🎉":1,"🌄":1,"💩":1},"trailConditions":{"Flooded":2,"Off trail":1,"Bridge out":2,"Bugs":1,"Rocky":1,"Closed":1,"No shade":1,"Snow":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 235,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🌌":1,"💩":1,"🦝":1,"🌇":1,"🌡️":1,"🍺":1,"🙌":1,"👍":1,"🗑️":1},"trailConditions":{"Bridge out":1,"Over grown":1,"Great!":1,"Off trail":2,"Blowdown":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 236,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🐾":1,"🌞":1,"🌼":1,"🏔️":1},"trailConditions":{"Great!":1,"Rocky":1,"Off trail":1,"Snow":1,"Scramble":1,"Icy":1,"No shade":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 237,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🌋":1,"🐻":1,"🌇":1,"🐾":2,"🌄":2,"👍":1,"🗑️":1,"🌞":1,"🚵":1,"🦝":1},"trailConditions":{"Private property":2,"Blowdown":2,"Closed":1,"Icy":2,"Bugs":1,"Flooded":2,"Snow":2,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 238,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":2,"🙌":1,"❤️":1,"🌊":1,"🔥":1,"🌇":1,"🎉":1,"🌼":1,"👍":2},"trailConditions":{"Icy":2,"Blowdown":2,"Over grown":1,"Bridge out":1,"Snow":1,"Flooded":2,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 239,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"❤️":1,"💩":1,"🌲":2,"🐕":1,"👍":1,"🎉":1},"trailConditions":{"Fee":1,"Snow":1,"Bugs":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 240,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":2,"🐺":1,"🥴":1,"🌼":1,"🗑️":1},"trailConditions":{"Snow":1,"Over grown":1,"Scramble":2,"No shade":1,"Off trail":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 241,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":1,"💪":2,"🆒":1,"👍":1,"💩":1,"🐕":1,"🗑️":1},"trailConditions":{"Scramble":1,"Icy":1,"Private property":2,"Great!":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 242,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🐾":2,"🐻":1,"🔥":1,"🚵":1,"🌌":1,"🌲":1,"🌋":1,"🆒":1},"trailConditions":{"Bridge out":1,"Bugs":2,"Scramble":1,"Blowdown":2,"Muddy":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 243,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"⛺":1,"🌄":1,"🐕":1,"🐺":1,"🌲":1},"trailConditions":{"Muddy":3,"Fee":2,"Snow":1,"Scramble":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 244,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🗑️":1,"🚵":1,"🙌":1,"🌡️":1,"🌼":1,"🐕":2,"🌲":1,"🆒":1,"🏔️":1,"🌊":1},"trailConditions":{"Great!":1,"Fee":1,"Blowdown":2,"Muddy":1,"Closed":1,"Icy":1,"Bridge out":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 245,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🐺":1,"🌇":1,"🎉":1,"👍":1,"🦌":1,"❤️":1,"🐾":1,"🏔️":1,"🌄":1},"trailConditions":{"Blowdown":2,"No shade":1,"Fee":2,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 246,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🍺":1,"🌼":1,"🙌":1,"💩":1,"🌌":1,"🐾":1,"🦝":1,"🌡️":1,"🌇":1},"trailConditions":{"Fee":1,"Snow":2,"Bridge out":1,"Closed":1,"Private property":1,"No shade":1,"Icy":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 247,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":2,"🐾":1,"🌲":1,"🐕":1,"🦌":1,"🌊":1,"💩":1},"trailConditions":{"Bridge out":1,"Closed":1,"Bugs":2,"Blowdown":1,"Muddy":3,"Scramble":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 248,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"💩":1,"🌞":1,"❤️":1,"🐕":1,"🌲":1,"🗑️":1,"🌇":1,"🐻":1,"🌌":1},"trailConditions":{"Great!":1,"Bugs":1,"Snow":2,"Bridge out":1,"No shade":1,"Icy":1,"Rocky":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 249,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":2,"🌼":1,"🌌":1,"🦌":1,"🐻":1,"🎉":1,"🌇":1,"🐕":1,"🥴":1,"⛺":1,"🗑️":1,"🔥":1},"trailConditions":{"Off trail":3,"Over grown":2,"Scramble":1,"Bugs":2,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 250,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":2,"🦌":1,"🙌":1,"⛺":1,"💯":1,"🌼":1,"😫":1,"🚵":1,"🐾":1,"👍":1,"🔥":1},"trailConditions":{"Bugs":1,"Blowdown":1,"Snow":2,"Closed":2,"Over grown":1,"Icy":1,"Off trail":2,"Flooded":1,"Fee":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 251,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌞":1,"🐻":1,"🏔️":1,"🌌":1,"🌼":1,"🙌":1,"🚵":1,"🦝":1,"🦌":1,"🐺":1,"⛺":1},"trailConditions":{"Icy":1,"Rocky":3,"Bugs":2,"Private property":1,"Bridge out":1,"Scramble":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 252,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":2,"🆒":1,"🦝":1,"🌡️":1,"💯":1,"🌊":1,"💪":1,"🗑️":1,"🔥":2},"trailConditions":{"Muddy":1,"Great!":1,"Off trail":2,"Blowdown":2,"Bugs":1,"No shade":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 253,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🌼":1,"🙌":1,"🌇":1,"🌲":1},"trailConditions":{"Great!":2,"Off trail":2,"Snow":1,"Fee":2,"Flooded":1,"Blowdown":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 254,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🎉":1,"🌡️":1,"🙌":1,"🔥":1,"🌊":1},"trailConditions":{"Bugs":1,"Bridge out":1,"Muddy":2,"Fee":1,"Off trail":1,"Over grown":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 255,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🐕":2,"🔥":2,"🍺":1,"🌊":1,"😫":1},"trailConditions":{"No shade":2,"Closed":1,"Scramble":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 256,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🐕":2,"💩":1,"🗑️":1},"trailConditions":{"Flooded":3,"Great!":1,"Muddy":1,"Closed":1,"Off trail":1,"No shade":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 257,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"👍":1,"🚵":1,"❤️":1,"🌇":1,"🗑️":1,"🦝":1},"trailConditions":{"Private property":2,"Bridge out":1,"Flooded":1,"Bugs":1,"Over grown":2,"Great!":2,"Snow":1,"Rocky":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 258,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🗑️":1,"🌲":2,"😫":1,"🌞":1,"💯":1,"👍":1,"🦌":1,"🌼":1},"trailConditions":{"Icy":1,"Great!":1,"Scramble":1,"Bugs":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 259,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🌄":1,"🌊":2,"🌋":1,"🏔️":1,"🆒":2},"trailConditions":{"Over grown":2,"Icy":2,"Bugs":2,"Snow":1,"Rocky":1,"Blowdown":1,"Off trail":1,"Fee":1,"No shade":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 260,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"⛺":3,"🌡️":1,"👍":1,"🌄":1,"🦝":1,"🌋":1,"💩":2,"🗑️":2},"trailConditions":{"Off trail":2,"Flooded":2,"No shade":1,"Fee":2,"Private property":1,"Over grown":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 261,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🦌":1,"🦝":1,"🌞":1,"🌲":2,"💩":1,"🆒":1,"👍":2,"🌄":1},"trailConditions":{"Blowdown":1,"Snow":2,"Over grown":2,"Private property":1,"Rocky":1,"Flooded":1,"Closed":1,"Bridge out":1,"Scramble":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 262,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🌋":1,"❤️":1,"🌼":1,"🗑️":1,"🍺":1,"🐺":1},"trailConditions":{"Bridge out":1,"Blowdown":1,"Closed":2,"Fee":2,"Flooded":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 263,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":1,"💩":1,"❤️":1,"😫":1},"trailConditions":{"Rocky":2,"Over grown":2,"Great!":1,"Muddy":1,"Off trail":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 264,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"🗑️":1,"🆒":1,"🌲":1,"🌋":2,"🍺":1},"trailConditions":{"Over grown":1,"Great!":2,"Private property":1,"Bridge out":2,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 265,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🐺":2,"🌊":1,"🦝":1,"🔥":1,"🌲":1,"🌇":1,"🥴":1},"trailConditions":{"Flooded":2,"Fee":1,"No shade":2,"Bugs":2,"Over grown":1,"Great!":1,"Bridge out":1,"Muddy":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 266,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🌌":1,"🌄":1,"🎉":1},"trailConditions":{"Blowdown":1,"Flooded":1,"Scramble":2,"Bugs":2,"Fee":1,"Over grown":1,"Private property":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 267,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌇":1,"💯":1,"🥴":1,"🗑️":1,"🐺":1,"🍺":1,"🏔️":1,"🌄":1,"🙌":1,"🐕":1},"trailConditions":{"Fee":3,"Scramble":1,"Closed":1,"Muddy":1,"Icy":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 268,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"💪":1,"🙌":1,"🐻":1,"🏔️":1,"🆒":2,"🌞":1},"trailConditions":{"No shade":1,"Great!":2,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 269,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🌊":1,"💯":1,"🗑️":1,"⛺":1},"trailConditions":{"Bugs":1,"Closed":2,"Scramble":1,"Snow":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 270,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🦌":1,"🚵":1,"❤️":1,"💪":1,"🌌":1,"🌊":1},"trailConditions":{"Fee":1,"Great!":1,"Closed":2,"Rocky":1,"Scramble":1,"Off trail":1,"Bridge out":2,"Bugs":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 271,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":2,"🏔️":1,"🌋":2,"💯":1,"🎉":1,"🙌":2,"🌊":1,"🆒":1,"🌄":1},"trailConditions":{"Off trail":2,"Bugs":2,"Icy":2,"Private property":2,"Fee":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 272,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":2,"🎉":1,"💯":1,"🔥":1,"🦌":1,"🐺":1,"🍺":1,"⛺":1},"trailConditions":{"Off trail":1,"No shade":1,"Snow":1,"Great!":3,"Icy":1,"Over grown":1,"Muddy":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 273,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🦌":1,"🌌":1,"💯":1,"😫":1,"🚵":1,"🥴":1},"trailConditions":{"Flooded":2,"Private property":1,"Fee":1,"Icy":3,"Bugs":1,"Bridge out":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 274,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌄":1,"❤️":1,"🌋":1,"🗑️":1,"🎉":2,"🐾":1,"🌞":2,"🐕":1},"trailConditions":{"Rocky":1,"Snow":1,"Closed":1,"Flooded":1,"Private property":1,"Blowdown":1,"Off trail":2,"Great!":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 275,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"😫":1,"🌄":1,"🌌":1,"🦝":1,"🚵":1,"🏔️":2},"trailConditions":{"Rocky":1,"Flooded":2,"Closed":2,"Scramble":2,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 276,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🗑️":1,"⛺":1,"🆒":1,"🥴":1,"🏔️":1,"🎉":1,"🌡️":1,"🌲":1},"trailConditions":{"No shade":2,"Blowdown":1,"Off trail":2,"Rocky":1,"Private property":1,"Closed":1,"Muddy":1,"Snow":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 277,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🌼":1,"💪":1,"🏔️":1,"🚵":1,"🌋":1,"🐻":1},"trailConditions":{"Great!":1,"Icy":2,"Bugs":1,"Fee":1,"Over grown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 278,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌞":1,"🌡️":1,"🎉":1,"🌼":1,"🐻":1},"trailConditions":{"Scramble":1,"Rocky":3,"Blowdown":1,"Bugs":2,"Great!":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 279,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"❤️":1,"🌼":1,"🌇":1,"👍":1,"🙌":1,"🐾":1,"🎉":1,"🌡️":1,"🌞":2},"trailConditions":{"No shade":3,"Snow":1,"Flooded":1,"Blowdown":2,"Closed":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 280,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🗑️":1,"❤️":1,"💩":1,"🌲":1,"🌇":1,"😫":1,"🐾":1},"trailConditions":{"Flooded":2,"Snow":1,"Bridge out":1,"Off trail":1,"Great!":1,"Closed":2,"Scramble":1,"Bugs":1,"Over grown":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 281,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🚵":1,"🐾":1},"trailConditions":{"Off trail":2,"Rocky":2,"Great!":1,"Icy":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 282,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🌌":1,"🙌":1,"🔥":1,"⛺":1,"🚵":1,"🦌":1},"trailConditions":{"Over grown":2,"Icy":2,"Blowdown":3,"Off trail":2,"Closed":1,"Private property":1,"Bridge out":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 283,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"👍":1,"💯":1,"🌄":2,"💩":1,"🔥":1},"trailConditions":{"Closed":1,"Muddy":1,"Icy":3,"Flooded":1,"Blowdown":1,"Snow":2,"Bugs":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 284,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":2,"🌄":1,"⛺":1,"🦌":1,"😫":1,"🐻":1,"🆒":1},"trailConditions":{"Snow":1,"Rocky":2,"Muddy":1,"Great!":1,"Flooded":1,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 285,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🚵":1,"⛺":1,"🌲":1,"👍":1,"🌡️":1,"🎉":1,"💩":1,"🍺":1,"💪":1},"trailConditions":{"Blowdown":1,"Closed":1,"Bridge out":1,"No shade":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 286,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"💩":1,"🌡️":2,"😫":1,"🔥":1,"🐺":1,"❤️":1,"🥴":1,"👍":1,"🌲":1,"🌇":1,"🌋":1,"💪":1},"trailConditions":{"No shade":1,"Bridge out":1,"Flooded":1,"Off trail":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 287,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"👍":1,"🐻":1,"❤️":1,"🎉":1,"🐕":1},"trailConditions":{"Muddy":1,"Fee":1,"Blowdown":1,"Icy":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 288,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🐺":1,"🌇":1,"❤️":2,"🔥":1,"🌡️":1},"trailConditions":{"Flooded":2,"Closed":1,"Blowdown":1,"Off trail":2,"Scramble":1,"Snow":2,"Over grown":1,"Muddy":1,"Icy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 289,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"⛺":1,"🙌":1,"🌋":1,"🌊":1,"🐕":1,"🌲":1,"🌼":1,"🌌":1,"🦌":1},"trailConditions":{"Fee":1,"Bridge out":1,"Closed":2,"Great!":1,"Off trail":1,"Flooded":2,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 290,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🏔️":1,"🍺":1,"🗑️":1,"💪":1,"🌞":1,"🌲":1},"trailConditions":{"Bridge out":1,"Private property":1,"Rocky":1,"Icy":2,"Off trail":1,"Bugs":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 291,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🔥":2,"🐻":1,"🌄":1,"🌊":1,"🍺":2},"trailConditions":{"Scramble":1,"Flooded":1,"Snow":1,"Bugs":1,"Closed":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 292,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":2,"🐕":2,"🦝":1,"⛺":1,"🔥":1,"🐺":1,"🗑️":1},"trailConditions":{"Scramble":1,"Rocky":1,"Fee":1,"No shade":1,"Muddy":1,"Great!":1,"Icy":2,"Private property":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 293,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"❤️":1,"🌋":1,"🌇":1,"🍺":1,"🦝":1,"🐕":1},"trailConditions":{"Scramble":1,"Private property":1,"Blowdown":4,"Off trail":1,"Muddy":1,"Flooded":1,"Rocky":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 294,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🐻":1,"🏔️":1,"🌋":1,"🎉":1,"👍":1,"🌄":1,"⛺":1,"🐺":1},"trailConditions":{"Snow":2,"Muddy":2,"Blowdown":1,"No shade":1,"Scramble":2,"Over grown":1,"Closed":1,"Bugs":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 295,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"⛺":2,"🌊":3,"❤️":1,"🦝":1,"🌄":1,"🚵":1,"💩":1},"trailConditions":{"Icy":1,"Bridge out":1,"Rocky":2,"Muddy":1,"Private property":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 296,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🐻":1,"⛺":1,"🐕":2,"💯":1,"🐾":1,"🦝":1},"trailConditions":{"Snow":1,"Fee":1,"Flooded":1,"Muddy":1,"Private property":2,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 297,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"💪":1,"🌊":1,"🌼":1,"🙌":1,"⛺":1,"🌲":1,"🌡️":1,"🗑️":1,"🌄":1},"trailConditions":{"Over grown":1,"Fee":2,"Snow":2,"Flooded":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 298,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":1,"🌼":1,"⛺":2,"🌄":2,"🐻":1,"😫":1,"💪":1},"trailConditions":{"Great!":1,"Over grown":2,"Icy":1,"Closed":2,"Scramble":1,"Off trail":1,"Bugs":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 299,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"🌡️":2,"🐕":2,"⛺":1,"🌌":1,"💪":1,"🥴":1,"🐺":1,"🦌":1,"🎉":2,"🦝":1,"🙌":1},"trailConditions":{"Rocky":2,"No shade":1,"Bridge out":2,"Muddy":1,"Snow":1,"Over grown":1,"Flooded":2,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 300,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":2,"🐕":1,"💪":1,"😫":1,"🐾":1,"🚵":1},"trailConditions":{"Great!":1,"Rocky":2,"Icy":3,"Private property":1,"Over grown":2,"No shade":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 301,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":2,"🐺":2,"💪":1,"🆒":1,"🌲":1,"🚵":1,"🌊":1},"trailConditions":{"Closed":2,"Muddy":1,"No shade":1,"Private property":2,"Fee":2,"Icy":1,"Snow":1,"Bridge out":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 302,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":2,"🦌":1,"🐺":1,"🐻":1,"🌌":1,"🌲":1,"🗑️":1,"🌇":1,"😫":1,"🥴":1,"⛺":1},"trailConditions":{"Bugs":2,"Bridge out":1,"Private property":1,"Icy":3,"Rocky":1,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 303,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💪":2,"🌋":1,"🍺":1,"🌼":3,"🐻":1,"🐕":1},"trailConditions":{"Off trail":2,"Blowdown":3,"Snow":1,"Rocky":1,"Bugs":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 304,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🔥":1,"👍":1,"🍺":1,"💯":1,"🌋":1,"🥴":1},"trailConditions":{"Snow":2,"Rocky":1,"Great!":1,"Off trail":1,"Icy":2,"Flooded":2,"Bridge out":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 305,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"👍":1,"🦌":1,"🌼":1,"🌋":1,"🦝":1},"trailConditions":{"Bugs":1,"Flooded":2,"Scramble":2,"Over grown":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 306,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌞":1,"🚵":1,"🌄":1},"trailConditions":{"Snow":1,"Bugs":2,"Fee":1,"Off trail":2,"Bridge out":1,"Muddy":1,"Flooded":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 307,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🔥":2,"🦌":1,"🙌":1,"🌼":1,"🐕":1},"trailConditions":{"Over grown":1,"Muddy":1,"Closed":2,"Bridge out":2,"Bugs":1,"Icy":1,"Fee":1,"Off trail":1,"Scramble":1,"Rocky":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 308,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🎉":3,"🔥":1,"🐾":1,"🌇":1,"🏔️":2,"🐕":1,"🐺":1},"trailConditions":{"Snow":1,"Bugs":1,"Flooded":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 309,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🐾":2,"❤️":1,"🏔️":1,"🌞":1,"👍":1,"🌄":1},"trailConditions":{"Muddy":1,"Flooded":1,"Fee":1,"No shade":2,"Scramble":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 310,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🦝":1,"❤️":2,"💪":1,"🌞":1,"🥴":1,"🐻":1,"🦌":1,"💯":1,"🎉":1,"🍺":1},"trailConditions":{"Fee":2,"Over grown":1,"Bridge out":2,"Private property":2,"Blowdown":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 311,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"💯":1,"🐾":1,"⛺":1,"🚵":1,"🍺":1,"🌌":1,"👍":1,"🌼":1,"🏔️":1},"trailConditions":{"Rocky":1,"Private property":1,"Blowdown":1,"Great!":2,"Bugs":1,"Off trail":3,"Flooded":2,"Snow":1,"Muddy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 312,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🌼":1,"🐺":1,"🎉":1,"🙌":2,"❤️":1},"trailConditions":{"Bridge out":2,"Closed":2,"Fee":2,"Over grown":1,"Flooded":1,"Private property":1,"Great!":2,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 313,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"💪":1,"🐺":2,"🎉":1,"💯":2,"🌊":1,"🙌":1,"🗑️":1},"trailConditions":{"Private property":1,"Great!":2,"Off trail":2,"Bridge out":1,"Over grown":2,"Rocky":1,"Snow":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 314,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🙌":1,"🌄":2,"⛺":1,"🌞":1,"🌋":1,"🔥":1,"🌊":1,"🐾":1,"😫":1,"🐻":1},"trailConditions":{"Muddy":2,"Rocky":1,"Flooded":3,"Snow":1,"Fee":2,"Off trail":1,"Blowdown":1,"Icy":1,"Private property":1,"Bugs":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 315,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"💪":1,"🏔️":1,"💯":1,"🔥":1,"🌼":1,"🌞":1},"trailConditions":{"Muddy":1,"Great!":1,"Closed":2,"Icy":1,"Off trail":1,"Blowdown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 316,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💯":2,"🎉":1,"🍺":1,"🌞":1,"🗑️":1,"👍":1,"🌋":1},"trailConditions":{"Bridge out":1,"Over grown":1,"Off trail":2,"Private property":1,"Closed":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 317,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🐕":1,"🌊":4,"🎉":1,"🐺":1,"🦝":1,"💪":1},"trailConditions":{"Over grown":1,"Rocky":1,"Icy":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 318,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"❤️":1,"🌞":1,"🌌":1,"🌇":1,"🐾":1,"🎉":1,"🚵":1,"🦌":1,"🔥":1,"🌋":1,"🍺":1,"🌊":1},"trailConditions":{"Closed":2,"Great!":2,"Over grown":1,"Rocky":1,"Flooded":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 319,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🗑️":2,"💪":2,"💯":1,"🐺":3,"🦌":1,"🏔️":1},"trailConditions":{"Great!":2,"Over grown":1,"Muddy":1,"Off trail":1,"Scramble":1,"Snow":1,"Icy":1,"No shade":1,"Bugs":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 320,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"💪":1,"🎉":1,"🙌":1,"🌋":1,"🐻":1,"🐾":1},"trailConditions":{"Snow":2,"Muddy":1,"Bridge out":1,"Private property":1,"Closed":1,"No shade":1,"Over grown":1,"Flooded":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 321,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":2,"💯":2,"🌋":1,"🦌":1,"👍":1,"🌊":1,"🍺":1},"trailConditions":{"Great!":1,"Muddy":1,"Blowdown":1,"Off trail":1,"Closed":1,"Fee":3,"Bridge out":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 322,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🍺":1,"🐾":1,"⛺":1,"👍":1,"🐕":1,"🌡️":1,"❤️":1,"🦌":1},"trailConditions":{"Flooded":1,"Great!":1,"Icy":1,"Bugs":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 323,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"👍":1,"🌼":1,"🌲":1,"❤️":1,"💯":1,"🌡️":1,"🦌":1,"🐻":1,"🐺":1,"💩":1,"🌊":2},"trailConditions":{"Great!":1,"Fee":1,"Bridge out":1,"Over grown":2,"Off trail":1,"Muddy":1,"Icy":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 324,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":2,"😫":1,"👍":3,"🐾":1,"🐻":1,"🦝":1,"🆒":1,"🐕":1},"trailConditions":{"Muddy":2,"Rocky":1,"Fee":1,"Private property":1,"No shade":1,"Closed":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 325,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌄":1,"👍":1,"🆒":2,"🔥":1,"🌌":1,"🐻":1,"🌇":1},"trailConditions":{"Blowdown":1,"Rocky":1,"Private property":2,"Icy":1,"Scramble":1,"Muddy":1,"Off trail":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 326,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"🌊":1,"🐾":1,"🦝":1,"🗑️":1,"🦌":1,"❤️":1,"🔥":2},"trailConditions":{"Bridge out":1,"Rocky":2,"Off trail":2,"Bugs":2,"No shade":1,"Private property":2,"Great!":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 327,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🥴":1,"🗑️":1,"🌞":1,"🍺":1,"🐾":2,"🆒":1,"⛺":1,"🙌":1,"🏔️":1,"🦝":1,"🐻":1,"🎉":1},"trailConditions":{"Flooded":1,"Over grown":2,"No shade":1,"Private property":1,"Snow":1,"Bridge out":1,"Fee":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 328,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🐕":1,"🌞":1,"🐻":1,"🌲":1,"💩":1,"🌄":1,"🏔️":1},"trailConditions":{"Bugs":1,"Snow":1,"Great!":2,"Closed":1,"Off trail":1,"Private property":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 329,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🌊":1,"🌋":1,"🦌":1,"🌞":2,"🚵":1,"🐻":1,"💩":1,"🦝":1},"trailConditions":{"Great!":1,"Bridge out":1,"Snow":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 330,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🔥":3,"🦌":1,"🌞":1,"🌋":1,"🏔️":1,"🌡️":1,"🆒":1,"🐕":1},"trailConditions":{"Great!":1,"Off trail":1,"Muddy":3,"Bugs":1,"No shade":1,"Icy":1,"Scramble":1,"Fee":1,"Flooded":1,"Blowdown":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 331,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🐻":1,"💩":1,"🌞":1,"🌄":1},"trailConditions":{"Closed":2,"No shade":1,"Muddy":1,"Scramble":1,"Icy":1,"Bugs":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 332,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":2,"🌊":1,"🦝":1,"🗑️":1,"🐕":1,"💯":1,"🌞":1,"🍺":1},"trailConditions":{"Bridge out":2,"Rocky":1,"Private property":1,"No shade":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 333,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"💯":1,"🌄":3,"💩":1,"🥴":1,"🦝":1,"🦌":2,"🌞":1,"🌌":1,"🙌":1},"trailConditions":{"Off trail":1,"Private property":1,"Snow":1,"Flooded":3,"Blowdown":2,"Icy":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 334,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🌄":1,"🔥":1,"🌡️":1,"😫":1,"🐕":1,"🏔️":1},"trailConditions":{"Bugs":2,"Muddy":1,"Icy":1,"Closed":2,"Flooded":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 335,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🐻":1,"😫":1,"🙌":2,"🗑️":2,"🌡️":1,"🍺":1,"🌄":1,"🐺":1},"trailConditions":{"Blowdown":2,"Closed":2,"Great!":1,"No shade":1,"Bugs":1,"Muddy":2,"Off trail":1,"Rocky":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 336,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🔥":1,"🍺":2,"🆒":1,"🌞":1,"🦝":1},"trailConditions":{"Flooded":2,"Blowdown":1,"Off trail":2,"Over grown":1,"Great!":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 337,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"💪":1,"👍":1,"💯":1,"🙌":1,"🗑️":1,"🌼":1,"🏔️":1,"🐻":1,"🐕":1,"🥴":1},"trailConditions":{"Off trail":1,"Private property":3,"Bugs":1,"No shade":1,"Blowdown":1,"Fee":1,"Icy":1,"Rocky":1,"Over grown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 338,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"❤️":1,"👍":1,"🆒":1,"🐾":1,"💩":1,"🌲":1},"trailConditions":{"Icy":1,"Bugs":2,"No shade":1,"Bridge out":1,"Off trail":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 339,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🆒":1,"🌊":1,"👍":1,"🦌":1,"💩":1,"🍺":1,"🐺":1,"🌌":1,"🌼":1},"trailConditions":{"Off trail":2,"Private property":3,"Over grown":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 340,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":2,"🌡️":1,"🌼":1,"🥴":2,"🐕":1,"👍":1,"🗑️":1,"🆒":1,"🌲":2},"trailConditions":{"Blowdown":1,"Closed":1,"Bugs":1,"Off trail":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 341,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"⛺":1,"👍":1,"💪":1,"🌋":1,"🔥":1,"🌄":1,"🆒":1,"🎉":1,"🦌":1,"💩":1},"trailConditions":{"Bridge out":2,"Off trail":1,"Private property":1,"Muddy":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 342,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🎉":1,"🔥":1,"🌞":1,"🦝":2},"trailConditions":{"Fee":3,"Bugs":1,"Great!":2,"Private property":1,"Off trail":1,"Flooded":1,"No shade":1,"Over grown":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 343,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"🥴":2,"🌌":1,"🍺":1,"🌄":1,"💯":1,"🐾":1},"trailConditions":{"Bugs":1,"Flooded":1,"Great!":3,"Closed":1,"Snow":2,"Off trail":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 344,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🌲":2,"💯":1,"🔥":1,"🐺":1,"🍺":1,"⛺":1,"🗑️":1,"🥴":1,"🦝":1,"🆒":1,"🌡️":1},"trailConditions":{"Flooded":1,"Great!":1,"Over grown":1,"Icy":2,"Fee":1,"Off trail":2,"Rocky":1,"No shade":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 345,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🐾":1,"🌲":1,"👍":1,"🐺":1,"🌄":1,"🌋":1,"🗑️":1,"🚵":1},"trailConditions":{"Snow":1,"Great!":1,"No shade":1,"Muddy":2,"Bugs":1,"Blowdown":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 346,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🐻":1,"🙌":1,"🔥":1,"🌇":2,"🌼":1,"🌋":1,"🥴":1,"🌌":2,"😫":1,"💯":1},"trailConditions":{"Rocky":1,"Flooded":2,"Great!":2,"Blowdown":1,"Fee":1,"Bugs":2,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 347,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🗑️":1,"🦝":1,"🥴":1,"❤️":1,"💩":1},"trailConditions":{"Scramble":2,"Bridge out":2,"Rocky":1,"Muddy":2,"Blowdown":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 348,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"👍":1,"🍺":1,"🙌":1,"🦌":1,"🐺":1,"💩":1},"trailConditions":{"Icy":2,"Scramble":2,"Snow":1,"Muddy":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 349,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"💯":1,"🔥":1,"🐕":1,"🦝":1,"🌄":1,"😫":1,"🆒":1},"trailConditions":{"Blowdown":2,"Great!":2,"No shade":1,"Bridge out":2,"Scramble":1,"Rocky":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 350,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🍺":2,"🌋":1,"🗑️":2,"🙌":1,"👍":1,"🔥":1,"🌲":2,"🌡️":1},"trailConditions":{"No shade":1,"Flooded":1,"Snow":2,"Muddy":1,"Rocky":1,"Icy":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 351,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":2,"🎉":1,"🙌":1,"🌇":1,"💯":1,"🔥":1,"🌌":1,"🍺":1},"trailConditions":{"Scramble":1,"Muddy":1,"Bridge out":2,"Over grown":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 352,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🎉":1,"🐻":1,"💩":3,"❤️":1,"🐕":1},"trailConditions":{"Snow":1,"Closed":2,"Off trail":1,"Muddy":3,"Icy":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 353,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🌋":1,"🌌":1,"🌊":1,"💪":1,"🗑️":1,"🌼":1},"trailConditions":{"Fee":1,"Bridge out":1,"Closed":2,"Snow":1,"Great!":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 354,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🌋":1,"🙌":1,"🌲":1,"⛺":1,"🌊":1,"🐺":1},"trailConditions":{"Over grown":2,"Private property":3,"Rocky":1,"Flooded":1,"Scramble":1,"Muddy":2,"Bugs":3,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 355,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🥴":1,"🌞":1,"💯":1,"🌊":1,"🌼":1,"🌌":1,"🌄":1,"🦌":1,"🐺":2,"🚵":1,"🐻":2},"trailConditions":{"Fee":1,"Rocky":2,"Bugs":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 356,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"😫":1,"🦌":1,"💪":1,"🌞":1,"🐕":2,"🔥":1,"🦝":1,"🌇":1},"trailConditions":{"No shade":2,"Over grown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 357,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🐕":1,"💩":1,"😫":1,"👍":1,"🍺":1,"🦝":1,"🌡️":1,"🏔️":1},"trailConditions":{"Scramble":1,"Icy":1,"Off trail":1,"Rocky":1,"Private property":1,"Bugs":1,"Great!":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 358,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🆒":1,"🗑️":1,"🌞":2,"🥴":2,"🌼":1,"🐺":1,"🙌":1,"🍺":1},"trailConditions":{"Icy":1,"No shade":1,"Fee":2,"Bugs":2,"Flooded":3}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 359,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🌊":1,"❤️":1,"🎉":1,"👍":1,"🏔️":1,"🙌":1},"trailConditions":{"Scramble":1,"Muddy":1,"Closed":1,"No shade":1,"Blowdown":1,"Bugs":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 360,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"👍":1,"🐾":1,"🌼":1,"💩":1,"🌲":1,"🌞":1,"🥴":1,"⛺":1},"trailConditions":{"Rocky":1,"Bridge out":1,"Bugs":1,"Muddy":2,"Off trail":2,"Private property":1,"Closed":1,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 361,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🎉":3,"🏔️":1,"🍺":1,"🌌":1},"trailConditions":{"Over grown":2,"No shade":1,"Bridge out":2,"Muddy":2,"Rocky":1,"Bugs":2,"Flooded":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 362,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🚵":1,"👍":1,"🐾":1,"🌇":1,"❤️":2,"💩":1,"🍺":2,"😫":1,"🌲":1},"trailConditions":{"Blowdown":2,"Private property":1,"Bridge out":1,"Off trail":1,"Muddy":1,"Bugs":3}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 363,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":2,"🐺":1,"🌞":2,"🦝":1,"💯":1},"trailConditions":{"Closed":1,"Over grown":2,"Flooded":1,"Fee":1,"Icy":2,"Private property":2,"Off trail":2,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 364,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":2,"🌄":1,"😫":1,"👍":1,"🥴":1,"🎉":1,"🌼":1,"🗑️":1,"🌞":1,"❤️":1},"trailConditions":{"Bridge out":2,"Private property":1,"Rocky":1,"Snow":1,"Scramble":1,"Fee":1,"No shade":1,"Icy":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 365,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🦌":1,"🌋":1,"🗑️":3,"💪":2,"🐕":1},"trailConditions":{"Bridge out":1,"Over grown":1,"Scramble":1,"No shade":2,"Icy":1,"Rocky":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 366,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"⛺":2,"🙌":2,"🗑️":1,"🌄":1,"🆒":1,"🌡️":1,"🔥":1},"trailConditions":{"Fee":1,"Scramble":2,"Bugs":1,"Over grown":1,"Flooded":1,"Blowdown":1,"Private property":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 367,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"🌼":1,"💯":1,"🌋":1,"🔥":1},"trailConditions":{"Private property":2,"Off trail":1,"Blowdown":1,"Snow":1,"No shade":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 368,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🎉":2,"🚵":1,"🗑️":1},"trailConditions":{"Rocky":2,"Snow":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 369,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"💩":1,"💪":1,"🚵":1,"🏔️":1,"🐻":1,"🥴":2,"🔥":2,"🆒":2},"trailConditions":{"Icy":2,"No shade":1,"Private property":1,"Blowdown":1,"Bugs":1,"Scramble":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 370,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":3,"❤️":1,"🌲":1,"🌇":1,"👍":1,"🙌":1,"🔥":1,"🌄":1},"trailConditions":{"Scramble":1,"Muddy":2,"Snow":1,"Off trail":1,"Icy":1,"Over grown":3,"Great!":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 371,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🦌":1,"🌋":2,"❤️":1,"🔥":1,"🐻":1,"🎉":1,"🐺":1,"💯":1},"trailConditions":{"Private property":3,"Scramble":1,"Fee":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 372,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🔥":1,"🌊":1,"🍺":1,"❤️":1,"🙌":1,"💯":1,"🌄":1,"🦝":1,"🌲":1,"👍":1,"🐻":1,"🏔️":1,"🐺":1},"trailConditions":{"Icy":1,"Off trail":1,"No shade":1,"Scramble":2,"Bugs":1,"Closed":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 373,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🙌":1,"💯":1},"trailConditions":{"Closed":3,"Bugs":2,"Blowdown":1,"Snow":1,"Rocky":2,"No shade":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 374,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"😫":2,"🆒":1,"🌼":1,"👍":1,"🦌":1,"🌄":1,"🗑️":1,"🍺":1,"🎉":1},"trailConditions":{"Bugs":1,"Flooded":1,"Closed":2,"Scramble":1,"Icy":1,"Rocky":1,"Muddy":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 375,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🐻":1,"🆒":3},"trailConditions":{"Scramble":1,"Flooded":1,"Over grown":1,"Bugs":1,"Off trail":1,"Icy":1,"Blowdown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 376,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🥴":1,"🌋":1,"🌌":1,"🔥":1,"🌇":1,"👍":1,"❤️":1,"🗑️":2},"trailConditions":{"Private property":2,"Blowdown":1,"Icy":2,"Over grown":1,"Rocky":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 377,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🌼":2,"🌌":2,"🚵":2,"🌄":1,"🙌":1,"🍺":1,"👍":1,"🗑️":1},"trailConditions":{"Icy":1,"Bugs":2,"Flooded":1,"Fee":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 378,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"🚵":1,"🗑️":2,"🌇":1,"💪":1,"🍺":1,"❤️":1,"👍":1,"🏔️":1},"trailConditions":{"Muddy":1,"Flooded":1,"Bugs":1,"Icy":1,"Rocky":1,"Off trail":1,"Blowdown":1,"Bridge out":1,"Fee":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 379,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💯":1,"🌋":2,"🌞":1,"⛺":1,"🐺":1,"🐕":1},"trailConditions":{"Closed":1,"Great!":1,"Icy":1,"Over grown":1,"Scramble":1,"Muddy":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 380,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🙌":1,"🌇":1,"🐺":1,"🌼":1,"😫":1,"🏔️":1,"💯":1},"trailConditions":{"Icy":1,"Closed":1,"Muddy":1,"Flooded":1,"Bugs":1,"Fee":1,"Private property":1,"Blowdown":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 381,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"⛺":2,"🌄":2,"🌞":1},"trailConditions":{"Private property":2,"Over grown":1,"Bugs":1,"Rocky":2,"Muddy":1,"Fee":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 382,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💯":1,"🙌":1,"🌡️":1,"🦌":2,"🌲":1,"🐾":1,"🌊":1,"🚵":1},"trailConditions":{"Closed":2,"Over grown":1,"Private property":1,"Rocky":1,"Blowdown":1,"Icy":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 383,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"💩":1,"🌲":1,"🌞":1,"🏔️":1,"😫":1,"🌌":1},"trailConditions":{"Bugs":2,"Fee":2,"Snow":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 384,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🦌":1,"🚵":1,"🌞":1,"🍺":1},"trailConditions":{"Snow":3,"Private property":2,"Over grown":1,"Icy":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 385,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🍺":1,"🌄":1,"🌇":1},"trailConditions":{"Scramble":3,"Private property":1,"Flooded":1,"Off trail":1,"Bridge out":1,"Over grown":1,"Rocky":1,"Icy":1,"Muddy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 386,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦌":2,"🌌":1,"🌄":1,"🐾":2,"🐻":1,"🚵":1},"trailConditions":{"Private property":1,"Off trail":1,"Icy":1,"Muddy":1,"Bugs":1,"Bridge out":1,"Rocky":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 387,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🎉":2,"🏔️":3,"👍":1,"🌊":1,"💯":1,"🆒":1},"trailConditions":{"Scramble":4,"Bridge out":1,"Rocky":1,"Blowdown":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 388,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"🗑️":2,"💪":2,"🌇":1,"🏔️":1,"🥴":1},"trailConditions":{"Over grown":2,"Scramble":1,"Off trail":1,"Flooded":1,"No shade":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 389,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🐻":1,"🏔️":1,"🌲":1,"🎉":1,"🦝":1},"trailConditions":{"Snow":1,"Flooded":1,"Private property":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 390,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🌲":1,"🌌":2,"🎉":1,"🍺":1,"🚵":2,"🌊":1,"🙌":1,"🐺":1},"trailConditions":{"Great!":1,"Fee":1,"Flooded":1,"Rocky":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 391,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌊":2,"🐕":1,"🆒":1,"🔥":1},"trailConditions":{"Snow":1,"Blowdown":2,"Private property":1,"Closed":1,"Off trail":1,"Flooded":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 392,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌇":1,"🌌":1,"🌡️":1,"💩":2,"🦌":1,"❤️":1},"trailConditions":{"Great!":2,"Closed":1,"Private property":1,"Off trail":2,"Snow":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 393,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"💩":2,"🌞":1,"🗑️":1,"🚵":1,"🔥":1,"🎉":1,"🐾":1,"🌄":1,"🍺":1},"trailConditions":{"Muddy":3,"Scramble":1,"Off trail":1,"Fee":1,"Private property":1,"Icy":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 394,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"❤️":1,"🌼":1,"🌋":2,"🔥":1,"🌊":1,"🏔️":1,"🦝":2,"🆒":1,"💩":1,"🐾":1,"👍":1},"trailConditions":{"Off trail":1,"Bugs":1,"Flooded":1,"No shade":1,"Private property":2,"Icy":1,"Muddy":1,"Great!":1,"Bridge out":1,"Fee":1,"Scramble":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 395,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🍺":2,"🌼":1,"🐾":1,"🐺":1,"🐻":1,"🔥":1,"💩":1},"trailConditions":{"Muddy":2,"Fee":2,"Flooded":1,"Blowdown":1,"Bugs":1,"Over grown":2,"Snow":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 396,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"❤️":1,"🏔️":1,"🍺":1,"🌡️":1,"🌄":1,"😫":1,"🚵":1},"trailConditions":{"Private property":2,"Muddy":1,"Rocky":1,"Closed":2,"Blowdown":1,"No shade":1,"Icy":1,"Fee":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 397,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"❤️":2,"🌇":1,"🌄":1,"🐕":1,"🌡️":1,"🗑️":1,"🦌":1},"trailConditions":{"Fee":4,"Great!":1,"Closed":1,"No shade":1,"Muddy":1,"Rocky":1,"Over grown":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 398,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"💯":1,"🗑️":1,"🐺":2,"😫":1,"🌊":1,"❤️":1,"🐾":1,"🏔️":1,"🆒":1},"trailConditions":{"Fee":2,"Rocky":2,"Bugs":1,"Off trail":1,"Bridge out":1,"Private property":1,"Icy":1,"Great!":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 399,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"⛺":1,"🌊":1,"💯":1,"💩":1,"🌋":1,"🗑️":1,"🆒":1,"🌌":1},"trailConditions":{"No shade":1,"Off trail":1,"Rocky":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 400,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💯":1,"🌇":1,"🙌":1,"🔥":1,"🌡️":1,"🌼":1,"🌌":1,"💪":2,"💩":1,"🚵":1},"trailConditions":{"Off trail":2,"Bridge out":1,"Muddy":1,"Closed":1,"Snow":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 401,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"⛺":2,"🌄":1,"🚵":1},"trailConditions":{"Scramble":1,"Bridge out":1,"Over grown":1,"Flooded":1,"Bugs":1,"Icy":2,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 402,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🐺":3,"🌡️":1,"🔥":1,"🐕":1,"💯":1},"trailConditions":{"No shade":1,"Off trail":1,"Blowdown":1,"Snow":1,"Scramble":1,"Bugs":2,"Over grown":1,"Icy":1,"Rocky":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 403,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":2,"❤️":1,"🌡️":1,"👍":1,"🌋":1,"🌊":2,"🌞":1,"🦌":1},"trailConditions":{"Rocky":1,"Icy":1,"Flooded":1,"Scramble":1,"Bridge out":1,"Over grown":1,"Off trail":2,"Muddy":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 404,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🦌":1,"🐕":3,"🌄":1,"🆒":1,"😫":1,"🐺":1,"🚵":1},"trailConditions":{"Bugs":2,"Scramble":2,"Blowdown":1,"Muddy":1,"Off trail":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 405,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💯":2,"🌼":1,"🌇":1,"🗑️":1,"⛺":1,"🐕":1,"🐻":1,"🐺":1,"🌌":1,"🔥":1,"🦝":1},"trailConditions":{"Snow":1,"Fee":1,"Icy":1,"Off trail":1,"Closed":1,"Muddy":1,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 406,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌼":1,"🌄":2,"🌌":1,"🌊":1},"trailConditions":{"Flooded":1,"Private property":1,"No shade":5,"Off trail":2,"Blowdown":2,"Closed":1,"Scramble":1,"Fee":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 407,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🍺":2,"🆒":1,"💯":1,"🐾":1,"🦝":1,"🌄":1},"trailConditions":{"Bugs":3,"Private property":2,"No shade":1,"Scramble":1,"Flooded":1,"Rocky":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 408,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🌡️":1,"🌊":1,"🐻":2,"🔥":1,"🌌":1,"🐺":1,"😫":1,"🌋":1},"trailConditions":{"Closed":4,"Blowdown":3,"No shade":2,"Icy":1,"Rocky":1,"Muddy":1,"Flooded":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 409,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"🥴":1,"🌼":1,"❤️":1,"🐺":1,"🌲":1,"🐾":1,"👍":1,"🎉":1,"🍺":1,"🏔️":1,"🐕":1},"trailConditions":{"Over grown":1,"Scramble":2,"Closed":1,"Bugs":3,"No shade":1,"Rocky":1,"Fee":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 410,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"👍":1,"⛺":1,"💪":2,"🌇":1,"🌋":1,"🌞":1,"🌼":1,"🙌":1,"🦌":1,"💩":1,"🐺":1,"🏔️":1},"trailConditions":{"Over grown":1,"Scramble":1,"Blowdown":2,"Off trail":1,"Closed":1,"Icy":1,"Great!":1,"Rocky":2,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 411,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":1,"🌊":2,"😫":1,"💯":1,"🌼":1,"🏔️":2,"🌋":1,"🌞":1,"👍":1,"🐻":1},"trailConditions":{"Bugs":1,"Bridge out":1,"Muddy":2,"Blowdown":2,"Private property":1,"Snow":1,"Icy":2,"Off trail":1,"Fee":1,"No shade":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 412,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🦌":1,"💯":1,"🎉":1,"🚵":1,"🏔️":1,"🌊":1,"👍":1,"🌞":1},"trailConditions":{"Rocky":1,"Over grown":2,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 413,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌲":1,"🌊":1,"🙌":1,"🚵":1,"🗑️":1,"💪":1,"🌇":1,"👍":1,"🦝":1,"🌌":1},"trailConditions":{"Bridge out":2,"Icy":1,"Great!":1,"Fee":1,"Scramble":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 414,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌡️":1,"🐾":1,"🗑️":1,"🐺":1,"🆒":1,"🌲":2,"🌼":1,"⛺":1},"trailConditions":{"Closed":2,"Bugs":1,"Flooded":2,"Muddy":1,"Scramble":1,"Private property":1,"Off trail":1,"Rocky":1,"Icy":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 415,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💪":2,"🎉":1,"🏔️":2,"🌡️":1,"🌊":1,"🌲":1,"👍":1,"🌄":1,"🐻":1,"🙌":1},"trailConditions":{"Great!":1,"Blowdown":2,"Rocky":1,"Bugs":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 416,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":2,"🌌":2,"🐾":1,"🌄":1,"🌼":1,"⛺":1},"trailConditions":{"Icy":1,"Private property":1,"Snow":1,"Bridge out":3,"Flooded":1,"Over grown":2,"Muddy":1,"Fee":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 417,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🗑️":1,"🐻":1,"🐕":1},"trailConditions":{"Icy":1,"Blowdown":1,"Flooded":3,"No shade":1,"Rocky":1,"Bugs":1,"Bridge out":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 418,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":0,"5":3,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🔥":1,"🐻":2,"🦝":2,"🌡️":1,"🚵":1,"❤️":1},"trailConditions":{"Scramble":1,"Muddy":2,"Snow":1,"Great!":1,"No shade":1,"Blowdown":1,"Private property":1,"Bugs":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 419,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"💯":1,"🌌":2,"🙌":1,"🌡️":1},"trailConditions":{"Flooded":2,"Bridge out":1,"Private property":1,"Great!":1,"Scramble":3,"Closed":1,"Muddy":3}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 420,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🌋":1,"⛺":1,"🙌":1,"🌇":1,"😫":1,"🌊":1,"🐕":1},"trailConditions":{"Muddy":1,"Great!":2,"Closed":2,"Scramble":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 421,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"🐻":1,"😫":2,"🐕":1,"🏔️":1,"🌲":1,"❤️":1,"🐺":1,"💪":1,"🌡️":1},"trailConditions":{"Great!":1,"No shade":1,"Over grown":1,"Private property":1,"Icy":1,"Fee":1,"Muddy":1,"Flooded":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 422,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":2,"💩":2,"🌋":1,"🦌":3,"🐻":1,"🐾":1,"🦝":1,"💯":1,"🌡️":1,"⛺":1},"trailConditions":{"Scramble":1,"Muddy":2,"Private property":2,"Bugs":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 423,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":1,"🌋":1,"🌡️":2,"🐻":2,"🆒":1,"🌄":1,"🌼":1,"🐺":1},"trailConditions":{"Fee":1,"Bridge out":2,"Scramble":1,"Over grown":2,"Private property":1,"Icy":2,"Blowdown":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 424,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🌇":1,"⛺":1,"🌼":1,"🌋":1,"🌊":1,"💯":1,"🐾":1,"🌄":1,"🌲":1},"trailConditions":{"Blowdown":2,"Off trail":1,"Over grown":1,"Bugs":1,"Fee":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 425,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🌄":1,"🐕":1,"🌡️":1,"🐻":1,"💯":1,"🦝":1,"🚵":1},"trailConditions":{"Bridge out":1,"Private property":1,"Flooded":2,"Snow":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 426,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🐾":1,"🌡️":1,"🌌":1,"🌊":2,"🌲":2,"👍":1,"❤️":2,"🗑️":1},"trailConditions":{"Snow":1,"Muddy":2,"Icy":1,"Private property":2,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 427,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🆒":3,"🏔️":1,"🌄":1,"🥴":1,"🌲":1,"😫":1,"🦝":1},"trailConditions":{"Closed":2,"Icy":2,"Fee":1,"Muddy":1,"Private property":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 428,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"😫":2,"🌼":1,"🌊":2,"❤️":1,"🦌":1},"trailConditions":{"Private property":1,"Flooded":2,"Bugs":3,"Blowdown":3,"Bridge out":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 429,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🐾":1,"😫":1,"🌡️":1,"🌊":1,"🌲":1,"🌼":1,"🚵":1,"🏔️":1,"🍺":1},"trailConditions":{"Rocky":1,"Blowdown":1,"Scramble":2,"Closed":1,"Bugs":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 430,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🌲":1,"🍺":1,"🔥":1,"🌞":1,"🦌":1,"❤️":1},"trailConditions":{"Blowdown":1,"Closed":1,"Over grown":1,"Scramble":2,"Muddy":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 431,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🥴":1,"🌲":1,"💯":1,"⛺":2,"🌼":1},"trailConditions":{"Over grown":1,"Blowdown":2,"Off trail":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 432,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":2,"🌄":1,"🚵":1,"🌡️":2,"🙌":1,"🦝":1,"⛺":1},"trailConditions":{"Rocky":1,"Off trail":1,"Over grown":1,"Great!":1,"Blowdown":1,"Snow":2,"No shade":1,"Scramble":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 433,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌌":1,"🌄":1,"🐕":1,"🥴":1,"🌊":2,"🏔️":2,"🐾":1,"🌇":1,"🌞":1,"😫":1},"trailConditions":{"Snow":1,"Flooded":1,"Muddy":1,"Blowdown":1,"Closed":1,"Over grown":1,"Fee":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 434,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🥴":1,"💯":2,"🏔️":1,"🍺":1,"💩":1,"🗑️":1,"🌌":2,"🐺":1},"trailConditions":{"Closed":3,"Great!":2,"Off trail":1,"Blowdown":1,"Bugs":2,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 435,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌞":1,"🏔️":2,"❤️":1,"💯":1},"trailConditions":{"Rocky":1,"Bugs":2,"Private property":1,"Icy":1,"Off trail":1,"Fee":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 436,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"😫":1,"🔥":1,"🚵":1,"🐺":1,"🌌":1,"🦌":1,"🌼":1,"🆒":1,"🌡️":1},"trailConditions":{"Over grown":3,"Scramble":2,"Rocky":1,"Private property":1,"Bugs":1,"Great!":2,"Muddy":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 437,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🚵":1,"💪":1,"🦌":2,"🐺":1,"🐕":1,"🌋":1,"🐾":1,"💯":1},"trailConditions":{"Closed":2,"Scramble":1,"Bridge out":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 438,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐻":1,"🏔️":1,"💯":2,"🐕":1,"🔥":1,"🌡️":1,"🌋":1,"🐾":1},"trailConditions":{"Over grown":3,"Snow":1,"Flooded":3,"Off trail":1,"No shade":2,"Scramble":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 439,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🚵":1,"🌡️":1,"🍺":1,"🌄":1,"⛺":1,"🐕":1,"🌇":1,"💪":1,"🎉":1},"trailConditions":{"Snow":1,"Rocky":1,"Over grown":2,"Blowdown":1,"Flooded":1,"Closed":2,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 440,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":2,"💯":1,"🌋":1,"🗑️":1,"🙌":1,"🐕":2,"🦝":1,"🍺":1},"trailConditions":{"Muddy":1,"Closed":1,"Blowdown":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 441,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"🌊":1,"🐾":1,"🍺":2,"🔥":1,"🥴":1,"⛺":1},"trailConditions":{"Bugs":1,"Private property":1,"Icy":1,"Great!":1,"Rocky":1,"Closed":1,"No shade":1,"Off trail":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 442,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"⛺":2,"🌊":2,"🎉":1,"🔥":1,"🐺":1,"🦌":1,"🆒":1,"🌇":1},"trailConditions":{"Great!":1,"Rocky":1,"Muddy":1,"Private property":1,"Bugs":1,"Blowdown":1,"Closed":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 443,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":1,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":2,"🏔️":1,"❤️":1,"⛺":2,"🌋":1,"🌞":1,"🌊":1,"🌲":1},"trailConditions":{"Closed":1,"Muddy":2,"No shade":1,"Snow":1,"Fee":1,"Rocky":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 444,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌄":1,"🌋":1,"🌞":1,"🐺":1,"🦝":3,"🚵":2,"🥴":1,"🌊":1,"🌇":1,"🐻":1},"trailConditions":{"Rocky":2,"Bugs":2,"Scramble":1,"Fee":4,"No shade":1,"Closed":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 445,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🍺":1,"🐺":1,"🌞":1,"🌋":1,"😫":1,"🔥":1,"🦝":1,"🐕":2,"🐻":1},"trailConditions":{"Fee":2,"Private property":1,"Rocky":1,"Blowdown":2,"Scramble":1,"No shade":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 446,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"💪":1,"🗑️":1,"🦝":1,"🌊":1,"🌇":1,"🔥":1,"⛺":1,"🌋":1,"💩":1},"trailConditions":{"Icy":2,"Off trail":1,"Fee":1,"Over grown":1,"Bridge out":2,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 447,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"💯":1,"🙌":1,"🦌":1,"🦝":1,"🔥":1,"🌼":1,"🐻":1,"💪":1,"🐺":1},"trailConditions":{"Private property":1,"Scramble":1,"Great!":2,"No shade":1,"Fee":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 448,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":2,"🌌":1,"🌲":1,"🐕":2,"🐾":2,"🌄":1},"trailConditions":{"Over grown":1,"Bugs":1,"Flooded":2,"No shade":1,"Scramble":1,"Rocky":1,"Bridge out":1,"Fee":1,"Great!":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 449,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🐻":2,"❤️":1,"⛺":1,"🦌":1},"trailConditions":{"Bridge out":2,"Snow":1,"Scramble":2,"Private property":1,"Bugs":1,"No shade":1,"Muddy":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 450,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🙌":1,"💯":1,"🌊":1,"🆒":1,"🌇":1,"🎉":1,"🐺":1,"🦝":1,"👍":1},"trailConditions":{"Flooded":2,"No shade":1,"Closed":2,"Icy":2,"Bridge out":2,"Private property":1,"Fee":3,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 451,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💪":2,"🌌":1,"🌲":1,"⛺":1,"🌋":1,"😫":1,"🏔️":1,"🚵":1,"👍":1,"🥴":1},"trailConditions":{"Icy":2,"Closed":1,"Great!":1,"Muddy":1,"Bridge out":1,"Fee":2,"Snow":1,"Scramble":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 452,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":2,"🆒":3,"🎉":1,"🗑️":1,"🐕":1,"🌡️":1,"⛺":1,"💪":1,"❤️":1},"trailConditions":{"Rocky":1,"Blowdown":1,"Off trail":1,"Scramble":2,"Private property":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 453,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":1,"🏔️":1,"🌊":1,"🌲":1,"🌄":1,"🐻":1},"trailConditions":{"Snow":1,"Fee":2,"Rocky":3,"Muddy":1,"Icy":1,"Bridge out":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 454,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🗑️":1,"🚵":1,"🌇":1,"💩":2,"🌲":1,"😫":2,"🌊":2,"🎉":1,"🌋":1},"trailConditions":{"Private property":1,"Fee":1,"Closed":2,"Bugs":1,"Over grown":1,"Muddy":2,"Snow":1,"Icy":1,"Bridge out":1,"Flooded":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 455,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🏔️":1,"🦝":1,"🌋":1,"⛺":2,"🌄":1,"🌲":1,"🆒":1},"trailConditions":{"Flooded":1,"Scramble":1,"Rocky":2,"Muddy":1,"Over grown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 456,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"💪":1,"😫":1,"🌋":1,"🎉":1,"🐕":1,"👍":2,"⛺":1,"🌊":2,"🦌":1,"🆒":1},"trailConditions":{"Fee":1,"Closed":1,"Scramble":1,"Icy":2,"Bridge out":1,"No shade":2,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 457,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":3,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"💩":1,"🏔️":1,"🗑️":1,"😫":1,"🌄":1,"🦌":1,"🌊":1,"🌇":1,"🌞":2,"🙌":1},"trailConditions":{"Over grown":1,"Scramble":1,"Bridge out":2,"Rocky":1,"Fee":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 458,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🌋":1,"🌊":2,"🌌":2,"🌄":1,"🐾":1,"🌇":1,"🌼":1},"trailConditions":{"Bugs":1,"Rocky":1,"No shade":1,"Icy":3,"Blowdown":1,"Flooded":1,"Fee":1,"Off trail":1,"Muddy":1,"Great!":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 459,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":2,"🐻":1,"🥴":2,"❤️":1,"🦌":1,"🆒":1,"🌡️":1,"🏔️":1,"🌌":1},"trailConditions":{"Snow":1,"Rocky":2,"Great!":2,"Muddy":1,"Bugs":2,"Private property":1,"Closed":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 460,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"❤️":1,"🆒":3,"🐾":2,"🐻":1,"🌄":1},"trailConditions":{"Private property":1,"Scramble":1,"Bugs":1,"Great!":2,"Flooded":1,"Muddy":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 461,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🌇":1,"🌼":1,"💯":1,"🍺":1,"🙌":1},"trailConditions":{"Off trail":1,"Bridge out":2,"Scramble":2,"Icy":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 462,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":3,"🌡️":1,"🐾":2,"⛺":1,"🌞":1,"🙌":2,"🍺":1,"💯":1},"trailConditions":{"Great!":1,"Icy":1,"Muddy":1,"Fee":1,"Closed":1,"No shade":1,"Bridge out":1,"Over grown":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 463,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🌼":1,"🦌":1,"🌇":1,"🙌":1,"🌌":1},"trailConditions":{"Off trail":2,"Fee":2,"Snow":2}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 464,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🥴":2,"💩":1,"⛺":1,"🌄":1,"😫":1,"🍺":1,"🐻":1,"🚵":1,"🔥":1},"trailConditions":{"Over grown":2,"Private property":2,"Bugs":1,"No shade":1,"Muddy":1,"Snow":1,"Closed":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 465,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"⛺":1,"🐺":1,"🌋":1,"🦝":1,"🦌":1,"🌊":2,"🎉":1,"💯":1},"trailConditions":{"Snow":2,"Private property":1,"Fee":3,"Icy":1,"Over grown":1,"Off trail":1,"Flooded":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 466,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":2,"4":0,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🚵":1,"🌞":1,"🌌":1,"🌋":1,"🌄":2,"🐺":1,"🦌":1},"trailConditions":{"Great!":3,"No shade":2,"Off trail":2,"Flooded":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 467,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐾":1,"🌞":1,"⛺":1,"❤️":1,"👍":1,"🌇":1,"🐕":1,"💯":1,"🗑️":1},"trailConditions":{"Fee":1,"Bridge out":1,"Snow":1,"Off trail":1,"Flooded":1,"Muddy":1,"Great!":1,"Bugs":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 468,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":3,"4":0,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🐺":1,"🌲":1,"💩":1,"🌌":2,"🦝":1,"🐾":1,"🥴":1,"🌄":1},"trailConditions":{"Bugs":1,"Fee":1,"Closed":1,"Icy":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 469,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":1,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🗑️":1,"🏔️":1,"👍":2,"🙌":1,"🐾":1,"💪":1,"🌋":1},"trailConditions":{"Bugs":2,"Fee":1,"Rocky":1,"Private property":4,"Scramble":1,"Snow":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 470,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":0,"4":2,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"⛺":1,"💪":1,"❤️":2,"🆒":1,"🔥":1,"🌋":1,"🌡️":1,"🐺":1},"trailConditions":{"No shade":3,"Fee":2,"Icy":1,"Flooded":1,"Over grown":1,"Off trail":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 471,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🦝":1,"🌼":1,"🌋":1,"💩":1,"🐻":1,"🎉":1,"😫":1,"🐕":1},"trailConditions":{"Over grown":1,"Closed":1,"Snow":1,"Bridge out":2,"No shade":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 472,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":2,"5":0,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":1,"🗑️":1,"🦝":1,"🌼":2,"🦌":1,"💪":1,"🔥":1,"🌄":1},"trailConditions":{"Rocky":1,"Great!":1,"Icy":1,"Bridge out":1,"Over grown":1,"Blowdown":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 473,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🎉":2,"🔥":1,"🌞":1,"🐻":1,"🙌":1},"trailConditions":{"Over grown":1,"Muddy":1,"Icy":1,"Fee":2,"Snow":1,"Off trail":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 474,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":1,"5":1,"_total":3},"reviews":{"_total":3},"reactions":{"🌊":1,"🐾":2,"🥴":2,"🌇":1,"💪":1,"🏔️":1,"🌞":1},"trailConditions":{"Scramble":1,"Blowdown":1,"Fee":1,"No shade":2,"Closed":1,"Icy":1,"Snow":1,"Rocky":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trailId: 475,
        summary:
          '{"counts":{"stars":{"1":0,"2":0,"3":1,"4":0,"5":2,"_total":3},"reviews":{"_total":3},"reactions":{"🐕":1,"🍺":1,"❤️":1,"💪":1,"🚵":1},"trailConditions":{"Bugs":2,"Flooded":1,"Private property":1,"Fee":1,"Scramble":1}}}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TrailSummaries', null, {});
  },
};
