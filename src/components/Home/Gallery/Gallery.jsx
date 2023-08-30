import "./Gallery.css";

const Gallery = () => {
  const images = [
    "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg",
    "https://www.bandarbantours.com/wp-content/uploads/2015/04/1280x350_nilgiri_bandarban-750x350.jpg",
    "https://i.pinimg.com/564x/6b/5b/59/6b5b590e20bd400d9c266a59802e72f5.jpg",
    "https://images.unsplash.com/photo-1631642386603-5618fa038ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZGFyYmFuJTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://www.musafir.com.bd/images/places/Jaflong.jpg",
    "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg",
    "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/9880772_largest%20tea%20gardens%20Bangladesh.jpg",

    "https://www.daily-sun.com/assets/news_images/2022/11/24/DailySun-2016-12-09-08-2.jpg",
    "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/1878484_Saint%20Martins%20Island%20Bangladesh.jpg",
    "https://www.asbongstravel.com/wp-content/uploads/2020/06/1024px-Sundarban_Diaries11-768x512.jpg",
    "https://thumbs.dreamstime.com/b/sajek-valley-rangamati-sajek-valley-rangamati-bangladesh-237229905.jpg",

    // Add more image URLs here
  ];
  return (
    <div>
      <h2 className="font-bold font-serif text-4xl mt-24 mb-12">
        Visit our customers{" "}
        <span className="text-sky-500 animate-pulse">Tour Gallery</span>
      </h2>
      <div className="gallery-container ">
        {images.map((image, index) => (
          <div key={index} className="gallery ">
            <div className="overflow-hidden rounded-md">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg hover:scale-125 duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
