
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoiZGFpbmlhbHBhZHJhaWciLCJhIjoiY2tmMDcyanUxMG9ndjJycGQwNGRpbG9heCJ9.auEu7fiKWtW9RSU_kFm4hw",
    CSV: "data/lunch_locations.csv",
    center: [-111.701, 34.190], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Feed the Kids",
    description: "Find locations near you where school-age children can receive free or reduced price lunches.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};
