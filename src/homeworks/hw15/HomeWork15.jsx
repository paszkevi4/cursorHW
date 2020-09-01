import React, { useState } from 'react';
import Post from './Post';

const ANAKIN_IMAGE =
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';

const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

export function HomeWork15() {
  return (
    <>
      <Post
        author={{
          name: 'Anakin skywalker',
          photo: ANAKIN_IMAGE,
          nickname: '@dart_vader',
          checked: false,
        }}
        content="Aute excepteur ut eiusmod tempor aliqua ad ipsum velit nostrud anim. Dolore ullamco aliqua culpa laboris non nisi ea anim dolore aliqua. 
        Non non dolor ex labore nulla ut duis laboris non. Eiusmod ea nisi ut ea occaecat ut. Voluptate consectetur est Lorem reprehenderit non quis irure minim duis. 
        Aute eu quis irure duis qui adipisicing cillum eiusmod ipsum nisi id. Aute sit et id sint cupidatat qui est ipsum officia. Labore fugiat officia ex amet irure. 
        Commodo ullamco exercitation officia ullamco ullamco tempor esse cillum proident sint. Voluptate eu dolore occaecat reprehenderit aliqua exercitation. 
        Cillum sit excepteur veniam minim dolore ut labore nisi irure non sint est ex. Minim ea dolor ea consequat nostrud. 
        Sit nisi fugiat tempor cillum nostrud anim esse cillum excepteur dolore est ipsum tempor. Nostrud reprehenderit nulla proident non quis anim cupidatat sit non ad. 
        Duis esse velit eiusmod mollit commodo nisi ea quis dolore dolore. Cillum amet ex pariatur nostrud labore elit amet ullamco id. 
        Enim deserunt ad fugiat et eu sunt elit consequat eiusmod ea ea veniam. Officia sit proident enim ut exercitation proident ut reprehenderit adipisicing veniam do nisi qui nisi."
        date={'15 авг.'}
        liked={true}
        stats={{
          likes: 17,
          comments: 23,
          reposts: 8,
        }}
      />
      <Post
        author={{
          name: 'Anakin skywalker',
          photo: ANAKIN_IMAGE,
          nickname: '@dart_vader',
          checked: true,
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={'14 апр.'}
        liked={false}
        stats={{
          likes: 14,
          comments: 19,
          reposts: 5,
        }}
      />
      <Post
        author={{
          name: 'Anakin skywalker',
          photo: ANAKIN_IMAGE,
          nickname: '@dart_vader',
          checked: true,
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        date={'26 фев.'}
        liked={true}
        stats={{
          likes: 27,
          comments: 37,
          reposts: 12,
        }}
      />
    </>
  );
}
