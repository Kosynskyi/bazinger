import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ImageLazyComponent = ({ srcSetJpg, srcSetJpg2x, src, width, alt }) => {
  return (
    <LazyLoadComponent>
      <picture>
        <source
          srcSet={`${srcSetJpg} 1x, ${srcSetJpg2x} 2x`}
          type="image/jpg"
        />
        <img src={src} alt={alt} width={width} />
      </picture>
    </LazyLoadComponent>
  );
};

export default ImageLazyComponent;
