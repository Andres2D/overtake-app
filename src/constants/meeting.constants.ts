import { MeetingMap, DriverMap } from '../interfaces';

import {
  abudhabi,
  azerbaijan,
  bahrain,
  canada,
  catalunya,
  // china,
  cota,
  dutch,
  // emilia,
  hungary,
  interlagos,
  italy,
  jeddah,
  melbourne,
  mexico,
  miami,
  monaco,
  qatar,
  redbullring,
  silverstone,
  singapore,
  spa,
  susuka,
  vegas,
  ferrari,
  alfaromeo,
  alphatauri,
  alpine,
  astonmartin,
  haas,
  mclaren,
  mercedez,
  redbull,
  williams
} from '../assets/svg';

export const meetingsMap: MeetingMap = {
  70: {
    track: abudhabi,
    flag: '🇦🇪'
  },
  144: {
    track: azerbaijan,
    flag: '🇦🇿'
  },
  63: {
    track: bahrain,
    flag: '🇧🇭'
  },
  23: {
    track: canada,
    flag: '🇨🇦'
  },
  15: {
    track: catalunya,
    flag: '🇪🇸'
  },
  // china: {
  //   track: '',
  //   flag: ''
  // },
  9: {
    track: cota,
    flag: '🇺🇸'
  },
  55: {
    track: dutch,
    flag: '🇳🇱'
  },
  // 39: {
  //   track: emilia,
  //   flag: '🇮🇹'
  // },
  4: {
    track: hungary,
    flag: '🇭🇺'
  },
  14: {
    track: interlagos,
    flag: '🇧🇷'
  },
  39: {
    track: italy,
    flag: '🇮🇹'
  },
  149: {
    track: jeddah,
    flag: '🇸🇦'
  },
  10: {
    track: melbourne,
    flag: '🇦🇺'
  },
  65: {
    track: mexico,
    flag: '🇲🇽'
  },
  151: {
    track: miami,
    flag: '🇺🇸'
  },
  22: {
    track: monaco,
    flag: '🇲🇨'
  },
  150: {
    track: qatar,
    flag: '🇶🇦'
  },
  19: {
    track: redbullring,
    flag: '🇦🇹'
  },
  2: {
    track: silverstone,
    flag: '🇬🇧'
  },
  61: {
    track: singapore,
    flag: '🇸🇬'
  },
  7: {
    track: spa,
    flag: '🇧🇪'
  },
  46: {
    track: susuka,
    flag: '🇯🇵'
  },
  152: {
    track: vegas,
    flag: '🇺🇸'
  }
};

export const driverMap: DriverMap = {
  'VER': {
    car: redbull,
    intervalColor: 'white',
    teamColor: '#3671C6'
  },
  'SAR': {
    car: williams,
    intervalColor: 'black',
    teamColor: '#37BEDD'
  },
  'NOR': {
    car: mclaren,
    intervalColor: 'black',
    teamColor: '#F58020'
  },
  'GAS': {
    car: alpine,
    intervalColor: 'black',
    teamColor: '#2293D1'
  },
  'PER': {
    car: redbull,
    intervalColor: 'white',
    teamColor: '#3671C6'
  },
  'ALO': {
    car: astonmartin,
    intervalColor: 'white',
    teamColor: '#358C75'
  },
  'LEC': {
    car: ferrari,
    intervalColor: 'white',
    teamColor: '#F91536'
  },
  'STR': {
    car: astonmartin,
    intervalColor: 'white',
    teamColor: '#358C75'
  },
  'MAG': {
    car: haas,
    intervalColor: 'black',
    teamColor: '#B6BABD'
  },
  'TSU': {
    car: alphatauri,
    intervalColor: 'white',
    teamColor: '#5E8FAA'
  },
  'ALB': {
    car: williams,
    intervalColor: 'black',
    teamColor: '#37BEDD'
  },
  'ZHO': {
    car: alfaromeo,
    intervalColor: 'white',
    teamColor: '#C92D4B'
  },
  'HUL': {
    car: haas,
    intervalColor: 'white',
    teamColor: '#B6BABD'
  },
  'OCO': {
    car: alpine,
    intervalColor: 'black',
    teamColor: '#2293D1'
  },
  'LAW': {
    car: alphatauri,
    intervalColor: 'white',
    teamColor: '#5E8FAA'
  },
  'RIC': {
    car: alphatauri,
    intervalColor: 'white',
    teamColor: '#5E8FAA'
  },
  'HAM': {
    car: mercedez,
    intervalColor: 'black',
    teamColor: '#6CD3BF'
  },
  'SAI': {
    car: ferrari,
    intervalColor: 'white',
    teamColor: '#F91536'
  },
  'RUS': {
    car: mercedez,
    intervalColor: 'black',
    teamColor: '#6CD3BF'
  },
  'BOT': {
    car: alfaromeo,
    intervalColor: 'white',
    teamColor: '#C92D4B'
  },
  'PIA': {
    car: mclaren,
    intervalColor: 'black',
    teamColor: '#F58020'
  },
};
