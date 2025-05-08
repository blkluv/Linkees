import React, { useEffect, useState } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";

const orbis = new Orbis();

export const OrbisComments: React.FC<{ context: string }> = ({ context }) => {
  const [comments, setComments] = useState<any[]>([]);
  const [connected, setConnected] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    orbis.getPosts({ context }).then((res) => {
      if (res.status === 200) setComments(res.data);
    });
  }, [context]);

  const connectWallet = async () => {
    const res = await orbis.connect_v2({ provider: window.ethereum });
    if (res.status === 200) setConnected(true);
  };

  const postComment = async () => {
    if (!comment) return;
    await orbis.createPost({ body: comment, context });
    setComment("");
    // Reload comments
    const res = await orbis.getPosts({ context });
    if (res.status === 200) setComments(res.data);
  };

  return (
    <div className="orbis-comments">
      {!connected && <button onClick={connectWallet}>Connect Wallet</button>}

      {connected && (
        <>
          <textarea
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <button onClick={postComment}>Post</button>
        </>
      )}

      <div className="comments-list">
        {comments.map((cmt, i) => (
          <div key={i} className="comment">
            <p>
              <strong>{cmt.creator_details?.profile?.username || "Anon"}</strong>:{" "}
              {cmt.content.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
