// // window.onload = () => {
// //     let places = staticLoadPlaces();
// //     renderPlaces(places);
// // };

// // function staticLoadPlaces() {
// //     return [
// //         {
// //             name: 'Place1',
// //             location: {
// //                 lat: 6.235899925231934,
// //                 lng: -75.57510375976562,
// //             }
// //         },
// //         {
// //             name: 'Place2',
// //             location: {
// //                 lat: 6.200326,
// //                 lng: -75.573206,
// //             }
// //         },
// //         {
// //             name: 'Place3',
// //             location: {
// //                 lat: 6.199532,
// //                 lng: -75.572384,
// //             }
// //         },
// //     ];
// // }

// // function renderPlaces(places) {
// //     const scene = document.querySelector('a-scene');

// //     // first get current user location
// //     return navigator.geolocation.getCurrentPosition(function (position) {

// //         // then use it to load from remote APIs some places nearby
// //         // loadPlaces(position.coords)
// //         //     .then((places) => {
// //         places.forEach((place) => {
// //             const latitude = place.location.lat;
// //             const longitude = place.location.lng;

// //             // add place icon
// //             const icon = document.createElement('a-image');
// //             icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
// //             icon.setAttribute('name', place.name);
// //             icon.setAttribute('src', './assets/map-marker.png');

// //             // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
// //             icon.setAttribute('scale', '20, 20');

// //             icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

// //             const clickListener = function (ev) {
// //                 ev.stopPropagation();
// //                 ev.preventDefault();

// //                 const name = ev.target.getAttribute('name');

// //                 const el = ev.detail.intersection && ev.detail.intersection.object.el;

// //                 if (el && el === ev.target) {
// //                     const label = document.createElement('span');
// //                     const container = document.createElement('div');
// //                     container.setAttribute('id', 'place-label');
// //                     label.innerText = name;
// //                     container.appendChild(label);
// //                     document.body.appendChild(container);

// //                     setTimeout(() => {
// //                         container.parentElement.removeChild(container);
// //                     }, 1500);
// //                 }
// //             };

// //             icon.addEventListener('click', clickListener);

// //             scene.appendChild(icon);
// //         });
// //         //         })
// //         // },
// //         //     (err) => console.error('Error in retrieving position', err),
// //         //     {
// //         //         enableHighAccuracy: true,
// //         //         maximumAge: 0,
// //         //         timeout: 27000,
// //         //     }
// //         // );
// //     })
// //     // let scene = document.querySelector('a-scene');

// //     // places.forEach((place) => {
// //     //     let latitude = place.location.lat;
// //     //     let longitude = place.location.lng;

// //     //     // let model = document.createElement('a-entity');
// //     //     // model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
// //     //     // model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
// //     //     // model.setAttribute('rotation', '0 180 0');
// //     //     // model.setAttribute('animation-mixer', '');
// //     //     // model.setAttribute('scale', '0.5 0.5 0.5');

// //     //     // add place icon
// //     //     const icon = document.createElement('a-image');
// //     //     icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
// //     //     icon.setAttribute('name', place.name);
// //     //     icon.setAttribute('src', './assets/map-marker.png');
// //     //     icon.setAttribute('scale', '20, 20');

// //     //     model.addEventListener('loaded', () => {
// //     //         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
// //     //     });

// //     //     scene.appendChild(model);
// //     // });
// // }



// // // window.onload = () => {
// // //     let method = 'dynamic';

// // //     // if you want to statically add places, de-comment following line:
// // //     method = 'static';
// // //     if (method === 'static') {
// // //         let places = staticLoadPlaces();
// // //         return renderPlaces(places);
// // //     }

// // //     if (method !== 'static') {
// // //         // first get current user location
// // //         return navigator.geolocation.getCurrentPosition(function (position) {

// // //             // than use it to load from remote APIs some places nearby
// // //             dynamicLoadPlaces(position.coords)
// // //                 .then((places) => {
// // //                     renderPlaces(places);
// // //                 })
// // //         },
// // //             (err) => console.error('Error in retrieving position', err),
// // //             {
// // //                 enableHighAccuracy: true,
// // //                 maximumAge: 0,
// // //                 timeout: 27000,
// // //             }
// // //         );
// // //     }
// // // };

// // // function staticLoadPlaces() {
// // //     return [
// // //         {
// // //             name: 'Place1',
// // //             location: {
// // //                 lat: 6.235899925231934,
// // //                 lng: -75.57510375976562,
// // //             }
// // //         },
// // //         {
// // //             name: 'Place2',
// // //             location: {
// // //                 lat: 6.200326,
// // //                 lng: -75.573206,
// // //             }
// // //         },
// // //         {
// // //             name: 'Place3',
// // //             location: {
// // //                 lat: 6.199532,
// // //                 lng: -75.572384,
// // //             }
// // //         },

// // //     ];
// // // }

