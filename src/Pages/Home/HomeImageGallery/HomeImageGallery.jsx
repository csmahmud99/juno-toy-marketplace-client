import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const HomeImageGallery = () => {
    const images = [
        {
            original: 'https://i.ibb.co/7KxhxPW/gallery01.jpg/1000/600/',
            thumbnail: 'https://i.ibb.co/7KxhxPW/gallery01.jpg/250/150/',
        },
        {
            original: 'https://i.ibb.co/CnQgqbY/gallery02.jpg/1000/600/',
            thumbnail: 'https://i.ibb.co/CnQgqbY/gallery02.jpg/250/150/',
        },
        {
            original: 'https://i.ibb.co/M1TT0zg/gallery03.jpg/1000/600/',
            thumbnail: 'https://i.ibb.co/M1TT0zg/gallery03.jpg/250/150/',
        },
        {
            original: 'https://i.ibb.co/7SLLzjW/gallery04.jpg/1000/600/',
            thumbnail: 'https://i.ibb.co/7SLLzjW/gallery04.jpg/250/150/',
        },
        {
            original: 'https://i.ibb.co/pzSkmm6/gallery05.jpg/1000/600/',
            thumbnail: 'https://i.ibb.co/pzSkmm6/gallery05.jpg/250/150/',
        }
    ];

    return (
        <div>
            <h2>This is Image Gallery</h2>
            <div className="grid md:grid-cols-2 gap-3 border-2 border-white p-10 text-red-600 font-extrabold text-2xl md:text-4xl text-center">
                <div className="mt-4">
                    <img src="https://i.ibb.co/VW94VJk/home-image-memory-gallery.jpg" alt="home-image-gallery-memory-general" className="w-full border-8 border-red-600" />
                </div>
                <div className="space-y-4">
                    <h2>Some of Our Favorite Memories Regarding Our Toys in Our Memory Box</h2>
                    <hr />
                    <ImageGallery items={images} />
                </div>
            </div>
        </div>
    );
};

export default HomeImageGallery;