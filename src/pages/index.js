import Link from 'next/link'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'
import styles from '../styles/pages/Index.module.css'

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
        <div className={styles.carouselContainer}>
            <ImageGallery items={images} showFullscreenButton={false} autoPlay showPlayButton={false} showBullets={true} slideInterval="5000" thumbnailPosition="bottom" showPlayButton={true} />
        </div>
    );
}

export default HomePage