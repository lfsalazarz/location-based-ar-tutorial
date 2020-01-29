window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Place1',
            location: {
                lat: 6.235899925231934,
                lng: -75.57510375976562,
            }
        },
        {
            name: 'Place2',
            location: {
                lat: 6.200326,
                lng: -75.573206,
            }
        },
        {
            name: 'Place3',
            location: {
                lat: 6.199532,
                lng: -75.572384,
            }
        },
    ];
}

function renderPlaces(places) {
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {

        // then use it to load from remote APIs some places nearby
        // loadPlaces(position.coords)
        //     .then((places) => {
        places.forEach((place) => {
            const latitude = place.location.lat;
            const longitude = place.location.lng;

            // add place icon
            const icon = document.createElement('a-image');
            icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            icon.setAttribute('name', place.name);
            icon.setAttribute('src', './assets/map-marker.png');

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
        //         })
        // },
        //     (err) => console.error('Error in retrieving position', err),
        //     {
        //         enableHighAccuracy: true,
        //         maximumAge: 0,
        //         timeout: 27000,
        //     }
        // );
    })
    // let scene = document.querySelector('a-scene');

    // places.forEach((place) => {
    //     let latitude = place.location.lat;
    //     let longitude = place.location.lng;

    //     // let model = document.createElement('a-entity');
    //     // model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    //     // model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
    //     // model.setAttribute('rotation', '0 180 0');
    //     // model.setAttribute('animation-mixer', '');
    //     // model.setAttribute('scale', '0.5 0.5 0.5');

    //     // add place icon
    //     const icon = document.createElement('a-image');
    //     icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //     icon.setAttribute('name', place.name);
    //     icon.setAttribute('src', './assets/map-marker.png');
    //     icon.setAttribute('scale', '20, 20');

    //     model.addEventListener('loaded', () => {
    //         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    //     });

    //     scene.appendChild(model);
    // });
}
