import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import BannerCopy from '../BannerCopy';

import Noise from '../Noise';
import Social from '../Social/Social';

//

SwiperCore.use([EffectFade, Navigation, Pagination]);

//

const Story = ({ data }) => {
  if (!data) return null;

  console.log(data.disableOpening);

  return (
    <StoryWrapper data-sal="fade">
      <Noise />

      <Swiper
        slidesPerView={1}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={(swiper) => gtagEvent('story_change', swiper)}
        // onSwiper={(swiper) => gtagEvent('story_init', swiper)}
      >
        {!data.disableOpening && data.openingImage && (
          <SwiperSlide>
            <TitlePageCopy title={data.name} copy={data.openingText} />

            <div className="story__opening story__item">
              <div className="story__opening--image">
                <Img fluid={data.openingImage.asset.fluid} />
              </div>
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
            <div className="story__closing story__item">
              <p className="font__article-card-copy">{data.outroText}</p>
              {/* // TODO Enable story sharing */}
              {/* <h5 className="font__spacey-subtitle">Share this story</h5> */}
              {/* <SocialIcons invert /> */}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </StoryWrapper>
  );
};

export default Story;

const TitlePageCopy = styled(BannerCopy)`
  .font__big-headline-text {
    color: var(--yellow);
  }
`;

const SocialIcons = styled(Social)`
  justify-content: center;
`;

const StoryWrapper = styled.section`
  position: relative;
  height: 90vh;
  overflow: auto;

  @media (min-width: 777px) {
    height: 86rem;
  }

  .swiper-pagination {
    display: grid;
    position: absolute;
    z-index: 50;
    top: 2.4rem;
    right: 2.4rem;
    left: 2.4rem;
    grid-gap: 1.2rem;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    width: calc(100% - 4.8rem);
    mix-blend-mode: difference;

    @media (min-width: 777px) {
      top: 4.8rem;
      right: 4.8rem;
      left: 4.8rem;
      grid-gap: 2.4rem;
      width: calc(100% - 9.6rem);
    }

    .swiper-pagination-bullet {
      width: 100%;
      height: 0.2rem;
      border: 1px solid #fff;
      cursor: pointer;

      @media (min-width: 777px) {
        height: 0.4rem;
      }

      &:hover {
        opacity: 0.5;
        background: #fff;
      }
    }

    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }

  .swiper-button-prev {
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    cursor: w-resize;
  }

  .swiper-button-next {
    position: absolute;
    z-index: 30;
    top: 0;
    right: 0;
    width: 25%;
    height: 100%;
    cursor: e-resize;
  }

  .swiper-button-disabled {
    cursor: default;
  }

  .swiper-button-disabled + .swiper-button-next {
    width: 100%;
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
      z-index: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        height: 100%;
      }

      @media (min-width: 666px) {
        right: 4.8rem;
        width: 70%;
        height: unset;

        .gatsby-image-wrapper {
          height: unset;
        }
      }
    }

    .story__item--content {
      display: flex;
      z-index: 5;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 54rem;
      height: 100%;
      padding: 4.8rem;
      background-image: var(--fade-out);
      color: var(--white);

      @media (min-width: 666px) {
        background-image: var(--fade-from-left);
      }

      .font__spacey-subtitle {
        margin-bottom: 2.4rem;
        color: var(--yellow);
      }

      .font__article-card-copy {
        margin-top: 2.4rem;
      }
    }
  }

  .story__opening,
  .story__closing {
    color: var(--white);
  }

  .story__opening {
    .story__opening--image {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
    }

    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  .story__closing {
    display: grid;
    align-content: center;
    text-align: center;
    place-content: center;

    .font__spacey-subtitle {
      margin: 4.8rem 0 2.4rem;
      color: var(--yellow);
    }

    .font__article-card-copy {
      width: calc(100% - 4.8rem);
      max-width: 54rem;
      margin: 0 2.4rem;
    }
  }
`;

Story.propTypes = {
  data: PropTypes.object,
};

Story.defaultProps = {
  data: null,
};
