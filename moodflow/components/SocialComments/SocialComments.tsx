import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

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

interface SocialCommentProps {
  selectedPost: Post
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SocialComments: React.FC<SocialCommentProps> = ({ selectedPost, modalVisible, setModalVisible }) => {

  const handleModalClose = () => {
    setModalVisible(!modalVisible)
  }

  return (
    selectedPost && (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View>
        <Text>{selectedPost.username}</Text>
      </View>
      <View>
        <Text>{selectedPost.body}</Text>
      </View>
      
      <View>
        <Pressable onPress={() => handleModalClose()}>
          <Text>Go back</Text>
        </Pressable>
      </View>
    </Modal>
    )
  )
};

export default SocialComments;