/**
 * Listing Model Mock Example
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

/* eslint-disable */

import { ListingListInterface } from '@/store/listing/interfaces/listing.interface';
import { CertificationType } from '@/store/listing/interfaces/listing/listing_model.interface';
import { ListingTypeEnum, PropertyTypeEnum } from '@/store/listing/interfaces/listing/listing_type.interface';


export const DefaultListingModel: ListingListInterface = {
    count: 2,
    properties: [
        {
            id: '#123abce',
            title: 'Dijual Rumah Nusaloka di BSD Tangerang Selatan',
            location: 'BSD, Tangerang Selatan, Jakarta Barat',
            description: `<p></p><p>RUMAH DIJUAL</p>
<p>JALAN BUANA MEKAR 1 NO. 22<br>Trs. BUAH BATU <br>Bandung </p>
<p>Sertifikat Hak Milik </p>
<p>Luas tanah:  225 m2 <br>Luas bangunan: 200 m2 <br>Lantai: 2 1/2 Lantai <br>Dapur: Dapur Kotor dan Dapur Bersih<br>Hadap: Utara<br>Mobil: Carport dan Garasi</p>
<p>Informasi:<br>- 7 menit ke Gerbang TOL Buah Batu, <br>- 10 menit ke Carrefour, <br>- 10 menit ke Buah Batu Square<br>- 20 menit ke Trans Studio Mall <br>- Listrik: 3500 watt <br>- Air: Submersible<br>- Filter : Yamaha Filter<br>- Semi Furnished<br>- Internet Fiber Optic by Firstmedia<br>- CCTV</p>
<p></p>`,
            link:
                'https://www.olx.co.id/iklan/rumah-dijual-murah-siap-huni-di-arcamanik-bandung-strategis-disko-dp-IDAd7W6.html?ad_type=OR#5e2fc97f72',
            attribute: {
                bedrooms: 3,
                bathrooms: 2,
                buildingSize: 217,
                landSize: 142,
                floors: 2,
                price: 700000000,
                priceTag: 'Rp. 700 Juta',
                certification: CertificationType.HAK_MILIK,
                carports: 1,
                garages: 1
            },
            formattedAttributes: [
                {
                    label: 'Tipe Properti',
                    name: 'propertyType',
                    value: 'Rumah'
                },
                {
                    label: 'Kamar Tidur',
                    name: 'bathrooms',
                    value: '3 Kamar Tidur'
                },
                {
                    label: 'Kamar Mandi',
                    name: 'bedrooms',
                    value: '2 Kamar Mandi'
                },
                {
                    label: 'Luas Tanah',
                    name: 'landSize',
                    value: '142 m<sup>2</sup>'
                },
                {
                    label: 'Luas Bangunan',
                    name: 'buildingSize',
                    value: '217 m<sup>2</sup>'
                },
                {
                    label: 'Sertifikat',
                    name: 'certification',
                    value: 'SHM'
                },
                {
                    label: 'Carpot',
                    name: 'carpots',
                    value: 1
                },
                {
                    label: 'Garasi',
                    name: 'garage',
                    value: 1
                }
            ],
            listingType: ListingTypeEnum.FOR_SALE,
            mainPicture:
                'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553127.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
            pictures: [
                {
                    caption: 'Testing Picture',
                    url:
                        'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553127.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                    id: 'ID-property-1'
                },
                {
                    url:
                        'https://id1-cdn.pgimgs.com/listing/16497579/UPHO.90553128.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                    id: 'ID-property-2'
                },
                {
                    url:
                        'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553129.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                    id: 'ID-property-3'
                },
                {
                    url:
                        'https://id1-cdn.pgimgs.com/listing/16497579/UPHO.90553130.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                    id: 'ID-property-4'
                },
                {
                    url:
                        'https://id2-cdn.pgimgs.com/listing/16497579/UPHO.90553131.V800/Manyar-Jaya-Surabaya-Indonesia.jpg',
                    id: 'ID-property-5'
                }
            ],
            propertyType: PropertyTypeEnum.HOUSE,
            agent: {
                name: 'Co Con',
                picture: 'https://randomuser.me/api/portraits/men/9.jpg',
                contact: {
                    address: 'Rancaekek',
                    telephone: '085721079753'
                }
            }
        },
        {
            id: '#PGA68N',
            title: 'Dijual Kost-an Daerah Dago Bandung',
            location: 'Jl. Dago Pojok  Dago',
            description: 'Testing Description',
            link:
                'https://www.olx.co.id/iklan/cluster-murah-strategis-di-serpong-park-IDAd7Uy.html?ad_type=OR#5e2fc97f72',
            attribute: {
                bedrooms: 6,
                bathrooms: 5,
                buildingSize: 100,
                landSize: 141,
                floors: 2,
                price: 1500000000,
                priceTag: 'Rp. 1.5 Milyar',
                certification: CertificationType.PPJB,
                carports: 2,
                garages: 1
            },
            formattedAttributes: [
                {
                    label: 'Tipe Properti',
                    name: 'propertyType',
                    value: 'Rumah'
                },
                {
                    label: 'Kamar Tidur',
                    name: 'bedrooms',
                    value: '6 Kamar Tidur'
                },
                {
                    label: 'Kamar Mandi',
                    name: 'bathrooms',
                    value: '141 Kamar Mandi'
                },
                {
                    label: 'Luas Tanah',
                    name: 'landSize',
                    value: '142 m<sup>2</sup>'
                },
                {
                    label: 'Luas Bangunan',
                    name: 'buildingSize',
                    value: '100 m<sup>2</sup>'
                },
                {
                    label: 'Sertifikat',
                    name: 'certification',
                    value: 'PPJB'
                },
                {
                    label: 'Carpot',
                    name: 'carpots',
                    value: 2
                },
                {
                    label: 'Garasi',
                    name: 'garage',
                    value: 1
                }
            ],
            listingType: ListingTypeEnum.FOR_SALE,
            mainPicture:
                'https://picture.urbanindo.com/listing/719589588/08/8700bae7/dijual-kost-an-daerah-dago-bandung/780/780.jpg',
            pictures: [
                {
                    caption: 'Testing Picture',
                    url:
                        'https://picture.urbanindo.com/listing/719589588/01/444fb4d6/dijual-kost-an-daerah-dago-bandung/780/780.jpg',
                    id: 'ID-property-1'
                },
                {
                    url:
                        'https://picture.urbanindo.com/listing/719589588/01/c5ed2484/dijual-kost-an-daerah-dago-bandung/780/780.jpg',
                    id: 'ID-property-2'
                },
                {
                    url:
                        'https://picture.urbanindo.com/listing/719589588/01/973ccfc3/dijual-kost-an-daerah-dago-bandung/780/780.jpg',
                    id: 'ID-property-3'
                },
                {
                    url:
                        'https://picture.urbanindo.com/listing/719589588/02/204fca96/dijual-kost-an-daerah-dago-bandung/620/412.jpg',
                    id: 'ID-property-4'
                }
            ],
            propertyType: PropertyTypeEnum.HOUSE,
            agent: {
                name: 'Andrew Thian',
                picture: 'https://randomuser.me/api/portraits/men/8.jpg',
                contact: {
                    address: 'Padalarang',
                    telephone: '085721079753'
                }
            }
        }
    ],
    selected: 0
};
