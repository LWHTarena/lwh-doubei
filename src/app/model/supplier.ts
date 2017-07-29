export class Supplier {
}

// 供应商信息
export class SupplierInfo {
  supplier_vendor_name = '';
  supplier_vendor_id = '';
  supplier_link_name = '';
  supplier_user_cellphone = '';
  supplier_prov_name = '';
  supplier_city_name = '';
  supplier_dist_name = '';
  supplier_addr = '';
  supplier_introduce = '';
  supplier_introduction = '';

  constructor(data: {
    supplier_vendor_name?: string,
    supplier_vendor_id?: string,
    supplier_link_name?: string,
    supplier_user_cellphone?: string,
    supplier_prov_name?: string,
    supplier_city_name?: string,
    supplier_dist_name?: string,
    supplier_addr?: string,
    supplier_introduce?: string,
    supplier_introduction?: string
  } = {}) {
    this.supplier_vendor_name = data.supplier_vendor_name || '';
    this.supplier_vendor_id = data.supplier_vendor_id || '';
    this.supplier_link_name = data.supplier_link_name || '';
    this.supplier_user_cellphone = data.supplier_user_cellphone || '';
    this.supplier_prov_name = data.supplier_prov_name || '';
    this.supplier_city_name = data.supplier_city_name || '';
    this.supplier_dist_name = data.supplier_dist_name || '';
    this.supplier_addr = data.supplier_addr || '';
    this.supplier_introduce = data.supplier_introduce || '';
    this.supplier_introduction = data.supplier_introduction || '';
  }
}
