export const Typing = () => {
  return (
    <>
      <p className="line-1 anim-typewriter">Тут что то будет но не сегодня</p>
      <style jsx>{`
        .line-1 {
          position: relative;
          top: 50%;
          width: 24em;
          margin: 0 auto;
          border-right: 2px solid rgba(255, 255, 255, 0.75);
          font-size: 180%;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          transform: translateY(-50%);
        }

        /* Animation */
        .anim-typewriter {
          animation: typewriter 4s steps(44) 1s 1 normal both,
            blinkTextCursor 500ms steps(44) infinite normal;
        }
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 24em;
          }
        }
        @keyframes blinkTextCursor {
          from {
            border-right-color: rgba(255, 255, 255, 0.75);
          }
          to {
            border-right-color: transparent;
          }
        }
      `}</style>
    </>
  );
};
