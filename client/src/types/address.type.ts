export interface IAddress {
    province: string,
    district: string,
    ward: string,
    houseNumber: string
}
export interface IAddressForm {
    province?: IProvince | null,
    district?: IDistrict | null,
    ward?: IWard | null,
    houseNumber?: string | null
}
export interface IProvince {
    code: string | number,
    code_name?: string,
    division_type?: string,
    name?: string,
    phone_code: string,
    districts: IDistrict[]
}
export interface IDistrict {
    code: string | number,
    codename?: string,
    division_type?: string,
    province_code: number,
    name?: string,
    wards: IWard[]
}
export interface IWard {
    code: string | number,
    code_name?: string,
    division_type?: string,
    name?: string,
    district_code: number
}