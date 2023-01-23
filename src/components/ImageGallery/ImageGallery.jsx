import s from './ImageGallary.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
export default function ImageGallery({list, onOpenModal}) {
 console.log(list)
 return <ul className={s.ImageGallery}>
     {list?.map((card)=>{
       return <ImageGalleryItem onOpenModal={onOpenModal} key={card.id} card={card}/>
     })}
  </ul>;
}
