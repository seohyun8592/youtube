import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { BsSearch, BsYoutube } from 'react-icons/bs';

export default function HeaderSearch() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  console.log(text)
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    navigate(`videos/${text}`);
    setText('');
  };

  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className="flex items-center h-14 px-5 mb-5 fixed w-full bg-white">
      <Link to="/" className="flex items-center">
        <BsYoutube className="logo mt-1" />
        <h1 className="ml-1 text-xl tracking-tighter font-bold">YouTube</h1>
      </Link>

      <div className="flex items-center flex-auto h-10 ml-10 border border-solid border-black roun px-3">
        <div className="flex-auto">
          <input
            type="text"
            onChange={handleChange}
            value={text}
            className=""
          />
        </div>
        <button onClick={handleClick}>
          <BsSearch className="btn__search" />
        </button>
      </div>
    </header>
  );
}
