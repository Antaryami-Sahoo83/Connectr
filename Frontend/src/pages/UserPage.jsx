import { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", data.error, "error");
      }
    };
    getUser();
  }, [username, showToast]);

  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about connectr."
      />
      <UserPost
        likes={2005}
        replies={981}
        postImg="/post2.png"
        postTitle="Let's talk about connectr."
      />
      <UserPost
        likes={865}
        replies={345}
        postImg="/post3.png"
        postTitle="Let's talk about connectr."
      />
    </>
  );
};

export default UserPage;
