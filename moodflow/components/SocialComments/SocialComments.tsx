import React, { useState } from 'react';
import { Keyboard, Modal, Pressable, Text, View, FlatList, TextInput } from 'react-native';

import CommentCard from '../CommentCard/CommentCard';
import styles from './styles';

const user = {
  id: 1,
  username: 'Mike'
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

interface SocialCommentProps {
  selectedPost: Post
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SocialComments: React.FC<SocialCommentProps> = ({ selectedPost, modalVisible, setModalVisible }) => {
  const [ comments, setComments ] = useState<Comments[]>(selectedPost.comments);
  const [ commentForm, setCommentForm ] = useState<string>('');

  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  }

  const handleCommentSubmit = () => {
    const commentObj = {
      commentId: comments.length + 1,
      userId: user.id,
      username: user.username,
      body: commentForm,
      likes: []
    }
    setComments([...comments, commentObj]);
    setCommentForm('');
    Keyboard.dismiss();
    //TODO: Add comment to db here
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
        <View style={styles.commentInputContainer}>
          <Text style={styles.smallText}>Add a comment</Text>
          <TextInput
            editable
            multiline
            onChangeText={(text) => setCommentForm(text)}
            defaultValue={commentForm}
            style={styles.bigInput}
           />
          <Pressable onPressIn={() => handleCommentSubmit()} style={styles.buttonPrimary} onPress={() => console.log('PRESSED')}>
            <Text style={styles.buttonTextPrimary}>Post Comment</Text>
          </Pressable>
        </View>
        <View style={styles.commentsContainer}>
          <FlatList
            data={comments}
            renderItem={({ item }) => <CommentCard commentItem={item} />}
          />
        </View>
        <View>
          <Pressable style={styles.buttonSecondary} onPress={() => handleModalClose()}>
            <Text style={styles.buttonTextSecondary}>Go Back</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    )
  )
};

export default SocialComments;