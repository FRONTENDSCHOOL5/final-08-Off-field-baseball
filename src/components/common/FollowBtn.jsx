import React, { useState, useEffect } from 'react';
import Button from './Button/Button';

export default function FollowBtn({ profileData, targetuser, ...props }) {
  const [isFollowing, setIsFollowing] = useState(props.isfollow);
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');
  const accountname = localStorage.getItem('accountname');
  useEffect(() => {
    if (props.isfollow) {
      return setIsFollowing(props.isfollow);
    }
  }, []);

  const handleFollow = async () => {
    try {
      const req = await fetch(
        `${url}/profile/${targetuser}/${isFollowing ? 'unfollow' : 'follow'}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
          method: isFollowing ? 'DELETE' : 'POST',
        }
      );
      const profile = await req.json();
      console.log(profile);
      setIsFollowing(!isFollowing);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isFollowing);
  console.log(props.isfollow);
  return (
    <>
      {accountname === targetuser ? null : (
        <>
          <Button
            mBtn={props.mBtn ? 'mBtn' : null}
            xsBtn={props.xsBtn ? 'xsBtn' : null}
            whiteBtn={isFollowing ? 'whiteBtn' : null}
            onClick={handleFollow}
            padding='0'
          >
            {isFollowing ? (props.xsBtn ? '취소' : '언팔로우') : '팔로우'}
          </Button>
        </>
      )}
    </>
  );
}
