function getCurrentSeasonStartYear() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Season rolls forward on May 31st
  const rolloverDate = new Date(currentYear, 4, 31); // month 4 = May

  return today >= rolloverDate ? currentYear : currentYear - 1;
}

const seasonStartYear = getCurrentSeasonStartYear();

export const currentSeason = {
  startYear: seasonStartYear,
  label: `${seasonStartYear}/${String(seasonStartYear + 1).slice(-2)}`,
};

export function getYouthAgeGroup(birthYear: number) {
  const age = currentSeason.startYear - birthYear;
  return `U${age}`;
}

export function getYouthAgeGroupSlug(birthYear: number) {
  return getYouthAgeGroup(birthYear).toLowerCase();
}

export const youthAgeGroups = Array.from({ length: 10 }, (_, index) => {
  const age = index + 9;

  return {
    ageGroup: `U${age}`,
    slug: `u${age}`,
    season: currentSeason.label,
  };
});

export const sections = [
  {
    slug: "adult-senior-football",
    title: "Adult / Senior Football",
    description: "Adult and senior football teams across the club.",
  },
  {
    slug: "youth-football-mixed",
    title: "Youth Football (Mixed)",
    description: "Mixed youth football teams from mini soccer upwards.",
  },
  {
    slug: "girls-football",
    title: "Girls Football",
    description: "Girls football teams across multiple age groups.",
  },
  {
    slug: "pan-disability-football",
    title: "Pan-Disability Football",
    description: "Inclusive football opportunities for players of all abilities.",
  },
  {
    slug: "sessional-football",
    title: "Sessional Football",
    description: "Development, training and participation sessions.",
  },
    {
    slug: "tournament-football",
    title: "Tournament Football",
    description:
      "Tournament teams, summer competitions and special football events.",
  },
];


export const teams = [
  {
    name: "Blue",
    slug: "2016-blue",
    section: "youth-football-mixed",
    birthYear: 2016,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2015-blue",
    section: "youth-football-mixed",
    birthYear: 2015,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2014-blue",
    section: "youth-football-mixed",
    birthYear: 2014,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2013-blue",
    section: "youth-football-mixed",
    birthYear: 2013,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2012-blue",
    section: "youth-football-mixed",
    birthYear: 2012,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2011-blue",
    section: "youth-football-mixed",
    birthYear: 2011,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2010-blue",
    section: "youth-football-mixed",
    birthYear: 2010,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2009-blue",
    section: "youth-football-mixed",
    birthYear: 2009,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2008-blue",
    section: "youth-football-mixed",
    birthYear: 2008,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },
  {
    name: "Blue",
    slug: "2007-blue",
    section: "youth-football-mixed",
    birthYear: 2007,
    category: "Youth Football (Mixed)",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Mixed youth football team.",
  },


  {
    name: "Wildcats",
    slug: "wildcats",
    section: "sessional-football",
    ageGroup: "Girls Football",
    category: "Sessional Football",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Girls sessional football designed to help players enjoy the game, build skills and make friends.",
  },
  {
    name: "Pan-Disability Football",
    slug: "pan-disability-football",
    section: "pan-disability-football",
    ageGroup: "Inclusive Football",
    category: "Pan-Disability Football",
    manager: "TBC",
    training: "TBC",
    venue: "TBC",
    recruiting: true,
    description: "Inclusive football opportunities for players with disabilities in a welcoming club environment.",
  },
];
