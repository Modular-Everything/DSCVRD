import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import Noise from '../Noise';

//

SwiperCore.use([EffectFade, Navigation]);

//

const Story = ({ data }) => {
  console.log(data);

  return (
    <StoryWrapper>
      <Noise />

      <Swiper
        slidesPerView={1}
        effect="fade"
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {!data.disableOpening && (
          <SwiperSlide>
            <div className="story__opening story__item">
              Opening!
              <div className="story__opening--bg">Img here</div>
            </div>
          </SwiperSlide>
        )}

        {data.slides.map((slide) => (
          <SwiperSlide>
            <div className="story__item">
              <div className="story__item--content">
                {slide.subtitle && (
                  <h5 className="font__spacey-subtitle">{slide.subtitle}</h5>
                )}

                {slide.title && (
                  <h3 className="font__smaller-headline-text">{slide.title}</h3>
                )}

                {slide.copy && (
                  <p className="font__article-card-copy">{slide.copy}</p>
                )}
              </div>

              {slide.image && (
                <div className="story__item--image">
                  <Img fluid={slide.image.asset.fluid} />/
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {!data.disableOpening && (
          <SwiperSlide>
            <div className="story__closing story__item">Closing!</div>
          </SwiperSlide>
        )}
      </Swiper>
    </StoryWrapper>
  );
};

export default Story;

const StoryWrapper = styled.section`
  position: relative;
  height: 86rem;
  overflow: hidden;

  .swiper-button-prev {
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    cursor: w-resize;
  }

  .swiper-button-next {
    position: absolute;
    z-index: 30;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    cursor: e-resize;
  }

  .swiper-button-disabled {
    cursor: default;
  }

  .swiper-container {
    height: 100%;
  }

  .story__item {
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    background-color: var(--black);

    .story__item--image {
      position: absolute;
      z-index: 5;
      right: 4.8rem;
      width: 70%;
    }

    .story__item--content {
      display: flex;
      z-index: 10;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 54rem;
      height: 100%;
      padding: 4.8rem;
      background-image: var(--fade-from-left);
      color: var(--white);

      .font__spacey-subtitle {
        margin-bottom: 1.6rem;
        color: var(--coal);
      }

      .font__article-card-copy {
        margin-top: 1.6rem;
      }
    }
  }

  .story__opening,
  .story__closing {
    color: var(--white);
  }
`;
