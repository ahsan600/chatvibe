import { useState, useRef, useEffect, useContext } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import MessageContext from "../../../Context/MessageContext/MessageContext";
function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [msg, setMsg] = useState("");
  const endRef = useRef(null);
  const { getDetail, receiverUserData } = useContext(MessageContext);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chat">
      <div className="top">
        <div className="userdetail">
          <img
            src={
              receiverUserData.userImage
                ? receiverUserData.userImage
                : "../public/avatar.png"
            }
            alt=""
          />
          <div className="text">
            <span>{receiverUserData.username}</span>
            {/* <p>Lorem asdjhaskd aksjdhkasgdf kjashd</p> */}
          </div>
        </div>
        <div className="icons">
          <img src="../public/phone.png" alt="" />
          <img src="../public/video.png" alt="" />
          <img src="../public/info.png" alt="" onClick={getDetail} />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="../public/avatar.png" alt="" />
          <div className="text">
            <img src="../public/avatar.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              soluta dicta molestias dolores quae doloribus consectetur nobis
              distinctio, delectus doloremque similique quisquam consequuntur
              illum provident possimus, et dolorem amet quo!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img src="../public/avatar.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit officia, ratione dicta corrupti ipsa iste nam quod
              vero corporis aut autem deleniti nostrum magnam fugit error cumque
              temporibus amet doloribus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="../public/img.png" alt="" />
          <img src="../public/camera.png" alt="" />
          <img src="../public/mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type Any Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <div className="emoji">
          <img
            src="../public/emoji.png"
            alt=""
            onClick={() => setOpenEmoji((pv) => !pv)}
          />

          {openEmoji && (
            <div className="picker">
              <EmojiPicker
                onEmojiClick={(e) => {
                  setOpenEmoji((pv) => !pv);
                  setMsg((pv) => pv + e.emoji);
                }}
              />
            </div>
          )}
        </div>
        <div className="send">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
