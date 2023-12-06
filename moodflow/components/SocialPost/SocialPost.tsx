import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

const user = {
  id: 1
}

interface Comments {
  commentId: number
  userId: number
  username: string
  body: string
  likes: number[]
}

interface Post {
  postId: number
  userId: number
  username: string
  body: string
  likes: number[]
  comments: Comments[]
}

interface SocialPostProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  modalVisible: boolean
  postItem: Post
  setSelectedPost: React.Dispatch<React.SetStateAction<Post>>
}

const SocialPost: React.FC<SocialPostProps> = ({ postItem, setSelectedPost, setModalVisible }) => {
   const [post, setPost] = useState({...postItem});

  const handleCommentsClick = () => {
    setSelectedPost(postItem);
    setModalVisible(true);
  }

  const handleLikesClick = () => {
    let updatedLikes = []
    if (post.likes.includes(user.id)) {
      updatedLikes = post.likes.filter((id) => id !== user.id);
    } else {
      updatedLikes = [...post.likes, user.id];
    }
    setPost({
      ...post,
      likes: updatedLikes
    });
    //TODO: send updated obj to database here
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>{post.username[0]}</Text>
        </View>
        <View>
          <Text style={styles.bigText}>{post.username}</Text>
        </View>
        <Pressable onPress={() => handleLikesClick()} style={styles.likesContainer}>
            <Text style={styles.smallText}>{post.likes.length}</Text>
            {
              post.likes.includes(user.id) ? (
                <FontAwesome name="thumbs-up" size={16} color={"#FFFFFF"} />
              ) : (
                <Feather name="thumbs-up" size={16} color={'#FFFFFF'} />
              )
            }
        </Pressable>
      </View>
      <View>
        <Text style={styles.mediumText}>{post.body}</Text>
      </View>
      <Pressable 
        style={styles.commentsContainer}
        onPress={() => handleCommentsClick()}
      >
        <Feather name="message-square" size={18} color={'#FFFFFF'} />
        <Text style={[styles.smallText, {textDecorationLine: 'underline'}]}>
          {
            post.comments.length == 1 ?
            `1 comment`
            : `${post.comments.length} comments`
          }
        </Text>
      </Pressable>
    </View>
  )
};

export default SocialPost;