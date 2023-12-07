
      mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnZhbm1hbmVuIiwiYSI6ImNreTI1MGNiYTBoaGUyeW9kdWFqODBoankifQ.p9v5Sx-GtlttBSWiREPMyQ';

      /**
       * Add the map to the page
       */
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ryanvanmanen/clp8ylgx3001j01p4gupb7yay',
        center: [-4.62969,44.6387],
        zoom: 2,
        scrollZoom: true
      });

      const stores = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-121.7252, 46.7910]
            },
            'properties': {
              'details': 'August 2023',
              'address': 'Mount Rainer National Park, Skline Trail',
              'country': 'Washington',
              'photo': 'https://photos.app.goo.gl/jrUdqcKy5oaKJxXn9',
              'google': 'https://maps.app.goo.gl/eE3XmP4BGW6eiFgh8'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-80.1857, 26.400]
            },
            'properties': {
              'details': 'April 2023',
              'address': 'Grandma\'s',
              'country': 'Boca Raton, Florida',
              'photo': 'https://photos.app.goo.gl/4dNpc8qeJ1L7GE5R6',
              'google': 'https://maps.app.goo.gl/xkhHsCCKw4GB7nKj6'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [12.5726, 55.6799]
            },
            'properties': {
              'details': 'March 2023',
              'address': 'Denmark',
              'country': 'Copenhagen',
              'photo': 'https://photos.app.goo.gl/dxLAUTbz6aqtseQH7',
              'google': 'https://maps.app.goo.gl/A65i9mcmj1spmx5o7'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-0.1262, 51.5158]
            },
            'properties': {
              'details': 'March 2023',
              'address': 'London, United Kingdom',
              'country': 'London, United Kingdom',
              'photo': 'https://photos.app.goo.gl/pvXJaRqRUQLsMs939',
              'google': 'https://maps.app.goo.gl/bssoixh2qy5r21vv6'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-122.40615,37.79941]
            },
            'properties': {
              'details': 'Moved in August 2022',
              'address': 'Telegraph Hill',
              'country': 'San Francisco, California',
              'photo': 'https://photos.app.goo.gl/QumKJ3UA9jprB3Cx5',
              'google': 'https://maps.app.goo.gl/S1kc5duVsisFYPP96'
            }
          },

          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-64.767, 18.3211]
            },
            'properties': {
              'details': 'August 2022',
              'address': 'Fish Bay - Arco Iris Villa',
              'country': 'Saint John, USVI',
              'photo': 'https://photos.app.goo.gl/iczVTX1NLsXyWEVb6',
              'google': 'https://maps.app.goo.gl/LMYPzMvDPhscgfZk9'
            }
          },
         
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-4.2688,55.8599]
            },
            'properties': {
              'details': 'October 2021',
              'address': 'Taco Mazama',
              'country': 'Glasgow, Scotland',
              'link': 'https://tacomazama.co.uk',
              'google': 'https://maps.app.goo.gl/tTsmpcbTY19FPFj6A',
              'photo': 'https://photos.app.goo.gl/GXJarVDcfCHCcGKd7'
            }
          },

          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-6.27,53.34]
            },
            'properties': {
              'details': 'October 2021',
              'address': 'Dublin, Ireland',
              'country': 'Dublin, Ireland',
              'photo': 'https://photos.app.goo.gl/kThJmCeJurPi37hbA',
              'google': 'https://maps.app.goo.gl/c4PFtyXpn35HK5wt5'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-67.888, 44.4439]
            },
            'properties': {
              'details': 'August 2021',
              'address': 'Stayed in Steuben, Maine',
              'country': 'Mount Desert Island, Maine',
              'google': 'https://maps.app.goo.gl/UbUiMKZBmpxFTPPG7',
              'photo': 'https://photos.app.goo.gl/tV1e5YgJ2rAYvtnt8'
            }
          },
          
          
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [14.575, 40.628 ]
            },
            'properties': {
              'details': 'June 2018',
              'address': 'Amalfi Coast',
              'country': 'Amalfi Italy',
              'link': 'https://en.wikipedia.org/wiki/Amalfi_Coast',
              'photo': 'https://photos.app.goo.gl/KFisQWgY2JvYbdgr6',
              'google': 'https://maps.app.goo.gl/QXFGFMjSAbAYU2eGA'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [2.3, 48.82]
            },
            'properties': {
              'details': 'July 2017',
              'address': 'Paris, France',
              'country': 'Paris, France',
            }
          },
          
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-105.48, 20.787]
            },
            'properties': {
              'details': 'August 2016',
              'country': 'Nayarit, Mexico',
              'address': 'Iberostar - Playa Mita',
              'google': 'https://maps.app.goo.gl/hGA1NTDK7mvhzaDW7'
              
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-66.119, 18.427]
            },
            'properties': {
              'details': '2022 ?',
              'country': 'San Juan, Puerto Rico',
              'address': 'Surfing Trip',
              
            }
          },
         
        ]
      };

