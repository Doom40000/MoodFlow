import React from 'react';
import { Modal, Pressable, Text, View, FlatList, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import CommentCard from '../CommentCard/CommentCard';
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
      <View style={styles.modalContainer}>
        <View style={styles.selectedPostContainer}>
          <View style={styles.profileIcon}>
            {/* <Text style={styles.profileIconText}>{selectedPost.username[0]}</Text> */}
          </View>
            <Text style={styles.mediumText}>{selectedPost.username}</Text>
          
          <Text style={styles.bigText}>{selectedPost.body}</Text>
        </View>
        <View>
          <TextInput
            editable
            multiline
            style={styles.bigInput}
           />
        </View>
        <View>
          <FlatList
            data={selectedPost.comments}
            renderItem={({ item }) => <CommentCard commentItem={item} />}
          />
        </View>
        
        <View>
          <Pressable onPress={() => handleModalClose()}>
            <Text>Go back</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    )
  )
};

export default SocialComments;