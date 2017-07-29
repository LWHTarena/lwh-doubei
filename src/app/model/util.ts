export class Util {
}

/**
 * 省市区
 */
export class AreaBean {
  area_id = 0;
  area_code = '';
  area_f_code = '';
  area_name = '';
  area_level = '';
  area_name_eng = '';
  area_shortname_eng = '';

  constructor(data: {
    area_id?: number,
    area_code?: string,
    area_f_code?: string,
    area_name?: string
    area_level?: string
    area_name_eng?: string
    area_shortname_eng?: string
  } = {}) {
    this.area_id = data.area_id || 0;
    this.area_code = data.area_code || '';
    this.area_f_code = data.area_f_code || '';
    this.area_name = data.area_name || '';
    this.area_level = data.area_level || '';
    this.area_name_eng = data.area_name_eng || '';
    this.area_shortname_eng = data.area_shortname_eng || '';
  }
}
