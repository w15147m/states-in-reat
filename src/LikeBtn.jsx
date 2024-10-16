import { useState } from "react";
export default function likeBtn() {
  const [isLiked, setIsLiked] = useState(false);
  let likedToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <h1 onClick={likedToggle}>
        {isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart"></i>
        )}
      </h1>
    </>
  );
}
