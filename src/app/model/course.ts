export class Course {
}

export class SupplierGoods {
  supplier_goods_id = '';
  supplier_goods_name = '';
  goods_class_name = '';
  supplier_goods_kid = '';
  supplier_goods_status = '';
  area_list = [];

  constructor(data: {
    supplier_goods_id?: string,
    supplier_goods_name?: string,
    goods_class_name?: string,
    supplier_goods_kid?: string,
    supplier_goods_status?: string,
    area_list?: AreaList[]
  } = {}) {
    this.supplier_goods_id = data.supplier_goods_id;
    this.supplier_goods_name = data.supplier_goods_name;
    this.goods_class_name = data.goods_class_name;
    this.supplier_goods_kid = data.supplier_goods_kid;
    this.supplier_goods_status = data.supplier_goods_status;
    this.area_list = data.area_list;
  }
}

export class SupplierClass {
  supplier_goods_name = '';
  supplier_goods_class_code = '';
  supplier_goods_teaching_id = '';
  supplier_goods_kid_range = '';
  start_supplier_goods_kid_range = '';
  end_supplier_goods_kid_range = '';
  supplier_goods_status = '';
  supplier_goods_pic_url = '';
  supplier_goods_details = '';
  supplier_goods_synopsis = '';
  draft_id = '';
  area_list = [];

  constructor(data: {
    supplier_goods_name?: string,
    supplier_goods_class_code?: string,
    supplier_goods_teaching_id?: string,
    supplier_goods_kid_range?: string,
    start_supplier_goods_kid_range?: string,
    end_supplier_goods_kid_range?: string,
    supplier_goods_status?: string,
    supplier_goods_pic_url?: string,
    supplier_goods_details?: string,
    supplier_goods_synopsis?: string,
    draft_id?: string,
    area_list?: AreaList[]
  } = {}) {
    this.supplier_goods_name = data.supplier_goods_name;
    this.supplier_goods_class_code = data.supplier_goods_class_code;
    this.supplier_goods_teaching_id = data.supplier_goods_teaching_id;
    this.supplier_goods_kid_range = data.supplier_goods_kid_range;
    this.start_supplier_goods_kid_range = data.start_supplier_goods_kid_range;
    this.end_supplier_goods_kid_range = data.end_supplier_goods_kid_range;
    this.supplier_goods_status = data.supplier_goods_status;
    this.supplier_goods_pic_url = data.supplier_goods_pic_url;
    this.supplier_goods_details = data.supplier_goods_details;
    this.supplier_goods_synopsis = data.supplier_goods_synopsis;
    this.draft_id = data.draft_id;
    this.area_list = data.area_list;
  }
}

export class CourseFAQ {
  id = '';
  supplier_goods_name = '';
  supplier_school_name = '';
  supplier_enrol_name = '';
  supplier_enrol_cellphone = '';
  supplier_prov_name = '';
  supplier_city_name = '';
  supplier_dist_name = '';
  supplier_addr = '';
  create_time = '';
  enrol_remarks = '';

  constructor(data: {
    id?: string,
    supplier_goods_name?: string,
    supplier_school_name?: string,
    supplier_enrol_name?: string,
    supplier_enrol_cellphone?: string,
    supplier_prov_name?: string,
    supplier_city_name?: string,
    supplier_dist_name?: string,
    supplier_addr?: string,
    create_time?: string,
    enrol_remarks?: string
  } = {}) {
    this.id = data.id;
    this.supplier_goods_name = data.supplier_goods_name;
    this.supplier_school_name = data.supplier_school_name;
    this.supplier_enrol_name = data.supplier_enrol_name;
    this.supplier_enrol_cellphone = data.supplier_enrol_cellphone;
    this.supplier_prov_name = data.supplier_prov_name;
    this.supplier_city_name = data.supplier_city_name;
    this.supplier_dist_name = data.supplier_dist_name;
    this.supplier_addr = data.supplier_addr;
    this.create_time = data.create_time;
    this.enrol_remarks = data.enrol_remarks;
  }
}

export class CourseOptions {

  goods_class = [];
  teaching_list = [];
  phone_class = [];
  constructor(data: {
    goods_class?: CourseType[],
    teaching_list?: TeachType[],
    phone_class?: FitPeopleType[]
  } = {}) {
    this.goods_class = data.goods_class;
    this.teaching_list = data.teaching_list;
    this.phone_class = data.phone_class;
  }
}

export class CourseFormBean {
  supplier_goods_name = '';
  supplier_goods_class_id = '';
  supplier_goods_teaching_id = '';
  start_supplier_goods_kid_range = '';
  end_supplier_goods_kid_range = '';
  supplier_goods_synopsis = '';
  supplier_goods_details = '';
  way_id = '';
  supplier_goods_id = '';
  main_pic = '';
  area = [];

  constructor(data: {
    supplier_goods_name?: string,
    supplier_goods_class_id?: string,
    supplier_goods_teaching_id?: string,
    start_supplier_goods_kid_range?: string,
    end_supplier_goods_kid_range?: string,
    supplier_goods_synopsis?: string,
    supplier_goods_details?: string,
    way_id?: string,
    supplier_goods_id?: string,
    main_pic?: string,
    area?: AreaBeans[]
  } = {}) {
    this.supplier_goods_name = data.supplier_goods_name;
    this.supplier_goods_class_id = data.supplier_goods_class_id;
    this.supplier_goods_teaching_id = data.supplier_goods_teaching_id;
    this.start_supplier_goods_kid_range = data.start_supplier_goods_kid_range;
    this.end_supplier_goods_kid_range = data.end_supplier_goods_kid_range;
    this.supplier_goods_synopsis = data.supplier_goods_synopsis;
    this.supplier_goods_details = data.supplier_goods_details;
    this.way_id = data.way_id;
    this.supplier_goods_id = data.supplier_goods_id;
    this.main_pic = data.main_pic;
    this.area = data.area;
  }
}

export class AreaList {
  goods_prov_code = '';
  goods_prov_name = '';
  goods_city_code = '';
  goods_city_name = '';
  goods_dist_code = '';
  goods_dist_name = '';
}

export class AreaBeans {
  supplier_prov_code = '';
  supplier_prov_name = '';
  supplier_city_code = '';
  supplier_city_name = '';
  supplier_dist_code = '';
  supplier_dist_name = '';
}

export class CourseType {
  goods_class_code = '';
  goods_class_name = '';
}

export class TeachType {
  goods_class_code = '';
  goods_class_name = '';
}

export class FitPeopleType {
  goods_class_code = '';
  goods_class_name = '';
}
