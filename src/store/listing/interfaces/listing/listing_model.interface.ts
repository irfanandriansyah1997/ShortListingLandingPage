/**
 * Listing Attribute Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.13
 */

export enum CertificationType {
    HAK_MILIK = 0,
    HAK_GUNA_BANGUNAN = 1,
    HAK_PAKAI = 2,
    HAK_GUNA_USAHA = 3,
    HAK_PENGELOLAAN = 4,
    AKTA_JUAL_BELI = 5,
    PPJB = 6,
    STRATA_TITLE = 7,
    OTHERS = 9
}

export interface ListingAttributeInterface {
    bedrooms?: number;
    bathrooms?: number;
    buildingSize?: number;
    landSize?: number;
    floors?: number;
    price: number;
    priceTag: string;
    certification?: CertificationType;
    carports?: number;
    garages?: number;
    maidBathrooms?: number;
    maidBedrooms?: number;
}

export interface FormattedAttribute {
    name: string;
    label: string;
    value: string;
}
