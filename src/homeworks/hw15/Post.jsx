import React from 'react';
import {
  ArrowRight,
  At,
  Heart,
  HeartFill,
  PatchCheckFll,
  ChatDots,
  ChatDotsFill,
  ReplyAllFill,
  ReplyAll,
} from 'react-bootstrap-icons';
import s from './style.module.sass';

function Post({ author, content, image, date }) {
  let { name, photo, nickname } = author;
  return (
    <div>
      <div className={s.main}>
        <div className={s.header}>
          <div className={s.photo}>
            <img src={photo} alt="" />
          </div>
          <div className={s.name}></div>
          <div className={s.date}></div>
        </div>
        <div className={s.footer}>
          <div className={s.like}>
            <HeartFill color="red" size={24} />
          </div>
          <div className={s.comments}>
            <ChatDots size={24} />
          </div>
          <div className={s.repost}>
            <ReplyAllFill size={24} />
          </div>
        </div>
      </div>
      {/* <Heart />
      <HeartFill color="red" size={96} />
      <PatchCheckFll color="blue" size={96} />
      <ChatDotsFill />
      <ReplyAllFill />
      <ReplyAll />
      <At />
      <ArrowRight /> */}
    </div>
  );
}

export default Post;
