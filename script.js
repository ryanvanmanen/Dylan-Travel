
      mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnZhbm1hbmVuIiwiYSI6ImNreTI1MGNiYTBoaGUyeW9kdWFqODBoankifQ.p9v5Sx-GtlttBSWiREPMyQ';

      /**
       * Add the map to the page
       */
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ryanvanmanen/clp8ylgx3001j01p4gupb7yay',
        center: [-40.55378,34.04665],
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
              'coordinates': [-4.2688,55.8599]
            },
            'properties': {
              'details': '2021',
              'address': 'Taco Mazama',
              'country': 'Glasgow, Scotland',
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
              'country': 'Salerno, Italy',
              
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-6.27,53.34]
            },
            'properties': {
              'details': 'Visited in 2021',
              'address': 'Dublin, Ireland',
              'country': 'Dublin, Ireland',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-122.4156,37.800]
            },
            'properties': {
              'details': 'Moved in August 2022',
              'address': 'Telegraph Hill',
              'country': 'San Francisco, California',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-64.767, 18.3211]
            },
            'properties': {
              'details': 'Visited in August 2022',
              'address': 'Fish Bay - Arco Iris Villa',
              'country': 'Saint John, USVI',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [2.3, 48.82]
            },
            'properties': {
              'details': 'Visited in July 2017',
              'address': 'Paris, France',
              'country': 'Paris, France',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.097083330154, 38.980979]
            },
            'properties': {
              'details': '(301) 654-7336',
              'phone': '3016547336',
              'address': '4831 Bethesda Ave',
              'cc': 'US',
              'city': 'Bethesda',
              'country': 'United States',
              'postalCode': '20814',
              'state': 'MD'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-105.48, 20.787]
            },
            'properties': {
              'details': 'August 2016, Iberostar - Playa Mita',
              'country': 'Nayarit, Mexico',
              'address': 'Nayarit, Mexico',
              
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
            'fill-opacity': 0.20,
          },
        },
        'country-label'
      );

      map.setFilter('country-boundaries', [
        "in",
        "iso_3166_1_alpha_3",
        'IRL','ITA', 'GBR', 
        'USA','VIR','FRA','DNK', 'MEX','PRI'
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
        const popup = new mapboxgl.Popup({ closeOnClick: true })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            `<h3>${currentFeature.properties.country}</h3><b>${currentFeature.properties.details}</b>
            <br></br><b>${currentFeature.properties.address}</b>`
          )
          .addTo(map);
      }
    