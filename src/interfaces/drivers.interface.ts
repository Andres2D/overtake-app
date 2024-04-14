export interface Driver {
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string | null;
  team_colour: string | null;
  first_name: string | null;
  last_name: string | null;
  headshot_url: string | null;
  country_code: string | null;
  session_key: number;
  meeting_key: number;
}
