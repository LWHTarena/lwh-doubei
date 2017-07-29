/**
 * 登录数据结构模型
 ***/
export class Login {
  id = 0;
  supplier_user_name = '';
  supplier_user_passwprd= '';
  verify = '';

  /**
   * 登陆数据构造函数
   **/
  constructor(data: {
    id?: number,
    supplier_user_name?: string,
    supplier_user_password?: string,
    verify?: string
  } = {}) {

    this.id = data.id || 0;
    this.supplier_user_name = data.supplier_user_name || '';
    this.supplier_user_passwprd = data.supplier_user_password || '';
    this.verify = data.verify || '';
  }

}

export class SettletInfo{
  id = 0;
  supplier_vendor_name = '';
  supplier_prov_code = '';
  supplier_city_code = '';
  supplier_dist_code = '';
  supplier_addr = '';
  supplier_link_name = '';
  supplier_user_cellphone = '';
  code = '';
  supplier_user_password = '';

  /**
   * 入驻数据构造函数
   * @param data
   */
  constructor(data: {
    id?: number,
    supplier_vendor_name?: string,
    supplier_prov_code?: string,
    supplier_city_code?: string,
    supplier_dist_code?: string,
    supplier_addr?: string,
    supplier_link_name?: string,
    supplier_user_cellphone?: string,
    code?: string,
    supplier_user_password?: string,
  } = {}) {
    this.id = data.id || 0;
    this.supplier_vendor_name = data.supplier_vendor_name || '';
    this.supplier_prov_code = data.supplier_prov_code || '';
    this.supplier_city_code = data.supplier_city_code || '';
    this.supplier_dist_code = data.supplier_dist_code || '';
    this.supplier_addr = data.supplier_addr || '';
    this.supplier_link_name = data.supplier_link_name || '';
    this.supplier_user_cellphone = data.supplier_user_cellphone || '';
    this.code = data.code || '';
    this.supplier_user_password = data.supplier_user_password || '';
  }
}

export class LoginAccount {
  type_id = '';
  supplier_user_name = '';
  old_password = '';
  new_password = '';
  new_password_copy = '';
  constructor(data: {
    type_id?: string,
    supplier_user_name?: string,
    old_password?: string,
    new_password?: string,
    new_password_copy?: string
  } = {}) {
    this.type_id = data.type_id || '';
    this.supplier_user_name = data.supplier_user_name || '';
    this.old_password = data.old_password || '';
    this.new_password = data.new_password || '';
    this.new_password_copy = data.new_password_copy || '';
  }
}