// // // // getting places from REST APIs
// // // function dynamicLoadPlaces(position) {
// // //     let params = {
// // //         radius: 300,    // search places not farther than this value (in meters)
// // //         clientId: 'HZIJGI4COHQ4AI45QXKCDFJWFJ1SFHYDFCCWKPIJDWHLVQVZ',
// // //         clientSecret: '',
// // //         version: '20300101',    // foursquare versioning, required but unuseful for this demo
// // //     };

// // //     // CORS Proxy to avoid CORS problems
// // //     let corsProxy = 'https://cors-anywhere.herokuapp.com/';

// // //     // Foursquare API
// // //     let endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
// // //         &ll=${position.latitude},${position.longitude}
// // //         &radius=${params.radius}
// // //         &client_id=${params.clientId}
// // //         &client_secret=${params.clientSecret}
// // //         &limit=15
// // //         &v=${params.version}`;
// // //     return fetch(endpoint)
// // //         .then((res) => {
// // //             return res.json()
// // //                 .then((resp) => {
// // //                     return resp.response.venues;
// // //                 })
// // //         })
// // //         .catch((err) => {
// // //             console.error('Error with places API', err);
// // //         })
// // // };

// // // function renderPlaces(places) {
// // //     let scene = document.querySelector('a-scene');

// // //     places.forEach((place) => {
// // //         let latitude = place.location.lat;
// // //         let longitude = place.location.lng;

// // //         // add place name
// // //         // let text = document.createElement('a-link');
// // //         // text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
// // //         // text.setAttribute('title', place.name);
// // //         // text.setAttribute('href', 'http://www.example.com/');
// // //         // text.setAttribute('scale', '15 15 15');

// // //         text.addEventListener('loaded', () => {
// // //             window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
// // //         });

// // //         scene.appendChild(text);
// // //     });
// // // }


window.onload = () => {
    let method = 'dynamic';

    // if you want to statically add places, de-comment following line
    method = 'static';

    if (method === 'static') {
        let places = staticLoadPlaces();
        renderPlaces(places);
    }

    if (method !== 'static') {

        // first get current user location
        return navigator.geolocation.getCurrentPosition(function (position) {

            // than use it to load from remote APIs some places nearby
            dynamicLoadPlaces(position.coords)
                .then((places) => {
                    renderPlaces(places);
                })
        },
            (err) => console.error('Error in retrieving position', err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 27000,
            }
        );
    }
};

function staticLoadPlaces() {
    return [
        {
            name: 'Santafe',
            location: {
                lat: 6.196505, 
                lng: -75.574063,
            }
        },
        {
            name: 'Panamericana',
            location: {
                lat: 6.198103, 
                lng: -75.573493,
            }
        },
        {
            name: 'Milla de Oro',
            location: {
                lat: 6.199828, 
                lng: -75.572410,
            }
        },
        {
            name: 'Ktronix',
            location: {
                lat: 6.201055, 
                lng: -75.571980,
            }
        },
        {
            name: 'Hotel Estelar',
            location: {
                lat: 6.201402, 
                lng: -75.573249,
            }
        },
        {
            name: 'Oviedo',
            location: {
                lat: 6.199330,
                lng:  -75.574355,
            }
        },
        {
            name: 'Colpensiones',
            location: {
                lat: 6.202560, 
                lng:  -75.572329,
            }
        },
        {
            name: 'Torre La Vega',
            location: {
                lat: 6.200868, 
                lng:  -75.573272,
            }
        },
        {
            name: 'Torre La Vega',
            location: {
                lat: 6.200126,
                lng:  -75.573823,
            }
        },
    ];
}

// getting places from REST APIs
function dynamicLoadPlaces(position) {
    let params = {
        radius: 300,    // search places not farther than this value (in meters)
        clientId: 'HZIJGI4COHQ4AI45QXKCDFJWFJ1SFHYDFCCWKPIJDWHLVQVZ',   // add your credentials here
        clientSecret: '',   // add your credentials here
        version: '20300101',    // foursquare versioning, required but unuseful for this demo
    };

    // CORS Proxy to avoid CORS problems
    let corsProxy = 'https://cors-anywhere.herokuapp.com/';

    // Foursquare API
    let endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
        &ll=${position.latitude},${position.longitude}
        &radius=${params.radius}
        &client_id=${params.clientId}
        &client_secret=${params.clientSecret}
        &limit=15
        &v=${params.version}`;
    return fetch(endpoint)
        .then((res) => {
            return res.json()
                .then((resp) => {
                    return resp.response.venues;
                })
        })
        .catch((err) => {
            console.error('Error with places API', err);
        })
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const latitude = place.location.lat;
        const longitude = place.location.lng;

        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        icon.setAttribute('src', './assets/logo-bluspot.png'); 

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '20, 20');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerText = name;
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 1500);
            }
        };

        icon.addEventListener('click', clickListener);

        scene.appendChild(icon);
    });
}