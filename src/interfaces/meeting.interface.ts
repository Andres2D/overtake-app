export interface Meeting {
  circuit_key: number;
  circuit_short_name: string;
  meeting_key: number;
  location: string;
  country_key: number;
  country_code: string;
  country_name: string;
  meeting_name: string;
  meeting_official_name: string;
  date_start: string;
  year: number;
  meeting_code?: string;
}

export interface MeetingMap {
  [key: number]: {
    track: string;
    flag: string;
  }
}
