import Link from 'next/link'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'

const HomePage = () => {

    const images = [
        {
          original: "/1.jpg",
          thumbnail: '/1.jpg',
        },
        {
          original: '/2.jpg',
          thumbnail: '/2.jpg',
        },
        {
          original: '/3.jpg',
          thumbnail: '/3.jpg',
        },
    ];

    return (
        <div>
            <ImageGallery items={images} showFullscreenButton={false} autoPlay showPlayButton={false} />
        </div>
    );
}

export default HomePage