import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';
import SocialPost from '../../components/SocialPost/SocialPost';
import SocialComments from '../../components/SocialComments/SocialComments';

const mockData = [
  {
    postId: 1,
    userId: 1,
    username: 'Mike',
    body: 'This is a test post',
    likes: [2, 3],
    comments: [],
  },
  {
    postId: 2,
    userId: 2,
    username: 'John',
    body: 'This is another test post',
    likes: [1, 3],
    comments: [],
  },
  {
    postId: 3,
    userId: 3,
    username: 'Amie',
    body: 'This is the third test post',
    likes: [2],
    comments: [],
  },
  {
    postId: 4,
    userId: 3,
    username: 'Anonymous',
    body: 'This post is from an anonymous user, with comments added',
    likes: [1],
    comments: [
      {
        commentId: 1,
        userId: 2,
        username: 'John',
        body: 'This is a comment on this post',
        likes: 5,
      },
    ],
  },
];

interface Comments {
  commentId: number;
  userId: number;
  username: string;
  body: string;
  likes: number[];
}

interface Post {
  postId: number;
  userId: number;
  username: string;
  body: string;
  likes: number[];
  comments: Comments[];
}

const SocialFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | {}>({});
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [response, setResponse] = useState({});

  useEffect(() => {
    // ApiCall start
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.188.42:3001/receivePosts');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response data:', data);
        setResponse(data);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
    // ApiCall end -> Response data: [{"message": "Hello from me!", "user": "Dennis"}]
    setPosts(mockData);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{ flex: 2, width: '100%' }}>
        {posts.length ? (
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <SocialPost
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                postItem={item}
              />
            )}
          />
        ) : (
          <Text>No posts available</Text>
        )}
      </View>
      <SocialComments
        selectedPost={selectedPost}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default SocialFeed;
