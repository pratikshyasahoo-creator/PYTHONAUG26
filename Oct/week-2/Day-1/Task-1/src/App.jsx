import React from 'react'
import Card from './Card'

function App() {


   let animals = [
    {
      img: "https://tse1.mm.bing.net/th/id/OIP.393yNhC_VLq0S7s0ht9s5AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Koala",
      desc: "this is a koala",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/039/598/283/small_2x/ai-generated-cute-puppy-and-playful-kitten-sitting-in-the-grass-generated-by-ai-photo.jpg",
      title: "Fox",
      desc: "this is wild Animal",
    },
    {
      img: "https://tse2.mm.bing.net/th/id/OIP.VhBIzT-FcPdzxg7XxwpA_gAAAA?r=0&w=405&h=400&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Tiger",
      desc: "this is bengol tiger",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/032/936/497/small_2x/cute-mammal-small-and-fluffy-sitting-in-the-autumn-forest-free-photo.jpg",
      title: "Mouse",
      desc: "This is a mouse",
    },
    {
      img: "https://wallpapercave.com/wp/wp1816915.jpg",
      title: "Rabbit",
      desc: "This is a cute Rabbit",
    },
    {
      img: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
      title: "Squirrel",
      desc: "This is a Squirrel",
    },
    {
      img: "https://th.bing.com/th/id/R.40b9b71f4dc4924b18ff941b4bbfc522?rik=bLRDCPZaKXYCQw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2fe%2f1%2f947804-new-cute-baby-animals-wallpapers-2048x1366-for-meizu.jpg&ehk=53Q70Sd54hAvxmH7FccHyH%2b%2fAruCueCy%2bGeKZ4Vh80M%3d&risl=&pid=ImgRaw&r=0",
      title: "deer",
      desc: "This is a Deer",
    },
    {
      img: "https://tse1.mm.bing.net/th/id/OIP._VOzAzrs9RJUhNyzCQzeJQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Bear",
      desc: "This is a bear",
    },
  ];


  return (
    <div>
      <h1>Welcome to my Animal Card</h1>

      <div className="grid grid-cols-4 gap-4">
        {animals?.map((animal) => (
          <Card animal={animal} />
        ))}
      </div>
    </div>
  )
}

export default App
