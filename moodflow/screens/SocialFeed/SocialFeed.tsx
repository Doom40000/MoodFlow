import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';
import Logo from '../../components/Logo/Logo';
import SocialComments from '../../components/SocialComments/SocialComments';
import SocialPost from '../../components/SocialPost/SocialPost';
import CreatePost from '../CreatePost/CreatePost';

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

interface FetchResponse {
  message: string;
  user: string;
}

const SocialFeed = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | {}>({});
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedRadio, setSelectedRadio] = useState('Global');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.188.42:3001/receivePosts');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const fetchedMessages = data.map((res: FetchResponse) => {
          const messageObj: Post = {
            postId: 5,
            userId: 4,
            username: res.user,
            body: res.message,
            likes: [1, 3, 2],
            comments: [],
          };
          return messageObj;
        });
        setPosts(fetchedMessages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleNewPost = () => {
    navigation.navigate('CreatePost');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={handleNewPost}>
          <Text>New Post</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <View style={styles.radioButton}>
          <Text style={styles.radioLabel}>Global</Text>
          <RadioButton.Android
            value="Global"
            status={selectedRadio === 'Global' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedRadio('Global')}
            color="#007BFF"
          />
        </View>

        <View style={styles.radioButton}>
          <Text style={styles.radioLabel}>Follow</Text>
          <RadioButton.Android
            value="Follow'"
            status={selectedRadio === 'Follow' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedRadio('Follow')}
            color="#007BFF"
          />
        </View>
      </View>
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
