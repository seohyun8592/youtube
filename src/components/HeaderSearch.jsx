import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';

export default function HeaderSearch() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    navigate(`videos/${text}`);
    setText('');
  };

  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className="flex items-center h-14">
      <Link to="/" className="flex items-center">
        <BsYoutube className="logo " />
        <h1 className="ml-1 ">YouTube</h1>
      </Link>

      <div className="flex items-center flex-auto h-10 mx-10 border border-solid border-black roun">
        <div className="flex-auto">
          <input
            type="text"
            onChange={handleChange}
            value={text}
            className="px-3"
          />
        </div>
        <button onClick={handleClick}>검색</button>
      </div>
    </header>
  );
}
