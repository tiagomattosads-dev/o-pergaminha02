
import { Ability, CharacterData, Skill } from './types';

export const INITIAL_SKILLS: Skill[] = [
  { name: 'Acrobatics', ability: Ability.DEX, proficient: false, expertise: false },
  { name: 'Animal Handling', ability: Ability.WIS, proficient: false, expertise: false },
  { name: 'Arcana', ability: Ability.INT, proficient: false, expertise: false },
  { name: 'Athletics', ability: Ability.STR, proficient: false, expertise: false },
  { name: 'Deception', ability: Ability.CHA, proficient: false, expertise: false },
  { name: 'History', ability: Ability.INT, proficient: false, expertise: false },
  { name: 'Insight', ability: Ability.WIS, proficient: false, expertise: false },
  { name: 'Intimidation', ability: Ability.CHA, proficient: false, expertise: false },
  { name: 'Investigation', ability: Ability.INT, proficient: false, expertise: false },
  { name: 'Medicine', ability: Ability.WIS, proficient: false, expertise: false },
  { name: 'Nature', ability: Ability.INT, proficient: false, expertise: false },
  { name: 'Perception', ability: Ability.WIS, proficient: false, expertise: false },
  { name: 'Performance', ability: Ability.CHA, proficient: false, expertise: false },
  { name: 'Persuasion', ability: Ability.CHA, proficient: false, expertise: false },
  { name: 'Religion', ability: Ability.INT, proficient: false, expertise: false },
  { name: 'Sleight of Hand', ability: Ability.DEX, proficient: false, expertise: false },
  { name: 'Stealth', ability: Ability.DEX, proficient: false, expertise: false },
  { name: 'Survival', ability: Ability.WIS, proficient: false, expertise: false },
];

export const INITIAL_CHARACTER: CharacterData = {
  name: 'Hello World', // Acknowledging user request while maintaining scope
  class: 'Fighter',
  level: 1,
  race: 'Human',
  background: 'Soldier',
  alignment: 'Neutral Good',
  xp: 0,
  hpMax: 10,
  hpCurrent: 10,
  hpTemp: 0,
  armorClass: 16,
  initiative: 0,
  speed: 30,
  abilities: {
    [Ability.STR]: { score: 10, proficient: false },
    [Ability.DEX]: { score: 10, proficient: false },
    [Ability.CON]: { score: 10, proficient: false },
    [Ability.INT]: { score: 10, proficient: false },
    [Ability.WIS]: { score: 10, proficient: false },
    [Ability.CHA]: { score: 10, proficient: false },
  },
  skills: INITIAL_SKILLS,
  inventory: [],
  spells: [],
  proficiencies: ['Common', 'Longsword', 'Shield'],
};

export const calculateModifier = (score: number): number => {
  return Math.floor((score - 10) / 2);
};

export const calculateProficiencyBonus = (level: number): number => {
  return Math.floor((level - 1) / 4) + 2;
};
