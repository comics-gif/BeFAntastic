const CACHE_NAME = "befantastic-cache-v1";

const urlsToCache = [
  "index.html",
  // Covers
  "Cover/Alg.png",
  "Cover/Out.png",
  "Cover/Cy.png",
  "Cover/Pyr.png",
  "Cover/Id.png",
  "Cover/Per.png",
  "Cover/Rate.png",
  // Algebra comic
  "Algebra/1.png","Algebra/2.png","Algebra/3.png","Algebra/4.png",
  "Algebra/5.png","Algebra/6.png","Algebra/7.png","Algebra/8.png",
  "Algebra/9.png","Algebra/10.png","Algebra/11.png","Algebra/12.png",
  "Algebra/13.png","Algebra/14.png","Algebra/15.png","Algebra/16.png",
  "Algebra/17.png","Algebra/18.png","Algebra/19.png","Algebra/20.png",
  "Algebra/21.png","Algebra/22.png","Algebra/23.png","Algebra/24.png",
  "Algebra/25.png","Algebra/26.png","Algebra/27.png","Algebra/28.png",
  // Outcomes comic
  "Outcomes/1.png","Outcomes/2.png","Outcomes/3.png","Outcomes/4.png",
  "Outcomes/5.png","Outcomes/6.png","Outcomes/7.png","Outcomes/8.png",
  "Outcomes/9.png","Outcomes/10.png","Outcomes/11.png","Outcomes/12.png",
  "Outcomes/13.png","Outcomes/14.png","Outcomes/15.png","Outcomes/16.png",
  "Outcomes/17.png","Outcomes/18.png","Outcomes/19.png","Outcomes/20.png",
  "Outcomes/21.png","Outcomes/22.png","Outcomes/23.png","Outcomes/24.png",
  "Outcomes/25.png","Outcomes/26.png","Outcomes/27.png",
  // Cylinder comic
  "Cylinder/1.png","Cylinder/2.png","Cylinder/3.jpg","Cylinder/4.jpg",
  "Cylinder/5.jpg","Cylinder/6.jpg","Cylinder/7.jpg","Cylinder/8.jpg",
  "Cylinder/9.jpg","Cylinder/10.jpg","Cylinder/11.png","Cylinder/12.jpg",
  "Cylinder/13.jpg","Cylinder/14.jpg","Cylinder/15.jpg","Cylinder/16.jpg",
  "Cylinder/17.jpg","Cylinder/18.jpg","Cylinder/19.jpg","Cylinder/20.png",
  "Cylinder/21.jpg","Cylinder/22.jpg","Cylinder/23.jpg","Cylinder/24.jpg",
  "Cylinder/25.jpg","Cylinder/26.jpg","Cylinder/27.jpg","Cylinder/28.jpg",
  // Pyramid comic
  "Pyramid/1.png","Pyramid/2.png","Pyramid/3.png","Pyramid/4.png",
  "Pyramid/5.png","Pyramid/6.png","Pyramid/7.png","Pyramid/8.png",
  "Pyramid/9.png","Pyramid/10.png","Pyramid/11.png","Pyramid/12.png",
  "Pyramid/13.png","Pyramid/14.png","Pyramid/15.png","Pyramid/16.png",
  "Pyramid/17.png","Pyramid/18.png","Pyramid/19.png","Pyramid/20.png",
  "Pyramid/21.png","Pyramid/22.png","Pyramid/23.png","Pyramid/24.png",
  "Pyramid/25.png","Pyramid/26.png","Pyramid/27.png","Pyramid/28.png",
  // ID comic
  "ID/1.png","ID/2.png","ID/3.png","ID/4.png","ID/5.png","ID/6.png",
  "ID/7.png","ID/8.png","ID/9.png","ID/10.png","ID/11.png","ID/12.png",
  "ID/13.png","ID/14.png","ID/15.png","ID/16.png","ID/17.png","ID/18.png",
  "ID/19.png","ID/20.png","ID/21.png","ID/22.png","ID/23.png","ID/24.png",
  "ID/25.png","ID/26.png","ID/27.png","ID/28.png",
  // Percentage comic
  "Percentage/1.png","Percentage/2.png","Percentage/3.png","Percentage/4.png",
  "Percentage/5.png","Percentage/6.png","Percentage/7.png","Percentage/8.png",
  "Percentage/9.png","Percentage/10.png","Percentage/11.png","Percentage/12.png",
  "Percentage/13.png","Percentage/14.png","Percentage/15.png","Percentage/16.png",
  "Percentage/17.png","Percentage/18.png","Percentage/19.png","Percentage/20.png",
  "Percentage/21.png","Percentage/22.png","Percentage/23.png","Percentage/24.png",
  "Percentage/25.png","Percentage/26.png","Percentage/27.png","Percentage/28.png",
  // Rate comic
  "Rate/1.png","Rate/2.png","Rate/3.png","Rate/4.png","Rate/5.png","Rate/6.png",
  "Rate/7.png","Rate/8.png","Rate/9.png","Rate/10.png","Rate/11.png","Rate/12.png",
  "Rate/13.png","Rate/14.png","Rate/15.png","Rate/16.png","Rate/17.png","Rate/18.png",
  "Rate/19.png","Rate/20.png","Rate/21.png","Rate/22.png","Rate/23.png","Rate/24.png",
  "Rate/25.png","Rate/26.png","Rate/27.png","Rate/28.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
