// export const MAResult = {
//     "total": 2,
//     "offset": 11,
//     "size": 10,
//     "latitude": 42.37,
//     "type": "prefix",
//     "radius": 3,
//     "results": [
//         {           
//             "storeId": "1",
//             "distance":"2.7 mile",
//             "town": "Cambridge",
//             "street": "100 Cambridgeside Pl",
//             "countryCode": "USA",
//             "locality": "spc e122",
//             "county": "Massachusetts",
//             "postcode": "MA02141"
//         },
//         {
//             "storeId": "1",
//             "distance":"0.4 mile",
//             "town": "Masste",
//             "street": "624 Massachusetts Ave",
//             "countryCode": "USA",
//             "locality": "Suite 300",
//             "county": "Massachusetts",
//             "postcode": "MA02141"
//         }
//     ],
//     "order": "postcode.asc",
//     "longitude": -71.08
// };

// export const NottinghamResult = {
//     "total": 3,
//     "offset": 11,
//     "size": 10,
//     "latitude": 52.95,
//     "type": "prefix",
//     "radius": 3,
//     "results": [
//         {
//             "storeId": "1",
//             "distance":"0.4 mile",
//             "town": "Nottingham",
//             "street": "1 Bailey st",
//             "countryCode": "GB",
//             "locality": "CastleMarina",
//             "county": "Nottinghamshire",
//             "postcode": "NG6 0HD"
//         },
//         {
//             "storeId": "2",
//             "distance":"1.2 mile",
//             "town": "Nottingham",
//             "street": "11 Bolsover St",
//             "countryCode": "GB",
//             "locality": "Bolsover",
//             "county": "Nottinghamshire",
//             "postcode": "NG15 7UA"
//         },
//         {
//             "storeId": "3",
//             "distance":"2.4 mile",
//             "town": "Nottingham",
//             "street": "402 Mansfield Rd",
//             "countryCode": "GB",
//             "locality": "Mansfield",
//             "county": "Nottinghamshire",
//             "postcode": "NG5 2EJ"
//         },
//     ],
//     "order": "postcode.asc",
//     "longitude": -1.15
// };

export default [
    // MA 02141 or Cambridge, MA
    {
        "langitude": "-71.0809757",
        "mobileNumber": "6176210870",
        "latitude": "42.3716445",
        "contactTelephoneNumber": "6176210870",
        "status": "active",
        "storeId": "1",
        "distance":"0.4 mile",
        "town": "Masste",
        "street": "624 Massachusetts Ave",
        "countryCode": "USA",
        "locality": "Suite 300",
        "county": "Massachusetts",
        "postcode": "MA02141"
    },
    // Nottingham
    {
        "langitude": "-1.1803385",
        "mobileNumber": "+44 115 978 1231",
        "latitude": "52.9788558",
        "postcode": "NG6 0HD",
        "contactTelephoneNumber": "+44 115 978 1231",
        "status": "active",
        "storeId": "2",
        "distance":"1.4 mile",
        "town": "Nottingham",
        "street": "12 Castle Avenue",
        "countryCode": "GB",
        "locality": "Castle Marina",
        "county": "Nottinghamshire",
    },
    // London
    {
        "langitude": "-0.1277583",
        "mobileNumber": "+44 115 978 1231",
        "latitude": "51.5073509",
        "postcode": "W1G 7JL",
        "preferredMethodOfCommunication": "Train",
        "contactTelephoneNumber": "+44 115 978 1231",
        "email": "",
        "status": "active",
        "storeId": "3",
        "distance":"1.1 mile",
        "town": "London",
        "street": "1 Fenchurch Street",
        "countryCode": "GB",
        "locality": "Central London",
        "county": "London",
    },
]