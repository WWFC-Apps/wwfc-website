import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

function getCurrentSeasonStartYear() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Season rolls forward on May 31st
  const rolloverDate = new Date(currentYear, 4, 31);

  return today >= rolloverDate ? currentYear : currentYear - 1;
}

const seasonStartYear = getCurrentSeasonStartYear();

export const currentSeason = {
  startYear: seasonStartYear,
  label: `${seasonStartYear}/${String(seasonStartYear + 1).slice(-2)}`,
};
export const sections = [
  {
    slug: "adult-senior-football",
    title: "Adult / Senior Football",
    description:
      "Adult and senior football teams competing across grassroots football.",
  },
  {
    slug: "youth-football-mixed",
    title: "Youth Football (Mixed)",
    description:
      "Mixed youth football teams from mini soccer through to youth age groups.",
  },
  {
    slug: "girls-football",
    title: "Girls Football",
    description:
      "Girls football pathways supporting development, participation and competition.",
  },
  {
    slug: "pan-disability-football",
    title: "Pan-Disability Football",
    description:
      "Inclusive football opportunities for players of all abilities. Wiltshire Ability-Counts Football League",
  },
  {
    slug: "sessional-football",
    title: "Sessional Football",
    description:
      "Development and participation sessions focused on fun, confidence and learning.",
  },
  {
    slug: "tournament-football",
    title: "Tournament Football",
    description:
      "Tournament teams, summer competitions and special football events.",
  },
];

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



function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const csvPath = path.resolve("./src/data/teams.csv");

const fileContent = fs.readFileSync(csvPath);

const rawTeams = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
});

export const teams = rawTeams.map((team: any) => {
  const birthYear = team.birthYear ? Number(team.birthYear) : null;
  const teamName = team.teamName?.trim() || "team";

  
  return {
    ...team,
    teamName,
    birthYear,
 slug: slugify(teamName),
    recruiting: String(team.recruiting).toLowerCase() === "true",
    gallery: team.gallery
  ? team.gallery
      .split("|")
      .map((image: string) => image.trim())
      .filter(Boolean)
  : [],
  };
});
