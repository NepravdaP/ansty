import React, { useState, useEffect } from 'react';
import bdPartyList from '../../constants';
import { ReactFloatingBalloons } from 'react-floating-balloons';
import { BirthdayWrapper, DropName, FooterPic, PicWrap } from './styled';
import audi from '../../assets/audi.mp3';
import gif from '../../assets/gifNepravda.gif';
import ModalGrats from '../Modal';
import ReactAudioPlayer from 'react-audio-player';
const Birthday = () => {
  const [isHovered, setIsHoverd] = useState(null);
  const [isFlying, setIsFlying] = useState(true);
  const [showGrats, setShowGrats] = useState(null);
  useEffect(() => {
    setIsFlying(true);
    setTimeout(() => {
      setIsFlying(false);
    }, 15000);
  }, []);

  return (
    <BirthdayWrapper>
      {isFlying && (
        <div className="dwizh">
          <img src={gif} className="gif-dance" alt="dance" />
          <ReactFloatingBalloons
            count={11}
            msgText="С ДР!!"
            colors={['yellow', 'purple', 'red', 'orange']}
            popVolumeLevel={0.1}
            loop={false}
          />
          <ReactAudioPlayer src={audi} preload="auto" autoPlay listenInterval={1000} volume={0.1} />
        </div>
      )}

      {showGrats && <ModalGrats showGrats={showGrats} setShowGrats={setShowGrats} />}
      {!isFlying && (
        <div className="main-content">
          {bdPartyList.map((el, ind) => (
            <PicWrap key={ind + 'jpeg'}>
              <FooterPic
                src={el.emoji}
                onMouseEnter={() => {
                  setIsHoverd(ind + 'jpeg');
                }}
                onMouseLeave={() => {
                  setIsHoverd(null);
                }}
                onClick={() => {
                  setShowGrats(el);
                }}
              />
              {isHovered === ind + 'jpeg' && <DropName key={el.emoji}>{el.name}</DropName>}
            </PicWrap>
          ))}
        </div>
      )}
    </BirthdayWrapper>
  );
};

export default Birthday;
