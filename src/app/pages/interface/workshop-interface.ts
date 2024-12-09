export interface Workshop {
  address: string;
  default_address: string | null;
  website: string | null;
  social_facebook: string | null;
  social_twitter: string | null;
  social_linked_in: string | null;
  schedules: any[];
  relationships: any[];
  type: string;
  created_at: string;
  group: string | null;
  name: string;
  email: string;
  email2: string | null;
  phone: string | null;
  phone2: string | null;
  phone3: string | null;
  formatted_address: string;
  active: boolean;
  default_formatted_address: string | null;
  area_code: string | null;
  country_code: string;
  zone_information: string;
  make_code: string | null;
  time_per_shift: number | null;
  amount_per_shift: number | null;
  maximum_per_day: number | null;
  minimum_anticipation_days: number | null;
  removed_at: string | null;
  updated_at: string;
  id: number;
  externals: any;
  externals_crm: any;
  resource_type: string | null;
}

export interface SurveyConfig {
  enabled: boolean;
  llamado_dias_planificado: number;
  llamado_dias_vencimiento: number;
  asignacion_tipo: string;
  asignacion_usuarios: any[];
  mapping: {
    score_1: string;
    score_2: string;
    score_3: string;
    score_4: string;
    score_5: string;
  };
  pregunta: string;
}