var visitedCountries = ['IRL','ITA', 'GBR', 
'USA','VIR','FRA','DNK', 'MEX','PRI'];

map.on('load', function() {
      map.addLayer(
        {
          id: 'country-boundaries',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
          },
          'source-layer': 'country_boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#264E5B',
            'fill-opacity': 0.15,
          },
        },
        'country-label'
      );

      map.setFilter('country-boundaries', [
        "in",
        "iso_3166_1_alpha_3",
        ...visitedCountries
      ]);
  
      
  });


      /**
       * Assign a unique id to each store. You'll use this `id`
       * later to associate each point on the map with a listing
       * in the sidebar.
       */
      stores.features.forEach((store, i) => {
        store.properties.id = i;
      });

      /**
       * Wait until the map loads to make changes to the map.
       */
      map.on('load', () => {
        /**
         * This is where your '.addLayer()' used to be, instead
         * add only the source without styling a layer
         */
        map.addSource('places', {
          'type': 'geojson',
          'data': stores
        });

        /**
         * Add all the things to the page:
         * - The location listings on the side of the page
         * - The markers onto the map
         */
        buildLocationList(stores);
        addMarkers();
      });

      /**
       * Add a marker to the map for every store listing.
       **/
      
      function addMarkers() {
        /* For each feature in the GeoJSON object above: */
        for (const marker of stores.features) {
          /* Create a div element for the marker. */
          const el = document.createElement('div');
          /* Assign a unique `id` to the marker. */
          el.id = `marker-${marker.properties.id}`;
          /* Assign the `marker` class to each marker for styling. */
          el.className = 'marker';
          

          /**
           * Create a marker using the div element
           * defined above and add it to the map.
           **/
          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          /**
           * Listen to the element and when it is clicked, do three things:
           * 1. Fly to the point
           * 2. Close all other popups and display popup for clicked store
           * 3. Highlight listing in sidebar (and remove highlight for all other listings)
           **/
          el.addEventListener('click', (e) => {
            /* Fly to the point */
            flyToStore(marker);
            /* Close all other popups and display popup for clicked store */
            createPopUp(marker);
            /* Highlight listing in sidebar */
            const activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            const listing = document.getElementById(
              `listing-${marker.properties.id}`
            );
            listing.classList.add('active');
          });
        }
      }

      /**
       * Add a listing for each store to the sidebar.
       **/
      function buildLocationList(stores) {
        for (const store of stores.features) {
          /* Add a new listing section to the sidebar. */
          const listings = document.getElementById('listings');
          const listing = listings.appendChild(document.createElement('div'));
          /* Assign a unique `id` to the listing. */
          listing.id = `listing-${store.properties.id}`;
          /* Assign the `item` class to each listing for styling. */
          listing.className = 'item';

          /* Add the link to the individual listing created above. */
          const link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.id = `link-${store.properties.id}`;
          link.innerHTML = `${store.properties.country}`;

          /* Add details to the individual listing. */
          const details = listing.appendChild(document.createElement('div'));
          details.innerHTML = `${store.properties.details}`;
          if (store.properties.city) {
            details.innerHTML += ` &middot; ${store.properties.address}`;
          }

          /**
           * Listen to the element and when it is clicked, do four things:
           * 1. Update the `currentFeature` to the store associated with the clicked link
           * 2. Fly to the point
           * 3. Close all other popups and display popup for clicked store
           * 4. Highlight listing in sidebar (and remove highlight for all other listings)
           **/
          link.addEventListener('click', function () {
            for (const feature of stores.features) {
              if (this.id === `link-${feature.properties.id}`) {
                flyToStore(feature);
                createPopUp(feature);
              }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
          });
        }
      }

      /**
       * Use Mapbox GL JS's `flyTo` to move the camera smoothly
       * a given center point.
       **/
      function flyToStore(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 12
        });
      }

      /**
       * Create a Mapbox GL JS `Popup`.
       **/
      function createPopUp(currentFeature) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        
        /**
         * Set up conditional properties
         */
        const linkHTML = currentFeature.properties.link
        ? `<p><a href="${currentFeature.properties.link}" target="_blank">Visit Website</a></p>`
        : '';
        const googleHTML = currentFeature.properties.google
        ? `<p><a href="${currentFeature.properties.google}" target="_blank">Google Maps</a></p>`
        : '';

        const photoHTML = currentFeature.properties.photo
        ? `<p><a href="${currentFeature.properties.photo}" target="_blank">Photo</a></p>`
        : '';

        const popup = new mapboxgl.Popup({ closeOnClick: true })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            `<h3>${currentFeature.properties.country}</h3>
            <p><b>${currentFeature.properties.details}</b></p>
            <p><b>${currentFeature.properties.address}</b></p>
            ${linkHTML}
            ${googleHTML}
            ${photoHTML}`        )
          .addTo(map);
      }
    